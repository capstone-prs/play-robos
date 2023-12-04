import { Setting } from '../../types/Levels';
import forward from '../../assets/forward.svg';

import raisHandLeft from '../../assets/raisHandLeft.svg';
import raisHandRight from '../../assets/raisHandRight.svg';
import turnRightHead from '../../assets/turnRightHead.svg';
import turnLeftHead from '../../assets/turnLeftHead.svg';
import lookLeft from '../../assets/lookLeft.svg';
import look from '../../assets/look.svg';
// import lookUp from '../../assets/lookUp.svg';
import lookRight from '../../assets/lookRight.svg';
import LookUpLeft from '../../assets/LookUpLeft.svg';
import LookUpRight from '../../assets/lookUpRight.svg';
// import winkRight from '../../assets/winkRight.svg';
// import winkLeft from '../../assets/winkLeft.svg';
import closeEyes from '../../assets/closeEyes.svg';
// import semiClose from '../../assets/semiCLose.svg';
// import halfRaiseRightArm from '../../assets/halfRaiseRightArm.svg';
// import halfRaiseLeftArm from '../../assets/halfRaiseLeftArm.svg';
import normalArms from '../../assets/normalArms.svg';
// import duration from '../../assets/duration.svg';
import normalLook from '../../assets/NormalLook.svg';
import raise60Right from '../../assets/raise60.svg';
import raise150Right from '../../assets/raise150.svg';
import raise120Right from '../../assets/raise120.svg';
import raise60Left from '../../assets/raise60Left.svg';
import raise150Left from '../../assets/raiseLeft150.svg';
import raise120Left from '../../assets/raiseleft120.svg';
import duration5 from '../../assets/duration_5.svg'
import duration3 from '../../assets/duration_3.svg'
import duration6 from '../../assets/duration_6.svg'
import duration7 from '../../assets/duration_7.svg'

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
          forward,
          duration5,
        ],
        //hint: Walk for 5 seconds
        hint: [
          'Move Forward',
          'Duration of 5 Seconds',
        ],
        //correctCode: wheels for 5 seconds
        correctCode: [
          { rightLeg: '1' },
          { leftLeg: '1' },
          //duration 6
        ],
        completed: true,
      },
      {
        levelNum: 2,
        goalTitle: 'A torn page',
        reward: 180,
        //gif: Normal look, arms raised 160, look left, normal look, look right
        gif: [
          normalLook,
          raise150Left,
          raise120Right,
          lookLeft,
          normalLook,
          lookRight,
        ],
        //hint: Normal look, arms raised 160, look left, normal look, look right
        hint: [
          'Normal look',
          'Raise Right Arm 150°',
          'Raise Left Arm 150°',
          'Look Left',
          'Normal Look',
          'Look Right',
        ],
        //correctCode:
        correctCode: [
          { eyes: '0' },
          { rightArm: '4' },
          { leftArm: '4' },
          { eyes: 'b' },
          { eyes: '0' },
          { eyes: 'c' }
        ],
        completed: false,
      },
      {
        levelNum: 3,
        goalTitle: 'Run away from fire!',
        reward: 80,
        //gif: raise arm 160, run for 6 seconds
        gif: [
          raise150Left,
          raise150Right,
          forward,
          duration6,
        ],
        //hint: raise arm 160, run for 6 seconds
        hint: [
          'Raise Left Arm 150°',
          'Raise Right Arm 150°',
          'Run Forward',
          'Duration of 6 Seconds',
        ],
        //correctCode: raise arm 160, run for 6 seconds
        correctCode: [
          { leftArm: '4' },
          { rightArm: '4' },
          { rightLeg: '1' },
          { leftLeg: '1' },
          //duration 6
        ],
        completed: false,
      },
      {
        levelNum: 4,
        goalTitle: 'An abandoned hut',
        reward: 100,
        //raise left arm 60, raise right 60, raise left 160, raise left 160
        gif: [
          raise60Left,
          raise60Right,
          raise150Left,
          raise150Right,
        ],
        //raise left arm 60, raise right 60, raise left 160, raise left 160
        hint: [
          'Raise Left Arm 60°',
          'Raise Right Arm 60°',
          'Raise left Arm 150° ',
          'Raise Right Arm 150° ',
        ],
        correctCode: [
          { leftArm: '1' },
          { rightArm: '1' },
          { leftArm: '4' },
          { rightArm: '4' },
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
          LookUpLeft,
          LookUpRight,
          forward,
          duration3,
          raise120Right,
        ],
        //normal look, look upper left, look upper right, walk for 3 seconds, raise right arm 120
        hint: [
          'Normal Look',
          'Look Up Left',
          'Look Up Right',
          'Forward',
          'Duration of 3 Seconds',
          'Raise Right Arm 120°',
        ],
        correctCode: [
          {eyes:'0'},
          {eyes:'e'},
          {eyes:'f'},
          { rightLeg: '1' },
          { leftLeg: '1' },
          //duration
          { rightArm: '3' }
        ],
        completed: false,
      },
    ],
  },
  //done
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
          forward,
          duration5,
        ],
        //gif: normal look, close eyes, walk for 5 seconds
        hint: [
          'Normal Look',
          'Close Eyes',
          'Walk Forward',
          'DUration of 5 Seconds',
        ],
        correctCode: [
          { eyes: '0' },
          { eyes: 'i' },
          { rightLeg: '1' },
          { leftLeg: '1' },
          //duration
        ],
        completed: true,
      },
      {
        levelNum: 2,
        goalTitle: 'Blend in!',
        reward: 150,
        //gif: raise left arm 160, raise right arm 160, walk for 3 seconds, look left, look right, walk for 3 seconds
        gif: [
          raise150Left,
          raise150Right,
          forward,
          duration3,
          lookLeft,
          lookRight,
          forward,
          duration3,
        ],
        //gif: raise left arm 160, raise right arm 160, walk for 3 seconds, look left, look right, walk for 3 seconds
        hint: [
          'Raise Left Arm 150',
          'Raise Right Arm 150',
          'Walk Forward',
          'Duration of 3 Seconds',
          'Look Left',
          'Look Right',
          'Forward',
          'Duration of 3 Seconds',
        ],
        correctCode: [
          { leftArm: '4' },
          { rightArm: '4' },
          { rightLeg: '1' },
          { leftLeg: '1' },
          //duration
          { eyes: 'b' },
          { eyes: 'c' },
          { rightLeg: '1' },
          { leftLeg: '1' },
          //duration  
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
          raise150Left,
          raise150Right,
          lookLeft,
          LookUpLeft,
          normalLook,
          lookRight,
          LookUpRight,
          normalLook
        ],
        hint: [
          'Normal Look',
          'Raise Left Arm 150°',
          'Raise Right Arm 150°',
          'Look Left',
          'Look Up Left',
          'Normal Look',
          'Look Right',
          'Look Up Right',
          'Normal Look',
        ],
        correctCode: [
          { eyes: '0' },
          { leftArm: '4' },
          { rightArm: '4' },
          { eyes: 'b' },
          { eyes: 'e' },
          { eyes: '0' },
          { eyes: 'f' },
          { head: '0' },
        ],
        completed: false,
      },
      {
        levelNum: 4,
        goalTitle: 'Follow the magical path',
        reward: 100,
        //gif: turn head left, turn head right, normal head, walk 7 seconds
        gif: [
          turnLeftHead,
          turnRightHead,
          normalLook,/////////////////////////pls add normal head icon
          forward,
          duration7,

        ],
        hint: [
          'Turn Head Left',
          'Turn Head Right',
          'Normal Head',
          'Move Forward',
          'Duration of 7 seconds',

        ],
        correctCode: [
          { head: '1' },
          { head: '2' },
          //normalhead
          { leftLeg: '1' },
          { rightLeg: '1' },
          //duration
        ],
        completed: false,
      },
      {
        levelNum: 5,
        goalTitle: 'The lost potion',
        reward: 100,
        //gif: raise right arm 180, raise left arm 180, turn head right, turn head left, raise left arm 120, raise right arm 120
        gif: [
          raisHandRight,
          raisHandLeft,
          turnRightHead,
          turnLeftHead,
          raise120Left,
          raise120Right,
        ],
        hint: [
          'Raise Right Arm 180,',
          'Raise Left Arm 180',
          'Turn Right Head',
          'Turn Left Head',
          'Raise Left Arm 120',
          'Raise Right Arm 120',
        ],
        correctCode: [
          { rightArm: '5' },
          { leftArm: '5' },
          { head: '2' },
          { head: '1' },
          { leftArm: '3' },
          { rightArm: '3' },
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
          raise150Left,
          raise150Right,
          forward,
          duration3,
          raisHandLeft,
          raisHandRight,
          forward,
          duration5,
        ],
        hint: [
          'Raise Left Arm 150',
          'Raise Right Arm 150',
          'Walk Forward',
          'Duration of 3 Seconds',
          'Raise Left Arm 180',
          'Raise Right Arm 180',
          'Walk Forward',
          'Duration of 5 Seconds',
        ],
        correctCode: [
          { leftArm: '4' },
          { rightArm: '4' },
          //walkfroward
          //duration 3seconds
          { leftArm: '5' },
          { rightArm: '5' },
          //walkforward
          //duration 3 seconds
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
          LookUpLeft,
          look,
          LookUpRight,
          look,
          closeEyes,
        ],
        hint: [
          'Normal Look',
          'Close Eyes',
          'Normal Look',
          'Look Up Left',
          'Normal Look',
          'Look Up Right',
          'Normal Look',
          'Close Eyes',
        ],
        correctCode: [
          { eyes: '0' },
          { eyes: 'i' },
          { eyes: '0' },
          {eyes:'e'},
          {eyes:'0'},
          {eyes:'f'},
          {eyes:'0'},
          {eyes:'i'}
        ],
        completed: false,
      },
      {
        levelNum: 3,
        goalTitle: 'Smash the glass!',
        reward: 80,
        //gif: raise right arm 120, normal left arm, raise right arm 120, normal left arm
        gif: [
          raise120Right,
          normalArms,
          raise120Right,
          normalArms,
        ],
        hint: [
          'Raise Right Arm 120',
          'Normal Arms',
          'Raise Right Arm  120',
          'Normal Arms',
          'Normal Look',
        ],
        correctCode: [
          { rightArm: '3' },
          { rightArm: '0' },
          { rightArm: '3' },
          { rightArm: '0' },
          { eyes: '0' },
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
          forward,
          duration3,
          raisHandLeft,
          turnLeftHead,
          turnRightHead,
          normalLook,
          closeEyes,
          raisHandRight,
          turnLeftHead
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
          { eyes: 'i' },
          {head:'2'},
          {eyes: '0'},
          {eyes:'i'},
          {eyes: '0'},
          {head:'1'}

        ],
        completed: false,
      },
      {
        levelNum: 5,
        goalTitle: 'Have fun with Zappy!',
        reward: 200,
        //gif: be free to do whatever
        gif: [''
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
