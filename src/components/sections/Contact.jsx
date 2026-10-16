import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { BRAND } from '../../data/content.js';
import { ContactIcon } from '../ui/ContactIcon.jsx';
import { SectionHeading } from '../ui/SectionHeading.jsx';
import { Reveal, Stagger, StaggerItem } from '../motion/Reveal.jsx';

const CONTACT_ITEMS = [
  {
    type: 'address',
    label: 'Endereço',
    value: BRAND.address.full,
    href: BRAND.address.mapsUrl,
  },
  {
    type: 'hours',
    label: 'Horário',
    value: BRAND.hours.label,
  },
  {
    type: 'phone',
    label: 'Telefone',
    value: BRAND.contact.phone,
    href: `tel:+553231983704`,
  },
  {
    type: 'whatsapp',
    label: 'WhatsApp',
    value: BRAND.contact.whatsapp,
    href: BRAND.contact.whatsappUrl,
  },
  {
    type: 'email',
    label: 'E-mail',
    value: BRAND.contact.email,
    href: `mailto:${BRAND.contact.email}`,
  },
  {
    type: 'instagram',
    label: 'Instagram',
    value: BRAND.contact.instagram,
    href: BRAND.contact.instagramUrl,
  },
];

// Foto real da fachada (Muay Thai · Boxe · Funcional, (32) 3198-3704).
const FACADE_SRC = '/images/fachada-atual.webp';

export function Contact() {
  // Só mostra a foto depois de confirmar que ela carrega: assim nunca aparece
  // imagem quebrada nem o mapa muda de tamanho quando a pessoa chega aqui.
  const [showFacade, setShowFacade] = useState(false);

  useEffect(() => {
    const probe = new Image();
    probe.onload = () => setShowFacade(true);
    probe.src = FACADE_SRC;
    return () => {
      probe.onload = null;
    };
  }, []);

  return (
    <section id="contato" className="border-t border-white/10 py-24 sm:py-32">
      <div className="section-shell grid gap-14 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Contato"
            title={
              <>
                Venha conhecer
                <br />a academia
              </>
            }
            description="Estamos no centro de Juiz de Fora, todos os dias. Passe para conhecer o espaço ou fale com a equipe antes de escolher seu plano."
          />

          <Stagger className="mt-10 grid gap-3 sm:grid-cols-2" stagger={0.09}>
            {CONTACT_ITEMS.map((item) => {
              const content = (
                <div className="relative flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-white/25 hover:bg-white/[0.06]">
                  <ContactIcon type={item.type} />
                  <div className={['min-w-0', item.href ? 'pr-6' : ''].join(' ')}>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-brand-gray-light">
                      {item.label}
                    </p>
                    <p className="mt-1 break-words text-sm leading-6 text-white">
                      {item.value}
                    </p>
                  </div>

                  {/* Seta indicando que o item abre um link */}
                  {item.href ? (
                    <ArrowUpRight
                      aria-hidden="true"
                      className="absolute right-3 top-3 h-4 w-4 text-brand-gray-light transition-all duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:text-white"
                    />
                  ) : null}
                </div>
              );

              return (
                <StaggerItem key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group/link block h-full"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </StaggerItem>
              );
            })}
          </Stagger>

          <Reveal direction="up" delay={0.2} className="mt-8">
            <a
              href={BRAND.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-brand-gray-light/90 sm:w-auto"
            >
              <FaWhatsapp className="h-5 w-5" />
              Agendar aula experimental grátis
            </a>
          </Reveal>
        </div>

        <Reveal direction="left" delay={0.15} className="flex flex-col gap-4">
          {/* Foto da fachada: some sozinha se o arquivo ainda não existir */}
          {showFacade ? (
            <figure className="relative overflow-hidden rounded-4xl border border-white/10">
              <img
                src={FACADE_SRC}
                alt="Fachada da Máquina Team na Rua Fonseca Hermes, 5, no Centro de Juiz de Fora"
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-5 pb-4 pt-10 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                Nossa fachada · Rua Fonseca Hermes, 5
              </figcaption>
            </figure>
          ) : null}

          <div className="overflow-hidden rounded-4xl border border-white/10">
            <iframe
              title="Localização da Máquina Team"
              src="https://www.google.com/maps?q=Rua%20Fonseca%20Hermes%2C%205%20-%20Centro%2C%20Juiz%20de%20Fora%20-%20MG%2C%2036013-090&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={[
                'w-full grayscale contrast-125',
                showFacade ? 'h-[260px]' : 'h-[320px] sm:h-[480px]',
              ].join(' ')}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
