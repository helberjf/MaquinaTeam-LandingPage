import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Infinity as InfinityIcon, MessageCircle, Star, User, Users } from 'lucide-react';
import { BRAND, PLAN_GROUPS } from '../../data/content.js';
import { SectionHeading } from '../ui/SectionHeading.jsx';
import { Reveal } from '../motion/Reveal.jsx';

function FrequencyIcon({ plan, className }) {
  if (plan.isFull) return <InfinityIcon className={className} />;
  if (plan.name.startsWith('1x')) return <User className={className} />;
  return <Users className={className} />;
}

function PlanCard({ plan, group, index }) {
  const highlighted = plan.isFull;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={[
        'group relative flex h-full flex-col rounded-3xl border p-6 transition-colors duration-300',
        highlighted
          ? 'border-white/25 bg-[linear-gradient(180deg,#1f1f1f_0%,#0c0c0c_100%)] shadow-[0_24px_80px_rgba(0,0,0,0.45)]'
          : 'border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.06]',
      ].join(' ')}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className={[
            'flex h-10 w-10 items-center justify-center rounded-full border',
            highlighted
              ? 'border-white/30 bg-white text-black'
              : 'border-white/15 bg-white/5 text-white',
          ].join(' ')}
        >
          <FrequencyIcon plan={plan} className="h-4 w-4" />
        </span>

        {highlighted ? (
          <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-white">
            Ilimitado
          </span>
        ) : null}
      </div>

      <p className="mt-5 text-[10px] uppercase tracking-[0.24em] text-brand-gray-light">
        {group.label}
      </p>
      <h3 className="mt-1.5 font-heading text-2xl font-bold uppercase leading-tight text-white">
        {plan.name}
      </h3>

      <div className="mt-5 flex items-end gap-2">
        <span className="font-heading text-4xl font-bold leading-none text-white">
          {plan.price}
        </span>
        <span className="pb-1 text-xs text-brand-gray-light">/ mês</span>
      </div>
      <p className="mt-2 text-xs text-brand-gray-light">{plan.frequency}</p>

      <ul className="mt-6 flex flex-col gap-2.5 border-t border-white/10 pt-5">
        {plan.benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-2.5 text-xs leading-5 text-brand-gray-light">
            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-red" />
            {benefit}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6">
        <a
          href={BRAND.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={[
            'flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] transition',
            highlighted
              ? 'bg-white text-black hover:bg-brand-gray-light/90'
              : 'border border-white/20 text-white hover:border-white/50 hover:bg-white/5',
          ].join(' ')}
        >
          <MessageCircle className="h-3.5 w-3.5" />
          Saber mais
        </a>
      </div>
    </motion.article>
  );
}

export function Plans() {
  const [activeKey, setActiveKey] = useState(PLAN_GROUPS[1].key);
  const activeGroup = PLAN_GROUPS.find((group) => group.key === activeKey) ?? PLAN_GROUPS[0];

  return (
    <section id="planos" className="relative border-t border-white/10 py-24 sm:py-32">
      {/* Soft radial glow behind the section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.07),transparent_60%)]"
      />

      <div className="section-shell relative">
        <SectionHeading
          eyebrow="Planos"
          title="Escolha seu plano"
          description="Boxe • Muay Thai • Funcional. Escolha o período e a frequência que cabem na sua rotina."
          align="center"
        />

        {/* Period switcher */}
        <Reveal direction="up" delay={0.1} className="mt-12 flex justify-center">
          <div
            role="tablist"
            aria-label="Período do plano"
            className="flex w-full max-w-2xl flex-col gap-1.5 rounded-3xl border border-white/10 bg-white/[0.04] p-1.5 sm:flex-row"
          >
            {PLAN_GROUPS.map((group) => {
              const isActive = group.key === activeKey;
              return (
                <button
                  key={group.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveKey(group.key)}
                  className="relative flex-1 rounded-2xl px-5 py-3 text-center transition-colors"
                >
                  {isActive ? (
                    <motion.span
                      layoutId="plan-tab-pill"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-2xl bg-white"
                    />
                  ) : null}

                  <span
                    className={[
                      'relative flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors',
                      isActive ? 'text-black' : 'text-brand-gray-light hover:text-white',
                    ].join(' ')}
                  >
                    {group.label}
                    {group.badge ? (
                      <span
                        className={[
                          'inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[8px] tracking-[0.12em]',
                          isActive ? 'bg-black text-white' : 'bg-brand-red/20 text-brand-red',
                        ].join(' ')}
                      >
                        <Star className="h-2.5 w-2.5 fill-current" />
                        Top
                      </span>
                    ) : null}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Active group description */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeGroup.key}-head`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="mt-8 flex flex-col items-center gap-2 text-center"
          >
            <p className="font-heading text-xl font-bold uppercase tracking-wide text-white">
              {activeGroup.subtitle}
            </p>
            <p className="max-w-xl text-sm leading-6 text-brand-gray-light">
              {activeGroup.description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <AnimatePresence mode="wait">
            {activeGroup.plans.map((plan, index) => (
              <PlanCard
                key={`${activeGroup.key}-${plan.name}`}
                plan={plan}
                group={activeGroup}
                index={index}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Full price table */}
        <Reveal direction="up" delay={0.1} className="mt-16">
          <div className="overflow-hidden rounded-4xl border border-white/10">
            <div className="border-b border-white/10 bg-white/[0.04] px-6 py-5">
              <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-white">
                Tabela completa
              </h3>
              <p className="mt-1 text-xs text-brand-gray-light">
                Todos os valores são mensais. Pagamento por Pix ou cartão.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-white/10 text-[10px] uppercase tracking-[0.2em] text-brand-gray-light">
                    <th scope="col" className="px-6 py-4 font-medium">
                      Frequência
                    </th>
                    {PLAN_GROUPS.map((group) => (
                      <th key={group.key} scope="col" className="px-6 py-4 font-medium">
                        {group.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {PLAN_GROUPS[0].plans.map((reference, rowIndex) => (
                    <motion.tr
                      key={reference.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 0.5, delay: rowIndex * 0.08 }}
                      className={[
                        'border-b border-white/5 transition-colors hover:bg-white/[0.04]',
                        reference.isFull ? 'bg-white/[0.03]' : '',
                      ].join(' ')}
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 text-sm font-medium text-white"
                      >
                        <span className="flex items-center gap-3">
                          <FrequencyIcon
                            plan={reference}
                            className="h-4 w-4 text-brand-gray-light"
                          />
                          {reference.name}
                        </span>
                      </th>
                      {PLAN_GROUPS.map((group) => {
                        const plan = group.plans[rowIndex];
                        return (
                          <td
                            key={group.key}
                            className="px-6 py-4 font-heading text-lg font-bold text-white"
                          >
                            {plan.price}
                          </td>
                        );
                      })}
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal direction="up" delay={0.1} className="mt-12">
          <div className="flex flex-col items-center gap-5 rounded-4xl border border-white/10 bg-white/[0.03] px-6 py-10 text-center">
            <h3 className="font-heading text-3xl font-bold uppercase leading-none text-white sm:text-4xl">
              Ficou com dúvida?
            </h3>
            <p className="max-w-xl text-sm leading-7 text-brand-gray-light">
              Fale com a equipe no WhatsApp para conhecer a academia, tirar dúvidas sobre os
              planos e agendar sua aula experimental.
            </p>
            <a
              href={BRAND.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-brand-gray-light/90"
            >
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
