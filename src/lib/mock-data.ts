// Mock data para Full Trail Pro

export interface Trail {
  id: string;
  name: string;
  location: string;
  distance: number;
  difficulty: 'Fácil' | 'Moderada' | 'Difícil' | 'Extrema';
  duration: string;
  elevation: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  coordinates: { lat: number; lng: number };
}

export interface UserStats {
  totalDistance: number;
  totalTrails: number;
  totalTime: string;
  streak: number;
  level: number;
  xp: number;
  nextLevelXp: number;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: string;
}

export interface CommunityPost {
  id: string;
  author: string;
  avatar: string;
  trail: string;
  content: string;
  image: string;
  likes: number;
  comments: number;
  timestamp: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  participants: number;
  maxParticipants: number;
  difficulty: string;
  distance: number;
  image: string;
}

export const mockTrails: Trail[] = [
  {
    id: '1',
    name: 'Trilha do Pico da Neblina',
    location: 'Amazonas, Brasil',
    distance: 18.5,
    difficulty: 'Extrema',
    duration: '8-10h',
    elevation: 2995,
    rating: 4.9,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop',
    description: 'A trilha mais desafiadora do Brasil, levando ao ponto mais alto do país.',
    coordinates: { lat: -0.7042, lng: -66.0011 }
  },
  {
    id: '2',
    name: 'Caminho do Ouro',
    location: 'Paraty, RJ',
    distance: 12.3,
    difficulty: 'Moderada',
    duration: '5-6h',
    elevation: 450,
    rating: 4.7,
    reviews: 567,
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop',
    description: 'Trilha histórica com calçamento de pedras do período colonial.',
    coordinates: { lat: -23.2237, lng: -44.7153 }
  },
  {
    id: '3',
    name: 'Travessia Petrópolis-Teresópolis',
    location: 'Rio de Janeiro, RJ',
    distance: 30.0,
    difficulty: 'Difícil',
    duration: '2-3 dias',
    elevation: 2366,
    rating: 4.8,
    reviews: 892,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    description: 'Uma das travessias mais famosas do Brasil, atravessando o Parque Nacional da Serra dos Órgãos.',
    coordinates: { lat: -22.5051, lng: -43.1779 }
  },
  {
    id: '4',
    name: 'Trilha da Cachoeira do Tabuleiro',
    location: 'Conceição do Mato Dentro, MG',
    distance: 6.8,
    difficulty: 'Fácil',
    duration: '3-4h',
    elevation: 280,
    rating: 4.6,
    reviews: 423,
    image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=600&fit=crop',
    description: 'Trilha leve que leva à terceira maior cachoeira do Brasil.',
    coordinates: { lat: -19.0278, lng: -43.4264 }
  }
];

export const mockUserStats: UserStats = {
  totalDistance: 247.8,
  totalTrails: 23,
  totalTime: '156h 32min',
  streak: 12,
  level: 8,
  xp: 3450,
  nextLevelXp: 4000
};

export const mockBadges: Badge[] = [
  {
    id: '1',
    name: 'Primeiro Passo',
    description: 'Complete sua primeira trilha',
    icon: '🥾',
    unlocked: true,
    unlockedAt: '2024-01-15'
  },
  {
    id: '2',
    name: 'Maratonista',
    description: 'Complete 10 trilhas',
    icon: '🏃',
    unlocked: true,
    unlockedAt: '2024-02-20'
  },
  {
    id: '3',
    name: 'Explorador',
    description: 'Percorra 100km em trilhas',
    icon: '🗺️',
    unlocked: true,
    unlockedAt: '2024-03-10'
  },
  {
    id: '4',
    name: 'Montanhista',
    description: 'Alcance 5000m de elevação acumulada',
    icon: '⛰️',
    unlocked: false
  },
  {
    id: '5',
    name: 'Dedicado',
    description: 'Mantenha uma sequência de 30 dias',
    icon: '🔥',
    unlocked: false
  },
  {
    id: '6',
    name: 'Lendário',
    description: 'Complete 50 trilhas',
    icon: '👑',
    unlocked: false
  }
];

export const mockCommunityPosts: CommunityPost[] = [
  {
    id: '1',
    author: 'Carlos Silva',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos',
    trail: 'Trilha do Pico da Neblina',
    content: 'Que experiência incrível! A vista lá de cima é indescritível. Recomendo muito, mas preparem-se fisicamente!',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=400&fit=crop',
    likes: 89,
    comments: 12,
    timestamp: '2h atrás'
  },
  {
    id: '2',
    author: 'Marina Costa',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marina',
    trail: 'Caminho do Ouro',
    content: 'Trilha histórica maravilhosa! O calçamento de pedras é impressionante. Levem água e protetor solar!',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=400&fit=crop',
    likes: 124,
    comments: 18,
    timestamp: '5h atrás'
  },
  {
    id: '3',
    author: 'Rafael Mendes',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rafael',
    trail: 'Travessia Petrópolis-Teresópolis',
    content: 'Finalizei a travessia hoje! 3 dias de pura aventura. A Pedra do Sino é espetacular! 🏔️',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    likes: 203,
    comments: 34,
    timestamp: '1 dia atrás'
  }
];

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Trail Running - Serra da Mantiqueira',
    date: '2024-05-15',
    location: 'Campos do Jordão, SP',
    participants: 45,
    maxParticipants: 60,
    difficulty: 'Moderada',
    distance: 21.0,
    image: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=600&h=400&fit=crop'
  },
  {
    id: '2',
    title: 'Encontro de Trilheiros - Chapada Diamantina',
    date: '2024-06-20',
    location: 'Lençóis, BA',
    participants: 78,
    maxParticipants: 100,
    difficulty: 'Difícil',
    distance: 35.0,
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop'
  },
  {
    id: '3',
    title: 'Caminhada Noturna - Floresta da Tijuca',
    date: '2024-05-08',
    location: 'Rio de Janeiro, RJ',
    participants: 23,
    maxParticipants: 30,
    difficulty: 'Fácil',
    distance: 8.5,
    image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=600&h=400&fit=crop'
  },
  {
    id: '4',
    title: 'Desafio Ultra Trail - Costa Verde',
    date: '2024-07-10',
    location: 'Paraty, RJ',
    participants: 12,
    maxParticipants: 40,
    difficulty: 'Extrema',
    distance: 50.0,
    image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=600&h=400&fit=crop'
  }
];
