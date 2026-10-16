import { motion, useReducedMotion } from 'framer-motion';
import { Infinity as InfinityIcon, Star, User, Users } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { BRAND, FULL_FEATURES, MODALITY_PLANS, PLAN_GROUPS } from '../../data/content.js';
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
        'group/row relative flex items-center gap-2.5 rounded-xl px-2.5 py-2 transition-colors duration-300',
        highlighted ? 'bg-white/[0.05]' : 'hover:bg-white/[0.04]',
      ].join(' ')}
    >
      <span
        className={[
          'flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors duration-300',
          highlighted
            ? 'border-white/30 bg-white text-black'
            : 'border-white/12 text-brand-gray-light group-hover/row:border-white/35 group-hover/row:text-white',
        ].join(' ')}
      >
        <FrequencyIcon plan={plan} className="h-3 w-3" />
      </span>

      <span
        className={[
          'shrink-0 font-heading text-base uppercase tracking-wide transition-colors duration-300',
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
          'shrink-0 font-heading text-lg font-bold tabular-nums transition-colors duration-300 sm:text-xl',
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
          <span className="flex items-center gap-2 whitespace-nowrap rounded-full bg-white px-5 py-2 font-heading text-sm font-bold uppercase tracking-[0.22em] text-black shadow-[0_10px_35px_rgba(255,255,255,0.22)]">
            <Star className="h-3.5 w-3.5 fill-black text-black" />
            {group.badge}
          </span>
        </div>
      ) : null}

      <div className={['p-5 sm:p-6', featured ? 'pt-8 sm:pt-9' : ''].join(' ')}>
        {/* Número do passo ao lado do título */}
        <div className="flex items-end gap-3">
          <span
            aria-hidden="true"
            className="font-heading text-5xl font-bold italic leading-none"
            style={{
              color: 'transparent',
              WebkitTextStroke: '1.5px rgba(255,255,255,0.22)',
            }}
          >
            {group.step}
          </span>
          <div className="min-w-0">
            <h3 className="font-heading text-3xl font-bold uppercase leading-none text-white">
              {group.title}
            </h3>
            <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-gray-light">
              {group.subtitle}
            </p>
          </div>
        </div>

        <div className="min-w-0">
          <div className="mt-4 h-px w-full bg-gradient-to-r from-white/25 via-white/10 to-transparent" />

          <motion.ul
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'visible'}
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.09, delayChildren: 0.12 } },
            }}
            className="mt-2 flex flex-col"
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

        {/* Empilhados no celular; lado a lado a partir de 1024px */}
        <div className="mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-3 lg:gap-5">

          {PLAN_GROUPS.map((group) => (
            <PlanGroupCard key={group.key} group={group} />
          ))}
        </div>

        {/* Destaques do plano FULL */}
        <Reveal direction="up" delay={0.1} className="mx-auto mt-6 max-w-6xl">
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

        {/* Planos por modalidade */}
        <div className="mx-auto mt-16 max-w-6xl">
          <Reveal direction="up">
            <p className="eyebrow text-center">Planos por modalidade</p>
            <h3 className="mt-3 text-center font-heading text-3xl font-bold uppercase leading-none text-white sm:text-4xl">
              Kids, Jiu-Jitsu, Kickboxing e mais
            </h3>
          </Reveal>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {MODALITY_PLANS.map((item) => (
              <motion.article
                key={`${item.modality}-${item.tag ?? ''}`}
                variants={{
                  hidden: { opacity: 0, y: 32 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition-colors hover:border-white/20"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-brand-gray-light">
                      Plano mensal
                    </p>
                    <h4 className="mt-1.5 font-heading text-2xl font-bold uppercase leading-tight text-white">
                      {item.modality}
                    </h4>
                  </div>
                  {item.tag ? (
                    <span className="shrink-0 rounded-full bg-white px-3 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-black">
                      {item.tag}
                    </span>
                  ) : null}
                </div>

                <ul className="mt-5 flex flex-col">
                  {item.plans.map((plan) => (
                    <li key={plan.name} className="flex items-center gap-3 py-2">
                      <FrequencyIcon plan={plan} className="h-3.5 w-3.5 shrink-0 text-brand-gray-light" />
                      <span className="shrink-0 font-heading text-base font-semibold uppercase tracking-wide text-white/90">
                        {plan.name}
                      </span>
                      <span aria-hidden="true" className="h-px flex-1 border-b border-dotted border-white/20" />
                      <span className="shrink-0 font-heading text-xl font-bold tabular-nums text-white">
                        {plan.price}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="mt-auto border-t border-white/10 pt-4 text-xs leading-5 text-brand-gray-light">
                  {item.note}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>

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
