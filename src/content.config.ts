// Kolekcje edytowane przez klienta w Pages CMS (.pages.yml).
// Zdjęcia są zapisywane w CMS jako ścieżka "/uploads/plik.jpg";
// pliki leżą w src/assets/uploads i są optymalizowane przy buildzie (src/lib/cms-image.ts).
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const sciezka = z.string().trim().min(1);

const producenci = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/producenci' }),
  schema: z.object({
    nazwa: z.string(),
    opis: z.string().default(''),
    logo: sciezka.optional().nullable(),
    kolejnosc: z.number().default(100),
    widoczny: z.boolean().default(true),
  }),
});

const urzadzenia = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/urzadzenia' }),
  schema: z.object({
    nazwa: z.string(),
    // slug pliku producenta, np. "wallbox"
    producent: z.string(),
    typ: z.enum(['ladowarka', 'akcesorium']).default('ladowarka'),
    // ładowarki: dom / firma / publiczne · akcesoria: kable / zaslepki / slupki / uchwyty
    kategorie: z.array(z.string()).default([]),
    cena: z.number().nullable().optional(), // brutto "od", null = wycena indywidualna
    dostepnosc: z.enum(['dostepny', 'na-zamowienie', 'niedostepny']).default('dostepny'),
    widoczny: z.boolean().default(true),
    polecany: z.boolean().default(false),
    moc: z.array(z.string()).default([]), // np. ["7,4 kW", "11 kW", "22 kW"]
    zlacze: z.string().default('Typ 2'),
    ip: z.string().optional().nullable(),
    opis: z.string().default(''),
    parametry: z
      .array(z.object({ nazwa: z.string(), wartosc: z.string() }))
      .default([]),
    zdjecia: z.array(sciezka).default([]),
    karta_pdf: z.string().optional().nullable(),
    kolejnosc: z.number().default(100),
  }),
});

const realizacje = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/realizacje' }),
  schema: z.object({
    tytul: z.string(),
    miasto: z.string().default(''),
    typ: z.enum(['dom', 'firma', 'garaz-wielostanowiskowy', 'publiczne']).default('dom'),
    data: z.coerce.date(),
    opis: z.string().default(''),
    zdjecia: z.array(sciezka).min(1),
    widoczna: z.boolean().default(true),
  }),
});

const opinie = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/opinie' }),
  schema: z.object({
    autor: z.string(),
    miasto: z.string().default(''),
    tresc: z.string(),
    ocena: z.number().min(1).max(5).default(5),
    data: z.coerce.date().optional(),
    widoczna: z.boolean().default(true),
  }),
});

export const collections = { producenci, urzadzenia, realizacje, opinie };
