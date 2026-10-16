import { useState } from 'react';
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { BRAND, NAV_LINKS } from '../../data/content.js';
import { handleAnchorClick } from '../../lib/scrollToSection.js';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 40);
  });

  // Fecha o menu e rola até a seção.
  const handleNavClick = (event, href) =>
    handleAnchorClick(event, href, () => setOpen(false));

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={[
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-white/10 bg-brand-black/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      ].join(' ')}
    >
      <nav className="section-shell flex h-16 items-center justify-between sm:h-[4.5rem]">
        <a
          href="#inicio"
          onClick={(event) => handleNavClick(event, '#inicio')}
          className="group flex items-center gap-3"
        >
          <img
            src="/images/logo.jpg"
            alt=""
            className="h-9 w-9 rounded-full object-cover grayscale transition group-hover:grayscale-0"
          />
          <span className="flex flex-col leading-none">
            <span className="font-heading text-lg font-bold uppercase tracking-wide text-white">
              {BRAND.name}
            </span>
            <span className="text-[9px] uppercase tracking-[0.28em] text-brand-gray-light">
              {BRAND.tagline}
            </span>
          </span>
        </a>

        {/* Com 7 links o menu só cabe a partir de 1280px; abaixo, hambúrguer. */}
        <ul className="hidden items-center gap-7 xl:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                className="relative text-xs font-medium uppercase tracking-[0.14em] text-brand-gray-light transition-colors hover:text-white after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={BRAND.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border border-white/20 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-black transition hover:bg-brand-gray-light/20 hover:text-white sm:inline-flex"
          >
            <FaWhatsapp className="h-4 w-4" />
            Fale conosco
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-white/40 xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 bg-brand-black/95 backdrop-blur-xl xl:hidden"
          >
            <ul className="section-shell flex flex-col gap-1 py-5">
              {NAV_LINKS.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index, duration: 0.3 }}
                >
                  <a
                    href={link.href}
                    onClick={(event) => handleNavClick(event, link.href)}
                    className="block rounded-xl px-3 py-3 font-heading text-xl font-semibold uppercase tracking-wide text-white transition hover:bg-white/5"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <li className="mt-3">
                <a
                  href={BRAND.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-black"
                >
                  <FaWhatsapp className="h-4 w-4" />
                  Fale conosco
                </a>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
