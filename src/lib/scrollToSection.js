/**
 * Rola até uma seção pelo seletor da âncora (ex.: "#planos").
 *
 * Usamos uma animação própria em vez de `scroll-behavior: smooth` /
 * `behavior: 'smooth'` porque alguns navegadores (e webviews) simplesmente
 * ignoram o scroll suave, e aí o clique no menu não faz nada.
 *
 * Retorna false quando a seção não existe, para o link seguir o caminho
 * normal do browser.
 */

// Altura do menu fixo, para a seção não ficar escondida atrás dele.
const HEADER_OFFSET = 80;

const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export function scrollToSection(href) {
  if (typeof window === 'undefined' || !href?.startsWith('#')) return false;

  const target = document.querySelector(href);
  if (!target) return false;

  const start = window.scrollY;
  const top = Math.max(
    0,
    target.getBoundingClientRect().top + start - HEADER_OFFSET,
  );
  const distance = top - start;

  const reduceMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  if (reduceMotion || Math.abs(distance) < 2) {
    window.scrollTo(0, top);
    return true;
  }

  const duration = Math.min(1000, Math.max(450, Math.abs(distance) * 0.45));
  let startTime = null;
  let finished = false;

  const step = (now) => {
    if (startTime === null) startTime = now;
    const progress = Math.min(1, (now - startTime) / duration);
    window.scrollTo(0, start + distance * easeInOutCubic(progress));
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      finished = true;
    }
  };

  requestAnimationFrame(step);

  // Rede de segurança: em aba em segundo plano (ou qualquer contexto que
  // descarte frames) o requestAnimationFrame não roda e o clique não levaria
  // a lugar nenhum. O timer garante que a seção seja alcançada de qualquer jeito.
  setTimeout(() => {
    if (!finished) window.scrollTo(0, top);
  }, duration + 120);

  return true;
}

/** Handler pronto para usar em `onClick` de um link de âncora. */
export function handleAnchorClick(event, href, onNavigate) {
  if (!scrollToSection(href)) return;

  event.preventDefault();
  onNavigate?.();
  window.history.replaceState(null, '', href);
}
