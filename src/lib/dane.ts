import { getCollection, type CollectionEntry } from 'astro:content';

export type Urzadzenie = CollectionEntry<'urzadzenia'> & { producentDane?: CollectionEntry<'producenci'> };

const norm = (s: string) => s.trim().toLowerCase();
const abc = (a: string, b: string) => a.localeCompare(b, 'pl', { sensitivity: 'base', numeric: true });

export async function producenci() {
  return (await getCollection('producenci', (p) => p.data.widoczny)).sort(
    (a, b) => a.data.kolejnosc - b.data.kolejnosc || abc(a.data.nazwa, b.data.nazwa),
  );
}

/** Widoczne urządzenia z dołączonym producentem (CMS zapisuje producenta jako nazwę albo slug). */
export async function urzadzenia(): Promise<Urzadzenie[]> {
  const prod = await getCollection('producenci');
  const znajdz = (v: string) =>
    prod.find((p) => norm(p.id) === norm(v) || norm(p.data.nazwa) === norm(v));
  return (await getCollection('urzadzenia', (u) => u.data.widoczny))
    .map((u) => ({ ...u, producentDane: znajdz(u.data.producent) }))
    .filter((u) => u.producentDane?.data.widoczny !== false)
    // Ta sama „kolejność” u kilku urządzeń: najpierw polecane, potem producent i model alfabetycznie (zawsze ten sam wynik)
    .sort((a, b) =>
      a.data.kolejnosc - b.data.kolejnosc
      || Number(b.data.polecany) - Number(a.data.polecany)
      || abc(a.producentDane?.data.nazwa ?? '', b.producentDane?.data.nazwa ?? '')
      || abc(a.data.nazwa, b.data.nazwa));
}

export async function realizacje() {
  return (await getCollection('realizacje', (r) => r.data.widoczna)).sort(
    (a, b) => b.data.data.getTime() - a.data.data.getTime() || abc(a.id, b.id),
  );
}

export async function opinie() {
  return await getCollection('opinie', (o) => o.data.widoczna);
}

export const VAT = 0.23; // sprzęt: zawsze 23% VAT
export const zl = (n: number) => `${Math.round(n).toLocaleString('pl-PL')} zł`;
export const netto = (brutto: number) => Math.round(brutto / (1 + VAT));
export const formatCena = (c?: number | null) => (c == null ? 'Wycena indywidualna' : zl(c));
