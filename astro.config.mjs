// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Strona statyczna → GitHub Actions → SFTP na hosting OVH.
// SITE_URL ustawia workflow (podgląd: https://nowa.powerplug.pl, produkcja: https://powerplug.pl).
const site = process.env.SITE_URL || 'https://powerplug.pl';
const isPreview = !site.includes('://powerplug.pl');

export default defineConfig({
  site,
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: isPreview ? [] : [sitemap()],
  image: { responsiveStyles: true },
  vite: { define: { __PREVIEW__: JSON.stringify(isPreview) } },
});
