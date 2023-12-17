export type Difficulty = 'easy' | 'hard';

export interface Activity {
  id?: number;
  userId: string;
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
  userId: string;
  name: string;
  url: string;
  description: string;
}

export interface ScoreSheet {
  activity: string;
  difficulty: Difficulty;
  duration: number;
  attempt: number;
  decomposition: number;
  pattern: number;
}

export interface AccuracyAndEfficiency {
  accuracy: number;
  efficiency: number;
}
