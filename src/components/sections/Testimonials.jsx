import { useCallback, useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { GOOGLE_RATING, REVIEWS } from '../../data/content.js';
import { SectionHeading } from '../ui/SectionHeading.jsx';
import { Reveal } from '../motion/Reveal.jsx';
import { animateScroll } from '../../lib/animateScroll.js';

// Velocidade do movimento contínuo do carrossel.
const DRIFT_PX_PER_SECOND = 35;

function Stars({ count, className = 'h-2.5 w-2.5' }) {
  return (
    <span className="flex gap-0.5" aria-label={`${count} de 5 estrelas`}>
      {Array.from({ length: count }).map((_, index) => (
        <Star key={index} className={`${className} fill-brand-gold text-brand-gold`} />
      ))}
    </span>
  );
}

// "João Augusto Freire" → "JF"; "Wanderson" → "W".
function getInitials(name) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? '';
  const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
  return (first + last).toUpperCase();
}

function ReviewCard({ review }) {
  return (
    <figure className="flex h-full w-[85vw] max-w-[400px] shrink-0 flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.06] sm:w-[400px]">
      <Quote className="h-7 w-7 shrink-0 text-white/30" />

      <blockquote className="mt-5 flex-1 text-sm leading-7 text-brand-gray-light">
        “{review.text}”
      </blockquote>

      <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 font-heading text-sm font-bold text-white">
          {getInitials(review.author)}
        </span>
        <figcaption>
          <p className="font-heading text-sm font-bold uppercase tracking-wide text-white">
            {review.author}
          </p>
          <p className="mt-0.5 flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-brand-gray-light">
            <Stars count={review.rating} />
            Google Reviews
          </p>
        </figcaption>
      </div>
    </figure>
  );
}

export function Testimonials() {
  const trackRef = useRef(null);
  const reduceMotion = useReducedMotion();
  // Pausa o movimento contínuo: mouse em cima, foco, toque ou animação da seta.
  const pausedRef = useRef(false);
  const arrowAnimatingRef = useRef(false);
  const resumeTimerRef = useRef(null);
  const [, forceRender] = useState(0);

  // A lista vai duplicada. Quando o scroll passa do fim da primeira cópia,
  // volta exatamente uma cópia para trás: como as duas são iguais, a emenda
  // não aparece e o carrossel anda para sempre.
  const getLoopWidth = useCallback(() => {
    const track = trackRef.current;
    const first = track?.children[0];
    const firstCopy = track?.children[REVIEWS.length];
    if (!first || !firstCopy) return 0;
    return firstCopy.offsetLeft - first.offsetLeft;
  }, []);

  const wrap = useCallback(
    (x) => {
      const loop = getLoopWidth();
      if (!loop) return x;
      if (x >= loop) return x - loop;
      if (x < 0) return x + loop;
      return x;
    },
    [getLoopWidth],
  );

  // Distância de um card + espaço entre cards.
  const getStep = useCallback(() => {
    const track = trackRef.current;
    const card = track?.firstElementChild;
    if (!card) return 0;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return card.getBoundingClientRect().width + gap;
  }, []);

  // Movimento contínuo, medido pelo tempo (não por frame): mesmo que o
  // navegador desenhe menos quadros, a velocidade fica a mesma.
  useEffect(() => {
    if (reduceMotion) return undefined;
    const track = trackRef.current;
    if (!track) return undefined;

    let frame = 0;
    let last = performance.now();
    let position = track.scrollLeft;

    const step = (now) => {
      const dt = Math.min(0.25, (now - last) / 1000);
      last = now;
      if (pausedRef.current || arrowAnimatingRef.current) {
        position = track.scrollLeft; // segue o que a pessoa ou a seta fizeram
      } else {
        position = wrap(position + DRIFT_PX_PER_SECOND * dt);
        track.scrollLeft = position;
      }
    };

    const onFrame = (now) => {
      step(now);
      frame = requestAnimationFrame(onFrame);
    };
    frame = requestAnimationFrame(onFrame);

    // Reserva: se o navegador parar de entregar quadros (aba em segundo plano,
    // economia de bateria), um timer mantém o carrossel andando.
    const fallback = setInterval(() => {
      const now = performance.now();
      if (now - last > 200) step(now);
    }, 100);

    return () => {
      cancelAnimationFrame(frame);
      clearInterval(fallback);
    };
  }, [reduceMotion, wrap]);

  const pause = () => {
    clearTimeout(resumeTimerRef.current);
    pausedRef.current = true;
  };
  const resume = (delay = 0) => {
    clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      pausedRef.current = false;
    }, delay);
  };

  useEffect(() => () => clearTimeout(resumeTimerRef.current), []);

  // Seta: anda um card para o lado, dando a volta sem emenda nas pontas.
  const handleArrow = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const loop = getLoopWidth();
    const step = getStep();
    let from = track.scrollLeft;

    // Antes de voltar do começo (ou avançar além da cópia), pula para a
    // posição equivalente na outra cópia; visualmente nada muda.
    if (direction < 0 && from - step < 0 && loop) from += loop;
    if (direction > 0 && from + step >= loop * 2 - track.clientWidth && loop) from -= loop;
    track.scrollLeft = from;

    arrowAnimatingRef.current = true;
    animateScroll({
      from,
      to: from + direction * step,
      apply: (x) => {
        track.scrollLeft = x;
      },
      duration: 500,
      onDone: () => {
        track.scrollLeft = wrap(track.scrollLeft);
        arrowAnimatingRef.current = false;
        forceRender((n) => n + 1);
      },
    });
  };

  return (
    <section id="depoimentos" className="border-t border-white/10 py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Depoimentos"
          title="Quem treina sente a diferença"
          description="Avaliações reais de alunos no Google."
          align="center"
        />

        <Reveal direction="up" delay={0.1} className="mt-6 flex justify-center">
          <a
            href={GOOGLE_RATING.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 transition hover:border-white/35"
          >
            <span className="font-heading text-xl font-bold text-white">{GOOGLE_RATING.score}</span>
            <Stars count={5} className="h-3.5 w-3.5" />
            <span className="text-[11px] uppercase tracking-[0.16em] text-brand-gray-light">
              {GOOGLE_RATING.count} avaliações
            </span>
            <ArrowUpRight className="h-4 w-4 text-brand-gray-light transition group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:text-white" />
          </a>
        </Reveal>
      </div>

      <Reveal direction="up" delay={0.1} className="mt-12">
        <div
          className="section-shell"
          onMouseEnter={pause}
          onMouseLeave={() => resume()}
          onFocus={pause}
          onBlur={() => resume()}
          onTouchStart={pause}
          onTouchEnd={() => resume(2500)}
        >
          <div
            ref={trackRef}
            role="region"
            aria-roledescription="carrossel"
            aria-label="Depoimentos de alunos"
            tabIndex={0}
            className="no-scrollbar -mx-4 flex gap-5 overflow-x-auto px-4 pb-2 focus:outline-none sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
          >
            {[...REVIEWS, ...REVIEWS].map((review, index) => (
              <div
                key={`${review.author}-${index}`}
                className="flex"
                aria-hidden={index >= REVIEWS.length ? 'true' : undefined}
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => handleArrow(-1)}
              aria-label="Depoimento anterior"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-white/50 hover:bg-white/5"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => handleArrow(1)}
              aria-label="Próximo depoimento"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition hover:bg-brand-gray-light/90"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          {/* Ver todas no Google / deixar uma avaliação */}
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={GOOGLE_RATING.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition hover:border-white/60 hover:bg-white/5 sm:w-auto"
            >
              <FcGoogle className="h-4 w-4" />
              Ver todas as {GOOGLE_RATING.count} avaliações
              <ArrowUpRight className="h-4 w-4 transition group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
            </a>
            <a
              href={GOOGLE_RATING.writeReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-black transition hover:bg-brand-gray-light/90 sm:w-auto"
            >
              <Star className="h-4 w-4 fill-black" />
              Avaliar no Google
            </a>
          </div>

        </div>
      </Reveal>
    </section>
  );
}
