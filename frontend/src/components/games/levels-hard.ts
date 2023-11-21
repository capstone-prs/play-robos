import { Setting } from '../../types/Levels';
import raisHandRight from '../../assets/raisHandRight.svg';
import turnRightHead from '../../assets/turnRightHead.svg';
import turnLeftHead from '../../assets/turnLeftHead.svg';
import lookLeft from '../../assets/lookLeft.svg';
import look from '../../assets/look.svg';
import lookRight from '../../assets/lookRight.svg';
import LookUpLeft from '../../assets/LookUpLeft.svg';
import LookUpRight from '../../assets/lookUpRight.svg';
import closeEyes from '../../assets/closeEyes.svg';
import raise60Right from '../../assets/raise60.svg';
import raise120Right from '../../assets/raise120.svg';
import raise60Left from '../../assets/raise60Left.svg';
import raise120Left from '../../assets/raiseleft120.svg';
export const settings_hard: Setting[] = [
  {
    settingName: 'Lone Home',
    settingImage: '/lone-home-setting.svg',
    settingBg: 'bgs/lone-home.svg',
    levels: [
      {
        levelNum: 1,
        goalTitle: 'Wake up Zappy!',
        reward: 100,
        gif: [look],
        correctCode: [{ eyes: '0' }],
        completed: true,
      },
      {
        levelNum: 2,
        goalTitle: 'Blink your worries away',
        reward: 100,
        gif: [closeEyes, look, closeEyes, look, closeEyes, look, closeEyes],
        correctCode: [
          { eyes: 'i' },
          { eyes: '0' },
          { eyes: 'i' },
          { eyes: '0' },
          { eyes: 'i' },
          { eyes: '0' },
          { eyes: 'i' },
        ],
        completed: false,
      },
      {
        levelNum: 3,
        goalTitle: 'Stretch lightly',
        reward: 100,
        gif: [raise60Left, raise60Right],
        correctCode: [{ leftArm: '1' }, { rightArm: '1' }],
        completed: false,
      },
      {
        levelNum: 4,
        goalTitle: 'Suspicious looks',
        reward: 120,
        gif: [turnLeftHead, lookRight, turnRightHead, lookLeft],
        correctCode: [
          { head: '1' },
          { eyes: 'c' },
          { head: '2' },
          { eyes: 'b' },
        ],
        completed: false,
      },
      {
        levelNum: 5,
        goalTitle: 'Arms forward, raise!',
        reward: 80,
        gif: [raise120Left, raise120Right],
        correctCode: [{ leftArm: '3' }, { rightArm: '3' }],
        completed: false,
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
        gif: [look, closeEyes, look, closeEyes, look, closeEyes],
        correctCode: [
          { eyes: '0' },
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
        goalTitle: 'Stretch hard',
        reward: 80,
        gif: [closeEyes, raise120Left, raisHandRight],
        correctCode: [{ eyes: 'i' }, { leftArm: '3' }, { rightArm: '3' }],
        completed: false,
      },
      {
        levelNum: 3,
        goalTitle: 'Twice on the right',
        reward: 70,
        gif: [turnRightHead, look, closeEyes, look, closeEyes],
        correctCode: [
          { head: '2' },
          { eyes: '0' },
          { eyes: 'i' },
          { eyes: '0' },
          { eyes: 'i' },
        ],
        completed: false,
      },
      {
        levelNum: 4,
        goalTitle: 'Nothing left',
        reward: 80,
        gif: [turnLeftHead, lookRight, LookUpRight, lookLeft, LookUpLeft],
        correctCode: [
          { head: '1' },
          { eyes: 'c' },
          { eyes: 'f' },
          { eyes: 'b' },
          { eyes: 'e' },
        ],
        completed: false,
      },
      {
        levelNum: 5,
        goalTitle: 'Saw something',
        reward: 70,
        gif: [turnRightHead, raise60Left],
        correctCode: [{ head: '2' }, { leftArm: '2' }],
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
          turnRightHead,
          turnLeftHead,
          turnRightHead,
          look,
          closeEyes,
        ],
        correctCode: [
          { eyes: '0' },
          { eyes: 'i' },
          { head: '2' },
          { head: '1' },
          { head: '2' },
          { eyes: '0' },
          { eyes: 'i' },
        ],
        completed: false,
      },
    ],
  },
];
