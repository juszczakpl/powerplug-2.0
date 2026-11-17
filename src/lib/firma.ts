// Dane firmy — na stałe w kodzie (zmieniają się rzadko). Zasilają stopkę, kontakt i JSON-LD.
// TODO(klient): pełny adres i NIP — audyt SEO wykazał brak adresu (NAP) na starej stronie.
export const firma = {
  nazwa: 'PowerPlug',
  telefon: '+48 730 882 967',
  telefonHref: 'tel:+48730882967',
  email: 'kontakt@powerplug.pl',
  godziny: 'Pn.–pt. 9:00–17:00',
  miasto: 'Szczecin',
  region: 'zachodniopomorskie',
  social: {
    facebook: 'https://www.facebook.com/PowerPlugPL',
    instagram: 'https://www.instagram.com/PowerPlugPL/',
    linkedin: 'https://www.linkedin.com/company/powerplug-pl',
    messenger: 'https://m.me/PowerPlugPL',
    whatsapp: 'https://wa.me/48730882967',
    allegro: 'https://allegro.pl/uzytkownik/Power_Plug',
  },
} as const;
