export const BRAND = {
  name: 'Máquina Team',
  tagline: 'Premium Fight Club',
  slogan: 'Treino forte. Ambiente premium. Evolução real.',
  instructor: 'Professor Arthur Maquininha',
  // Da bio do Instagram (@maquinateam).
  motto: 'Nascemos de um estilo. Evoluímos para MÁQUINA.',
  highlights: [
    'Treinos técnicos para iniciantes e atletas',
    'Rotina forte de condicionamento para luta',
    'Acompanhamento com professor experiente',
    'Espaço focado em resultado, disciplina e constância',
  ],
  contact: {
    phone: '(32) 3198-3704',
    // Mesmo número do link da bio do Instagram (wa.me/553231983704).
    whatsapp: '(32) 3198-3704',
    email: 'Maquinateam.adm@gmail.com',
    instagram: '@maquinateam',
    instagramUrl: 'https://instagram.com/maquinateam',
    whatsappUrl:
      'https://wa.me/553231983704?text=Ol%C3%A1!+Gostaria+de+saber+mais+sobre+os+planos+da+M%C3%A1quina+Team.',
  },
  address: {
    street: 'Rua Fonseca Hermes, 5 - Centro',
    city: 'Juiz de Fora - MG',
    cep: '36013-090',
    full: 'Rua Fonseca Hermes, 5 - Centro, Juiz de Fora - MG, 36013-090',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Rua+Fonseca+Hermes,+5+-+Centro,+Juiz+de+Fora+-+MG,+36013-090',
  },
  hours: {
    label: 'Segunda a domingo: 08:00 às 22:00',
    short: '08h - 22h',
  },
};

export const STATS = [
  { label: 'Modalidades', value: '3' },
  { label: 'Horário', value: '08h - 22h' },
  { label: 'Cidade', value: 'Juiz de Fora - MG' },
  { label: 'Foco', value: 'Performance' },
];

export const MARQUEE_WORDS = [
  'Boxe',
  'Muay Thai',
  'Funcional',
  'Performance',
  'Disciplina',
];

export const MODALITIES = [
  {
    name: 'Boxe',
    description:
      'Base técnica, footwork e sparring supervisionado. Do primeiro jab ao ritmo de competição.',
    image: '/images/instrutor.jpg',
  },
  {
    name: 'Muay Thai',
    description:
      'Clinch, joelhos e chutes com progressão técnica para todos os níveis de condicionamento.',
    image: '/images/mulher_lutando.jpg',
  },
  {
    name: 'Funcional',
    description:
      'Força, mobilidade e condicionamento específico para sustentar a rotina de luta.',
    image: '/images/interior.webp',
  },
];

/**
 * Tabela oficial "Escolha seu plano".
 * Cada período traz as frequências 1x, 2x, 3x e FULL (ilimitado).
 */
export const PLAN_GROUPS = [
  {
    key: 'mensal',
    label: 'Mensal',
    step: '1',
    title: 'Mensal',
    subtitle: 'Sem fidelidade — cancele quando quiser',
    description:
      'A porta de entrada. Comece no seu ritmo, sem compromisso de permanência.',
    plans: [
      {
        name: '1x na Semana',
        price: 'R$ 155',
        frequency: '1 treino por semana',
        benefits: ['1 treino por semana', 'Todas as modalidades', 'Sem fidelidade'],
      },
      {
        name: '2x na Semana',
        price: 'R$ 179',
        frequency: '2 treinos por semana',
        benefits: ['2 treinos por semana', 'Todas as modalidades', 'Sem fidelidade'],
      },
      {
        name: '3x na Semana',
        price: 'R$ 199',
        frequency: '3 treinos por semana',
        benefits: ['3 treinos por semana', 'Todas as modalidades', 'Sem fidelidade'],
      },
      {
        name: 'FULL (Ilimitado)',
        price: 'R$ 219',
        frequency: 'Treinos ilimitados',
        benefits: ['Treinos ilimitados', 'Qualquer dia e horário', 'Sem fidelidade'],
        isFull: true,
      },
    ],
  },
  {
    key: 'trimestral',
    label: 'Trimestral',
    step: '2',
    title: 'Trimestral',
    subtitle: '+ Economia — compromisso de 3 meses',
    description:
      'O equilíbrio entre preço e constância. O plano mais escolhido pelos alunos.',
    badge: 'Mais vendido',
    plans: [
      {
        name: '1x na Semana',
        price: 'R$ 145',
        frequency: '1 treino por semana',
        benefits: ['1 treino por semana', 'Todas as modalidades', '3 meses de plano'],
      },
      {
        name: '2x na Semana',
        price: 'R$ 169',
        frequency: '2 treinos por semana',
        benefits: ['2 treinos por semana', 'Todas as modalidades', '3 meses de plano'],
      },
      {
        name: '3x na Semana',
        price: 'R$ 189',
        frequency: '3 treinos por semana',
        benefits: ['3 treinos por semana', 'Todas as modalidades', '3 meses de plano'],
      },
      {
        name: 'FULL (Ilimitado)',
        price: 'R$ 209',
        frequency: 'Treinos ilimitados',
        benefits: ['Treinos ilimitados', 'Qualquer dia e horário', '3 meses de plano'],
        isFull: true,
      },
    ],
  },
  {
    key: 'semestral',
    label: 'Semestral',
    step: '3',
    title: 'Semestral',
    subtitle: '+ Economia — compromisso de 6 meses',
    description:
      'O melhor valor por treino. Para quem já decidiu que isso virou rotina.',
    plans: [
      {
        name: '1x na Semana',
        price: 'R$ 135',
        frequency: '1 treino por semana',
        benefits: ['1 treino por semana', 'Todas as modalidades', '6 meses de plano'],
      },
      {
        name: '2x na Semana',
        price: 'R$ 159',
        frequency: '2 treinos por semana',
        benefits: ['2 treinos por semana', 'Todas as modalidades', '6 meses de plano'],
      },
      {
        name: '3x na Semana',
        price: 'R$ 175',
        frequency: '3 treinos por semana',
        benefits: ['3 treinos por semana', 'Todas as modalidades', '6 meses de plano'],
      },
      {
        name: 'FULL (Ilimitado)',
        price: 'R$ 199',
        frequency: 'Treinos ilimitados',
        benefits: ['Treinos ilimitados', 'Qualquer dia e horário', '6 meses de plano'],
        isFull: true,
      },
    ],
  },
];

export const FULL_FEATURES = [
  { label: 'Flexibilidade', value: 'Qualquer dia e horário' },
  { label: 'Ritmo', value: 'Treinos ilimitados' },
  { label: 'Pagamento', value: 'Pix ou cartão' },
];

export const REVIEWS = [
  {
    author: 'João Augusto Freire',
    initials: 'JA',
    text: 'Centro de treinamento de boxe de nível altíssimo, professor Arthur Maquininha super reconhecido, multicampeão! Excelente! Recomendo de olhos fechados!',
    rating: 5,
  },
  {
    author: 'César Nunes',
    initials: 'CN',
    text: 'Melhor academia de boxe! Ambiente motivador. Aprendi muito e me senti acolhido desde o primeiro dia. Recomendo demais!',
    rating: 5,
  },
  {
    author: 'Matheus Corrêa',
    initials: 'MC',
    text: 'Lugar perfeito para quem quer iniciar a praticar boxe, e também tem muitos atletas de alto nível para quem já é experiente! Recomendo muito.',
    rating: 5,
  },
];

export const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Academia', href: '#academia' },
  { label: 'Modalidades', href: '#modalidades' },
  { label: 'Planos', href: '#planos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];
