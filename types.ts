
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
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
