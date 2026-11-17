import type { ImageMetadata } from 'astro';

// Wszystkie pliki wgrane przez Pages CMS (src/assets/uploads) — importowane przy buildzie,
// dzięki czemu <Image> robi z nich WebP/AVIF w odpowiednich rozmiarach.
const pliki = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/uploads/*.{jpg,jpeg,png,webp,avif}',
  { eager: true },
);

const poNazwie = new Map<string, ImageMetadata>(
  Object.entries(pliki).map(([sciezka, mod]) => [
    sciezka.split('/').pop()!.toLowerCase(),
    mod.default,
  ]),
);

/** "/uploads/plik.jpg" (zapis z CMS) → ImageMetadata albo null, gdy pliku brak. */
export function cmsImage(sciezka?: string | null): ImageMetadata | null {
  if (!sciezka) return null;
  const nazwa = sciezka.split('/').pop()!.toLowerCase();
  return poNazwie.get(nazwa) ?? null;
}
