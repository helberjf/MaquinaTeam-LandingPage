import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { BRAND, STATS } from '../../data/content.js';
import { handleAnchorClick } from '../../lib/scrollToSection.js';

const titleContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.25 } },
};

const titleWord = {
  hidden: { opacity: 0, y: '60%', rotateX: -45 },
  visible: {
    opacity: 1,
    y: '0%',
    rotateX: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Parallax: the media drifts slower than the content as the hero scrolls away.
  const mediaY = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-22%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden border-b border-white/10"
    >
      {/* Background media */}
      <motion.div
        style={reduceMotion ? undefined : { y: mediaY, scale: mediaScale }}
        className="absolute inset-0"
      >
        <video
          src="/videos/hero.mp4"
          poster="/images/instrutor.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-30 grayscale"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_30%),linear-gradient(180deg,rgba(0,0,0,0.5),#050505)]" />
      </motion.div>

      <motion.div
        style={reduceMotion ? undefined : { y: contentY, opacity: contentOpacity }}
        className="section-shell relative flex min-h-[100svh] flex-col items-center justify-center gap-8 py-28 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[11px] uppercase tracking-[0.34em] text-brand-gray-light"
        >
          Academia de luta premium
        </motion.p>

        <motion.h1
          variants={titleContainer}
          initial="hidden"
          animate="visible"
          className="max-w-5xl text-[clamp(3rem,12vw,7rem)] font-bold uppercase leading-[0.88] text-white"
          style={{ perspective: 800 }}
        >
          {['Máquina', 'Team'].map((word) => (
            <span
              key={word}
              className="mr-[0.22em] inline-block overflow-hidden pb-[0.08em] last:mr-0"
            >
              <motion.span variants={titleWord} className="inline-block">
                {word}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="max-w-xl text-base leading-8 text-brand-gray-light sm:text-lg"
        >
          {BRAND.slogan}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row"
        >
          <a
            href="#planos"
            onClick={(event) => handleAnchorClick(event, '#planos')}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-brand-gray-light/90 sm:w-auto"
          >
            Ver planos
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={BRAND.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white/60 hover:bg-white/5 sm:w-auto"
          >
            <FaWhatsapp className="h-4 w-4" />
            Agendar aula
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.dl
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.05 }}
          className="mt-10 grid w-full max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-4"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-brand-black/80 px-4 py-6 backdrop-blur">
              <dt className="text-[10px] uppercase tracking-[0.24em] text-brand-gray-light">
                {stat.label}
              </dt>
              <dd className="mt-2 font-heading text-xl font-bold uppercase text-white sm:text-2xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>

      <motion.a
        href="#academia"
        onClick={(event) => handleAnchorClick(event, '#academia')}
        aria-label="Rolar para a próxima seção"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-brand-gray-light transition hover:text-white"
      >
        <motion.span
          animate={reduceMotion ? undefined : { y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="block"
        >
          <ChevronDown className="h-6 w-6" />
        </motion.span>
      </motion.a>
    </section>
  );
}
