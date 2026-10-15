import { Quote, Star } from 'lucide-react';
import { REVIEWS } from '../../data/content.js';
import { SectionHeading } from '../ui/SectionHeading.jsx';
import { Stagger, StaggerItem } from '../motion/Reveal.jsx';

export function Testimonials() {
  return (
    <section id="depoimentos" className="border-t border-white/10 py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Depoimentos"
          title="Quem treina sente a diferença"
          description="Avaliações reais de alunos no Google."
          align="center"
        />

        <Stagger
          className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3"
          stagger={0.14}
        >
          {REVIEWS.map((review) => (
            <StaggerItem key={review.author}>
              <figure className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-white/25 hover:bg-white/[0.06]">
                <Quote className="h-7 w-7 text-brand-red" />

                <blockquote className="mt-5 flex-1 text-sm leading-7 text-brand-gray-light">
                  “{review.text}”
                </blockquote>

                <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 font-heading text-sm font-bold text-white">
                    {review.initials}
                  </span>
                  <figcaption>
                    <p className="font-heading text-sm font-bold uppercase tracking-wide text-white">
                      {review.author}
                    </p>
                    <p className="mt-0.5 flex items-center gap-1 text-[10px] uppercase tracking-[0.18em] text-brand-gray-light">
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
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
