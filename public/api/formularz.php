<?php
/**
 * Obsługa wszystkich formularzy PowerPlug (hosting OVH, PHP 8).
 * Dane SMTP: api/config.php — generowany przez GitHub Actions z sekretów repo, nie ma go w Git.
 * Ochrona: honeypot "www", minimalny czas wypełnienia, limit zgłoszeń z jednego IP, whitelist pól.
 */
declare(strict_types=1);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception as MailerException;

require __DIR__ . '/lib/PHPMailer/Exception.php';
require __DIR__ . '/lib/PHPMailer/PHPMailer.php';
require __DIR__ . '/lib/PHPMailer/SMTP.php';

const FORMULARZE = [
    'oddzwonienie' => ['tytul' => 'Prośba o kontakt', 'pola' => ['imie', 'telefon']],
    'kontakt'      => ['tytul' => 'Wiadomość ze strony', 'pola' => ['imie', 'telefon', 'email', 'wiadomosc']],
    'produkt'      => ['tytul' => 'Zapytanie o urządzenie', 'pola' => ['produkt', 'imie', 'telefon', 'email', 'wiadomosc']],
    'wycena'       => ['tytul' => 'Wycena z kalkulatora', 'pola' => [
        'imie', 'telefon', 'email', 'miejscowosc', 'uzytek', 'urzadzenie', 'miejsce', 'montaz',
        'odleglosc', 'dojazd', 'leasing', 'wynik', 'wiadomosc',
    ]],
];
const ETYKIETY = [
    'imie' => 'Imię', 'telefon' => 'Telefon', 'email' => 'E-mail', 'wiadomosc' => 'Wiadomość',
    'produkt' => 'Urządzenie', 'miejscowosc' => 'Miejscowość', 'uzytek' => 'Użytek',
    'urzadzenie' => 'Urządzenie', 'miejsce' => 'Miejsce montażu', 'montaz' => 'Sposób montażu',
    'odleglosc' => 'Odległość od rozdzielni', 'dojazd' => 'Dojazd', 'leasing' => 'Leasing',
    'wynik' => 'Szacunkowa wycena',
];

function odpowiedz(bool $ok, string $komunikat, int $kod = 200): never
{
    $json = str_contains($_SERVER['HTTP_ACCEPT'] ?? '', 'application/json');
    if ($json) {
        http_response_code($kod);
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(['ok' => $ok, 'komunikat' => $komunikat], JSON_UNESCAPED_UNICODE);
    } else {
        header('Location: ' . ($ok ? '/dziekujemy/' : '/kontakt/?blad=1'), true, 303);
    }
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    odpowiedz(false, 'Nieprawidłowe żądanie.', 405);
}

// 1. Honeypot i czas wypełnienia — boty dostają "sukces", żeby nie próbowały dalej.
$start = (int) ($_POST['_start'] ?? 0);
if (!empty($_POST['www']) || ($start > 0 && (time() * 1000 - $start) < 2500)) {
    odpowiedz(true, 'Dziękujemy!');
}

// 2. Limit: 5 zgłoszeń / 10 min z jednego IP.
$ip = $_SERVER['REMOTE_ADDR'] ?? '0';
$plik = sys_get_temp_dir() . '/pp_form_' . hash('sha256', $ip);
$teraz = time();
$historia = array_filter(
    is_file($plik) ? (array) json_decode((string) file_get_contents($plik), true) : [],
    fn ($t) => $teraz - (int) $t < 600
);
if (count($historia) >= 5) {
    odpowiedz(false, 'Zbyt wiele zgłoszeń. Zadzwoń do nas lub spróbuj za kilka minut.', 429);
}
$historia[] = $teraz;
@file_put_contents($plik, json_encode(array_values($historia)));

// 3. Walidacja.
$typ = (string) ($_POST['formularz'] ?? '');
if (!isset(FORMULARZE[$typ])) {
    odpowiedz(false, 'Nieznany formularz.', 400);
}
$dane = [];
foreach (FORMULARZE[$typ]['pola'] as $pole) {
    $v = trim((string) ($_POST[$pole] ?? ''));
    $v = mb_substr(preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F]/u', '', $v) ?? '', 0, $pole === 'wiadomosc' ? 3000 : 300);
    if ($v !== '') {
        $dane[$pole] = $v;
    }
}
$telefon = $dane['telefon'] ?? '';
$email = $dane['email'] ?? '';
if ($telefon === '' && $email === '') {
    odpowiedz(false, 'Podaj numer telefonu albo adres e-mail.', 422);
}
if ($telefon !== '' && !preg_match('/^[+()\d\s-]{7,20}$/', $telefon)) {
    odpowiedz(false, 'Sprawdź numer telefonu.', 422);
}
if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    odpowiedz(false, 'Sprawdź adres e-mail.', 422);
}

// 4. Wysyłka przez SMTP skrzynki klienta na OVH.
$cfgPlik = __DIR__ . '/config.php';
if (!is_file($cfgPlik)) {
    error_log('PowerPlug formularz: brak api/config.php');
    odpowiedz(false, 'Formularz chwilowo nie działa. Zadzwoń: +48 730 882 967.', 500);
}
$cfg = require $cfgPlik;

$tresc = FORMULARZE[$typ]['tytul'] . "\n\n";
foreach ($dane as $k => $v) {
    $tresc .= (ETYKIETY[$k] ?? $k) . ': ' . $v . "\n";
}
$tresc .= "\n—\nWysłano ze strony " . ($_SERVER['HTTP_HOST'] ?? '') . ' · ' . date('Y-m-d H:i');

$m = new PHPMailer(true);
try {
    $m->isSMTP();
    $m->Host = $cfg['smtp_host'];
    $m->Port = (int) $cfg['smtp_port'];
    $m->SMTPSecure = (int) $cfg['smtp_port'] === 465 ? PHPMailer::ENCRYPTION_SMTPS : PHPMailer::ENCRYPTION_STARTTLS;
    $m->SMTPAuth = true;
    $m->Username = $cfg['smtp_user'];
    $m->Password = $cfg['smtp_pass'];
    $m->CharSet = 'UTF-8';
    $m->setFrom($cfg['from'], 'Strona PowerPlug');
    foreach (array_map('trim', explode(',', $cfg['to'])) as $adresat) {
        $m->addAddress($adresat);
    }
    if ($email !== '') {
        $m->addReplyTo($email, $dane['imie'] ?? '');
    }
    $m->Subject = FORMULARZE[$typ]['tytul'] . (isset($dane['imie']) ? ' — ' . $dane['imie'] : '');
    $m->Body = $tresc;
    $m->send();
} catch (MailerException $e) {
    error_log('PowerPlug formularz: ' . $m->ErrorInfo);
    odpowiedz(false, 'Nie udało się wysłać. Zadzwoń: +48 730 882 967.', 500);
}

odpowiedz(true, 'Dziękujemy! Odezwiemy się najszybciej, jak to możliwe.');
