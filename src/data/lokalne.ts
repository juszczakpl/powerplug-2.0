// Strony lokalne /montaz-ladowarek-[miasto] — każda z własną treścią (nie kopie z podmianą nazwy).
// Odległości drogowe z centrum Szczecina — orientacyjne. Dojazd 0 zł w promieniu 30 km (cennik Dominika).
import type { ImageMetadata } from 'astro';
import fSzczecin from '../assets/uploads/realizacja-1713133347603.jpg';
import fPolice from '../assets/uploads/realizacja-1714079739950.jpg';
import fGryfino from '../assets/uploads/realizacja-1720194729746.jpg';
import fGoleniow from '../assets/uploads/realizacja-1703799299514.jpg';
import fStargard from '../assets/uploads/realizacja-1719781723648.jpg';
import fDobra from '../assets/uploads/realizacja-1697971346855.jpg';

export interface Miejscowosc {
  slug: string; nazwa: string; miejscownik: string; // „w Szczecinie”
  lat: number; lng: number; km: number;
  foto: ImageMetadata; fotoAlt: string;
  lead: string; akapity: string[]; okolice: string[];
  opinia?: { tresc: string; podpis: string };
  faq: { q: string; a: string }[];
}

const dojazd = (km: number, miejscownik: string) => km <= 30
  ? `Tak — ${miejscownik} jesteśmy na miejscu bez dopłaty za dojazd, bo to mniej niż 30 km od Szczecina.`
  : `Tak — ${miejscownik} montujemy regularnie. To ok. ${km} km od Szczecina, więc koszt dojazdu podajemy w wycenie.`;

export const miejscowosci: Miejscowosc[] = [
  {
    slug: 'szczecin', nazwa: 'Szczecin', miejscownik: 'w Szczecinie', lat: 53.4285, lng: 14.5528, km: 0,
    foto: fSzczecin, fotoAlt: 'Wallbox zamontowany na elewacji domu w Szczecinie z podłączonym przewodem',
    lead: 'Szczecin to nasza baza. Montujemy ładowarki w domach jednorodzinnych, garażach podziemnych bloków i na parkingach firm — od Warszewa po Prawobrzeże.',
    akapity: [
      'W zabudowie jednorodzinnej najczęściej montujemy wallboxy na elewacji lub w garażu, z osobnym obwodem prosto z rozdzielnicy. W nowych osiedlach z garażami wielostanowiskowymi zaczynamy od ekspertyzy dopuszczalności i dokumentów dla zarządcy.',
      'Wizję lokalną w Szczecinie umawiamy zwykle w ciągu kilku dni roboczych, a dojazd jest zawsze bez dopłaty.',
    ],
    okolice: ['Warszewo', 'Pogodno', 'Gumieńce', 'Bezrzecze', 'Osów', 'Niebuszewo', 'Śródmieście', 'Prawobrzeże', 'Dąbie', 'Podjuchy'],
    opinia: { tresc: 'Bardzo polecam PowerPlug! Od początku świetny kontakt z Panem Dominikiem. Montaż stacji ładowania wykonany szybko, estetycznie i bez żadnych problemów.', podpis: 'Klient z Małych Błoni, Szczecin' },
    faq: [
      { q: 'Czy montujecie ładowarki w blokach w Szczecinie?', a: 'Tak. W garażach wielostanowiskowych przygotowujemy ekspertyzę dopuszczalności, projekt i dokumenty dla wspólnoty lub spółdzielni, a potem montujemy stację na Twoim miejscu postojowym.' },
      { q: 'Ile czeka się na montaż w Szczecinie?', a: 'Wizję lokalną umawiamy zwykle w ciągu kilku dni roboczych. Termin montażu zależy od dostępności wybranego urządzenia i zakresu prac.' },
    ],
  },
  {
    slug: 'police', nazwa: 'Police', miejscownik: 'w Policach', lat: 53.5521, lng: 14.5718, km: 17,
    foto: fPolice, fotoAlt: 'Ładowarka samochodowa na słupku przy domu jednorodzinnym',
    lead: 'Police i okoliczne miejscowości gminy obsługujemy tak samo jak Szczecin — z wizją lokalną i bez dopłaty za dojazd.',
    akapity: [
      'W Policach i okolicy dominują domy jednorodzinne i bloki z parkingami osiedlowymi. W domach montujemy wallboxy na elewacji, w garażu albo na słupku przy podjeździe, a w budynkach wielorodzinnych pomagamy przejść przez formalności ze wspólnotą.',
      'Jeśli dom ma fotowoltaikę, dobieramy stację, która ładuje auto nadwyżką energii z dachu.',
    ],
    okolice: ['Police', 'Trzebież', 'Jasienica', 'Przęsocin', 'Tanowo', 'Pilchowo', 'Dobieszczyn'],
    faq: [
      { q: 'Czy dojeżdżacie do Polic?', a: dojazd(17, 'w Policach') },
    ],
  },
  {
    slug: 'gryfino', nazwa: 'Gryfino', miejscownik: 'w Gryfinie', lat: 53.2525, lng: 14.4880, km: 23,
    foto: fGryfino, fotoAlt: 'Prace ziemne przy prowadzeniu przewodu do stacji ładowania',
    lead: 'W Gryfinie montowaliśmy już ładowarkę przed blokiem — razem z formalnościami i prowadzeniem przewodu pod nawierzchnią.',
    akapity: [
      'Montaż przed budynkiem wielorodzinnym wymaga zgody zarządcy i często prac ziemnych, żeby doprowadzić zasilanie do miejsca postojowego. Zajmujemy się całością: od uzgodnień po odtworzenie nawierzchni.',
      'W domach jednorodzinnych w Gryfinie i okolicy montujemy wallboxy na elewacji lub na słupku przy podjeździe.',
    ],
    okolice: ['Gryfino', 'Gardno', 'Wełtyń', 'Radziszewo', 'Daleszewo', 'Krajnik', 'Chwarstnica'],
    opinia: { tresc: 'Pan Dominik to człowiek orkiestra, jest w stanie ogarnąć wszystko, nawet jeśli montaż odbywa się przed blokiem, jak w naszym przypadku. Pomógł nam załatwić wszystkie formalności, zorganizował cały montaż, który przebiegł szybko i został zrobiony starannie.', podpis: 'Klient z Gryfina — montaż przed blokiem' },
    faq: [
      { q: 'Czy dojeżdżacie do Gryfina?', a: dojazd(23, 'w Gryfinie') },
      { q: 'Czy da się zamontować ładowarkę przed blokiem?', a: 'Tak, za zgodą zarządcy. Doprowadzamy zasilanie z budynku do miejsca postojowego, montujemy stację na słupku i dbamy o odtworzenie nawierzchni.' },
    ],
  },
  {
    slug: 'goleniow', nazwa: 'Goleniów', miejscownik: 'w Goleniowie', lat: 53.5641, lng: 14.8283, km: 27,
    foto: fGoleniow, fotoAlt: 'Stacja ładowania na słupku zamontowana na nowej nieruchomości',
    lead: 'Goleniów to domy jednorodzinne, ale też firmy i hale — montujemy zarówno wallboxy dla domu, jak i stacje dla pracowników i floty.',
    akapity: [
      'Dla firm projektujemy instalacje z zarządzaniem mocą, które dzielą dostępną energię między stacje i nie przeciążają przyłącza zakładu. Ładowanie każdego samochodu służbowego można rozliczać osobno.',
      'W domach dobieramy moc stacji do auta i przyłącza, a montaż kończymy pomiarami i instruktażem.',
    ],
    okolice: ['Goleniów', 'Maszewo', 'Nowogard', 'Stepnica', 'Przybiernów', 'Kliniska Wielkie', 'Rurka'],
    faq: [
      { q: 'Czy dojeżdżacie do Goleniowa?', a: dojazd(27, 'w Goleniowie') },
      { q: 'Montujecie stacje dla firm w Goleniowie?', a: 'Tak — od jednej ładowarki dla samochodu służbowego po kilka stanowisk z zarządzaniem mocą i rozliczaniem energii dla floty.' },
    ],
  },
  {
    slug: 'stargard', nazwa: 'Stargard', miejscownik: 'w Stargardzie', lat: 53.3364, lng: 15.0500, km: 38,
    foto: fStargard, fotoAlt: 'Stacja ładowania na słupku przy parkingu z oznakowanym miejscem dla aut elektrycznych',
    lead: 'Stargard to drugie co do wielkości miasto naszego regionu działania. Montujemy tu ładowarki w domach, na osiedlach i przy firmach.',
    akapity: [
      'Przy budynkach usługowych i parkingach projektujemy stacje na słupkach z oznakowaniem miejsc, a gdy stacja ma służyć klientom — konfigurujemy płatności za ładowanie.',
      'W domach jednorodzinnych w Stargardzie i okolicy montujemy wallboxy z osobnym obwodem i zabezpieczeniami dobranymi do instalacji.',
    ],
    okolice: ['Stargard', 'Kobylanka', 'Suchań', 'Marianowo', 'Dolice', 'Pyrzyce', 'Chociwel'],
    faq: [
      { q: 'Czy dojeżdżacie do Stargardu?', a: dojazd(38, 'w Stargardzie') },
    ],
  },
  {
    slug: 'dobra', nazwa: 'Dobra i Bezrzecze', miejscownik: 'w gminie Dobra', lat: 53.4720, lng: 14.3870, km: 12,
    foto: fDobra, fotoAlt: 'Wallbox i skrzynka zabezpieczeń na ceglanej elewacji domu',
    lead: 'Gmina Dobra — Bezrzecze, Mierzyn, Wołczkowo i okolice — to głównie nowe domy jednorodzinne, często z fotowoltaiką. To idealne miejsce na ładowanie w domu.',
    akapity: [
      'W nowych domach instalacja zwykle pozwala na wygodny montaż wallboxa w garażu lub na elewacji. Gdy jest fotowoltaika, dobieramy stację, która ładuje auto nadwyżką energii i potrafi przełączać się między jedną a trzema fazami.',
      'Po montażu konfigurujemy stację i pokazujemy, jak z niej korzystać — także jak ustawić ładowanie z PV.',
    ],
    okolice: ['Bezrzecze', 'Dobra', 'Mierzyn', 'Wołczkowo', 'Dołuje', 'Przecław', 'Kościno', 'Buk'],
    opinia: { tresc: 'Panowie wykonali kawał dobrej roboty — począwszy od instalacji wewnętrznej (majstersztyk estetyczny), skończywszy na konfiguracji urządzenia. Dodatkowo zostałem wyedukowany na temat obsługi urządzenia i jego potencjalnej współpracy z PV.', podpis: 'Klient z Bezrzecza' },
    faq: [
      { q: 'Czy dojeżdżacie do Bezrzecza i Mierzyna?', a: dojazd(12, 'w gminie Dobra') },
      { q: 'Czy ładowarka będzie współpracować z moją fotowoltaiką?', a: 'Większość nowoczesnych stacji to potrafi. Dobieramy model do Twojego falownika i instalacji, a po montażu konfigurujemy ładowanie nadwyżką energii.' },
    ],
  },
];

export const miejscowoscPoSlug = (slug: string) => miejscowosci.find((m) => m.slug === slug);
export const SZCZECIN = { lat: 53.4285, lng: 14.5528 };
