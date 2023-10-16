import { Setting } from '../../types/Levels';

export const settings_8_11: Setting[] = [
  {
    settingName: 'Lone Home',
    settingImage: '/lone-home-setting.svg',
    settingBg: 'bgs/lone-home.svg',
    levels: [
      {
        levelNum: 1,
        goalTitle: 'Wake up Zappy!',
        reward: 100,
        correctCode: [{ eyes: '0' }],
      },
      {
        levelNum: 2,
        goalTitle: 'Blink your worries away',
        reward: 100,
        correctCode: [
          { eyes: 'i' },
          { eyes: '0' },
          { eyes: 'i' },
          { eyes: '0' },
          { eyes: 'i' },
          { eyes: '0' },
          { eyes: 'i' },
        ],
      },
      {
        levelNum: 3,
        goalTitle: 'Stretch lightly',
        reward: 100,
        correctCode: [{ leftArm: '3' }, { rightArm: '3' }],
      },
      {
        levelNum: 4,
        goalTitle: 'Suspicious looks',
        reward: 120,
        correctCode: [
          { head: '1' },
          { eyes: 'c' },
          { head: '2' },
          { eyes: 'b' },
        ],
      },
      {
        levelNum: 5,
        goalTitle: 'Arms forward, raise!',
        reward: 80,
        correctCode: [{ leftArm: '3' }, { rightArm: '3' }],
      },
    ],
  },
  {
    settingName: 'Bright Day Out',
    settingImage: '/day-out-setting.svg',
    settingBg: 'bgs/day-out.svg',
    levels: [
      {
        levelNum: 1,
        goalTitle: "Too bright, can't see!",
        reward: 80,
        correctCode: [
          { eyes: '0' },
          { eyes: 'i' },
          { eyes: '0' },
          { eyes: 'i' },
          { eyes: '0' },
          { eyes: 'i' },
        ],
      },
      {
        levelNum: 2,
        goalTitle: 'Stretch hard',
        reward: 80,
        correctCode: [],
      },
      {
        levelNum: 3,
        goalTitle: 'Twice on the right',
        reward: 70,
        correctCode: [],
      },
      {
        levelNum: 4,
        goalTitle: 'Nothing left',
        reward: 80,
        correctCode: [],
      },
      {
        levelNum: 5,
        goalTitle: 'Saw something',
        reward: 70,
        correctCode: [],
      },
    ],
  },
  {
    settingName: 'Silent Meadow',
    settingImage: '/silent-meadow-setting.svg',
    settingBg: 'bgs/silent-meadow.svg',
    levels: [
      {
        levelNum: 1,
        goalTitle: 'Explore the meadow',
        reward: 150,
        correctCode: [],
      },
    ],
  },
];
