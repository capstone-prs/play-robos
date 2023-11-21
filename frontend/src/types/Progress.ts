type LevelId = 'H1' | 'H2' | '01';

interface x {
  completed: boolean;
  time: number;
  tries: number;
}

export interface Progress {
  id: number;
  level: LevelId;
  easyLevel: x | null;
  hardLevel: x | null;
}

const firestore: Progress[] = [
  {
    id: 1,
    level: 'H1',
    easyLevel: {
      completed: true,
      time: 100,
      tries: 100,
    },
    hardLevel: null,
  },
];
