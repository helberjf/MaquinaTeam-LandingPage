import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { MARQUEE_WORDS } from '../../data/content.js';

export function Marquee() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // The strip slides horizontally as the page scrolls past it.
  const x = useTransform(scrollYProgress, [0, 1], ['6%', '-18%']);

  const words = [...MARQUEE_WORDS, ...MARQUEE_WORDS, ...MARQUEE_WORDS];

  return (
    <section
      ref={ref}
      aria-hidden="true"
      className="overflow-hidden border-y border-white/10 bg-brand-gray-dark/40 py-6"
    >
      <motion.div
        style={reduceMotion ? undefined : { x }}
        className="flex w-max items-center gap-10 whitespace-nowrap"
      >
        {words.map((word, index) => (
          <span key={`${word}-${index}`} className="flex items-center gap-10">
            <span className="font-heading text-3xl font-bold uppercase tracking-tight text-white/85 sm:text-4xl">
              {word}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-white/35" />
          </span>
        ))}
      </motion.div>
    </section>
  );
}
