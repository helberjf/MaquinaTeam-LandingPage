import { MODALITIES } from '../../data/content.js';
import { SectionHeading } from '../ui/SectionHeading.jsx';
import { Stagger, StaggerItem } from '../motion/Reveal.jsx';

export function Modalities() {
  return (
    <section id="modalidades" className="border-t border-white/10 py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Modalidades"
          title="Rotina completa para luta"
          description="Aulas de técnica, cardio, força e condicionamento para todos os níveis — do primeiro dia ao ringue."
          align="center"
        />

        <Stagger
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.12}
        >
          {MODALITIES.map((modality) => (
            <StaggerItem key={modality.name}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-brand-gray-dark/40">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={modality.image}
                    alt={modality.name}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale transition duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-brand-gray-light">
                    Modalidade
                  </p>
                  <h3 className="mt-2 font-heading text-2xl font-bold uppercase text-white">
                    {modality.name}
                  </h3>
                  <p className="mt-2 max-h-0 overflow-hidden text-xs leading-5 text-brand-gray-light opacity-0 transition-all duration-500 ease-out group-hover:max-h-28 group-hover:opacity-100">
                    {modality.description}
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-full w-px bg-brand-red opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
