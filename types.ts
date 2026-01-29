
export interface TokenomicItem {
  name: string;
  value: number;
  color: string;
}

export interface RoadmapStep {
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'future';
  phase: string;
  imageSrc?: string;
  imageAlt?: string;
  imageSrcSecondary?: string;
  imageAltSecondary?: string;
  imageText?: React.ReactNode;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
