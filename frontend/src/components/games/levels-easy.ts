import { Setting } from '../../types/Levels';

import normalArms from '../../assets/normalArms.svg';

//eyes assets
import normalLook from '../../assets/NormalLook.svg';
import closeEyes from '../../assets/closeEyes.svg';
import lookLeft from '../../assets/lookLeft.svg';
import lookRight from '../../assets/lookRight.svg';
import lookUpLeft from '../../assets/LookUpLeft.svg';
import lookUpRight from '../../assets/lookUpRight.svg';
import winkRight from '../../assets/winkRight.svg';
import winkLeft from '../../assets/winkLeft.svg';
import lookUp from '../../assets/lookUp.svg';
//head assets
// import normalHead from '../../assets/normalHead.svg';
import turnLeftHead from '../../assets/turnLeftHead.svg';
import turnRightHead from '../../assets/turnRightHead.svg';

//left arm assets
import raiseLeft60 from '../../assets/raiseLeft60.svg';
import raiseLeft90 from '../../assets/raiseLeft90.svg';
import raiseLeft120 from '../../assets/raiseleft120.svg';
import raiseLeft150 from '../../assets/raiseLeft150.svg';
import raiseLeft180 from '../../assets/raiseLeft180.svg';

//right arm assets
import raiseRight60 from '../../assets/raiseRight60.svg';
import raiseRight90 from '../../assets/raiseRight90.svg';
import raiseRight120 from '../../assets/raiseRight120.svg';
import raiseRight150 from '../../assets/raiseRight150.svg';
import raiseRight180 from '../../assets/raiseRight180.svg';

//legs assets
// import forward from '../../assets/forward.svg';
import moveForward from '../../assets/moveForwardWheel.svg';
// import moveForward2 from '../../assets/moveForwardWheel2.svg';
// import moveForward3 from '../../assets/moveForwardWheel3.svg';
// import moveForward4 from '../../assets/moveForwardWheel4.svg';
import moveLeftWheel from '../../assets/moveLeftWheel.svg';
// import moverightWheel from '../../assets/moveRightWheel.svg';

// //allTogether
// import runAwayFromFire from '../../assets/runAwayFromFire.svg';
// import runAwayFromFire2 from '../../assets/runAwayFromFire2.svg';
// import runAwayFromFire3 from '../../assets/runAwayFromFire3.svg';
// import runAwayFromFire4 from '../../assets/runAwayFromFire4.svg';

// import semiClose from '../../assets/semiCLose.svg';
// import halfRaiseRightArm from '../../assets/halfRaiseRightArm.svg';
// import halfRaiseLeftArm from '../../assets/halfRaiseLeftArm.svg';
// import duration from '../../assets/duration.svg';
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
        reward: 200,
        gif: [], //robot
        hint: [''], //to confirm to paul
        correctCode: [
          { eyes: 'e' },
          { eyes: 'f' },
          { rightArm: '1' },
          { rightArm: '4' },
          { leftArm: '1' },
          { leftArm: '4' },
          {
            eyes: 'd',
            head: '1',
            leftArm: '5',
            rightArm: '5',
            leftLeg: '1',
            rightLeg: '1',
          },
        ],
        completed: true,
      },
      {
        levelNum: 2,
        goalTitle: 'Blink your worries away',
        reward: 80,
        gif: [closeEyes, normalLook, closeEyes, normalLook],
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
        reward: 60,
        gif: [lookLeft, lookRight],
        hint: ['Look  Left', 'Look Right'],
        correctCode: [{ eyes: 'b' }, { eyes: 'c' }],
        completed: false,
      },
      {
        levelNum: 4,
        goalTitle: 'Do you hear anything?',
        reward: 60,
        gif: [lookUpLeft, lookUpRight],
        hint: ['Look Upper Left', 'Look Upper Right'],
        correctCode: [{ eyes: 'e' }, { eyes: 'f' }],
        completed: false,
      },
      {
        levelNum: 5,
        goalTitle: 'Stretch lightly',
        reward: 80,
        gif: [raiseLeft60, raiseRight60],
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
        reward: 120,
        gif: [closeEyes, normalLook, winkLeft, winkRight],
        hint: ['Close Eyes', 'Normal Look', 'Wink Left', 'Wink Right'],
        correctCode: [
          { eyes: 'i' },
          { eyes: '0' },
          { eyes: 'g' },
          { eyes: 'h' },
        ],
        completed: true,
      },
      {
        levelNum: 2,
        goalTitle: 'Look for people',
        reward: 120,
        gif: [lookRight, lookUpRight, lookLeft, lookUpLeft],
        hint: [
          'Normal Look',
          'Look Right',
          'Look Upper Right',
          'Look Left',
          'Look Upper Left',
        ],
        correctCode: [
          { eyes: 'c' },
          { eyes: 'f' },
          { eyes: 'b' },
          { eyes: 'e' },
        ],
        completed: false,
      },
      {
        levelNum: 3,
        goalTitle: 'On Your Right!',
        reward: 80,
        gif: [turnRightHead, lookLeft, lookRight],
        hint: ['Turn Head Right, Look Left', 'Look Right'],
        correctCode: [{ head: '2' }, { eyes: 'b' }, { eyes: 'c' }],
        completed: false,
      },
      {
        levelNum: 4,
        goalTitle: 'On Your Left!',
        reward: 80,
        gif: [turnLeftHead, lookLeft, lookRight],
        hint: ['Head Head Left', 'Look Left', 'Look Right'],
        correctCode: [{ head: '1' }, { eyes: 'b' }, { eyes: 'c' }],
        completed: false,
      },
      {
        levelNum: 5,
        goalTitle: 'Heard something?',
        reward: 60,
        gif: [turnRightHead, lookUpRight],
        hint: ['Head Turn Right', 'Look Upper Right'],
        correctCode: [{ head: '2' }, { eyes: 'f' }],
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
        reward: 100,
        //gif: walk for 5 seconds
        gif: [moveForward],
        //hint: Walk for 5 seconds
        hint: ['All together with left wheel and right wheel'],
        correctCode: [
          { leftLeg: '1', rightLeg: '1' },
          //duration 6
        ],
        completed: true,
      },
      {
        levelNum: 2,
        goalTitle: 'A torn page',
        reward: 180,
        //gif: Normal look, arms raised 160, look left, normal look, look right
        gif: [raiseLeft150, lookLeft, closeEyes, normalLook, lookRight],
        //hint: Normal look, arms raised 160, look left, normal look, look right
        hint: [
          'Raise Left Arm 150°',
          'Look Left',
          'Close Eyes',
          'Normal Look',
          'Look Right',
        ],
        //correctCode:
        correctCode: [
          { leftArm: '4' },
          { eyes: 'b' },
          { eyes: 'i' },
          { eyes: '0' },
          { eyes: 'c' },
        ],
        completed: false,
      },
      {
        levelNum: 3,
        goalTitle: 'Run away from fire!',
        reward: 100,
        //gif: raise arm 160, run for 6 seconds
        gif: [raiseLeft150, raiseRight150, moveForward],
        //hint: raise arm 160, run for 6 seconds
        hint: [
          'Raise Left Arm 150° and Raise Right Arm 150° with left wheel and right wheel',
        ],
        //correctCode: raise arm 160, run for 6 seconds
        correctCode: [
          {
            leftArm: '4',
            rightArm: '4',
            leftLeg: '1',
            rightLeg: '1',
          },
        ],
        completed: false,
      },
      {
        levelNum: 4,
        goalTitle: 'An abandoned hut',
        reward: 100,
        //raise left arm 60, raise right 60, raise left 160, raise left 160
        gif: [raiseLeft60, raiseRight60, raiseLeft150, raiseRight150],
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
        gif: [lookUpLeft, raiseRight120, moveForward],
        //normal look, look upper left, look upper right, walk for 3 seconds, raise right arm 120
        hint: [
          'Look Up Left',
          'Raise Right Arm 120°',
          'Left wheel and right wheel',
        ],
        correctCode: [
          { eyes: 'e', rightArm: '3', leftLeg: '1', rightLeg: '1' },
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
        gif: [closeEyes, moveForward],
        //gif: normal look, close eyes, walk for 5 seconds
        hint: ['Close Eyes', 'Left wheel and right wheel'],
        correctCode: [{ eyes: 'i', leftLeg: '1', rightLeg: '1' }],
        completed: true,
      },
      {
        levelNum: 2,
        goalTitle: 'Blend in!',
        reward: 80,
        //gif: raise left arm 160, raise right arm 160, walk for 3 seconds, look left, look right, walk for 3 seconds
        gif: [raiseLeft150, raiseRight150, lookLeft, lookRight],
        //gif: raise left arm 160, raise right arm 160, walk for 3 seconds, look left, look right, walk for 3 seconds
        hint: [
          'Raise Left Arm 150',
          'Raise Right Arm 150',
          'Look Left',
          'Look Right',
        ],
        correctCode: [
          { leftArm: '4' },
          { rightArm: '4' },
          { eyes: 'b' },
          { eyes: 'c' },
        ],
        completed: false,
      },
      {
        levelNum: 3,
        goalTitle: 'Pretend petrified!',
        reward: 120,
        //gif: normal look,raise left arm 160, raise right arm 160, look left, upper left, normal look, look right, look upper right, normal look
        gif: [
          raiseLeft180,
          raiseRight180,
          lookUpLeft,
          lookUpRight,
          normalLook,
          lookRight,
          lookLeft,
        ],
        hint: [
          'Raise Left Arm 180',
          'Raise Right Arm 180°',
          'Look Upper Left',
          'Look Upper Right',
          'Normal Look',
          'Look Right',
          'Look Left',
        ],
        correctCode: [
          { leftArm: '5' },
          { rightArm: '5' },
          { eyes: 'e' },
          { eyes: 'f' },
          { eyes: '0' },
          { eyes: 'c' },
          { eyes: 'b' },
        ],
        completed: false,
      },
      {
        levelNum: 4,
        goalTitle: 'Follow the magical path',
        reward: 100,
        //gif: turn head left, turn head right, normal head, walk 7 seconds
        gif: [lookLeft, turnLeftHead, moveLeftWheel],
        hint: ['Look Left', 'Turn Head left', 'Left Wheel'],
        correctCode: [{ eyes: 'b', head: '1', leftLeg: '1' }],
        completed: false,
      },
      {
        levelNum: 5,
        goalTitle: 'The lost potion',
        reward: 100,
        //gif: raise right arm 180, raise left arm 180, turn head right, turn head left, raise left arm 120, raise right arm 120
        gif: [
          raiseRight180,
          raiseLeft180,
          turnRightHead,
          turnLeftHead,
          raiseLeft120,
          raiseRight120,
        ],
        hint: [
          'Raise Right Arm 180,',
          'Raise Left Arm 180',
          'Turn Head Right',
          'Turn Head Left',
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
        gif: [turnRightHead, raiseLeft150, raiseRight150, moveForward],
        hint: [
          'Turn Head Right',
          'Raise Right Arm 150',
          'Raise Left Arm 150',
          'Left wheel and right wheel',
        ],
        correctCode: [
          {
            head: '2',
            leftArm: '4',
            rightArm: '4',
            leftLeg: '1',
            rightLeg: '1',
          },
        ],
        completed: true,
      },
      {
        levelNum: 2,
        goalTitle: 'Break in with eye pattern',
        reward: 100,
        //gif: normal look, close eyes, normal look, look upper left, normal look, look upper right, normal look, close eyes
        gif: [lookUpLeft, lookRight, lookUpLeft, lookLeft, winkRight, winkLeft],
        hint: [
          'Look Upper Left',
          'Look Right',
          'Look Upper Right',
          'Look Left',
          'Wink Right',
          'Wink Left',
        ],
        correctCode: [
          { eyes: 'e' },
          { eyes: 'c' },
          { eyes: 'f' },
          { eyes: 'b' },
          { eyes: 'h' },
          { eyes: 'g' },
        ],
        completed: false,
      },
      {
        levelNum: 3,
        goalTitle: 'Smash the glass!',
        reward: 100,
        //gif: raise right arm 120, normal left arm, raise right arm 120, normal left arm
        gif: [
          raiseLeft120,
          normalArms,
          raiseRight120,
          normalArms,
          raiseLeft150,
          raiseRight150,
        ],
        hint: [
          'Raise Left Arm 120',
          'Normal Arms',
          'Raise Right Arm  120',
          'Normal Arms',
          'Raise Right Arm 150',
          'Raise Right Arm 150',
        ],
        correctCode: [
          { leftArm: '3' },
          { leftArm: '0' },
          { rightArm: '3' },
          { rightArm: '0' },
          { leftArm: '4' },
          { rightArm: '4' },
        ],
        completed: false,
      },
      {
        levelNum: 4,
        goalTitle: 'Raining antidote',
        reward: 200,
        //gif: walk 3 seconds, raise left arm 180, turn head left, turn head right, normal look, close eyes, raise right arm 180, turn head left
        gif: [raiseLeft90, raiseRight90, turnRightHead, lookUp, moveForward],
        hint: [
          'Raise Left Arm 90',
          'Raise Right Arm 90',
          'Turn Head Right',
          'Look Up',
          'Left wheel and right wheel',
        ],
        correctCode: [
          {
            eyes: 'd',
            head: '2',
            leftArm: '2',
            rightArm: '2',
            leftLeg: '1',
            rightLeg: '1',
          },
        ],
        completed: false,
      },
      {
        levelNum: 5,
        goalTitle: 'Have fun with Zappy!',
        reward: 500,
        //gif: be free to do whatever
        gif: [''],
        hint: [],
        correctCode: [],
        completed: false,
      },
    ],
  },
];
