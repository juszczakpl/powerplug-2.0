// Oferta — macierz „Kto? / Gdzie?” (dom, firma, zarządcy) + płatności, finansowanie, obszar działania.
import type { ImageMetadata } from 'astro';
import fDom from '../assets/uploads/realizacja-1713133345879.jpg';
import fFirma from '../assets/uploads/realizacja-1719781723583.jpg';
import fGaraz from '../assets/uploads/realizacja-1730666776407.jpg';
import fPlatnosci from '../assets/uploads/realizacja-1703799281640.jpg';
import fLeasing from '../assets/uploads/realizacja-1703799284692.jpg';
import fObszar from '../assets/uploads/realizacja-1714817392769.jpg';

export interface Korzysc { tytul: string; tekst: string; ikona: string }
export interface OfertaStrona {
  slug: string; href: string; nazwa: string; krotko: string;
  h1: string; h1Akcent: string; title: string; description: string;
  eyebrow: string; lead: string; foto: ImageMetadata; fotoAlt: string; ikona: string;
  korzysciTytul: string; korzysci: Korzysc[];
  tresc: { h2: string; akapity: string[]; lista?: string[] }[];
  kategoria?: 'dom' | 'firma' | 'publiczne';
  uslugi: string[]; // slugi usług w kolejności
  faq: { q: string; a: string }[];
}

export const oferta: OfertaStrona[] = [
  {
    slug: 'ladowarka-samochodowa-do-domu', href: '/ladowarka-samochodowa-do-domu/', nazwa: 'Ładowarki do domu', ikona: 'home',
    krotko: 'Wallbox w garażu albo na podjeździe — dobór, formalności i montaż w jednym miejscu.',
    h1: 'Ładowarka samochodowa', h1Akcent: 'do domu z montażem',
    title: 'Ładowarka samochodowa do domu z montażem — Szczecin | PowerPlug',
    description: 'Wallbox do domu z montażem w Szczecinie i zachodniopomorskim. Dobieramy moc do auta i przyłącza, sprawdzamy instalację, montujemy i konfigurujemy. Bezpłatna wycena.',
    eyebrow: 'Oferta · Prywatnie',
    lead: 'Zamiast szukać wolnej stacji w mieście — ładujesz w garażu albo na podjeździe, kiedy auto i tak stoi. Dobieramy wallbox do Twojego samochodu i instalacji, a potem montujemy go kompletnie.',
    foto: fDom, fotoAlt: 'Samochód elektryczny ładowany z wallboxa na ścianie domu jednorodzinnego',
    korzysciTytul: 'Dlaczego warto ładować w domu?',
    korzysci: [
      { ikona: 'money', tytul: 'Taniej', tekst: 'Ładujesz po cenie prądu z Twojej taryfy — najczęściej nocą albo nadwyżką z fotowoltaiki.' },
      { ikona: 'pin', tytul: 'Prościej', tekst: 'Podłączasz auto po powrocie do domu. Rano jest gotowe, bez objazdów i czekania na wolne złącze.' },
      { ikona: 'bolt', tytul: 'Z głowy', tekst: 'Zajmujemy się doborem, formalnościami, montażem i konfiguracją. Ty dostajesz działającą stację.' },
    ],
    tresc: [
      {
        h2: 'Jak dobieramy wallbox do domu',
        akapity: [
          'Zaczynamy od Twojego samochodu i przyłącza. Większość aut elektrycznych ładuje się prądem przemiennym z mocą do 11 kW, a moc stacji zawsze musi zmieścić się w mocy przyłączeniowej domu.',
          'Jeśli masz fotowoltaikę, dobieramy model, który potrafi ładować auto nadwyżką energii. Przy ograniczonej mocy stosujemy dynamiczne zarządzanie, które dzieli energię między dom i samochód.',
        ],
        lista: ['moc dopasowana do auta i przyłącza', 'zarządzanie mocą i współpraca z PV', 'sterowanie z aplikacji i harmonogramy ładowania', 'ochrona różnicowoprądowa wykrywająca prąd stały'],
      },
      {
        h2: 'Montaż wallboxa krok po kroku',
        akapity: [
          'Po krótkiej rozmowie przyjeżdżamy na wizję lokalną i sprawdzamy instalację, trasę przewodów i miejsce montażu. Dostajesz rekomendację i precyzyjną wycenę.',
          'Typowy montaż w domu jednorodzinnym zajmuje jeden dzień — razem z konfiguracją, pomiarami i instruktażem obsługi.',
        ],
      },
    ],
    kategoria: 'dom', uslugi: ['wizja-lokalna', 'jaka-ladowarka-samochodowa', 'montaz-ladowarki-samochodowej', 'serwis'],
    faq: [
      { q: 'Ile kosztuje ładowarka do domu z montażem?', a: 'Cena zależy od modelu stacji i zakresu prac — przede wszystkim od odległości od rozdzielnicy i sposobu montażu. Orientacyjną kwotę policzysz w naszym kalkulatorze, a dokładną podajemy po wizji lokalnej.' },
      { q: 'Czy do ładowarki w domu potrzebny jest projekt?', a: 'Przy pojedynczym wallboxie w domu jednorodzinnym zwykle nie. Potrzebna jest za to prawidłowo wykonana instalacja z osobnym obwodem, zabezpieczeniami i pomiarami po montażu.' },
    ],
  },
  {
    slug: 'stacje-ladowania-dla-firm', href: '/stacje-ladowania-dla-firm/', nazwa: 'Stacje dla firm', ikona: 'building',
    krotko: 'Ładowanie floty, pracowników i klientów z zarządzaniem mocą i rozliczaniem kosztów.',
    h1: 'Stacje ładowania', h1Akcent: 'dla firm',
    title: 'Stacje ładowania dla firm i flot — projekt, montaż, zarządzanie | PowerPlug',
    description: 'Stacje ładowania dla firm, flot i obiektów komercyjnych: projekt, montaż, zarządzanie mocą i rozliczanie kosztów energii dla każdego pojazdu. Szczecin i zachodniopomorskie.',
    eyebrow: 'Oferta · Biznesowo',
    lead: 'Projektujemy, instalujemy i serwisujemy infrastrukturę ładowania dla firm i instytucji — od jednego samochodu służbowego po parking z kilkunastoma stanowiskami.',
    foto: fFirma, fotoAlt: 'Stacje ładowania na firmowym parkingu z oznakowaniem miejsc',
    korzysciTytul: 'Dlaczego firmy wybierają PowerPlug?',
    korzysci: [
      { ikona: 'chat', tytul: 'Indywidualne podejście', tekst: 'Analizujemy liczbę użytkowników, lokalizację i budżet, a potem projektujemy rozwiązanie dla Twojej infrastruktury.' },
      { ikona: 'wrench', tytul: 'Kompleksowa obsługa', tekst: 'Od doradztwa i audytu technicznego, przez montaż, aż po wsparcie techniczne, serwis i rozbudowę.' },
      { ikona: 'bolt', tytul: 'Zarządzanie mocą', tekst: 'Stacje dzielą dostępną moc między sobą, więc nie przeciążasz przyłącza i nie płacisz za jego niepotrzebną rozbudowę.' },
    ],
    tresc: [
      {
        h2: 'Floty firmowe',
        akapity: ['Zapewniamy kompleksowe zarządzanie i monitorowanie kosztów ładowania flot — już od jednego samochodu. Oprogramowanie zintegrowane z chmurą danych pozwala precyzyjnie śledzić koszty energii dla każdego pojazdu i użytkownika.'],
      },
      {
        h2: 'Biura, hotele, galerie handlowe',
        akapity: ['Stacje ładowania mogą nie tylko obsługiwać pracowników, ale też przyciągać klientów i generować dodatkowe przychody. Realizujemy cały proces budowy i komercjalizacji stacji — razem z obsługą płatności za ładowanie.'],
      },
      {
        h2: 'Parkingi i przestrzenie wspólne',
        akapity: ['Projektujemy instalacje z myślą o rozbudowie, tak by kolejne stanowiska dało się dołożyć bez przebudowy całości.'],
        lista: ['monitoring obciążenia i zarządzanie mocą', 'rozliczanie energii per pojazd i użytkownik', 'karty RFID i dostęp przez aplikację', 'szkolenia z obsługi stacji dla flot'],
      },
    ],
    kategoria: 'firma', uslugi: ['wizja-lokalna', 'projekt-instalacji', 'montaz-ladowarki-samochodowej', 'serwis'],
    faq: [
      { q: 'Czy można rozliczać ładowanie każdego samochodu osobno?', a: 'Tak. Stacje z licznikiem i łącznością z chmurą zapisują energię dla każdego pojazdu lub użytkownika, a dane można eksportować do rozliczeń.' },
      { q: 'Co, jeśli przyłącze firmy ma za małą moc?', a: 'Stosujemy dynamiczne zarządzanie mocą, które dzieli dostępną energię między stacje i budynek. Często pozwala to uniknąć kosztownej rozbudowy przyłącza.' },
    ],
  },
  {
    slug: 'miejsce-postojowe-ladowarka', href: '/miejsce-postojowe-ladowarka/', nazwa: 'Miejsca postojowe', ikona: 'parking',
    krotko: 'Ładowarka w garażu podziemnym bloku — ekspertyza, projekt i dokumenty dla zarządcy.',
    h1: 'Ładowarka na miejscu postojowym', h1Akcent: 'w garażu podziemnym',
    title: 'Ładowarka w garażu podziemnym i na miejscu postojowym — wspólnoty | PowerPlug',
    description: 'Montaż ładowarki na miejscu postojowym w garażu wielostanowiskowym: ekspertyza dopuszczalności, projekt, dokumenty dla wspólnoty lub spółdzielni i montaż. Szczecin.',
    eyebrow: 'Oferta · Publicznie',
    lead: 'Mieszkasz w bloku z garażem podziemnym? Przeprowadzimy Cię przez cały proces — od ekspertyzy i projektu, przez dokumenty dla zarządcy, po montaż stacji na Twoim miejscu postojowym.',
    foto: fGaraz, fotoAlt: 'Ładowarka samochodowa zamontowana w garażu podziemnym obok sprzętu przeciwpożarowego',
    korzysciTytul: 'Dla mieszkańców i zarządców',
    korzysci: [
      { ikona: 'document', tytul: 'Formalności po naszej stronie', tekst: 'Przygotowujemy ekspertyzę, projekt i dokumenty, z którymi zarządca może podjąć decyzję.' },
      { ikona: 'money', tytul: 'Niski koszt budowy', tekst: 'Dla wspólnot i spółdzielni dobieramy rozwiązania o niskim koszcie budowy i możliwości rozbudowy.' },
      { ikona: 'shield', tytul: 'Bezpieczeństwo', tekst: 'Uwzględniamy wymagania dotyczące zabezpieczeń i ochrony przeciwpożarowej w garażach wielostanowiskowych.' },
    ],
    tresc: [
      {
        h2: 'Jak wygląda montaż w garażu podziemnym',
        akapity: ['W garażach wielostanowiskowych ustawa o elektromobilności przewiduje ekspertyzę dopuszczalności instalacji punktu ładowania. Dlatego proces ma kilka etapów — każdy z nich prowadzimy za Ciebie.'],
      },
      {
        h2: 'Rozwiązania dla wspólnot i spółdzielni',
        akapity: ['Projektujemy infrastrukturę, do której kolejni mieszkańcy mogą dołączać bez przebudowy całej instalacji. Energię każdego stanowiska można opomiarować i rozliczać osobno.'],
        lista: ['podliczniki energii dla każdego stanowiska', 'wspólna trasa kablowa pod kolejne punkty', 'zarządzanie mocą przyłącza budynku', 'dokumentacja dla zarządcy i ubezpieczyciela'],
      },
    ],
    kategoria: 'publiczne', uslugi: ['wizja-lokalna', 'ekspertyzy-elektryczne', 'projekt-instalacji', 'montaz-ladowarki-samochodowej'],
    faq: [
      { q: 'Czy wspólnota może odmówić montażu ładowarki?', a: 'Zgoda zarządcy jest potrzebna, a ekspertyza dopuszczalności pokazuje, czy instalacja jest możliwa technicznie i zgodna z przepisami. Dobrze przygotowane dokumenty znacznie ułatwiają uzyskanie zgody.' },
      { q: 'Kto płaci za energię zużytą przez moją ładowarkę?', a: 'Ty — stanowisko ma własny podlicznik albo jest podłączone do Twojego licznika, więc koszt energii nie obciąża pozostałych mieszkańców.' },
    ],
  },
  {
    slug: 'platnosci-za-ladowanie', href: '/platnosci-za-ladowanie/', nazwa: 'Obsługa płatności', ikona: 'card',
    krotko: 'Udostępnij stację klientom i rozliczaj ładowanie — razem z partnerem ev24.',
    h1: 'Płatności', h1Akcent: 'za ładowanie',
    title: 'Płatności za ładowanie i komercjalizacja stacji — ev24 | PowerPlug',
    description: 'Udostępnij stację ładowania klientom i pobieraj opłaty za ładowanie. PowerPlug jest partnerem ev24 w województwie zachodniopomorskim: montaż, konfiguracja i obsługa płatności.',
    eyebrow: 'Oferta · Komercjalizacja',
    lead: 'Stacja ładowania może na siebie zarabiać. Konfigurujemy ją tak, by klienci, goście lub mieszkańcy płacili za ładowanie, a Ty dostawał rozliczenie bez ręcznej pracy.',
    foto: fPlatnosci, fotoAlt: 'Stacja ładowania na słupku z podłączonym samochodem',
    korzysciTytul: 'Co daje obsługa płatności?',
    korzysci: [
      { ikona: 'card', tytul: 'Płatność bez obsługi', tekst: 'Użytkownik płaci przez aplikację lub kartą, a rozliczenia trafiają do Ciebie automatycznie.' },
      { ikona: 'money', tytul: 'Własny cennik', tekst: 'Sam ustalasz stawki za energię lub czas ładowania — inne dla gości, inne dla stałych użytkowników.' },
      { ikona: 'chat', tytul: 'Wsparcie użytkowników', tekst: 'Obsługa kierowców i płatności jest po stronie operatora, a Ty nie zajmujesz się reklamacjami.' },
    ],
    tresc: [
      {
        h2: 'Partner ev24 w zachodniopomorskim',
        akapity: ['Współpracujemy z ev24 — platformą do udostępniania i rozliczania stacji ładowania. W województwie zachodniopomorskim jesteśmy preferowanym instalatorem ev24: montujemy stację, łączymy ją z platformą i konfigurujemy płatności.'],
        lista: ['hotele, pensjonaty i restauracje', 'biurowce i parkingi', 'wspólnoty i spółdzielnie', 'firmy udostępniające stacje gościom'],
      },
    ],
    uslugi: ['jaka-ladowarka-samochodowa', 'montaz-ladowarki-samochodowej', 'serwis'],
    faq: [
      { q: 'Czy każda ładowarka obsłuży płatności?', a: 'Nie — stacja musi komunikować się z platformą rozliczeniową, najczęściej przez protokół OCPP. Doradzimy model, który to obsługuje, albo sprawdzimy, czy Twoja obecna stacja się nada.' },
    ],
  },
  {
    slug: 'finansowanie-leasing-ladowarki', href: '/finansowanie-leasing-ladowarki/', nazwa: 'Finansowanie i leasing', ikona: 'money',
    krotko: 'Stacja ładowania z montażem w leasingu — współpracujemy z mLeasing.',
    h1: 'Leasing', h1Akcent: 'stacji ładowania',
    title: 'Leasing i finansowanie stacji ładowania — mLeasing | PowerPlug',
    description: 'Sfinansuj stację ładowania razem z montażem w leasingu. Współpracujemy z mLeasing — przygotowujemy ofertę i dokumenty, Ty rozkładasz koszt na raty.',
    eyebrow: 'Oferta · Finansowanie',
    lead: 'Nie musisz płacić za stację ładowania od razu. Współpracujemy z mLeasing, więc koszt urządzenia razem z montażem możesz rozłożyć na raty.',
    foto: fLeasing, fotoAlt: 'Samochód elektryczny podłączony do stacji ładowania wieczorem',
    korzysciTytul: 'Dlaczego leasing?',
    korzysci: [
      { ikona: 'money', tytul: 'Bez dużego wydatku', tekst: 'Rozkładasz koszt stacji i montażu na raty, zamiast płacić całą kwotę na starcie.' },
      { ikona: 'document', tytul: 'Dokumenty z nami', tekst: 'Przygotowujemy ofertę i specyfikację, których potrzebuje leasingodawca.' },
      { ikona: 'building', tytul: 'Dla firm', tekst: 'Leasing to wygodny sposób finansowania stacji dla floty i parkingu firmowego.' },
    ],
    tresc: [
      {
        h2: 'Jak to działa?',
        akapity: ['Najpierw robimy wizję lokalną i przygotowujemy wycenę stacji z montażem. Na tej podstawie mLeasing przygotowuje ofertę finansowania, a po jej akceptacji realizujemy montaż.'],
        lista: ['wycena stacji z montażem', 'oferta leasingowa mLeasing', 'podpisanie umowy', 'montaż i uruchomienie stacji'],
      },
    ],
    uslugi: ['wizja-lokalna', 'montaz-ladowarki-samochodowej'],
    faq: [
      { q: 'Czy leasing obejmuje montaż?', a: 'Finansowanie może obejmować stację razem z montażem — szczegóły zależą od oferty mLeasing przygotowanej dla Twojej firmy.' },
    ],
  },
];

export const obszar = {
  slug: 'ladowarki-zachodniopomorskie', href: '/ladowarki-zachodniopomorskie/', nazwa: 'Obszar działania', ikona: 'pin',
  krotko: 'Szczecin i całe zachodniopomorskie — sprawdź, gdzie montujemy.',
  foto: fObszar,
};

export const ofertaPoSlug = (slug: string) => oferta.find((o) => o.slug === slug);
