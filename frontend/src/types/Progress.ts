export type Difficulty = 'easy' | 'hard';

export interface Activity {
  setting: number;
  id: number;
  difficulty: Difficulty;
}

export interface ActivityProgress {
  activity: Activity;
  duration: number;
  attempt: number;
  decomposition: number;
  pattern: number;
  completed: boolean;
}

export interface LocalData {
  coins: number;
  score: number;
  activityProgress: Array<ActivityProgress>;
  badgesReceived: Array<Badge>;
}

export interface Badge {
  badgeName: string;
  badgeUrl: string;
}

// type LevelId = 'H1' | 'H2' | '01';

// interface x {
//   completed: boolean;
//   time: number;
//   tries: number;
// }

// export interface Progress {
//   id: number;
//   level: LevelId;
//   easyLevel: x | null;
//   hardLevel: x | null;
// }

// const firestore: Progress[] = [
//   {
//     id: 1,
//     level: 'H1',
//     easyLevel: {
//       completed: true,
//       time: 100,
//       tries: 100,
//     },
//     hardLevel: null,
//   },
// ];
