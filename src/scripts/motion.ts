// Warstwa ruchu: płynne przewijanie (Lenis), poświata podążająca za kursorem, rysowanie kabli.
// Wszystko wyłączone przy prefers-reduced-motion. GSAP-owe efekty specjalne dojdą osobno.
import Lenis from 'lenis';

const root = document.documentElement;
root.classList.add('js');
(window as any).__motion = true;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;

// ── Lenis ──────────────────────────────────────────────
let lenis: Lenis | undefined;
if (!reduced) {
  lenis = new Lenis({ lerp: 0.1, anchors: { offset: -96 } });
  const raf = (t: number) => { lenis!.raf(t); requestAnimationFrame(raf); };
  requestAnimationFrame(raf);
}
(window as any).__lenis = lenis;

// ── Kable: stała grubość w px niezależnie od skali SVG (proporcje zachowane, więc skala jednolita)
const cableEls = document.querySelectorAll<SVGSVGElement>('svg.cable');
const sizeCable = (svg: SVGSVGElement) => {
  const vb = svg.viewBox.baseVal; const r = svg.getBoundingClientRect();
  if (!vb || !r.width) return;
  const slice = svg.getAttribute('preserveAspectRatio')?.includes('slice');
  const s = (slice ? Math.max : Math.min)(r.width / vb.width, r.height / vb.height);
  const px = Math.min(14, Math.max(6, 5.6 + innerWidth * 0.004)); // = --cable-width
  svg.style.setProperty('--cable-sw', String(px / s));
};
cableEls.forEach(sizeCable);
if ('ResizeObserver' in window) { const ro = new ResizeObserver((es) => es.forEach((e) => sizeCable(e.target as SVGSVGElement))); cableEls.forEach((c) => ro.observe(c)); }

// ── Kable: rysowanie przy wejściu w widok ──────────────
const cables = document.querySelectorAll<SVGSVGElement>('.cable[data-draw]');
if (reduced || !('IntersectionObserver' in window)) {
  cables.forEach((c) => c.classList.add('is-drawn'));
} else {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) if (e.isIntersecting) { e.target.classList.add('is-drawn'); io.unobserve(e.target); }
  }, { threshold: 0.25, rootMargin: '0px 0px -10% 0px' });
  cables.forEach((c) => io.observe(c));
}

// ── Poświata: warstwa z miękkim wygaszeniem przy krawędziach sekcji (bez ostrego cięcia) ──
document.querySelectorAll<HTMLElement>('.has-glow > .glow').forEach((el) => {
  const layer = document.createElement('div');
  layer.className = 'glow-layer';
  layer.setAttribute('aria-hidden', 'true');
  el.replaceWith(layer);
  layer.append(el);
});

// ── Poświata za kursorem (z easingiem) ─────────────────
if (!reduced && finePointer) {
  type G = { el: HTMLElement; host: HTMLElement; x: number; y: number; tx: number; ty: number; ox: number; oy: number; active: boolean };
  const glows: G[] = [];
  document.querySelectorAll<HTMLElement>('.has-glow > .glow-layer > .glow').forEach((el) => {
    const host = el.parentElement!.parentElement as HTMLElement;
    glows.push({ el, host, x: 0, y: 0, tx: 0, ty: 0, ox: 0, oy: 0, active: false });
  });
  let px = -1, py = -1;
  const measure = (g: G) => {
    // przesunięcie potrzebne, by środek poświaty wypadł pod kursorem
    const hr = g.host.getBoundingClientRect();
    const cx = g.el.offsetLeft + g.el.offsetWidth / 2;
    const cy = g.el.offsetTop + g.el.offsetHeight / 2;
    const inside = px >= hr.left && px <= hr.right && py >= hr.top && py <= hr.bottom;
    g.active = inside;
    g.tx = inside ? px - hr.left - cx : 0;
    g.ty = inside ? py - hr.top - cy : 0;
  };
  const update = () => glows.forEach(measure);
  addEventListener('pointermove', (e) => { px = e.clientX; py = e.clientY; update(); }, { passive: true });
  addEventListener('scroll', update, { passive: true });
  document.addEventListener('pointerleave', () => { px = py = -1; update(); });
  const tick = () => {
    for (const g of glows) {
      const k = g.active ? 0.07 : 0.035; // za kursorem miękko, powrót jeszcze wolniej
      g.x += (g.tx - g.x) * k;
      g.y += (g.ty - g.y) * k;
      if (Math.abs(g.tx - g.x) > 0.1 || Math.abs(g.ty - g.y) > 0.1) g.el.style.transform = `translate3d(${g.x.toFixed(1)}px, ${g.y.toFixed(1)}px, 0)`;
    }
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

// ── Nawigacja: jedna kapsuła podążająca za kursorem (spoczywa na bieżącej stronie) ──
document.querySelectorAll<HTMLElement>('.nav-links').forEach((list) => {
  const pill = document.createElement('span');
  pill.className = 'nav-links__pill'; pill.setAttribute('aria-hidden', 'true');
  list.prepend(pill);
  const links = [...list.querySelectorAll<HTMLAnchorElement>('a')];
  const current = links.find((a) => a.getAttribute('aria-current') === 'page');
  const moveTo = (a?: HTMLElement, instant = false) => {
    if (!a) { pill.classList.remove('is-on'); return; }
    const lr = list.getBoundingClientRect(), r = a.getBoundingClientRect();
    if (!pill.classList.contains('is-on')) instant = true; // pierwsze pojawienie: bez „wjazdu” z lewej
    if (instant) pill.style.transition = 'none';
    pill.style.width = `${r.width}px`;
    pill.style.transform = `translateX(${r.left - lr.left}px)`;
    pill.classList.add('is-on');
    if (instant) { pill.getBoundingClientRect(); pill.style.transition = ''; }
  };
  const rest = () => moveTo(current);
  links.forEach((a) => { a.addEventListener('pointerenter', () => moveTo(a)); a.addEventListener('focus', () => moveTo(a)); });
  list.addEventListener('pointerleave', rest);
  list.addEventListener('focusout', (e) => { if (!list.contains(e.relatedTarget as Node)) rest(); });
  const init = () => moveTo(current, true);
  document.fonts?.ready.then(init); init();
  addEventListener('resize', init);
});

// ── Wejścia: nagłówki display/H1/H2 słowo po słowie (offset per słowo), reszta fade-up ──
const SPLIT = 'main :is(.t-display, .t-h1, .t-h2)';
const REVEAL = [
  'main .section-head > :not(h1, h2)', 'main .t-lead', 'main .grid > *', 'main .stat', 'main .testimonial',
  'main .faq__item', 'main .chip-list', 'main .page-hero__media', 'main .cta-band', 'main .check-list',
  'main .pull', 'main .step-panel:not([hidden])', 'main .feature', 'main .area-map', 'main .area-list > li',
  'main .gallery figure', 'main .garage-flow > li', 'main .product-hero__info > *', 'main .home-segments',
].join(',');

function splitWords(el: HTMLElement) {
  let i = 0;
  const walk = (node: Node) => {
    [...node.childNodes].forEach((ch) => {
      if (ch.nodeType === 3) {
        const parts = (ch.textContent ?? '').split(/(\s+)/);
        const frag = document.createDocumentFragment();
        parts.forEach((p) => {
          if (!p) return;
          if (/^\s+$/.test(p)) { frag.append(document.createTextNode(p)); return; }
          const w = document.createElement('span'); w.className = 'split-w';
          const inner = document.createElement('span'); inner.textContent = p; inner.style.setProperty('--i', String(i++));
          w.append(inner); frag.append(w);
        });
        ch.replaceWith(frag);
      } else if (ch.nodeType === 1 && !(ch as HTMLElement).classList.contains('split-w')) walk(ch);
    });
  };
  walk(el);
  el.classList.add('is-split');
}

if (reduced) root.classList.add('reveal-off');
else {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  document.querySelectorAll<HTMLElement>(SPLIT).forEach((h) => { splitWords(h); io.observe(h); });
  document.querySelectorAll<HTMLElement>(REVEAL).forEach((el) => {
    if (el.closest('[data-rv]') && !el.hasAttribute('data-rv')) return; // nie animuj podwójnie zagnieżdżonych
    el.setAttribute('data-rv', '');
    const sib = el.parentElement ? [...el.parentElement.children].indexOf(el) : 0;
    if (el.matches('.grid > *, .area-list > li, .garage-flow > li, .faq__item, .stat, .gallery figure, .product-hero__info > *')) el.style.setProperty('--d', `${Math.min(sib, 6) * 80}ms`);
    io.observe(el);
  });
}
