/**
 * Anima um scroll de `from` até `to`, chamando `apply(posição)` a cada frame.
 *
 * Usamos isso em vez de `behavior: 'smooth'` porque alguns navegadores (e
 * webviews) ignoram o scroll suave. Um timer garante a posição final mesmo se
 * os frames não rodarem (aba em segundo plano, por exemplo).
 */

const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export function animateScroll({ from, to, apply, duration, onDone }) {
  const distance = to - from;
  const reduceMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  if (reduceMotion || Math.abs(distance) < 2) {
    apply(to);
    onDone?.();
    return;
  }

  const total =
    duration ?? Math.min(1000, Math.max(450, Math.abs(distance) * 0.45));

  // O relógio começa na chamada, não no primeiro frame: se os frames
  // atrasarem, a animação não pode recomeçar do zero depois de já ter chegado.
  const startTime = performance.now();
  let finished = false;

  const step = () => {
    if (finished) return;
    const progress = Math.min(1, (performance.now() - startTime) / total);
    apply(from + distance * easeInOutCubic(progress));
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      finished = true;
      onDone?.();
    }
  };

  requestAnimationFrame(step);

  setTimeout(() => {
    if (finished) return;
    finished = true;
    apply(to);
    onDone?.();
  }, total + 120);
}
