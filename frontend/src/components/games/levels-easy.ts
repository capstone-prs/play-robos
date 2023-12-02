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
    settingName: 'Scorcha',
    settingImage: '/bgs/scorcha.svg',
    settingBg: '/bgs/scorcha-bg.svg',
    accessible: true,
    levels: [
      {
        levelNum: 1,
        goalTitle: 'Top of the morning!',
        reward: 100,
        gif: [look],
        hint: ['Normal Look'],
        correctCode: [{ eyes: '0' }],
        completed: true,
      },
      {
        levelNum: 2,
        goalTitle: 'Blink your worries away',
        reward: 80,
        gif: [closeEyes, look, closeEyes, look],
        hint: ['Close Eyes', 'Normal Look', 'Close Eyes', 'Normal Look'],
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
        hint: ['Look  Left', 'Look Right'],
        correctCode: [{ eyes: 'b' }, { eyes: 'c' }],
        completed: false,
      },
      {
        levelNum: 4,
        goalTitle: 'Do you hear anything?',
        reward: 80,
        gif: [LookUpLeft, LookUpRight],
        hint: ['Look Upper Left', 'Look Upper Right'],
        correctCode: [{ eyes: 'e' }, { eyes: 'f' }],
        completed: false,
      },
      {
        levelNum: 5,
        goalTitle: 'Stretch lightly',
        reward: 100,
        gif: [raise60Left, raise60Right],
        hint: ['Raise Left Arm 60°', 'Raise Right Arm 60°'],
        correctCode: [{ leftArm: '1' }, { rightArm: '1' }],
        completed: false,
      },
    ],
  },
  {
    settingName: 'Flora',
    settingImage: 'bgs/flora.svg',
    settingBg: 'bgs/flora-bg.svg',
    accessible: false,
    levels: [
      {
        levelNum: 1,
        goalTitle: 'Too bright',
        reward: 100,
        gif: [closeEyes, look, closeEyes, look, closeEyes],
        hint: [
          'Close Eyes',
          'Normal Look',
          'Close Eyes',
          ' Normal Look',
          'Close Eyes',
        ],
        correctCode: [
          { eyes: 'i' },
          { eyes: '0' },
          { eyes: 'i' },
          { eyes: '0' },
          { eyes: 'i' },
        ],
        completed: true,
      },
      {
        levelNum: 2,
        goalTitle: 'Look for people',
        reward: 80,
        gif: [look, lookRight, LookUpRight, lookLeft, LookUpLeft],
        hint: [
          'Normal Look',
          'Look Right',
          'Look Upper Right',
          'Look Left',
          'Look Upper Left',
        ],
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
        hint: ['Head Turn Right'],
        correctCode: [{ head: '2' }],
        completed: false,
      },
      {
        levelNum: 4,
        goalTitle: "Can't left",
        reward: 80,
        gif: [turnLeftHead],
        hint: ['Head Turn Left'],
        correctCode: [{ head: '1' }],
        completed: false,
      },
      {
        levelNum: 5,
        goalTitle: 'Heard something?',
        reward: 100,
        gif: [turnRightHead, lookRight],
        hint: ['Head Turn Right', 'Look Right'],
        correctCode: [{ head: '2' }, { eyes: 'c' }],
        completed: false,
      },
    ],
  },
  {
    settingName: 'Darka',
    settingImage: 'bgs/darka.svg',
    settingBg: 'bgs/darka-bg.svg',
    accessible: false,
    levels: [
      {
        levelNum: 1,
        goalTitle: 'Walk to the library',
        reward: 150,
        //gif: walk for 5 seconds
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
        //hint: Walk for 5 seconds
        hint: [
          'Normal Look',
          'Close Eyes',
          'Normal Look',
          'Head Turn Right',
          'Normal Look',
          'Close Eyes',
          'Normal Look',
          'Head Turn Left',
        ],
        //correctCode: wheels for 5 seconds
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
        completed: true,
      },
      {
        levelNum: 2,
        goalTitle: 'A torn page',
        reward: 180,
        //gif: Normal look, arms raised 160, look left, normal look, look right
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
        //hint: Normal look, arms raised 160, look left, normal look, look right
        hint: [
          'Normal Look',
          'Close Eyes',
          'Normal Look',
          'Head Turn Right',
          'Normal Look',
          'Close Eyes',
          'Normal Look',
          'Head Turn Left',
        ],
        //correctCode:
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
      {
        levelNum: 3,
        goalTitle: 'Run away from fire!',
        reward: 80,
        //gif: raise arm 160, run for 6 seconds
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
        //hint: raise arm 160, run for 6 seconds
        hint: [
          'Normal Look',
          'Close Eyes',
          'Normal Look',
          'Head Turn Right',
          'Normal Look',
          'Close Eyes',
          'Normal Look',
          'Head Turn Left',
        ],
        //correctCode: raise arm 160, run for 6 seconds
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
      {
        levelNum: 4,
        goalTitle: 'An abandoned hut',
        reward: 100,
        //raise left arm 60, raise right 60, raise left 160, raise left 160
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
        //raise left arm 60, raise right 60, raise left 160, raise left 160
        hint: [
          'Normal Look',
          'Close Eyes',
          'Normal Look',
          'Head Turn Right',
          'Normal Look',
          'Close Eyes',
          'Normal Look',
          'Head Turn Left',
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
      {
        levelNum: 5,
        goalTitle: 'The book of everything',
        reward: 150,
        //normal look, look upper left, look upper right, walk for 3 seconds, raise right arm 120
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
        //normal look, look upper left, look upper right, walk for 3 seconds, raise right arm 120
        hint: [
          'Normal Look',
          'Close Eyes',
          'Normal Look',
          'Head Turn Right',
          'Normal Look',
          'Close Eyes',
          'Normal Look',
          'Head Turn Left',
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
  {
    settingName: 'Mistica',
    settingImage: 'bgs/mystica.svg',
    settingBg: 'bgs/mystica-bg.svg',
    accessible: false,
    levels: [
      {
        levelNum: 1,
        goalTitle: 'Walk with eyes closed',
        reward: 80,
        //gif: normal look, close eyes, walk for 5 seconds
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
        //gif: normal look, close eyes, walk for 5 seconds
        hint: [
          'Normal Look',
          'Close Eyes',
          'Normal Look',
          'Head Turn Right',
          'Normal Look',
          'Close Eyes',
          'Normal Look',
          'Head Turn Left',
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
        completed: true,
      },
      {
        levelNum: 2,
        goalTitle: 'Blend in!',
        reward: 150,
        //gif: raise left arm 160, raise right arm 160, walk for 3 seconds, look left, look right, walk for 3 seconds
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
        //gif: raise left arm 160, raise right arm 160, walk for 3 seconds, look left, look right, walk for 3 seconds
        hint: [
          'Normal Look',
          'Close Eyes',
          'Normal Look',
          'Head Turn Right',
          'Normal Look',
          'Close Eyes',
          'Normal Look',
          ' Head Turn Left',
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
      {
        levelNum: 3,
        goalTitle: 'Pretend petrified!',
        reward: 120,
        //gif: normal look,raise left arm 160, raise right arm 160, look left, upper left, normal look, look right, look upper right, normal look
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
        hint: [
          'Normal Look',
          'Close Eyes',
          'Normal Look',
          ' Head Turn Right',
          'Normal Look',
          'Close Eyes',
          'Normal Look',
          'Head Turn Left',
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
      {
        levelNum: 4,
        goalTitle: 'Follow the magical path',
        reward: 100,
        //gif: turn head left, turn head right, normal head, walk 7 seconds
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
        hint: [
          'Normal Look',
          'Close Eyes',
          'Normal Look',
          'Head Turn Right',
          'Normal Look',
          'Close Eyes',
          'Normal Look',
          'Head Turn Left',
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
      {
        levelNum: 5,
        goalTitle: 'The lost potion',
        reward: 100,
        //gif: raise right arm 180, raise left arm 180, turn head right, turn head left, raise left arm 120, raise right arm 120
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
        hint: [
          'Normal Look',
          'Close Eyes',
          'Normal Look',
          'Head Turn Right',
          'Normal Look',
          'Close Eyes',
          'Normal Look',
          'Head Turn Left',
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
  {
    settingName: 'Futura',
    settingImage: 'bgs/futura.svg',
    settingBg: 'bgs/futura-bg.svg',
    accessible: false,
    levels: [
      {
        levelNum: 1,
        goalTitle: 'Moving rubbles',
        reward: 150,
        //gif: raise left arm 160, raise right arm 160, walk 3 seconds, raise left arm 180, raise right arm 180, walk 5 seconds
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
        hint: [
          'Normal Look',
          'Close Eyes',
          'Normal Look',
          'Head Turn Right',
          'Normal Look',
          'Close Eyes',
          'Normal Look',
          'Head Turn Left',
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
        completed: true,
      },
      {
        levelNum: 2,
        goalTitle: 'Break in with eye pattern',
        reward: 100,
        //gif: normal look, close eyes, normal look, look upper left, normal look, look upper right, normal look, close eyes
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
        hint: [
          'Normal Look',
          'Close Eyes',
          'Normal Look',
          'Head Turn Right',
          'Normal Look',
          'Close Eyes',
          'Normal Look',
          'Head Turn Left',
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
      {
        levelNum: 3,
        goalTitle: 'Smash the glass!',
        reward: 80,
        //gif: raise right arm 120, normal left arm, raise right arm 120, normal left arm
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
        hint: [
          'Normal Look',
          'Close Eyes',
          'Normal Look',
          'Head Turn Right',
          'Normal Look',
          'Close Eyes',
          'Normal Look',
          'Head Turn Left',
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
      {
        levelNum: 4,
        goalTitle: 'Raining antidote',
        reward: 200,
        //gif: walk 3 seconds, raise left arm 180, turn head left, turn head right, normal look, close eyes, raise right arm 180, turn head left
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
        hint: [
          'Normal Look',
          'Close Eyes',
          'Normal Look',
          'Close Eyes',
          'Head Turn Right',
          'Normal Eyes',
          'Close Eyes',
          'Normal Eyes',
          'Head Turn Left',
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
      {
        levelNum: 5,
        goalTitle: 'Have fun with Zappy!',
        reward: 200,
        //gif: be free to do whatever
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
        hint: [
          'Normal Look',
          'Close Eyes',
          'Normal Look',
          'Close Eyes',
          'Head Turn Right',
          'Normal Eyes',
          'Close Eyes',
          'Normal Eyes',
          'Head Turn Left',
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
