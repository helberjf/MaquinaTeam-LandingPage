import { Clock, Instagram, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { BRAND } from '../../data/content.js';
import { SectionHeading } from '../ui/SectionHeading.jsx';
import { Reveal, Stagger, StaggerItem } from '../motion/Reveal.jsx';

const CONTACT_ITEMS = [
  {
    icon: MapPin,
    label: 'Endereço',
    value: BRAND.address.full,
    href: BRAND.address.mapsUrl,
  },
  {
    icon: Clock,
    label: 'Horário',
    value: BRAND.hours.label,
  },
  {
    icon: Phone,
    label: 'Telefone',
    value: BRAND.contact.phone,
    href: `tel:+553231983704`,
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: BRAND.contact.whatsapp,
    href: BRAND.contact.whatsappUrl,
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: BRAND.contact.email,
    href: `mailto:${BRAND.contact.email}`,
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: BRAND.contact.instagram,
    href: BRAND.contact.instagramUrl,
  },
];

export function Contact() {
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
              const Icon = item.icon;
              const content = (
                <div className="flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-white/25 hover:bg-white/[0.06]">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-brand-gray-light">
                      {item.label}
                    </p>
                    <p className="mt-1 break-words text-sm leading-6 text-white">
                      {item.value}
                    </p>
                  </div>
                </div>
              );

              return (
                <StaggerItem key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block h-full"
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
              <MessageCircle className="h-4 w-4" />
              Agendar aula experimental
            </a>
          </Reveal>
        </div>

        <Reveal direction="left" delay={0.15}>
          <div className="overflow-hidden rounded-4xl border border-white/10">
            <iframe
              title="Localização da Máquina Team"
              src="https://www.google.com/maps?q=Rua%20Fonseca%20Hermes%2C%205%20-%20Centro%2C%20Juiz%20de%20Fora%20-%20MG%2C%2036013-090&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[320px] w-full grayscale contrast-125 sm:h-[480px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
