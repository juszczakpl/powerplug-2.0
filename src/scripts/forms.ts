// Formularze AJAX: honeypot + czas wypełnienia, wysyłka fetch (JSON), komunikat w miejscu formularza.
// Bez JS formularz działa klasycznie (303 → /dziekujemy/).
const t0 = Date.now();
document.querySelectorAll<HTMLFormElement>('form[data-ajax]').forEach((form) => {
  const start = document.createElement('input');
  start.type = 'hidden'; start.name = '_start'; start.value = String(t0);
  form.append(start);
  const status = form.querySelector<HTMLElement>('.form__status');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const btn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    btn?.setAttribute('aria-disabled', 'true');
    if (status) { status.className = 'form__status'; status.textContent = 'Wysyłanie…'; }
    try {
      const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      const data = await res.json().catch(() => ({ ok: false, komunikat: 'Nie udało się wysłać. Zadzwoń: +48 730 882 967.' }));
      if (data.ok) {
        form.classList.add('is-sent');
        if (status) { status.className = 'form__status notice'; status.textContent = data.komunikat; }
        form.dispatchEvent(new CustomEvent('form:sent', { bubbles: true }));
        (window as any).dataLayer?.push({ event: 'generate_lead', formularz: (form.elements.namedItem('formularz') as HTMLInputElement)?.value });
      } else if (status) { status.className = 'form__status notice notice--error'; status.textContent = data.komunikat; }
    } catch {
      if (status) { status.className = 'form__status notice notice--error'; status.textContent = 'Brak połączenia. Zadzwoń: +48 730 882 967.'; }
    } finally { btn?.removeAttribute('aria-disabled'); }
  });
});
