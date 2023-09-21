import * as Toolbox from '../blockly/toolbox/toolbox';

interface Level {
  levelNum: number;
  goalTitle: string;
  reward: number;
  toolbox: object;
  correctCode: string;
}

export const levels: Level[] = [
  {
    levelNum: 1,
    goalTitle: 'Wake up Zappy!',
    reward: 100,
    toolbox: Toolbox.levels[0],
    correctCode: '100000',
  },
  {
    levelNum: 2,
    goalTitle: 'Look left, look right.',
    reward: 50,
    toolbox: Toolbox.levels[1],
    correctCode: '200000',
  },
  {
    levelNum: 3,
    goalTitle: 'Close-open!',
    reward: 80,
    toolbox: Toolbox.levels[2],
    correctCode: '200000',
  },
  {
    levelNum: 4,
    goalTitle: 'Wink at me!',
    reward: 70,
    toolbox: Toolbox.levels[1],
    correctCode: '200000',
  },
  {
    levelNum: 5,
    goalTitle: 'Let Zappy blink.',
    reward: 80,
    toolbox: Toolbox.levels[1],
    correctCode: '200000',
  },
  {
    levelNum: 6,
    goalTitle: 'Shook head.',
    reward: 30,
    toolbox: Toolbox.levels[2],
    correctCode: '200000',
  },
];
