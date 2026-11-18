// robots.txt — podgląd (nowa.*) blokuje wszystko, produkcja wskazuje sitemapę.
import type { APIRoute } from 'astro';
export const GET: APIRoute = ({ site }) => {
  const body = __PREVIEW__
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\nDisallow: /api/\nDisallow: /status/\nDisallow: /brand/\n\nSitemap: ${new URL('sitemap-index.xml', site)}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
