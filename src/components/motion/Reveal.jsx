import { motion, useReducedMotion } from 'framer-motion';

const OFFSETS = {
  up: { x: 0, y: 48 },
  down: { x: 0, y: -48 },
  left: { x: 48, y: 0 },
  right: { x: -48, y: 0 },
  none: { x: 0, y: 0 },
};

/**
 * Reveals its children when they scroll into view.
 * Honours prefers-reduced-motion by rendering the final state immediately.
 */
export function Reveal({
  children,
  as = 'div',
  direction = 'up',
  delay = 0,
  duration = 0.7,
  amount = 0.25,
  once = true,
  className = '',
  ...rest
}) {
  const reduceMotion = useReducedMotion();
  const offset = OFFSETS[direction] ?? OFFSETS.up;
  const MotionTag = motion[as] ?? motion.div;

  if (reduceMotion) {
    const Tag = as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

/** Parent that staggers the reveal of <StaggerItem> children. */
export function Stagger({
  children,
  className = '',
  delay = 0,
  stagger = 0.1,
  amount = 0.2,
  once = true,
  ...rest
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className={className} {...rest}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '', direction = 'up', ...rest }) {
  const reduceMotion = useReducedMotion();
  const offset = OFFSETS[direction] ?? OFFSETS.up;

  if (reduceMotion) {
    return (
      <div className={className} {...rest}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, x: offset.x, y: offset.y },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
