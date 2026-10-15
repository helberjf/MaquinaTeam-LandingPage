import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa6';
import { BRAND } from '../../data/content.js';

export function WhatsappFab() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setVisible(latest > 500);
  });

  return (
    <AnimatePresence>
      {visible ? (
        <motion.a
          href={BRAND.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-black shadow-[0_12px_40px_rgba(37,211,102,0.35)]"
        >
          <FaWhatsapp className="h-7 w-7" />
        </motion.a>
      ) : null}
    </AnimatePresence>
  );
}
