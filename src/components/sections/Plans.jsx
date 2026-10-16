import { motion, useReducedMotion } from 'framer-motion';
import { Infinity as InfinityIcon, Star, User, Users } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { BRAND, FULL_FEATURES, PLAN_GROUPS } from '../../data/content.js';
import { SectionHeading } from '../ui/SectionHeading.jsx';
import { Reveal } from '../motion/Reveal.jsx';

function FrequencyIcon({ plan, className }) {
  if (plan.isFull) return <InfinityIcon className={className} />;
  if (plan.name.startsWith('1x')) return <User className={className} />;
  return <Users className={className} />;
}

const rowVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

function PriceRow({ plan }) {
  const highlighted = plan.isFull;

  return (
    <motion.li
      variants={rowVariants}
      className={[
        'group/row relative flex items-center gap-3 rounded-xl px-3 py-3 transition-colors duration-300 sm:gap-4 sm:px-4',
        highlighted ? 'bg-white/[0.05]' : 'hover:bg-white/[0.04]',
      ].join(' ')}
    >
      <span
        className={[
          'flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-300',
          highlighted
            ? 'border-white/30 bg-white text-black'
            : 'border-white/12 text-brand-gray-light group-hover/row:border-white/35 group-hover/row:text-white',
        ].join(' ')}
      >
        <FrequencyIcon plan={plan} className="h-3.5 w-3.5" />
      </span>

      <span
        className={[
          'shrink-0 font-heading text-lg uppercase tracking-wide transition-colors duration-300 sm:text-xl',
          highlighted ? 'font-bold text-white' : 'font-semibold text-white/85 group-hover/row:text-white',
        ].join(' ')}
      >
        {plan.name}
      </span>

      {/* Linha pontilhada que liga o nome ao preço */}
      <span
        aria-hidden="true"
        className="mx-1 hidden h-px flex-1 border-b border-dotted border-white/20 transition-colors duration-300 group-hover/row:border-white/40 sm:block"
      />
      <span aria-hidden="true" className="flex-1 sm:hidden" />

      <span
        className={[
          'shrink-0 font-heading text-xl font-bold tabular-nums transition-colors duration-300 sm:text-2xl',
          highlighted ? 'text-white' : 'text-white/90 group-hover/row:text-white',
        ].join(' ')}
      >
        {plan.price}
      </span>
    </motion.li>
  );
}

function PlanGroupCard({ group }) {
  const reduceMotion = useReducedMotion();
  const featured = Boolean(group.badge);

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 48 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={[
        'relative rounded-4xl border transition-colors duration-500',
        featured
          ? 'border-white/35 bg-[linear-gradient(180deg,#1d1d1d_0%,#0b0b0b_100%)] shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_24px_90px_rgba(0,0,0,0.65)]'
          : 'border-white/10 bg-white/[0.025] hover:border-white/20',
      ].join(' ')}
    >
      {/* Selo "mais vendido" encaixado na borda superior */}
      {featured ? (
        <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
          <span className="flex items-center gap-2.5 whitespace-nowrap rounded-full bg-white px-7 py-3 font-heading text-base font-bold uppercase tracking-[0.24em] text-black shadow-[0_12px_45px_rgba(255,255,255,0.25)] sm:text-lg">
            <Star className="h-4 w-4 fill-black text-black sm:h-[18px] sm:w-[18px]" />
            {group.badge}
          </span>
        </div>
      ) : null}

      <div
        className={[
          'grid gap-5 p-6 sm:grid-cols-[auto_1fr] sm:gap-8 sm:p-8 lg:p-10',
          featured ? 'pt-12 sm:pt-14 lg:pt-14' : '',
        ].join(' ')}
      >
        {/* Número do passo */}
        <div className="flex items-start sm:pt-1">
          <span
            aria-hidden="true"
            className="font-heading text-6xl font-bold italic leading-none sm:text-7xl lg:text-8xl"
            style={{
              color: 'transparent',
              WebkitTextStroke: '1.5px rgba(255,255,255,0.22)',
            }}
          >
            {group.step}
          </span>
        </div>

        <div className="min-w-0">
          <h3 className="font-heading text-4xl font-bold uppercase leading-none text-white sm:text-5xl">
            {group.title}
          </h3>
          <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-gray-light">
            {group.subtitle}
          </p>

          <div className="mt-5 h-px w-full bg-gradient-to-r from-white/25 via-white/10 to-transparent" />

          <motion.ul
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'visible'}
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.09, delayChildren: 0.12 } },
            }}
            className="mt-3 flex flex-col"
          >
            {group.plans.map((plan) => (
              <PriceRow key={plan.name} plan={plan} />
            ))}
          </motion.ul>
        </div>
      </div>
    </motion.article>
  );
}

export function Plans() {
  return (
    <section id="planos" className="relative border-t border-white/10 py-24 sm:py-32">
      {/* Brilho suave atrás da seção */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.07),transparent_60%)]"
      />

      <div className="section-shell relative">
        {/* "Ver planos" para aqui: título logo abaixo do menu e o Mensal inteiro na tela */}
        <div data-scroll-anchor>
          <SectionHeading
            eyebrow="Planos"
            title="Escolha seu plano"
            description="Boxe • Muay Thai • Funcional. Todos os valores são mensais, com acesso a todas as modalidades."
            align="center"
          />
        </div>

        <div className="mx-auto mt-16 flex max-w-4xl flex-col gap-10">
          {PLAN_GROUPS.map((group) => (
            <PlanGroupCard key={group.key} group={group} />
          ))}
        </div>

        {/* Destaques do plano FULL */}
        <Reveal direction="up" delay={0.1} className="mx-auto mt-6 max-w-4xl">
          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-3">
            {FULL_FEATURES.map((feature) => (
              <div key={feature.label} className="bg-brand-black px-5 py-5">
                <p className="text-[10px] uppercase tracking-[0.22em] text-brand-gray-light">
                  {feature.label}
                </p>
                <p className="mt-2 font-heading text-lg font-bold uppercase text-white">
                  {feature.value}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal direction="up" delay={0.1} className="mx-auto mt-12 max-w-4xl">
          <div className="flex flex-col items-center gap-5 rounded-4xl border border-white/10 bg-white/[0.03] px-6 py-10 text-center">
            <h3 className="font-heading text-3xl font-bold uppercase leading-none text-white sm:text-4xl">
              Ficou com dúvida?
            </h3>
            <p className="max-w-xl text-sm leading-7 text-brand-gray-light">
              Fale com a equipe no WhatsApp para conhecer a academia, tirar dúvidas sobre os
              planos e agendar sua aula experimental gratuita.
            </p>
            <a
              href={BRAND.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-brand-gray-light/90"
            >
              <FaWhatsapp className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
