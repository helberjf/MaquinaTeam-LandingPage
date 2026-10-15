import { useReducedMotion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { REVIEWS } from '../../data/content.js';
import { SectionHeading } from '../ui/SectionHeading.jsx';
import { Reveal, Stagger, StaggerItem } from '../motion/Reveal.jsx';

function ReviewCard({ review, fixedWidth = true }) {
  return (
    <figure
      className={[
        'flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.06]',
        fixedWidth ? 'w-[300px] shrink-0 sm:w-[400px]' : 'w-full',
      ].join(' ')}
    >
      <Quote className="h-7 w-7 shrink-0 text-white/30" />

      <blockquote className="mt-5 flex-1 whitespace-normal text-sm leading-7 text-brand-gray-light">
        “{review.text}”
      </blockquote>

      <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 font-heading text-sm font-bold text-white">
          {review.initials}
        </span>
        <figcaption>
          <p className="font-heading text-sm font-bold uppercase tracking-wide text-white">
            {review.author}
          </p>
          <p className="mt-0.5 flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-brand-gray-light">
            <span className="flex gap-0.5" aria-label={`${review.rating} de 5 estrelas`}>
              {Array.from({ length: review.rating }).map((_, index) => (
                <Star key={index} className="h-2.5 w-2.5 fill-brand-gold text-brand-gold" />
              ))}
            </span>
            Google Reviews
          </p>
        </figcaption>
      </div>
    </figure>
  );
}

export function Testimonials() {
  const reduceMotion = useReducedMotion();

  // A faixa roda em loop contínuo: a lista é duplicada e a animação desloca
  // exatamente 50%. O espaçamento vai no padding de cada item (não em `gap`),
  // senão as duas metades teriam larguras diferentes e a emenda saltaria.
  const track = [...REVIEWS, ...REVIEWS];

  return (
    <section id="depoimentos" className="border-t border-white/10 py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Depoimentos"
          title="Quem treina sente a diferença"
          description="Avaliações reais de alunos no Google."
          align="center"
        />
      </div>

      {reduceMotion ? (
        <div className="section-shell">
          <Stagger className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3" stagger={0.14}>
            {REVIEWS.map((review) => (
              <StaggerItem key={review.author} className="h-full">
                <ReviewCard review={review} fixedWidth={false} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      ) : (
        <Reveal direction="up" delay={0.1} className="group relative mt-14">
          {/* Máscaras laterais para o carrossel sumir suavemente nas bordas */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-brand-black to-transparent sm:w-32"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-brand-black to-transparent sm:w-32"
          />

          <div className="overflow-hidden">
            <ul className="flex w-max animate-marquee items-stretch group-hover:[animation-play-state:paused]">
              {track.map((review, index) => (
                <li
                  key={`${review.author}-${index}`}
                  className="flex pr-5"
                  aria-hidden={index >= REVIEWS.length ? 'true' : undefined}
                >
                  <ReviewCard review={review} />
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      )}
    </section>
  );
}
