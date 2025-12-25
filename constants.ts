import { 
  Users, 
  BookOpen, 
  LayoutGrid, 
  Server, 
  Trophy, 
  Gamepad2, 
  Coins, 
  Quote 
} from 'lucide-react';
import { Achievement, Contributor } from './types';

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'discord-growth',
    title: '디스코드 멤버',
    value: '+59명',
    description: '2025년 신규 가입자 (총 93명 달성)',
    icon: Users,
    color: 'bg-indigo-500',
    gridSpan: 'md:col-span-2',
    image: 'https://i.postimg.cc/J44F50L5/discord.jpg',
  },
  {
    id: 'hanja-study',
    title: 'DPS 한문 학습',
    value: '101명+',
    description: '실제 수업 시간 활용 및 학습 사이트 이용',
    icon: BookOpen,
    color: 'bg-emerald-500',
    image: 'https://i.postimg.cc/44wLyG98/hanja.jpg',
  },
  {
    id: 'seat-map',
    title: '자리 배치 시스템',
    value: '2학급+',
    description: '2학년 학급들에서 실사용된 DPS 도구',
    icon: LayoutGrid,
    color: 'bg-blue-500',
    image: 'https://i.postimg.cc/VNy4pL3x/jali.jpg',
  },
  {
    id: 'dpsmc',
    title: 'DPSMC 동접자',
    value: '20명+',
    description: '서버 최고 동시 접속자 수 달성',
    icon: Server,
    color: 'bg-green-600',
    image: 'https://i.postimg.cc/pdZ8CWxz/image.png',
  },
  {
    id: 'valorant',
    title: 'VALORANT CHAMPIONS',
    value: '2회',
    description: '성공적인 대회 개최 완료',
    icon: Trophy,
    color: 'bg-rose-500',
    gridSpan: 'md:col-span-2',
    image: 'https://i.postimg.cc/wvg2x4x4/ballo.jpg',
  },
  {
    id: 'squid-game',
    title: '마인크래프트',
    value: '오징어게임',
    description: '대규모 서버 이벤트 개최',
    icon: Gamepad2,
    color: 'bg-pink-600',
    image: 'https://i.postimg.cc/d0mRfRR6/image.png',
  },
  {
    id: 'spending',
    title: '이벤트 환원',
    value: '₩200,000+',
    description: '커뮤니티를 위해 지출된 총 상금 및 비용',
    icon: Coins,
    color: 'bg-yellow-500',
    gridSpan: 'md:col-span-3',
    image: 'https://placehold.co/1280x720/1e1e2e/eab308?text=Event+Spending',
  },
];

// Placeholder avatars using DiceBear. You can replace these URLs with actual profile pictures.
export const CONTRIBUTORS: Contributor[] = [
  { name: '이강', role: 'Main Contributor', image: 'https://i.postimg.cc/W35HBcmW/image.png' },
  { name: '장지현', role: 'Contributor', image: 'https://i.postimg.cc/T3nHRDqc/joh-eunsajin.jpg' },
  { name: '장준영', role: 'Contributor', image: 'https://i.postimg.cc/7hCmjGZy/image.png' },
  { name: '신지광', role: 'Contributor', image: 'https://i.postimg.cc/2Sd2pfr4/image.png' },
  { name: '이윤슬', role: 'Contributor', image: 'https://i.postimg.cc/mg4K1jr7/image.png' },
  { name: '이윤재', role: 'Contributor', image: 'https://i.postimg.cc/P5KVpk9k/image.png' },
  { name: '제동건', role: 'Contributor', image: 'https://i.postimg.cc/d0L6hZGx/image.png' },
];

export const QUOTE = {
  text: "사업의 성공은 훈련과 절도, 고된 노력을 요한다. 그러나 이런 것들에 지레 겁먹지만 않으면 성공의 기회는 오늘도 그 어느 때 못지 않다.",
  sub: "David Rockefeller",
};