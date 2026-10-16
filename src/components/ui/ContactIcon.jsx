import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6';

/**
 * Ícone de contato com a cor do serviço que ele representa, usado no Contato
 * e no rodapé para manter as mesmas cores nos dois lugares.
 */
const TYPES = {
  address: { icon: MapPin, color: '#EA4335' }, // pino do Google Maps
  hours: { icon: Clock, color: '#FBBC05' },
  phone: { icon: Phone, color: '#4285F4' },
  whatsapp: { icon: FaWhatsapp, color: '#25D366' },
  email: { icon: Mail, color: '#A142F4' },
  instagram: {
    icon: FaInstagram,
    gradient: 'linear-gradient(45deg, #F58529 0%, #DD2A7B 50%, #8134AF 100%)',
  },
};

export function ContactIcon({ type, size = 'md' }) {
  const { icon: Icon, color, gradient } = TYPES[type];
  const box = size === 'sm' ? 'h-7 w-7' : 'h-9 w-9';
  const glyph = size === 'sm' ? 'h-3.5 w-3.5' : 'h-4 w-4';

  return (
    <span
      aria-hidden="true"
      className={`flex ${box} shrink-0 items-center justify-center rounded-full border`}
      style={
        gradient
          ? { background: gradient, borderColor: 'transparent', color: '#fff' }
          : { background: `${color}26`, borderColor: `${color}59`, color }
      }
    >
      <Icon className={glyph} />
    </span>
  );
}
