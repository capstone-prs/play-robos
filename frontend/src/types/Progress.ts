export type Difficulty = 'easy' | 'hard';

export interface Activity {
  id: number;
  title: string;
  reward: number;
  setting: number;
  difficulty: Difficulty;
}

export interface ActivityProgress {
  id?: number;
  activity: Activity;
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
