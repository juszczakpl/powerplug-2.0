// Strony lokalne /montaz-ladowarek-[miasto] — każda z własną treścią (nie kopie z podmianą nazwy).
// Odległości drogowe z centrum Szczecina — orientacyjne. Dojazd 0 zł w promieniu 30 km (cennik Dominika).
import type { ImageMetadata } from 'astro';
import fSzczecin from '../assets/uploads/realizacja-1713133347603.jpg';
import fPolice from '../assets/uploads/realizacja-1714079739950.jpg';
import fGryfino from '../assets/uploads/realizacja-1720194729746.jpg';
import fGoleniow from '../assets/uploads/realizacja-1703799299514.jpg';
import fStargard from '../assets/uploads/realizacja-1719781723648.jpg';
import fDobra from '../assets/uploads/realizacja-1697971346855.jpg';
import fKoszalin from '../assets/uploads/realizacja-1702819924354.jpg';
import fKolobrzeg from '../assets/uploads/realizacja-1703799281640.jpg';
import fSwinoujscie from '../assets/uploads/realizacja-1705099425001.jpg';
import fSzczecinek from '../assets/uploads/realizacja-1696189771106.jpg';
import fWalcz from '../assets/uploads/realizacja-1723405400699.jpg';
import fBialogard from '../assets/uploads/realizacja-1730666776327.jpg';
import fNowogard from '../assets/uploads/realizacja-1714817392952.jpg';
import fPyrzyce from '../assets/uploads/realizacja-1730666776696.jpg';
import fGorzow from '../assets/uploads/realizacja-1730666776747.jpg';

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
  : km <= 70
    ? `Tak — ${miejscownik} montujemy regularnie. To ok. ${km} km od Szczecina, więc koszt dojazdu podajemy w wycenie.`
    : `Tak. To ok. ${km} km od Szczecina, więc koszt dojazdu podajemy w wycenie, a prace planujemy tak, żeby zmieścić je w jednym wyjeździe.`;

// Dalsze miejscowości: przed wyjazdem prosimy o zdjęcia rozdzielnicy i miejsca montażu (wspólne FAQ, do potwierdzenia przez Dominika).
const zdjecia = { q: 'Czy musicie przyjechać na wizję lokalną przed wyceną?', a: 'Przy dalszych lokalizacjach zwykle wystarczą zdjęcia rozdzielnicy, licznika i miejsca montażu oraz informacja o mocy przyłączeniowej. Na tej podstawie przygotowujemy wycenę, a na miejsce przyjeżdżamy już z kompletem urządzeń i materiałów.' };

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
  // ── Większe miasta województwa (powyżej 20 tys. mieszkańców) + Nowogard, Pyrzyce i Gorzów Wlkp. ──
  {
    slug: 'koszalin', nazwa: 'Koszalin', miejscownik: 'w Koszalinie', lat: 54.1943, lng: 16.1722, km: 165,
    foto: fKoszalin, fotoAlt: 'Ścienna stacja ładowania z zielonym podświetleniem i podłączonym przewodem',
    lead: 'Koszalin to drugie największe miasto województwa — osiedla, domy na obrzeżach i wiele firm z flotą. Montujemy tu stacje do domu i dla przedsiębiorstw.',
    akapity: [
      'Dla firm z Koszalina i okolic projektujemy kilka stanowisk z zarządzaniem mocą, tak żeby ładowanie aut służbowych nie przeciążało przyłącza budynku. Energię każdego samochodu można rozliczać osobno.',
      'W domach jednorodzinnych — od Rokosowa po Mielno — dobieramy moc stacji do samochodu i instalacji, a montaż kończymy pomiarami i instruktażem.',
    ],
    okolice: ['Koszalin', 'Mielno', 'Sianów', 'Manowo', 'Biesiekierz', 'Będzino', 'Świeszyno'],
    faq: [
      { q: 'Czy dojeżdżacie do Koszalina?', a: dojazd(165, 'w Koszalinie') },
      zdjecia,
    ],
  },
  {
    slug: 'kolobrzeg', nazwa: 'Kołobrzeg', miejscownik: 'w Kołobrzegu', lat: 54.1757, lng: 15.5832, km: 130,
    foto: fKolobrzeg, fotoAlt: 'Stacja ładowania na słupku podczas ładowania samochodu elektrycznego',
    lead: 'W Kołobrzegu i nadmorskich miejscowościach ładowarka to dla hoteli, pensjonatów i apartamentów sposób na przyciągnięcie gości przyjeżdżających autem elektrycznym.',
    akapity: [
      'Dla obiektów noclegowych montujemy stacje na parkingu lub w garażu i konfigurujemy płatności za ładowanie — gość płaci w aplikacji, a Ty dostajesz rozliczenie bez ręcznego liczenia. Przy kilku stanowiskach dzielimy moc tak, żeby nie trzeba było zwiększać przyłącza.',
      'W apartamentowcach z garażem podziemnym zaczynamy od ekspertyzy dopuszczalności i dokumentów dla zarządcy, a w domach jednorodzinnych — od doboru mocy do auta i instalacji.',
    ],
    okolice: ['Kołobrzeg', 'Ustronie Morskie', 'Dźwirzyno', 'Grzybowo', 'Gościno', 'Dygowo', 'Siemyśl'],
    faq: [
      { q: 'Czy dojeżdżacie do Kołobrzegu?', a: dojazd(130, 'w Kołobrzegu') },
      { q: 'Czy goście hotelu mogą płacić za ładowanie?', a: 'Tak. Razem z partnerem ev24 konfigurujemy płatności — gość płaci kartą lub w aplikacji, a Ty ustalasz cennik i dostajesz rozliczenie.' },
      zdjecia,
    ],
  },
  {
    slug: 'swinoujscie', nazwa: 'Świnoujście', miejscownik: 'w Świnoujściu', lat: 53.9105, lng: 14.2471, km: 100,
    foto: fSwinoujscie, fotoAlt: 'Biały wallbox zamontowany na jasnej ścianie budynku',
    lead: 'Świnoujście to apartamentowce z garażami podziemnymi, hotele i domy po obu stronach Świny. Montujemy tu ładowarki na miejscach postojowych, dla obiektów noclegowych i w domach.',
    akapity: [
      'W nowych budynkach wielorodzinnych przy promenadzie i w centrum najczęściej chodzi o ładowarkę na miejscu w garażu podziemnym. Przygotowujemy ekspertyzę, projekt i dokumenty dla zarządcy, a potem montujemy stację z osobnym opomiarowaniem.',
      'Hotelom i właścicielom apartamentów na wynajem pomagamy udostępnić ładowanie gościom — z płatnościami i rozliczeniem przez platformę ev24.',
    ],
    okolice: ['Świnoujście', 'Międzyzdroje', 'Warszów', 'Karsibór', 'Przytór', 'Wolin', 'Dziwnów'],
    faq: [
      { q: 'Czy dojeżdżacie do Świnoujścia?', a: dojazd(100, 'w Świnoujściu') },
      { q: 'Mam apartament z miejscem w garażu podziemnym — od czego zacząć?', a: 'Od kontaktu z nami i zarządcą budynku. Przygotujemy ekspertyzę dopuszczalności i projekt, które zarządca musi dostać, zanim wyrazi zgodę na montaż.' },
      zdjecia,
    ],
  },
  {
    slug: 'szczecinek', nazwa: 'Szczecinek', miejscownik: 'w Szczecinku', lat: 53.7076, lng: 16.6985, km: 170,
    foto: fSzczecinek, fotoAlt: 'Stacja ładowania na słupku przy budynku',
    lead: 'Szczecinek i okolice Pojezierza Drawskiego to głównie domy jednorodzinne i firmy produkcyjne. Montujemy ładowarki dla domu i stanowiska dla pracowników.',
    akapity: [
      'Przy domach z dużą działką często montujemy stację na słupku przy podjeździe, z przewodem prowadzonym w ziemi. Dobieramy zabezpieczenia do istniejącej instalacji i sprawdzamy, czy przyłącze wytrzyma dodatkowe obciążenie.',
      'Zakładom pracy proponujemy stanowiska z zarządzaniem mocą — samochody pracowników i flota ładują się w czasie zmiany, bez ryzyka przekroczenia mocy umownej.',
    ],
    okolice: ['Szczecinek', 'Borne Sulinowo', 'Barwice', 'Biały Bór', 'Turowo', 'Czaplinek'],
    faq: [
      { q: 'Czy dojeżdżacie do Szczecinka?', a: dojazd(170, 'w Szczecinku') },
      zdjecia,
    ],
  },
  {
    slug: 'walcz', nazwa: 'Wałcz', miejscownik: 'w Wałczu', lat: 53.2735, lng: 16.4710, km: 135,
    foto: fWalcz, fotoAlt: 'Wallbox z podłączonym przewodem zamontowany na ścianie',
    lead: 'W Wałczu i okolicznych gminach montujemy wallboxy w domach i gospodarstwach, a także stacje przy firmach i obiektach usługowych.',
    akapity: [
      'W gospodarstwach i domach poza miastem instalacja bywa starsza, dlatego zaczynamy od sprawdzenia rozdzielnicy, przyłącza i trasy kabla. Jeśli trzeba, dokładamy osobny obwód i zabezpieczenia, żeby ładowanie było bezpieczne.',
      'Przy domach z fotowoltaiką dobieramy stację, która ładuje auto nadwyżką energii z dachu.',
    ],
    okolice: ['Wałcz', 'Mirosławiec', 'Tuczno', 'Człopa', 'Jastrowie', 'Kłębowiec'],
    faq: [
      { q: 'Czy dojeżdżacie do Wałcza?', a: dojazd(135, 'w Wałczu') },
      zdjecia,
    ],
  },
  {
    slug: 'bialogard', nazwa: 'Białogard', miejscownik: 'w Białogardzie', lat: 54.0070, lng: 15.9874, km: 160,
    foto: fBialogard, fotoAlt: 'Ładowarka samochodowa zamontowana na elewacji domu',
    lead: 'Białogard, Karlino i okolice to domy jednorodzinne oraz małe i średnie firmy. Montujemy tu wallboxy i stacje dla floty.',
    akapity: [
      'W domach montujemy wallboxy na elewacji lub w garażu z osobnym obwodem prosto z rozdzielnicy. Jeśli moc przyłącza jest niewielka, ustawiamy ograniczenie prądu ładowania albo dynamiczne zarządzanie mocą.',
      'Dla firm przygotowujemy stanowiska dla samochodów służbowych z rozliczaniem energii — także w leasingu przez mLeasing.',
    ],
    okolice: ['Białogard', 'Karlino', 'Tychowo', 'Połczyn-Zdrój', 'Rąbino', 'Stanomino'],
    faq: [
      { q: 'Czy dojeżdżacie do Białogardu?', a: dojazd(160, 'w Białogardzie') },
      zdjecia,
    ],
  },
  {
    slug: 'nowogard', nazwa: 'Nowogard', miejscownik: 'w Nowogardzie', lat: 53.6738, lng: 15.1168, km: 60,
    foto: fNowogard, fotoAlt: 'Stacja ładowania przy miejscu postojowym obok domu',
    lead: 'Nowogard leży niecałą godzinę drogi od Szczecina, więc montujemy tu regularnie — w domach jednorodzinnych, przy firmach i na osiedlach.',
    akapity: [
      'W domach nad Jeziorem Nowogardzkim i w okolicznych wsiach najczęściej montujemy wallbox w garażu lub na słupku przy podjeździe. Przed montażem sprawdzamy instalację i dobieramy moc stacji do przyłącza.',
      'Firmom z Nowogardu i Osiny proponujemy stanowiska dla pracowników i floty z zarządzaniem mocą, a gdy stacja ma służyć klientom — z płatnościami za ładowanie.',
    ],
    okolice: ['Nowogard', 'Osina', 'Dobra Nowogardzka', 'Wierzbięcin', 'Maszewo', 'Płoty'],
    faq: [
      { q: 'Czy dojeżdżacie do Nowogardu?', a: dojazd(60, 'w Nowogardzie') },
    ],
  },
  {
    slug: 'pyrzyce', nazwa: 'Pyrzyce', miejscownik: 'w Pyrzycach', lat: 53.1462, lng: 14.8930, km: 58,
    foto: fPyrzyce, fotoAlt: 'Wallbox z podświetleniem zamontowany na ceglanej ścianie',
    lead: 'Pyrzyce i gminy powiatu pyrzyckiego to domy jednorodzinne i gospodarstwa — coraz częściej z fotowoltaiką i autem elektrycznym w garażu.',
    akapity: [
      'Gdy dom ma instalację PV, dobieramy stację, która ładuje samochód nadwyżką energii z dachu i potrafi przełączać się między jedną a trzema fazami. Dzięki temu ładujesz taniej, a energia nie wraca do sieci za bezcen.',
      'W gospodarstwach z dłuższą trasą kabla planujemy przekrój przewodu i zabezpieczenia tak, żeby stacja pracowała z pełną mocą.',
    ],
    okolice: ['Pyrzyce', 'Lipiany', 'Bielice', 'Przelewice', 'Warnice', 'Kozielice'],
    faq: [
      { q: 'Czy dojeżdżacie do Pyrzyc?', a: dojazd(58, 'w Pyrzycach') },
      { q: 'Czy ładowarka będzie współpracować z moją fotowoltaiką?', a: 'Większość nowoczesnych stacji to potrafi. Dobieramy model do Twojego falownika, a po montażu konfigurujemy ładowanie nadwyżką energii.' },
    ],
  },
  {
    slug: 'gorzow-wielkopolski', nazwa: 'Gorzów Wielkopolski', miejscownik: 'w Gorzowie Wielkopolskim', lat: 52.7325, lng: 15.2369, km: 105,
    foto: fGorzow, fotoAlt: 'Biała ładowarka samochodowa zawieszona na ścianie z przewodem',
    lead: 'Gorzów Wielkopolski to już województwo lubuskie, ale dzięki drodze S3 dojeżdżamy tu sprawnie — i montowaliśmy tu już ładowarki.',
    akapity: [
      'W Gorzowie i okolicznych gminach — Deszcznie, Kłodawie, Santoku — montujemy wallboxy w domach jednorodzinnych oraz stacje przy firmach. Zakres jest taki sam jak w Szczecinie: dobór urządzenia, formalności, montaż, konfiguracja i serwis.',
      'Firmom proponujemy stanowiska z zarządzaniem mocą i rozliczaniem energii, a obiektom usługowym — udostępnianie ładowania klientom z płatnościami.',
    ],
    okolice: ['Gorzów Wielkopolski', 'Deszczno', 'Kłodawa', 'Santok', 'Bogdaniec', 'Lubiszyn'],
    faq: [
      { q: 'Czy dojeżdżacie do Gorzowa Wielkopolskiego?', a: dojazd(105, 'w Gorzowie Wielkopolskim') },
      zdjecia,
    ],
  },
];

export const miejscowoscPoSlug = (slug: string) => miejscowosci.find((m) => m.slug === slug);
export const SZCZECIN = { lat: 53.4285, lng: 14.5528 };
