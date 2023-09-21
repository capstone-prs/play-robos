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
];
