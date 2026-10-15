import { Reveal } from '../motion/Reveal.jsx';

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  as: Tag = 'h2',
  className = '',
}) {
  const centered = align === 'center';

  return (
    <div
      className={[
        'flex flex-col gap-4',
        centered ? 'items-center text-center' : 'items-start',
        className,
      ].join(' ')}
    >
      {eyebrow ? (
        <Reveal direction="up" duration={0.5}>
          <span className="eyebrow inline-flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-white/50" />
            {eyebrow}
          </span>
        </Reveal>
      ) : null}

      <Reveal direction="up" delay={0.08}>
        <Tag className="text-4xl font-bold uppercase leading-[0.95] text-white sm:text-5xl lg:text-6xl">
          {title}
        </Tag>
      </Reveal>

      {description ? (
        <Reveal direction="up" delay={0.16}>
          <p
            className={[
              'text-sm leading-7 text-brand-gray-light sm:text-base',
              centered ? 'mx-auto max-w-2xl' : 'max-w-2xl',
            ].join(' ')}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
