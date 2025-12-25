import { LucideIcon } from 'lucide-react';

export interface Achievement {
  id: string;
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
  color: string;
  gridSpan?: string; // Legacy: Tailwind class for grid span (e.g., col-span-2)
  image?: string; // Optional image URL
}

export interface Contributor {
  name: string;
  role?: string;
  image?: string;
}

export interface SectionProps {
  className?: string;
}