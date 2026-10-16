import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Check } from 'lucide-react';
import { BRAND } from '../../data/content.js';
import { SectionHeading } from '../ui/SectionHeading.jsx';
import { Reveal, Stagger, StaggerItem } from '../motion/Reveal.jsx';
import { useMediaQuery } from '../../hooks/useMediaQuery.js';

export function About() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  // O parallax só roda com as colunas lado a lado. Empilhado, a foto fica logo
  // abaixo da lista e o deslocamento para cima invadia o último card.
  const isTwoColumns = useMediaQuery('(min-width: 1024px)');
  const parallax = !reduceMotion && isTwoColumns;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Images drift at different speeds for depth.
  const frontY = useTransform(scrollYProgress, [0, 1], ['12%', '-12%']);
  const backY = useTransform(scrollYProgress, [0, 1], ['-8%', '10%']);

  return (
    <section id="academia" className="relative py-24 sm:py-32">
      <div className="section-shell grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        {/* Media column */}
        <div ref={ref} className="relative order-2 lg:order-1">
          <motion.div
            style={parallax ? { y: backY } : undefined}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-4xl border border-white/10"
          >
            <img
              src="/images/interior.webp"
              alt="Interior da academia Máquina Team"
              loading="lazy"
              className="h-full w-full object-cover grayscale transition duration-700 hover:grayscale-0"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            style={parallax ? { y: frontY } : undefined}
            className="absolute -bottom-10 right-3 w-[46%] overflow-hidden rounded-3xl border border-white/15 shadow-[0_30px_80px_rgba(0,0,0,0.6)] sm:w-[42%] lg:-right-6"
          >
            <img
              src="/images/instrutor.jpg"
              alt={BRAND.instructor}
              loading="lazy"
              className="aspect-[3/4] w-full object-cover grayscale"
            />
          </motion.div>

          <Reveal
            direction="left"
            delay={0.2}
            className="absolute left-3 top-6 rounded-2xl border border-white/15 bg-brand-black/90 px-5 py-4 backdrop-blur lg:-left-6"
          >
            <p className="font-heading text-3xl font-bold leading-none text-white">
              {new Date().getFullYear() - BRAND.foundedYear}+
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-brand-gray-light">
              Anos de academia
            </p>
          </Reveal>
        </div>

        {/* Text column */}
        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="A academia"
            title={
              <>
                Estrutura feita
                <br />
                para quem treina
              </>
            }
            description={`Desde ${BRAND.foundedYear}, a Máquina Team é um centro de treinamento de luta em Juiz de Fora. Técnica, condicionamento e um ambiente premium em preto e branco — com o acompanhamento direto do ${BRAND.instructor}.`}
          />

          <Stagger className="mt-10 flex flex-col gap-4" stagger={0.12}>
            {BRAND.highlights.map((highlight) => (
              <StaggerItem
                key={highlight}
                direction="right"
                className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-4 transition hover:border-white/20 hover:bg-white/[0.06]"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <p className="text-sm leading-6 text-brand-gray-light">{highlight}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
