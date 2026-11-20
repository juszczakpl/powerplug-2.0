// llms.txt — skrócony opis firmy i mapa treści dla asystentów AI.
import type { APIRoute } from 'astro';
import { uslugi } from '../data/uslugi';
import { oferta, obszar } from '../data/oferta';
import { miejscowosci } from '../data/lokalne';
import { urzadzenia } from '../lib/dane';
import { firma } from '../lib/firma';
export const GET: APIRoute = async () => {
  const u = 'https://powerplug.pl';
  const lad = (await urzadzenia()).filter((x) => x.data.typ === 'ladowarka');
  const lines = [
    '# PowerPlug',
    '',
    `> PowerPlug ze Szczecina doradza, projektuje, montuje i serwisuje ładowarki do samochodów elektrycznych (wallboxy i stacje ładowania) w domach, firmach i garażach podziemnych w województwie zachodniopomorskim. Telefon: ${firma.telefon}, e-mail: ${firma.email}, ${firma.godziny}.`,
    '',
    'Najważniejsze fakty: dojazd bez dopłaty do 30 km od Szczecina; bezpłatna wycena; każdą usługę można zamówić osobno; obsługa formalności (ekspertyza, projekt, dokumenty dla zarządcy); leasing przez mLeasing; rozliczanie ładowania przez platformę ev24.',
    '',
    '## Usługi',
    ...uslugi.map((x) => `- [${x.nazwa}](${u}${x.href}): ${x.krok}${x.cenaOd ? ` (${x.cenaOd})` : ''}`),
    '',
    '## Oferta',
    ...[...oferta, obszar].map((x) => `- [${x.nazwa}](${u}${x.href}): ${x.krotko}`),
    '',
    '## Obszar działania',
    ...miejscowosci.map((m) => `- [Montaż ładowarek ${m.nazwa}](${u}/montaz-ladowarek-${m.slug}/): ok. ${m.km} km od Szczecina`),
    '',
    '## Ładowarki w ofercie',
    ...lad.map((x) => `- [${x.producentDane?.data.nazwa ?? ''} ${x.data.nazwa}](${u}/ladowarki/${x.id}/)${x.data.cena ? `: ${x.data.cena} zł brutto` : ''}`.replace('[ ', '[')),
    '',
    '## Inne',
    `- [Kalkulator wyceny](${u}/wycena/)`,
    `- [Realizacje](${u}/realizacje/)`,
    `- [Kontakt](${u}/kontakt/)`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
