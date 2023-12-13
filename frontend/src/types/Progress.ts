export type Difficulty = 'easy' | 'hard';

export interface Activity {
  id?: number;
  title: string;
  reward: number;
  setting: number;
  level: number;
  difficulty: Difficulty;
  completed: boolean;
}

export interface ActivityProgress {
  id?: number;
  userId: string;
  activityId: number;
  duration: number;
  attempt: number;
  decomposition: number;
  pattern: number;
}

export interface Badge {
  id?: number;
  name: string;
  url: string;
  description: string;
}
