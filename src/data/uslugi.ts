// Usługi PowerPlug — treści Dominika (mail 16.09.2026), zredagowane pod SEO.
// Kolejność = kroki procesu na stronie głównej (Dominik: najpierw wizja lokalna).
import type { ImageMetadata } from 'astro';
import fWizja from '../assets/uploads/realizacja-1720691070356.jpg';
import fDoradztwo from '../assets/uploads/realizacja-1730666776734.jpg';
import fProjekt from '../assets/uploads/realizacja-1730666776425.jpg';
import fEkspertyza from '../assets/uploads/realizacja-1730666776384.jpg';
import fMontaz from '../assets/uploads/realizacja-1730666776469.jpg';
import fSerwis from '../assets/uploads/realizacja-1720691067778.jpg';

export interface Usluga {
  slug: string;
  href: string;
  nazwa: string;          // krótka nazwa (menu, kroki)
  h1: string;             // nagłówek strony (pierwszy człon)
  h1Akcent: string;       // drugi człon w zieleni
  title: string;          // <title>
  description: string;    // meta description
  krok: string;           // jedno zdanie do kroków procesu na stronie głównej
  lead: string;
  akapity: string[];
  listaTytul: string;
  lista: string[];
  puenta: string;
  cenaOd?: string;
  foto: ImageMetadata;
  fotoAlt: string;
  faq: { q: string; a: string }[];
}

export const uslugi: Usluga[] = [
  {
    slug: 'wizja-lokalna', href: '/wizja-lokalna/', nazwa: 'Wizja lokalna',
    h1: 'Wizja lokalna', h1Akcent: 'i ocena możliwości technicznych',
    title: 'Wizja lokalna przed montażem ładowarki — Szczecin | PowerPlug',
    description: 'Wizja lokalna przed montażem stacji ładowania: sprawdzamy instalację, trasę przewodów i miejsce montażu. Po wizji dostajesz rekomendację i precyzyjną wycenę.',
    krok: 'Przyjeżdżamy na miejsce, sprawdzamy instalację i trasę przewodów — po wizji dostajesz rekomendację i precyzyjną wycenę.',
    lead: 'Wizja lokalna pozwala określić, co należy wykonać, aby zamontować stację ładowania w wybranej lokalizacji. Od niej zaczynamy każdą realizację.',
    akapity: [
      'Po wizji lokalnej przedstawiamy rekomendowane rozwiązanie oraz zakres prac potrzebnych do wykonania bezpiecznej i prawidłowo działającej instalacji. Dzięki temu możemy przygotować pełną, precyzyjną wycenę — bez niespodzianek na etapie montażu.',
    ],
    listaTytul: 'Podczas wizji sprawdzamy m.in.',
    lista: [
      'stan i możliwości istniejącej instalacji elektrycznej',
      'dostępne miejsce na montaż stacji',
      'możliwą trasę prowadzenia przewodów',
      'miejsce podłączenia do zasilania',
      'konieczność wykonania dodatkowych zabezpieczeń lub rozdzielnicy',
      'możliwość zastosowania systemu zarządzania mocą',
      'zakres niezbędnych prac montażowych i budowlanych',
      'możliwość rozbudowy instalacji o kolejne punkty ładowania',
    ],
    puenta: 'Najpierw sprawdzamy, potem wyceniamy. Dzięki temu cena, którą dostajesz, jest ceną realizacji.',
    foto: fWizja, fotoAlt: 'Elektryk PowerPlug sprawdza instalację elektryczną podczas wizji lokalnej',
    faq: [
      { q: 'Ile kosztuje wizja lokalna?', a: 'Koszt wizji lokalnej ustalamy przy pierwszym kontakcie — zależy od lokalizacji i rodzaju obiektu. W Szczecinie i okolicy do 30 km nie doliczamy kosztów dojazdu.' },
      { q: 'Ile trwa wizja lokalna?', a: 'Przy domu jednorodzinnym zwykle wystarcza niespełna godzina. W garażach wielostanowiskowych i na parkingach firmowych potrzebujemy więcej czasu, bo sprawdzamy też rozdzielnice budynku i możliwe trasy kablowe.' },
    ],
  },
  {
    slug: 'jaka-ladowarka-samochodowa', href: '/jaka-ladowarka-samochodowa/', nazwa: 'Doradztwo',
    h1: 'Jaka ładowarka samochodowa?', h1Akcent: 'Doradzamy przy wyborze',
    title: 'Jaka ładowarka samochodowa do domu i firmy? Doradztwo | PowerPlug',
    description: 'Pomagamy wybrać stację ładowania: moc, funkcje, zarządzanie energią, współpraca z fotowoltaiką, rozliczanie energii i rozbudowa. Dobieramy wallbox do auta i instalacji.',
    krok: 'Dobieramy stację do Twojego auta, instalacji i sposobu użytkowania — z myślą o tym, co będzie za kilka lat.',
    lead: 'Na rynku jest dziś kilkadziesiąt modeli stacji ładowania. Wiele z nich na pierwszy rzut oka oferuje podobne parametry: 11 lub 22 kW, aplikację, Wi-Fi i sterowanie ładowaniem. Różnice kryją się w szczegółach.',
    akapity: [
      'Przy wyborze stacji patrzymy nie tylko na cenę i moc ładowania, ale przede wszystkim na jakość wykonania, funkcjonalność, bezpieczeństwo, zgodność z aktualnymi wymaganiami technicznymi, możliwości zarządzania energią, gwarancję oraz dostępność serwisu i części zamiennych.',
      'Liczy się też skalowalność: możliwość dołożenia kolejnych punktów ładowania i pracy w sieci, która dzieli się ograniczoną mocą. Dobieramy urządzenie do konkretnego samochodu, instalacji elektrycznej i sposobu użytkowania.',
      'Nie każda droga stacja będzie dobrym wyborem i nie każda tania stacja będzie rozwiązaniem opłacalnym.',
    ],
    listaTytul: 'Doradzamy m.in. w zakresie',
    lista: [
      'wyboru odpowiedniej mocy stacji',
      'funkcji potrzebnych w domu i w firmie',
      'zarządzania dostępną mocą',
      'współpracy z instalacją fotowoltaiczną',
      'rozliczania zużytej energii',
      'łączności i zdalnego zarządzania',
      'liczby punktów ładowania',
      'przyszłej rozbudowy infrastruktury',
    ],
    puenta: 'Wybieramy urządzenia, które mają sens techniczny i ekonomiczny — zarówno dzisiaj, jak i w perspektywie kolejnych lat.',
    foto: fDoradztwo, fotoAlt: 'Stoisko PowerPlug z ładowarkami samochodowymi różnych producentów',
    faq: [
      { q: 'Ładowarka 11 kW czy 22 kW?', a: 'Większość samochodów elektrycznych ładuje się prądem przemiennym z mocą do 11 kW, więc stacja 22 kW nie przyspieszy ich ładowania. 22 kW ma sens, gdy auto obsługuje taką moc, przy flocie lub gdy chcesz mieć zapas na przyszłość — pod warunkiem, że pozwala na to przyłącze.' },
      { q: 'Czy ładowarka może współpracować z fotowoltaiką?', a: 'Tak — wiele modeli potrafi ładować auto nadwyżką energii z instalacji PV, przełączać się między jedną a trzema fazami i współpracować z falownikiem lub licznikiem energii. Dobieramy model do Twojej instalacji.' },
    ],
  },
  {
    slug: 'projekt-instalacji', href: '/projekt-instalacji/', nazwa: 'Projekt instalacji',
    h1: 'Projekt wykonawczy', h1Akcent: 'stacji ładowania',
    title: 'Projekt instalacji stacji ładowania samochodów | PowerPlug',
    description: 'Projekt wykonawczy stacji ładowania: schemat zasilania, dobór przewodów i zabezpieczeń, zarządzanie mocą, rozwiązania dla garaży podziemnych i wielostanowiskowych.',
    krok: 'Projektujemy zasilanie, zabezpieczenia i zarządzanie mocą — od jednego punktu po kilkanaście stanowisk.',
    lead: 'Dobra instalacja stacji ładowania zaczyna się od projektu. Projekt wykonawczy określa dokładnie, w jaki sposób stacja zostanie zasilona, zabezpieczona i podłączona do istniejącej infrastruktury.',
    akapity: [
      'Projektujemy zarówno pojedyncze punkty ładowania, jak i rozbudowane instalacje obejmujące kilka lub kilkanaście stanowisk. Projekt pozwala uniknąć kosztownych zmian na etapie montażu i daje wykonawcy jednoznaczne wytyczne dotyczące realizacji instalacji.',
    ],
    listaTytul: 'Projekt może obejmować m.in.',
    lista: [
      'schemat zasilania stacji',
      'dobór przewodów i zabezpieczeń',
      'sposób prowadzenia instalacji',
      'lokalizację rozdzielnic i urządzeń',
      'system ochrony przeciwporażeniowej i przepięciowej',
      'sposób opomiarowania energii',
      'rozwiązania związane z zarządzaniem mocą',
      'przygotowanie infrastruktury pod kolejne stacje',
      'rozwiązania wymagane dla garaży podziemnych i wielostanowiskowych',
    ],
    puenta: 'Projektujemy nie tylko miejsce pod jedną ładowarkę. Projektujemy infrastrukturę, która może rozwijać się razem z potrzebami użytkowników.',
    cenaOd: 'Projekt + ekspertyza w pakiecie od 2500 zł',
    foto: fProjekt, fotoAlt: 'Rozdzielnica z zabezpieczeniami obwodów stacji ładowania',
    faq: [
      { q: 'Kiedy potrzebny jest projekt instalacji?', a: 'Przy pojedynczym wallboxie w domu jednorodzinnym formalny projekt zwykle nie jest wymagany. Zalecamy go — a często jest niezbędny — przy kilku stanowiskach, garażach wielostanowiskowych, parkingach firmowych i wszędzie tam, gdzie trzeba rozdzielić ograniczoną moc.' },
    ],
  },
  {
    slug: 'ekspertyzy-elektryczne', href: '/ekspertyzy-elektryczne/', nazwa: 'Ekspertyza',
    h1: 'Ekspertyza dopuszczalności', h1Akcent: 'punktu ładowania',
    title: 'Ekspertyza dopuszczalności punktu ładowania — garaż wielostanowiskowy | PowerPlug',
    description: 'Ekspertyza dopuszczalności instalacji punktu ładowania w garażu wielostanowiskowym zgodnie z ustawą o elektromobilności. Analiza mocy, zabezpieczeń i ochrony przeciwpożarowej.',
    krok: 'W garażach wielostanowiskowych przygotowujemy ekspertyzę wymaganą przez ustawę o elektromobilności.',
    lead: 'Ekspertyza dopuszczalności instalacji punktu ładowania to opracowanie wymagane w określonych przypadkach przez ustawę o elektromobilności i paliwach alternatywnych.',
    akapity: [
      'Jej celem jest ocena, czy instalacja punktu ładowania w garażu wielostanowiskowym jest możliwa z punktu widzenia obowiązujących przepisów oraz warunków technicznych budynku.',
      'Na podstawie przeprowadzonej analizy przygotowujemy dokumentację, która może zostać wykorzystana w procesie uzyskania zgody na instalację punktu ładowania — np. przez wspólnotę lub spółdzielnię mieszkaniową.',
    ],
    listaTytul: 'W ramach ekspertyzy analizujemy m.in.',
    lista: [
      'możliwość przyłączenia punktu ładowania do instalacji elektrycznej budynku',
      'dostępność wymaganej mocy',
      'wpływ planowanej instalacji na istniejącą infrastrukturę',
      'zgodność rozwiązania z obowiązującymi przepisami',
      'wymagania dotyczące zabezpieczeń i ochrony przeciwpożarowej',
      'możliwość wykonania instalacji w konkretnej lokalizacji',
    ],
    puenta: 'Ekspertyza to dokument, z którym zarządca budynku może podjąć decyzję — a Ty możesz zacząć ładować pod blokiem.',
    cenaOd: 'Projekt + ekspertyza w pakiecie od 2500 zł',
    foto: fEkspertyza, fotoAlt: 'Ładowarki w garażu wielostanowiskowym obok sprzętu przeciwpożarowego',
    faq: [
      { q: 'Kiedy ekspertyza jest wymagana?', a: 'Ustawa o elektromobilności przewiduje ekspertyzę dopuszczalności m.in. przy instalacji punktu ładowania w garażu wielostanowiskowym w budynku wielorodzinnym. W domu jednorodzinnym ekspertyza nie jest potrzebna.' },
    ],
  },
  {
    slug: 'montaz-ladowarki-samochodowej', href: '/montaz-ladowarki-samochodowej/', nazwa: 'Montaż',
    h1: 'Montaż ładowarki', h1Akcent: 'samochodowej',
    title: 'Montaż ładowarki samochodowej Szczecin — wallbox i stacje ładowania | PowerPlug',
    description: 'Montaż wallboxów i stacji ładowania w Szczecinie i województwie zachodniopomorskim: domy, garaże podziemne, parkingi firm. Rozdzielnice, trasy kablowe, słupki, konfiguracja i pomiary.',
    krok: 'Montujemy, konfigurujemy i uruchamiamy stację — z pomiarami i testami przed oddaniem.',
    lead: 'Montaż stacji ładowania może być prostą instalacją wallboxa na ścianie domu, ale może też oznaczać kompleksową budowę infrastruktury ładowania na parkingu firmy, osiedla czy obiektu komercyjnego.',
    akapity: [
      'Może to być stacja AC za 2500 zł, ale też szybka stacja DC za 300 000 zł. Zakres prac zawsze dobieramy do konkretnej lokalizacji i możliwości istniejącej instalacji.',
      'Przed uruchomieniem sprawdzamy poprawność wykonania instalacji oraz konfigurujemy stację zgodnie z jej przeznaczeniem.',
    ],
    listaTytul: 'Wykonujemy m.in.',
    lista: [
      'montaż wallboxów w domach i garażach',
      'instalacje stacji w garażach podziemnych i wielostanowiskowych',
      'budowę i modernizację rozdzielnic',
      'wykonanie nowych obwodów zasilających',
      'prowadzenie tras kablowych',
      'montaż słupków i fundamentów pod stacje',
      'wykopy i prace ziemne',
      'montaż zabezpieczeń i systemów zarządzania mocą',
      'konfigurację i uruchomienie stacji',
      'pomiary elektryczne i testy funkcjonalne',
    ],
    puenta: 'Od prostego wallboxa po kompletną infrastrukturę ładowania — wykonujemy całość jako jedną, spójną instalację.',
    cenaOd: 'Montaż i konfiguracja od 600 zł',
    foto: fMontaz, fotoAlt: 'Elektryk PowerPlug montuje stację ładowania w garażu',
    faq: [
      { q: 'Ile trwa montaż ładowarki w domu?', a: 'Typowy montaż wallboxa w domu jednorodzinnym zajmuje jeden dzień roboczy — razem z konfiguracją, pomiarami i instruktażem. Dłużej trwają realizacje wymagające prac ziemnych lub przebudowy rozdzielnicy.' },
      { q: 'Czy mogę kupić ładowarkę sam, a Wy ją zamontujecie?', a: 'Tak. Montujemy także urządzenia kupione przez klienta — przed montażem sprawdzamy, czy model pasuje do instalacji i Twojego samochodu.' },
    ],
  },
  {
    slug: 'serwis', href: '/serwis/', nazwa: 'Serwis',
    h1: 'Serwis, przeglądy', h1Akcent: 'i wsparcie techniczne',
    title: 'Serwis i przegląd stacji ładowania — Szczecin | PowerPlug',
    description: 'Serwis, diagnostyka i przeglądy okresowe stacji ładowania — także urządzeń zamontowanych przez innych instalatorów. Pomiary, protokoły, przygotowanie do odbiorów.',
    krok: 'Zostajemy z Tobą po uruchomieniu: przeglądy, diagnostyka, aktualizacje i rozbudowa.',
    lead: 'Stacja ładowania jest urządzeniem elektrycznym, które — podobnie jak pozostała infrastruktura — wymaga okresowej kontroli, diagnostyki i odpowiedniej konserwacji.',
    akapity: [
      'Zapewniamy wsparcie zarówno dla stacji zamontowanych przez PowerPlug, jak i dla urządzeń innych instalatorów.',
      'W przypadku awarii analizujemy zarówno samą stację, jak i instalację, która ją zasila. Dzięki temu ustalamy, czy problem leży po stronie urządzenia, zasilania, zabezpieczeń, komunikacji czy konfiguracji.',
    ],
    listaTytul: 'W ramach serwisu wykonujemy m.in.',
    lista: [
      'diagnostykę usterek i problemów z ładowaniem',
      'wymianę uszkodzonych elementów',
      'aktualizację i konfigurację urządzeń',
      'pomiary instalacji elektrycznej',
      'testy funkcjonalne stacji',
      'przeglądy okresowe i kontrolę zabezpieczeń',
      'przygotowanie stacji do odbiorów i kontroli',
      'dokumentację z wykonanych pomiarów i przeglądów',
    ],
    puenta: 'Nie kończymy współpracy w dniu uruchomienia stacji. Możesz liczyć na nasze wsparcie przez cały okres eksploatacji.',
    cenaOd: 'Przegląd techniczny od 500 zł',
    foto: fSerwis, fotoAlt: 'Serwisant PowerPlug przy skrzynce z ładowarką samochodową',
    faq: [
      { q: 'Co obejmuje przegląd stacji ładowania?', a: 'Oględziny i dokumentację zdjęciową, pomiary ciągłości przewodów ochronnych, rezystancji izolacji i impedancji pętli zwarcia, sprawdzenie działania i czasu wyzwolenia wyłącznika różnicowoprądowego, testy adapterem EVSE oraz protokół z wynikami pomiarów i zaleceniami.' },
    ],
  },
];

export const uslugaPoSlug = (slug: string) => uslugi.find((u) => u.slug === slug);
