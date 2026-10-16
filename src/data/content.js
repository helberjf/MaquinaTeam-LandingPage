export const BRAND = {
  name: 'Máquina Team',
  tagline: 'Premium Fight Club',
  slogan: 'Treino forte. Ambiente premium. Evolução real.',
  instructor: 'Professor Arthur Maquininha',
  // Informações abaixo vêm do Instagram (@maquinateam): bio e posts.
  motto: 'Nascemos de um estilo. Evoluímos para MÁQUINA.',
  founders: 'os irmãos Thalles “A Máquina” e Arthur “Maquininha”',
  yearsLabel: '16+',
  values: ['Educação', 'Disciplina', 'Seriedade', 'Respeito', 'Companheirismo'],
  audiences: ['Turmas femininas', 'Turmas kids', 'Todas as idades e níveis'],
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
  // Da grade "Horários das aulas" do Instagram: primeira turma às 7h e
  // última às 20h de segunda a sexta; sábado só às 10h.
  hours: {
    label: 'Aulas de segunda a sexta, das 7h às 20h · sábado às 10h',
    short: '07h - 20h',
  },
};

export const STATS = [
  { label: 'Modalidades', value: '5' },
  { label: 'Aulas', value: '07h - 20h' },
  { label: 'Cidade', value: 'Juiz de Fora - MG' },
  { label: 'Foco', value: 'Performance' },
];

export const MARQUEE_WORDS = [
  'Boxe',
  'Muay Thai',
  'Kickboxing',
  'Jiu-Jitsu',
  'Funcional',
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
    name: 'Kickboxing',
    description:
      'Combinações de mãos e pernas em alta intensidade, com foco em explosão e cardio.',
    image: '/images/interior.webp',
  },
  {
    name: 'Jiu-Jitsu',
    description:
      'Quedas, controle e finalizações no tatame, com evolução técnica do iniciante ao atleta.',
    // Provisória até ter uma foto de Jiu-Jitsu.
    image: '/images/instrutor.jpg',
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

/**
 * Planos por modalidade, do destaque PLANOS do Instagram.
 * Valores mensais.
 */
export const MODALITY_PLANS = [
  {
    modality: 'Boxe Kids',
    tag: 'Kids',
    plans: [{ name: '3x na Semana', price: 'R$ 150' }],
    note: 'Segunda, quarta e sexta às 10h',
  },
  {
    modality: 'Kickboxing',
    plans: [{ name: '3x na Semana', price: 'R$ 150' }],
    note: 'Segunda, quarta e sexta às 17h',
  },
  {
    modality: 'Jiu-Jitsu',
    plans: [
      { name: '3x na Semana', price: 'R$ 150' },
      { name: 'FULL (Ilimitado)', price: 'R$ 219', isFull: true },
    ],
    note: 'Turmas de segunda a sexta',
  },
  {
    modality: 'Boxe',
    tag: 'Promocional',
    plans: [{ name: '3x na Semana', price: 'R$ 175' }],
    note: 'Seg, ter e qui às 16h + sábado às 10h',
  },
];

/**
 * Grade de aulas, do destaque HORÁRIOS do Instagram.
 * `promo` marca as turmas do Boxe promocional (destacadas na arte original).
 */
export const SCHEDULE_DAYS = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
export const SCHEDULE = [
  { time: '07:00', classes: { Ter: 'Boxe Feminino', Qui: 'Boxe Feminino' } },
  { time: '08:00', classes: { Seg: 'Boxe', Ter: 'Boxe', Qua: 'Boxe', Qui: 'Boxe', Sex: 'Boxe' } },
  { time: '09:00', classes: { Seg: 'Muay Thai', Ter: 'Jiu-Jitsu Kids', Qua: 'Muay Thai', Qui: 'Jiu-Jitsu Kids', Sex: 'Muay Thai' } },
  { time: '10:00', classes: { Seg: 'Boxe Kids', Qua: 'Boxe Kids', Sex: 'Boxe Kids', Sáb: { name: 'Boxe', promo: true } } },
  { time: '12:00', classes: { Seg: 'Boxe', Ter: 'Boxe + Boxe Fem', Qua: 'Boxe', Qui: 'Boxe + Boxe Fem', Sex: 'Boxe' } },
  { time: '13:00', classes: { Seg: 'Jiu-Jitsu + Muay Thai', Ter: 'Jiu-Jitsu', Qua: 'Jiu-Jitsu + Muay Thai', Qui: 'Jiu-Jitsu', Sex: 'Jiu-Jitsu + Muay Thai' } },
  { time: '14:00', classes: { Seg: 'Boxe', Qua: 'Boxe', Sex: 'Boxe' } },
  { time: '16:00', classes: { Seg: { name: 'Boxe', promo: true }, Ter: { name: 'Boxe', promo: true }, Qui: { name: 'Boxe', promo: true } } },
  { time: '17:00', classes: { Seg: 'Kickboxing', Qua: 'Kickboxing', Sex: 'Kickboxing' } },
  { time: '18:00', classes: { Seg: 'Muay Thai', Ter: 'Muay Thai', Qua: 'Muay Thai', Qui: 'Muay Thai', Sex: 'Muay Thai' } },
  { time: '19:00', classes: { Seg: 'Boxe', Ter: 'Boxe', Qua: 'Boxe', Qui: 'Boxe', Sex: 'Boxe' } },
  { time: '20:00', classes: { Seg: 'Jiu-Jitsu', Ter: 'Jiu-Jitsu', Qua: 'Jiu-Jitsu', Qui: 'Jiu-Jitsu', Sex: 'Jiu-Jitsu' } },
];

export const FULL_FEATURES = [
  { label: 'Flexibilidade', value: 'Qualquer dia e horário' },
  { label: 'Ritmo', value: 'Treinos ilimitados' },
  { label: 'Pagamento', value: 'Pix ou cartão' },
];

export const REVIEWS = [
  // Avaliações reais do Google (5 estrelas), em trechos curtos e com o texto
  // original. Ficaram de fora as avaliações sem texto e as de nomes iguais
  // aos dos fundadores (Thalles Guimaraes e Arthur Botelho).
  {
    author: 'João Augusto Freire',
    text: 'Centro de treinamento de boxe de nível altíssimo, professor Arthur Maquininha super reconhecido, multicampeão! Recomendo de olhos fechados!',
    rating: 5,
  },
  {
    author: 'Kelyson Freitas',
    text: 'O ambiente é motivador, o treino é puxado na medida certa e o mestre Arthur é excelente.',
    rating: 5,
  },
  {
    author: 'César Nunes',
    text: 'Melhor academia de boxe! Ambiente motivador. Aprendi muito e me senti acolhido desde o primeiro dia.',
    rating: 5,
  },
  {
    author: 'Guilherme Ghedim',
    text: 'Simplesmente a melhor experiência que já tive com treinamento de boxe! A estrutura da academia é excelente.',
    rating: 5,
  },
  {
    author: 'Juan Loures',
    text: 'Melhor academia de Juiz de Fora, já passei por outras academias, mas na Máquina Team tive uma evolução excepcional',
    rating: 5,
  },
  {
    author: 'Vinicius',
    text: 'Os professores explicam bem, são pacientes com quem está começando e os treinos são bem organizados.',
    rating: 5,
  },
  {
    author: 'Rodrigo Silva',
    text: 'Mais do que uma escola de luta, uma escola de determinação, respeito e compromisso.',
    rating: 5,
  },
  {
    author: 'Matheus Corrêa',
    text: 'Lugar perfeito para quem quer iniciar a praticar boxe, e também tem muitos atletas de alto nível para quem já é experiente!',
    rating: 5,
  },
  {
    author: 'Hugo Silva',
    text: 'As aulas de boxe são intensas, mas ao mesmo tempo divertidas. Dá pra sentir a evolução a cada treino.',
    rating: 5,
  },
  {
    author: 'Carlos Condé',
    text: 'Professores top, com conhecimento de alto nível, e cuidado com aluno 👏💪',
    rating: 5,
  },
  {
    author: 'Pedro Dias',
    text: 'Ótimo espaço. Ótimo aprendizado. E ótimo ringue de luta.',
    rating: 5,
  },
  {
    author: 'Jason Todd',
    text: 'Para quem está começando e para quem está afastado do boxe, é o melhor local para aprender.',
    rating: 5,
  },
  {
    author: 'Lays Silva',
    text: 'Eu amei a recepção, amei a academia... Já fiz a minha matrícula e já estou super ansiosa 😍',
    rating: 5,
  },
  {
    author: 'Wanderson',
    text: 'A melhor da cidade só vem 🔥🚀',
    rating: 5,
  },
  {
    author: 'Ster Nascimento',
    text: 'Muito bom, super recomendo',
    rating: 5,
  },
  {
    author: 'Antoniel Sinfronio',
    text: 'Recomendo!!',
    rating: 5,
  },
];

// Links oficiais do Google a partir do Place ID da academia.
const GOOGLE_PLACE_ID = 'ChIJa4GnLV6dmAARxdy8XexxaNM';

export const GOOGLE_RATING = {
  score: '5,0',
  count: 139,
  reviewsUrl: `https://search.google.com/local/reviews?placeid=${GOOGLE_PLACE_ID}`,
  writeReviewUrl: `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`,
};

export const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Academia', href: '#academia' },
  { label: 'Modalidades', href: '#modalidades' },
  { label: 'Horários', href: '#horarios' },
  { label: 'Planos', href: '#planos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];
