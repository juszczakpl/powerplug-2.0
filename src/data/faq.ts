// 8 pytań „na własną rękę” od Dominika (mail 16.09.2026) — FAQ strony głównej + FAQPage schema.
// Odpowiedzi: wersja robocza do weryfikacji przez Dominika (kwestie prawne i techniczne).
export const faqOgolne = [
  {
    q: 'Mam tylko 15 kW mocy przyłączeniowej — czy mogę zamontować ładowarkę 22 kW?',
    a: 'Tak, ale ładowarka nie może pobierać więcej, niż pozwala przyłącze. Ograniczamy moc ładowania w konfiguracji stacji albo stosujemy dynamiczne zarządzanie mocą, które na bieżąco dzieli energię między dom i samochód. Dzięki temu auto ładuje się szybciej, gdy dom zużywa mało, i wolniej, gdy pracuje np. płyta indukcyjna. Wszystko sprawdzamy podczas wizji lokalnej.',
  },
  {
    q: 'Czy moja instalacja elektryczna wytrzyma ładowanie samochodu?',
    a: 'To zależy od mocy przyłączeniowej, stanu rozdzielnicy i przekrojów przewodów. Ładowanie to wielogodzinne obciążenie pełną mocą, dlatego stacja potrzebuje osobnego obwodu z odpowiednimi zabezpieczeniami, w tym ochroną różnicowoprądową wykrywającą prąd stały. Podczas wizji lokalnej sprawdzamy instalację i mówimy, co trzeba dostosować.',
  },
  {
    q: 'Operator odmówił mi dodatkowej mocy — co mogę zrobić?',
    a: 'Nie zawsze potrzebujesz więcej mocy. Stacja z zarządzaniem mocą ładuje samochód tylko energią, której budynek w danej chwili nie wykorzystuje. Pomagamy też dobrać rozwiązanie z fotowoltaiką oraz przygotować ponowny wniosek do operatora z innym zakresem.',
  },
  {
    q: 'Chcę ładowarkę w garażu podziemnym — od czego zacząć?',
    a: 'Od zgody zarządcy budynku — wspólnoty lub spółdzielni. W garażu wielostanowiskowym ustawa o elektromobilności przewiduje ekspertyzę dopuszczalności instalacji punktu ładowania. Robimy wizję lokalną, ekspertyzę i projekt, przygotowujemy dokumenty dla zarządcy, a po uzyskaniu zgody montujemy stację.',
  },
  {
    q: 'Potrzebuję warunków przyłączenia — kto je załatwi?',
    a: 'Możemy to zrobić za Ciebie. Przygotowujemy i składamy wniosek do operatora sieci dystrybucyjnej na podstawie pełnomocnictwa, a potem prowadzimy sprawę do wydania warunków.',
  },
  {
    q: 'Czy potrzebuję projektu i ekspertyzy?',
    a: 'Przy wallboxie w domu jednorodzinnym zwykle nie — wystarczy prawidłowo wykonana instalacja z pomiarami. Ekspertyza dopuszczalności jest potrzebna m.in. w garażach wielostanowiskowych budynków wielorodzinnych, a projekt zalecamy przy kilku stanowiskach, parkingach firmowych i wszędzie tam, gdzie trzeba rozdzielić ograniczoną moc.',
  },
  {
    q: 'Chcę kilka ładowarek, ale nie mam wystarczającej mocy — czy da się to zrobić?',
    a: 'Tak. Stacje połączone w sieć dzielą dostępną moc między siebie — dynamiczne zarządzanie mocą przydziela ją samochodom, które akurat się ładują. Projektujemy taką instalację tak, by w przyszłości można było dołożyć kolejne punkty.',
  },
  {
    q: 'Czy moja stacja wymaga odbioru UDT?',
    a: 'Odbiór Urzędu Dozoru Technicznego dotyczy przede wszystkim stacji i punktów ładowania udostępnianych publicznie. Prywatna ładowarka w domu jednorodzinnym go nie wymaga. Przy stacjach firmowych i komercyjnych sprawdzamy wymagania w konkretnym przypadku i przygotowujemy stację do odbioru.',
  },
];
