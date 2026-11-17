// Mapa strony wg IA v0.2 (FigJam) — jedno źródło dla nagłówka, menu, stopki i okruszków.
export const nawigacja = [
  { label: 'Start', href: '/' },
  {
    label: 'Oferta', href: '/oferta/',
    children: [
      { label: 'Ładowarki do domu', href: '/ladowarka-samochodowa-do-domu/' },
      { label: 'Stacje dla firm', href: '/stacje-ladowania-dla-firm/' },
      { label: 'Miejsca postojowe (zarządcy)', href: '/miejsce-postojowe-ladowarka/' },
      { label: 'Obsługa płatności', href: '/platnosci-za-ladowanie/' },
      { label: 'Finansowanie i leasing', href: '/finansowanie-leasing-ladowarki/' },
      { label: 'Obszar działania', href: '/ladowarki-zachodniopomorskie/' },
    ],
  },
  {
    label: 'Usługi', href: '/uslugi/',
    children: [
      { label: 'Doradztwo', href: '/jaka-ladowarka-samochodowa/' },
      { label: 'Wizja lokalna', href: '/wizja-lokalna/' },
      { label: 'Projekt instalacji', href: '/projekt-instalacji/' },
      { label: 'Ekspertyzy', href: '/ekspertyzy-elektryczne/' },
      { label: 'Montaż', href: '/montaz-ladowarki-samochodowej/' },
      { label: 'Serwis i wsparcie', href: '/serwis/' },
    ],
  },
  { label: 'Produkty', href: '/ladowarki/' },
  { label: 'Realizacje', href: '/realizacje/' },
] as const;

export const cta = {
  wycena: { label: 'Bezpłatna wycena', href: '/wycena/' },
  kontakt: { label: 'Kontakt', href: '/kontakt/' },
};
