import { animateScroll } from './animateScroll.js';

/**
 * Rola até uma seção pelo seletor da âncora (ex.: "#planos").
 *
 * Retorna false quando a seção não existe, para o link seguir o caminho
 * normal do browser.
 */

// Altura do menu fixo, para a seção não ficar escondida atrás dele.
const HEADER_OFFSET = 80;

export function scrollToSection(href) {
  if (typeof window === 'undefined' || !href?.startsWith('#')) return false;

  const section = document.querySelector(href);
  if (!section) return false;

  // Uma seção pode marcar onde o scroll deve parar (ex.: o título, pulando o
  // padding de cima). Sem marcação, para no topo da seção.
  const target = section.querySelector('[data-scroll-anchor]') ?? section;

  const start = window.scrollY;
  const top = Math.max(
    0,
    target.getBoundingClientRect().top + start - HEADER_OFFSET,
  );

  animateScroll({
    from: start,
    to: top,
    apply: (y) => window.scrollTo(0, y),
  });

  return true;
}

/** Handler pronto para usar em `onClick` de um link de âncora. */
export function handleAnchorClick(event, href, onNavigate) {
  if (!scrollToSection(href)) return;

  event.preventDefault();
  onNavigate?.();
  window.history.replaceState(null, '', href);
}
