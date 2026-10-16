import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa6';
import { BRAND, SCHEDULE, SCHEDULE_DAYS } from '../../data/content.js';
import { SectionHeading } from '../ui/SectionHeading.jsx';
import { Reveal } from '../motion/Reveal.jsx';

const DAY_NAMES = {
  Seg: 'Segunda',
  Ter: 'Terça',
  Qua: 'Quarta',
  Qui: 'Quinta',
  Sex: 'Sexta',
  Sáb: 'Sábado',
};

// Uma célula pode ser só o nome da aula ou { name, promo }.
function normalize(entry) {
  if (!entry) return null;
  return typeof entry === 'string' ? { name: entry, promo: false } : entry;
}

function ClassLabel({ entry, compact = false }) {
  return (
    <span className="flex flex-col items-center gap-1">
      <span
        className={[
          'font-heading font-semibold uppercase leading-tight tracking-wide',
          compact ? 'text-[11px]' : 'text-sm',
          entry.promo ? 'text-white' : 'text-white/85',
        ].join(' ')}
      >
        {entry.name}
      </span>
      {entry.promo ? (
        <span className="rounded-full bg-white px-1.5 py-px text-[8px] font-bold uppercase tracking-[0.14em] text-black">
          Promo
        </span>
      ) : null}
    </span>
  );
}

function DesktopGrid() {
  return (
    <div className="hidden overflow-hidden rounded-4xl border border-white/10 md:block">
      <table className="w-full table-fixed border-collapse text-center">
        <thead>
          <tr className="border-b border-white/10 bg-white/[0.04]">
            <th scope="col" className="w-20 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-brand-gray-light">
              Hora
            </th>
            {SCHEDULE_DAYS.map((day) => (
              <th
                key={day}
                scope="col"
                className="py-4 font-heading text-lg font-bold uppercase tracking-wide text-white"
              >
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {SCHEDULE.map((row, rowIndex) => (
            <motion.tr
              key={row.time}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: rowIndex * 0.03 }}
              className="border-b border-white/5 last:border-b-0"
            >
              <th
                scope="row"
                className="py-3 font-heading text-base font-bold tabular-nums text-brand-gray-light"
              >
                {row.time}
              </th>
              {SCHEDULE_DAYS.map((day) => {
                const entry = normalize(row.classes[day]);
                return (
                  <td key={day} className="px-1.5 py-1.5">
                    {entry ? (
                      <div
                        className={[
                          'flex min-h-[3rem] items-center justify-center rounded-xl border px-2 py-2 transition-colors',
                          entry.promo
                            ? 'border-white/40 bg-white/[0.08]'
                            : 'border-white/10 bg-white/[0.03] hover:border-white/25',
                        ].join(' ')}
                      >
                        <ClassLabel entry={entry} compact />
                      </div>
                    ) : (
                      <div className="min-h-[3rem]" />
                    )}
                  </td>
                );
              })}
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MobileDayList() {
  const [activeDay, setActiveDay] = useState(SCHEDULE_DAYS[0]);
  const classes = SCHEDULE.map((row) => ({
    time: row.time,
    entry: normalize(row.classes[activeDay]),
  })).filter((item) => item.entry);

  return (
    <div className="md:hidden">
      <div
        role="tablist"
        aria-label="Dia da semana"
        className="grid grid-cols-6 gap-1 rounded-2xl border border-white/10 bg-white/[0.04] p-1"
      >
        {SCHEDULE_DAYS.map((day) => {
          const isActive = day === activeDay;
          return (
            <button
              key={day}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveDay(day)}
              className="relative rounded-xl py-2.5"
            >
              {isActive ? (
                <motion.span
                  layoutId="schedule-day-pill"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  className="absolute inset-0 rounded-xl bg-white"
                />
              ) : null}
              <span
                className={[
                  'relative font-heading text-sm font-bold uppercase',
                  isActive ? 'text-black' : 'text-brand-gray-light',
                ].join(' ')}
              >
                {day}
              </span>
            </button>
          );
        })}
      </div>

      <p className="mt-6 font-heading text-2xl font-bold uppercase text-white">
        {DAY_NAMES[activeDay]}
      </p>

      {/* A lista troca na hora e só anima a entrada: sem esperar a saída da
          anterior, o dia certo aparece mesmo se uma animação travar. */}
      <motion.ul
          key={activeDay}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="mt-4 flex flex-col gap-2"
        >
          {classes.map(({ time, entry }) => (
            <li
              key={time}
              className={[
                'flex items-center gap-4 rounded-2xl border px-4 py-3',
                entry.promo ? 'border-white/40 bg-white/[0.08]' : 'border-white/10 bg-white/[0.03]',
              ].join(' ')}
            >
              <span className="w-14 shrink-0 font-heading text-lg font-bold tabular-nums text-brand-gray-light">
                {time}
              </span>
              <span className="font-heading text-base font-semibold uppercase tracking-wide text-white">
                {entry.name}
              </span>
              {entry.promo ? (
                <span className="ml-auto rounded-full bg-white px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.14em] text-black">
                  Promo
                </span>
              ) : null}
            </li>
          ))}
        </motion.ul>
    </div>
  );
}

export function Schedule() {
  return (
    <section id="horarios" className="border-t border-white/10 py-24 sm:py-32">
      <div className="section-shell">
        <div data-scroll-anchor>
          <SectionHeading
            eyebrow="Horários"
            title="Horários das aulas"
            description="Turmas de segunda a sábado, com horários para quem treina cedo, no almoço ou à noite."
            align="center"
          />
        </div>

        <Reveal direction="up" delay={0.1} className="mt-12">
          <DesktopGrid />
          <MobileDayList />
        </Reveal>

        <Reveal direction="up" delay={0.1} className="mt-8">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-xs leading-6 text-brand-gray-light">
              <span className="mr-2 inline-block rounded-full bg-white px-1.5 py-px text-[8px] font-bold uppercase tracking-[0.14em] text-black align-middle">
                Promo
              </span>
              Turmas do plano Boxe promocional. Horários sujeitos a alteração.
            </p>
            <a
              href={BRAND.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition hover:border-white/60 hover:bg-white/5"
            >
              <FaWhatsapp className="h-4 w-4" />
              Agende sua aula experimental gratuita
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
