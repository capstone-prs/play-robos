import { GeneratorCode } from '../../types/robotParts';

export interface Level {
  levelNum: number;
  goalTitle: string;
  reward: number;
  correctCode: Array<GeneratorCode>;
}

export interface Setting {
  SettingName: string;
  SettingImage: string;
  SettingBg: string;
  Levels: Array<Level>;
}

export const settings_5_7 = [
  {
    SettingName: 'Lone Home',
    SettingImage: '/lone-home-setting.svg',
    SettingBg: '/bgs/lone-home.svg',
    Levels: [
      {
        levelNum: 1,
        goalTitle: 'Top of the morning!',
        reward: 100,
        correctCode: [{ eyes: '0' }],
      },
      {
        levelNum: 2,
        goalTitle: 'Blink your worries away',
        reward: 80,
        correctCode: [
          { eyes: 'i' },
          { eyes: '0' },
          { eyes: 'i' },
          { eyes: '0' },
        ],
      },
      {
        levelNum: 3,
        goalTitle: 'Where are you?',
        reward: 80,
        correctCode: [{ eyes: 'b' }, { eyes: 'c' }],
      },
      {
        levelNum: 4,
        goalTitle: 'Do you hear anything?',
        reward: 80,
        correctCode: [{ eyes: 'e' }, { eyes: 'f' }],
      },
      {
        levelNum: 5,
        goalTitle: 'Stretch lightly',
        reward: 100,
        correctCode: [{ leftArm: '1' }, { rightArm: '1' }],
      },
    ],
  },
  {
    SettingName: 'Bright Day out',
    SettingImage: '/day-out-setting.svg',
    SettingBg: 'bgs/day-out.svg',
    Levels: [
      {
        levelNum: 1,
        goalTitle: 'Too bright',
        reward: 100,
        correctCode: [
          { eyes: 'i' },
          { eyes: '0' },
          { eyes: 'i' },
          { eyes: '0' },
          { eyes: 'i' },
        ],
      },
      {
        levelNum: 2,
        goalTitle: 'Look for people',
        reward: 80,
        correctCode: [],
      },
      {
        levelNum: 3,
        goalTitle: 'Right away',
        reward: 100,
        correctCode: [],
      },
      {
        levelNum: 4,
        goalTitle: "Can't left",
        reward: 80,
        correctCode: [],
      },
      {
        levelNum: 5,
        goalTitle: 'Heard something?',
        reward: 100,
        correctCode: [],
      },
    ],
  },

  {
    SettingName: 'Silent Meadow',
    SettingImage: '/silent-meadow-setting.svg',
    SettingBg: 'bgs/silent-meadow.svg',
    Levels: [
      {
        levelNum: 1,
        goalTitle: 'Explore the meadow',
        reward: 150,
        correctCode: [],
      },
    ],
  },
];
