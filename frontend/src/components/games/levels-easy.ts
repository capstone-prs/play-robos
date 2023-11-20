import { Setting } from '../../types/Levels';
import turnRightHead from '../../assets/turnRightHead.svg';
import turnLeftHead from '../../assets/turnLeftHead.svg';
import lookLeft from '../../assets/lookLeft.svg';
import look from '../../assets/look.svg';
import lookRight from '../../assets/lookRight.svg';
import LookUpLeft from '../../assets/LookUpLeft.svg';
import LookUpRight from '../../assets/lookUpRight.svg';
import closeEyes from '../../assets/closeEyes.svg';
import raise60Right from '../../assets/raise60.svg';
import raise60Left from '../../assets/raise60Left.svg';

export const settings_easy: Setting[] = [
  {
    settingName: 'Lone Home',
    settingImage: '/lone-home-setting.svg',
    settingBg: '/bgs/lone-home.svg',
    levels: [
      {
        levelNum: 1,
        goalTitle: 'Top of the morning!',
        reward: 100,
        gif: [look],
        correctCode: [{ eyes: '0' }],
        completed: true,
      },
      {
        levelNum: 2,
        goalTitle: 'Blink your worries away',
        reward: 80,
        gif: [closeEyes, look, closeEyes, look],
        correctCode: [
          { eyes: 'i' },
          { eyes: '0' },
          { eyes: 'i' },
          { eyes: '0' },
        ],
        completed: false,
      },
      {
        levelNum: 3,
        goalTitle: 'Where are you?',
        reward: 80,
        gif: [lookLeft, lookRight],
        correctCode: [{ eyes: 'b' }, { eyes: 'c' }],
        completed: false,
      },
      {
        levelNum: 4,
        goalTitle: 'Do you hear anything?',
        reward: 80,
        gif: [LookUpLeft, LookUpRight],
        correctCode: [{ eyes: 'e' }, { eyes: 'f' }],
        completed: false,
      },
      {
        levelNum: 5,
        goalTitle: 'Stretch lightly',
        reward: 100,
        gif: [raise60Left, raise60Right],
        correctCode: [{ leftArm: '1' }, { rightArm: '1' }],
        completed: false,
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
        gif: [closeEyes, look, closeEyes, look, closeEyes],
        correctCode: [
          { eyes: 'i' },
          { eyes: '0' },
          { eyes: 'i' },
          { eyes: '0' },
          { eyes: 'i' },
        ],
        completed: false,
      },
      {
        levelNum: 2,
        goalTitle: 'Look for people',
        reward: 80,
        gif: [look, lookRight, LookUpRight, lookLeft, LookUpLeft],
        correctCode: [
          { eyes: '0' },
          { eyes: 'c' },
          { eyes: 'f' },
          { eyes: 'b' },
          { eyes: 'e' },
        ],
        completed: false,
      },
      {
        levelNum: 3,
        goalTitle: 'Right away',
        reward: 100,
        gif: [turnRightHead],
        correctCode: [{ head: '2' }],
        completed: false,
      },
      {
        levelNum: 4,
        goalTitle: "Can't left",
        reward: 80,
        gif: [turnLeftHead],
        correctCode: [{ head: '1' }],
        completed: false,
      },
      {
        levelNum: 5,
        goalTitle: 'Heard something?',
        reward: 100,
        gif: [turnRightHead, lookRight],
        correctCode: [{ head: '2' }, { eyes: 'c' }],
        completed: false,
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
        gif: [
          look,
          closeEyes,
          look,
          turnRightHead,
          look,
          closeEyes,
          look,
          turnLeftHead,
        ],
        correctCode: [
          { eyes: '0' },
          { eyes: 'i' },
          { eyes: '0' },
          { head: '2' },
          { eyes: '0' },
          { eyes: 'i' },
          { eyes: '0' },
          { head: '1' },
        ],
        completed: false,
      },
    ],
  },
];
