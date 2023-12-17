export type Difficulty = 'easy' | 'hard';

export interface Activity {
  id: string;
  userId: string;
  title: string;
  reward: number;
  setting: number;
  level: number;
  difficulty: Difficulty;
  completed: boolean;
}

export type NewActivity = Omit<Activity, 'id'>;

export interface ActivityProgress {
  id: string;
  userId: string;
  activityId: string;
  duration: number;
  attempt: number;
  decomposition: number;
  pattern: number;
}

export type NewActivityProgress = Omit<ActivityProgress, 'id'>;

export interface Badge {
  id: string;
  userId: string;
  name: string;
  url: string;
  description: string;
}

export type NewBadge = Omit<Badge, 'id'>;
