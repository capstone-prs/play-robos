import { Setting } from '../../types/Levels';

export const settings_5_7: Setting[] = [
  {
    settingName: 'Lone Home',
    settingImage: '/lone-home-setting.svg',
    settingBg: '/bgs/lone-home.svg',
    levels: [
      {
        levelNum: 1,
        goalTitle: 'Top of the morning!',
        reward: 100,
        gif: 'look.svg',
        correctCode: [{ eyes: '0' }],
      },
      {
        levelNum: 2,
        goalTitle: 'Blink your worries away',
        reward: 80,
        gif: '/blink.gif',
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
        gif: '/where-are-you.gif',
        correctCode: [{ eyes: 'b' }, { eyes: 'c' }],
      },
      {
        levelNum: 4,
        goalTitle: 'Do you hear anything?',
        reward: 80,
        gif: '/do-you-hear-anything.gif',
        correctCode: [{ eyes: 'e' }, { eyes: 'f' }],
      },
      {
        levelNum: 5,
        goalTitle: 'Stretch lightly',
        reward: 100,
        gif: '/stretch-lightly.gif',
        correctCode: [{ leftArm: '1' }, { rightArm: '1' }],
      },
    ],
  },
  {
    settingName: 'Bright Day out',
    settingImage: '/day-out-setting.svg',
    settingBg: 'bgs/day-out.svg',
    levels: [
      {
        levelNum: 1,
        goalTitle: 'Too bright',
        reward: 100,
        gif: '/bright-day-out.gif',
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
        gif: '/look-around.gif',
        correctCode: [],
      },
      {
        levelNum: 3,
        goalTitle: 'Right away',
        reward: 100,
        gif: '/head-right.gif',
        correctCode: [],
      },
      {
        levelNum: 4,
        goalTitle: "Can't left",
        reward: 80,
        gif: '/head-left.gif',
        correctCode: [],
      },
      {
        levelNum: 5,
        goalTitle: 'Heard something?',
        reward: 100,
        gif: '/heard-something.gif',
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
        gif: '/explore-the-meadow.gif',
        correctCode: [],
      },
    ],
  },
];
