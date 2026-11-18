// Kalkulator wyceny: kroki, przeliczanie widełek, prefill (produkt / miejsce / użytek) i okno dialogowe.
type Cennik = Record<string, number | string>;
type Urz = { id: string; nazwa: string; cena: number | null };
const zl = (n: number) => `${Math.round(n / 50) * 50}`.replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' zł';

function setup(form: HTMLFormElement) {
  const c = JSON.parse(form.dataset.cennik || '{}') as Cennik;
  const urz = JSON.parse(form.dataset.urzadzenia || '[]') as Urz[];
  const steps = [...form.querySelectorAll<HTMLFieldSetElement>('.quote-step')];
  const bars = [...form.querySelectorAll<HTMLLIElement>('.progress li')];
  const prev = form.querySelector<HTMLButtonElement>('[data-prev]')!;
  const next = form.querySelector<HTMLButtonElement>('[data-next]')!;
  const submit = form.querySelector<HTMLButtonElement>('[data-submit]')!;
  const out = form.querySelector<HTMLElement>('[data-wynik]')!;
  const wynik = form.querySelector<HTMLInputElement>('input[name="wynik"]')!;
  let i = 0;
  const n = (k: string) => Number(c[k] || 0);
  const checked = (name: string) => form.querySelector<HTMLInputElement>(`input[name="${name}"]:checked`);

  const policz = () => {
    const miejsce = checked('miejsce')?.dataset.k ?? 'dom';
    let od = n(`montaz_${miejsce}_od`), doo = n(`montaz_${miejsce}_do`);
    const dist = Number(checked('odleglosc')?.dataset.k ?? 0);
    const dop = [0, n('doplata_sasiednie_pomieszczenie'), n('doplata_15_30_m'), n('doplata_ponad_30_m')][dist] ?? 0;
    od += dop; doo += dop * 1.5;
    if (checked('montaz')?.value === 'Na słupku') { od += n('slupek'); doo += n('slupek'); }
    if (miejsce === 'garaz') { od += n('projekt_ekspertyza'); doo += n('projekt_ekspertyza'); }
    if (checked('dojazd')?.dataset.k === 'daleko') { od += n('dojazd_ponad_30_km'); doo += n('dojazd_ponad_30_km') * 2; }
    const sel = form.querySelector<HTMLSelectElement>('select[name="urzadzenie"]')!;
    const opt = sel.selectedOptions[0];
    const u = urz.find((x) => x.id === opt?.dataset.id);
    let dev = 0;
    if (opt?.dataset.id === 'wlasna') dev = 0;
    else if (u) dev = u.cena ?? n('urzadzenie_bez_ceny');
    else dev = n('urzadzenie_bez_ceny');
    od += dev; doo += dev;
    const txt = `${zl(od)} – ${zl(doo)}`;
    out.textContent = txt;
    wynik.value = `${txt} brutto (orientacyjnie)`;
  };

  const show = (k: number) => {
    i = Math.max(0, Math.min(steps.length - 1, k));
    steps.forEach((s, n2) => (s.hidden = n2 !== i));
    bars.forEach((b, n2) => { b.toggleAttribute('data-done', n2 < i); n2 === i ? b.setAttribute('aria-current', 'step') : b.removeAttribute('aria-current'); });
    prev.hidden = i === 0;
    next.hidden = i === steps.length - 1;
    submit.hidden = i !== steps.length - 1;
    if (i === steps.length - 1) policz();
    steps[i].querySelector<HTMLElement>('legend')?.focus?.();
  };
  prev.addEventListener('click', () => show(i - 1));
  next.addEventListener('click', () => show(i + 1));
  form.addEventListener('change', policz);

  (form as any).__prefill = (o: { urzadzenie?: string; miejsce?: string; uzytek?: string; zrodlo?: string }) => {
    form.classList.remove('is-sent');
    if (o.urzadzenie) {
      const sel = form.querySelector<HTMLSelectElement>('select[name="urzadzenie"]')!;
      const opt = [...sel.options].find((x) => x.dataset.id === o.urzadzenie);
      if (opt) sel.value = opt.value;
    }
    if (o.miejsce) form.querySelector<HTMLInputElement>(`input[name="miejsce"][data-k="${o.miejsce}"]`)?.click();
    if (o.uzytek) form.querySelector<HTMLInputElement>(`input[name="uzytek"][value="${o.uzytek}"]`)?.click();
    (form.querySelector('input[name="zrodlo"]') as HTMLInputElement).value = o.zrodlo ?? location.pathname;
    show(o.urzadzenie ? 2 : 0);
  };
  (form.querySelector('input[name="zrodlo"]') as HTMLInputElement).value = location.pathname;
  show(0);
}

document.querySelectorAll<HTMLFormElement>('form[data-quote]').forEach(setup);

// Okno dialogowe
const dialog = document.querySelector<HTMLDialogElement>('[data-quote-dialog]');
if (dialog && !location.pathname.startsWith('/wycena')) {
  const form = dialog.querySelector<HTMLFormElement>('form[data-quote]')!;
  document.addEventListener('click', (e) => {
    const a = (e.target as HTMLElement).closest<HTMLElement>('a[href^="/wycena"], [data-wycena]');
    if (!a || (e as MouseEvent).metaKey || (e as MouseEvent).ctrlKey) return;
    e.preventDefault();
    const url = a instanceof HTMLAnchorElement ? new URL(a.href) : null;
    (form as any).__prefill?.({
      urzadzenie: a.dataset.wycenaUrzadzenie ?? url?.searchParams.get('urzadzenie') ?? undefined,
      miejsce: a.dataset.wycenaMiejsce ?? url?.searchParams.get('miejsce') ?? undefined,
      uzytek: a.dataset.wycenaUzytek ?? url?.searchParams.get('uzytek') ?? undefined,
    });
    dialog.showModal();
    (window as any).__lenis?.stop();
  });
  const close = () => dialog.close();
  dialog.querySelector('[data-quote-close]')?.addEventListener('click', close);
  dialog.addEventListener('click', (e) => { if (e.target === dialog) close(); });
  dialog.addEventListener('close', () => (window as any).__lenis?.start());
}

// Strona /wycena/: prefill z parametrów adresu
if (location.pathname.startsWith('/wycena')) {
  const form = document.querySelector<HTMLFormElement>('main form[data-quote]');
  const q = new URLSearchParams(location.search);
  if (form && [...q.keys()].length) (form as any).__prefill?.({ urzadzenie: q.get('urzadzenie') ?? undefined, miejsce: q.get('miejsce') ?? undefined, uzytek: q.get('uzytek') ?? undefined });
}
