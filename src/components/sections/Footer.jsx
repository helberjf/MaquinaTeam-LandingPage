import { BRAND, NAV_LINKS, MODALITIES } from '../../data/content.js';
import { ContactIcon } from '../ui/ContactIcon.jsx';
import { handleAnchorClick } from '../../lib/scrollToSection.js';
import { Reveal } from '../motion/Reveal.jsx';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-gray-dark/30">
      <div className="section-shell py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <Reveal direction="up">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.jpg"
                alt=""
                className="h-11 w-11 rounded-full object-cover grayscale"
              />
              <div className="leading-none">
                <p className="font-heading text-xl font-bold uppercase tracking-wide text-white">
                  {BRAND.name}
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-brand-gray-light">
                  {BRAND.tagline}
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-sm text-sm leading-7 text-brand-gray-light">
              {BRAND.slogan} Estrutura focada em técnica, condicionamento e uma experiência
              premium em preto e branco.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {MODALITIES.map((modality) => (
                <span
                  key={modality.name}
                  className="rounded-full border border-white/15 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-brand-gray-light"
                >
                  {modality.name}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <p className="eyebrow">Navegação</p>
            <ul className="mt-5 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(event) => handleAnchorClick(event, link.href)}
                    className="text-sm text-brand-gray-light transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <p className="eyebrow">Contato</p>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-brand-gray-light">
              <li>
                <a
                  href={BRAND.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 transition hover:text-white"
                >
                  <ContactIcon type="address" size="sm" />
                  {BRAND.address.full}
                </a>
              </li>
              <li>
                <a
                  href="tel:+553231983704"
                  className="flex items-center gap-2.5 transition hover:text-white"
                >
                  <ContactIcon type="phone" size="sm" />
                  {BRAND.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={BRAND.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 transition hover:text-white"
                >
                  <ContactIcon type="whatsapp" size="sm" />
                  {BRAND.contact.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.contact.email}`}
                  className="flex items-center gap-2.5 break-all transition hover:text-white"
                >
                  <ContactIcon type="email" size="sm" />
                  {BRAND.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={BRAND.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 transition hover:text-white"
                >
                  <ContactIcon type="instagram" size="sm" />
                  {BRAND.contact.instagram}
                </a>
              </li>
            </ul>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-7 text-xs text-brand-gray-light sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {BRAND.name}. Todos os direitos reservados.
          </p>
          <p>{BRAND.hours.label}</p>
        </div>
      </div>
    </footer>
  );
}
