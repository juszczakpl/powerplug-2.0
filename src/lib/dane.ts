import { getCollection, type CollectionEntry } from 'astro:content';

export type Urzadzenie = CollectionEntry<'urzadzenia'> & { producentDane?: CollectionEntry<'producenci'> };

const norm = (s: string) => s.trim().toLowerCase();

export async function producenci() {
  return (await getCollection('producenci', (p) => p.data.widoczny)).sort(
    (a, b) => a.data.kolejnosc - b.data.kolejnosc,
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
    .sort((a, b) => a.data.kolejnosc - b.data.kolejnosc);
}

export async function realizacje() {
  return (await getCollection('realizacje', (r) => r.data.widoczna)).sort(
    (a, b) => b.data.data.getTime() - a.data.data.getTime(),
  );
}

export async function opinie() {
  return await getCollection('opinie', (o) => o.data.widoczna);
}

export const formatCena = (c?: number | null) =>
  c == null ? 'Wycena indywidualna' : `od ${c.toLocaleString('pl-PL')} zł`;
