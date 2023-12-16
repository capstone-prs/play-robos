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
import normalHead from '../../assets/normalHead.svg';
import turnLeftHead from '../../assets/turnLeftHead.svg';
import turnRightHead from '../../assets/turnRightHead.svg';

//left arm assets
import raiseLeft60 from '../../assets/raiseLeft60.svg';
// import raiseLeft90 from '../../assets/raiseLeft90.svg';
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
import moverightWheel from '../../assets/moveRightWheel.svg';

//allTogether
// import runAwayFromFire from '../../assets/runAwayFromFire.svg';
// import runAwayFromFire2 from '../../assets/runAwayFromFire2.svg';
// import runAwayFromFire3 from '../../assets/runAwayFromFire3.svg';
// import runAwayFromFire4 from '../../assets/runAwayFromFire4.svg';

export const settings_hard: Setting[] = [
  {
    settingName: 'Scorcha',
    settingImage: '/bgs/scorcha.svg',
    settingBg: '/bgs/scorcha-bg.svg',
    accessible: true,
    levels: [
      {
        levelNum: 1,
        goalTitle: 'Rise and Shine!',
        reward: 400,
        gif: [
        ], //robot
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
        goalTitle: 'Wink Your Way',
        reward: 120,
        gif: [
          lookLeft,
          winkLeft,
          lookRight,
          winkRight,
          closeEyes,
          normalLook,
          closeEyes,
          normalLook,
        ],
        hint: [
          'Look Left',
          'Wink Left',
          'Look Right',
          'Wink Right',
          'Close Eyes',
          'Normal Look',
          'Close Eyes',
          'Normal Look',
        ],
        correctCode: [
          { eyes: 'b' },
          { eyes: 'g' },
          { eyes: 'c' },
          { eyes: 'h' },
          { eyes: 'i' },
          { eyes: '0' },
          { eyes: 'i' },
          { eyes: '0' },
        ],
        completed: false,
      },
      {
        levelNum: 3,
        goalTitle: '60° Stretch',
        reward: 100,
        gif: [raiseLeft60, normalArms, raiseRight60, normalArms],
        hint: [
          'Raise Left Arm 60°',
          'Normal Left Arm',
          'Raise Right Arm 60°',
          'Normal Right Arm',
        ],
        correctCode: [
          { leftArm: '1' },
          { leftArm: '0' },
          { rightArm: '1' },
          { rightArm: '0' },
        ],
        completed: false,
      },
      {
        levelNum: 4,
        goalTitle: 'Suspicious looks',
        reward: 100,
        gif: [turnLeftHead, lookRight, turnRightHead, lookLeft],
        hint: ['Turn Head Left', 'Look Right', 'Turn Head Right', 'Look Left'],
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
        reward: 100,
        gif: [raiseLeft120, raiseRight120],
        hint: ['Raise Left Arm 120°', 'Raise Right Arm 120°'],
        correctCode: [{ leftArm: '3' }, { rightArm: '3' }],
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
        goalTitle: 'Navigate the blinding gleam',
        reward: 120,
        gif: [
          turnRightHead,
          normalHead,
          turnLeftHead,
          closeEyes,
          normalLook,
          closeEyes,
        ],
        hint: [
          'Turn Head Right',
          'Normal Head',
          'Turn Head Left',
          'Close Eyes',
          'Normal Look',
          'Close Eyes',
        ],
        correctCode: [
          { head: '2' },
          { head: '0' },
          { head: '1' },
          { eyes: 'i' },
          { eyes: '0' },
          { eyes: 'i' },
        ],
        completed: false,
      },
      {
        levelNum: 2,
        goalTitle: 'Flex fury',
        reward: 100,
        gif: [raiseLeft120, raiseRight120, closeEyes],
        hint: ['Raise Left Arm 120', 'Raise Right Arm 120°', 'Close Eyes'],
        correctCode: [{ leftArm: '3' }, { rightArm: '3' }, { eyes: 'i' }],
        completed: false,
      },
      {
        levelNum: 3,
        goalTitle: 'Twice on the right',
        reward: 150,
        gif: [
          turnRightHead,
          closeEyes,
          normalLook,
          normalHead,
          turnRightHead,
          closeEyes,
        ],
        hint: [
          'Turn Head Right',
          'Close Eyes',
          'Normal Look',
          'Normal Head',
          'Turn Head Right',
          'Close Eyes',
        ],
        correctCode: [
          { head: '2' },
          { eyes: 'i' },
          { eyes: '0' },
          { head: '0' },
          { head: '2' },
          { eyes: 'i' },
        ],
        completed: false,
      },
      {
        levelNum: 4,
        goalTitle: 'Nothing on the left',
        reward: 150,
        gif: [turnLeftHead, lookRight, lookUpLeft, lookUpRight],
        hint: [
          'Turn Head Left',
          'Look Right',
          'Look Upper Left',
          'Look Upper Right',
        ],
        correctCode: [
          { head: '1' },
          { eyes: 'c' },
          { eyes: 'e' },
          { eyes: 'f' },
        ],
        completed: false,
      },
      {
        levelNum: 5,
        goalTitle: 'Tune into the unheard',
        reward: 120,
        gif: [raiseRight90, raiseLeft120, turnRightHead, lookUp],
        hint: [
          'Raise Right arm 90',
          'Raise Left arm 120',
          'Turn Head Right',
          'Look Up',
        ],
        correctCode: [{ eyes: 'd', head: '2', leftArm: '3', rightArm: '2' }],
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
        goalTitle: 'Footsteps to knowledge',
        reward: 120,
        //gif: walk for 5 seconds
        gif: [moveForward, raiseRight60, raiseLeft60],
        //hint: Walk for 5 seconds
        hint: ['Raise Left 60', 'Raise Right 60', 'Left wheel and right wheel'],
        //correctCode: wheels for 5 seconds
        correctCode: [
          { leftArm: '1', rightArm: '1', leftLeg: '1', rightLeg: '1' },
          //duration 6
        ],
        completed: true,
      }, //done
      {
        levelNum: 2,
        goalTitle: 'The lost tale',
        reward: 200,
        //gif: Normal look, arms raised 160, look left, normal look, look right
        gif: [
          lookUp,
          normalLook,
          turnRightHead,
          raiseLeft150,
          normalHead,
          raiseRight150,
          turnLeftHead,
          lookLeft,
        ],
        //hint: Normal look, arms raised 160, look left, normal look, look right
        hint: [
          'Look Up',
          'Normal Look',
          'Turn Head Right',
          'Raise Left Arm 150°',
          'Normal Head',
          'Raise Right Arm 150 ',
          'Turn Left Head',
          'Look Left',
        ],
        //correctCode:
        correctCode: [
          { eyes: 'd' },
          { eyes: '0' },
          { head: '2' },
          { leftArm: '4' },
          { head: '0' },
          { rightArm: '4' },
          { head: '1' },
          { eyes: 'b' },
        ],
        completed: false,
      }, //done
      {
        levelNum: 3,
        goalTitle: 'Escape the Flames',
        reward: 150,
        //gif: raise arm 160, run for 6 seconds
        gif: [
          raiseRight180,
          turnRightHead,
          raiseLeft180,
          lookLeft,
          moveForward,
        ],
        //hint: raise arm 160, run for 6 seconds
        hint: [
          'Raise Right Arm 180°',
          'Turn Head RIght',
          'Raise Left Arm 180°',
          'Look Left',
          'Use Left and Right Wheel',
        ],
        //correctCode: raise arm 160, run for 6 seconds
        correctCode: [
          {
            eyes: 'b',
            head: '2',
            leftArm: '5',
            rightArm: '5',
            leftLeg: '1',
            rightLeg: '1',
          },
          //duration 6
        ],
        completed: false,
      }, //done
      {
        levelNum: 4,
        goalTitle: 'Desolated Refuge',
        reward: 130,
        //raise left arm 60, raise right 60, raise left 160, raise left 160
        gif: [
          turnLeftHead,
          raiseLeft60,
          turnRightHead,
          raiseRight60,
          normalHead,
          closeEyes,
          lookUp,
        ],
        //raise left arm 60, raise right 60, raise left 160, raise left 160
        hint: [
          'Turn Head Left',
          'Raise Left Arm 60°',
          'Turn Head Right ',
          'Raise Right Arm 60° ',
          'Normal Head',
          'Close Eyes',
          'Look Up',
        ],
        correctCode: [
          { head: '1' },
          { leftArm: '1' },
          { head: '2' },
          { rightArm: '1' },
          { head: '0' },
          { eyes: 'i' },
          { eyes: 'd' },
        ],
        completed: false,
      },
      {
        levelNum: 5,
        goalTitle: 'The tome of knowledge',
        reward: 200,
        gif: [
          moveLeftWheel,
          lookUpLeft,
          normalLook,
          lookUp,
          normalLook,
          lookUpRight,
        ],
        //normal look, look upper left, look upper right, walk for 3 seconds, raise right arm 120
        hint: [
          'Move Left Wheel',
          'Look Upper Left',
          'Normal Look',
          'Look Upper Right',
          'Normal Look',
          'Look Upper Right',
        ],
        correctCode: [
          { leftLeg: '1' },
          { eyes: 'e' },
          { eyes: '0' },
          { eyes: 'd' },
          { eyes: '0' },
          { eyes: 'f' },
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
        goalTitle: 'Walk Blindly',
        reward: 150,
        //gif: normal look, close eyes, walk for 5 seconds
        gif: [closeEyes, raiseLeft60, raiseRight60, moveForward],
        //gif: normal look, close eyes, walk for 5 seconds
        hint: [
          'Close Eyes',
          'Raise Left Arm 60',
          'Raise Right  60',
          'Use left wheel and right wheel',
        ],
        correctCode: [
          {
            eyes: 'i',
            leftArm: '1',
            rightArm: '1',
            leftLeg: '1',
            rightLeg: '1',
          },
          //duration
        ],
        completed: true,
      }, //done
      {
        levelNum: 2,
        goalTitle: 'Chameleon Challenge',
        reward: 120,
        //gif: raise left arm 160, raise right arm 160, walk for 3 seconds, look left, look right, walk for 3 seconds
        gif: [
          raiseRight90,
          raiseLeft180,
          lookLeft,
          normalLook,
          lookRight,
          normalLook,
          closeEyes,
        ],
        //gif: raise left arm 160, raise right arm 160, walk for 3 seconds, look left, look right, walk for 3 seconds
        hint: [
          'Raise Right Arm 90',
          'Raise Left Arm 180',
          'Look Left',
          'Normal Look',
          'Look Right',
          'Normal Look',
          'Close Eyes',
        ],
        correctCode: [
          { rightArm: '2' },
          { leftArm: '5' },
          { eyes: 'b' },
          { eyes: '0' },
          { eyes: 'c' },
          { eyes: '0' },
          { eyes: 'i' },
        ],
        completed: false,
      }, //done
      {
        levelNum: 3,
        goalTitle: 'Petrification Peril',
        reward: 150,
        //gif: normal look,raise left arm 160, raise right arm 160, look left, upper left, normal look, look right, look upper right, normal look
        gif: [
          turnRightHead,
          lookLeft,
          turnLeftHead,
          lookRight,
          turnRightHead,
          lookUpLeft,
          turnLeftHead,
          lookUpRight,
        ],
        hint: [
          'Turn Head Right',
          'Look Left',
          'Turn Head Left',
          'Look Right',
          'Turn Head Right',
          'Look Upper Left',
          'Turn Head Left',
          'Look Upper Right',
        ],
        correctCode: [
          { head: '2' },
          { eyes: 'b' },
          { head: '1' },
          { eyes: 'c' },
          { head: '2' },
          { eyes: 'e' },
          { head: '1' },
          { eyes: 'f' },
        ],
        completed: false,
      }, //done
      {
        levelNum: 4,
        goalTitle: 'The Path to Magic',
        reward: 120,
        //gif: turn head left, turn head right, normal head, walk 7 seconds
        gif: [lookLeft, moveLeftWheel, lookRight, moverightWheel],
        hint: [
          'Look Left',
          'Move Left Wheel',
          'Look Right',
          'Move Right Wheel',
        ],
        correctCode: [
          { eyes: 'b' },
          { leftLeg: '1' },
          { eyes: 'c' },
          { rightLeg: '1' },
        ],
        completed: false,
      },
      {
        levelNum: 5,
        goalTitle: 'Enchanting Trail',
        reward: 200,
        //gif: raise right arm 180, raise left arm 180, turn head right, turn head left, raise left arm 120, raise right arm 120
        gif: [
          lookRight,
          normalLook,
          lookLeft,
          turnLeftHead,
          moveLeftWheel,
          turnRightHead,
          moverightWheel,
        ],
        hint: [
          'Look Right',
          'Normal Look',
          'Look Left',
          'Turn Head Left',
          'Move left Wheel',
          'Turn Head Right',
          'Right Wheel',
        ],
        correctCode: [
          { eyes: 'c' },
          { eyes: '0' },
          { eyes: 'b' },
          { head: '1' },
          { leftLeg: '1' },
          { head: '2' },
          { rightLeg: '1' },
        ],
        completed: false,
      },
    ], //done
  },
  {
    settingName: 'Futura',
    settingImage: 'bgs/futura.svg',
    settingBg: 'bgs/futura-bg.svg',
    accessible: false,
    levels: [
      {
        levelNum: 1,
        goalTitle: 'Rubble Rumble',
        reward: 160,
        //gif: raise left arm 160, raise right arm 160, walk 3 seconds, raise left arm 180, raise right arm 180, walk 5 seconds
        gif: [lookUp, raiseLeft180, raiseRight180, moveForward],
        hint: [
          'Look Up',
          'Raise Left Arm 180',
          'Raise Right Arm 180',
          'Left Wheel and Right wheel',
        ],
        correctCode: [
          {
            eyes: 'd',
            leftArm: '5',
            rightArm: '5',
            leftLeg: '1',
            rightLeg: '1',
          },
        ],
        completed: true,
      }, //done
      {
        levelNum: 2,
        goalTitle: 'Cracking the Code',
        reward: 120,
        //gif: normal look, close eyes, normal look, look upper left, normal look, look upper right, normal look, close eyes
        gif: [
          winkRight,
          normalLook,
          winkLeft,
          lookUp,
          lookUpLeft,
          lookUpRight,
          normalLook,
          lookLeft,
          lookRight,
        ],
        hint: [
          'Wink Right',
          'Normal Look',
          'Wink Left',
          'Look Up',
          'Look Up Left',
          'Look Up Right',
          'Normal Look',
          'Look Left',
          'Look Right',
        ],
        correctCode: [
          { eyes: 'h' },
          { eyes: '0' },
          { eyes: 'g' },
          { eyes: 'd' },
          { eyes: 'e' },
          { eyes: 'f' },
          { eyes: '0' },
          { eyes: 'b' },
          { eyes: 'c' },
        ],
        completed: false,
      },
      {
        levelNum: 3,
        goalTitle: 'Safe Glass Shatters',
        reward: 180,
        //gif: raise right arm 120, normal left arm, raise right arm 120, normal left arm
        gif: [
          raiseRight180,
          normalArms,
          raiseLeft150,
          normalArms,
          raiseRight180,
          normalArms,
          raiseLeft150,
          normalArms,
        ],
        hint: [
          'Raise Right Arm 180',
          'Normal Arm',
          'Raise Left Arm 150',
          'Normal Arms',
          'Raise Right Arm 180',
          'Normal Arms',
          'Raise Left Arm 150',
          'Normal Arms',
        ],
        correctCode: [
          { rightArm: '5' },
          { rightArm: '0' },
          { leftArm: '4' },
          { leftArm: '0' },
          { rightArm: '5' },
          { rightArm: '0' },
          { leftArm: '4' },
          { leftArm: '0' },
        ],
        completed: false,
      },
      {
        levelNum: 4,
        goalTitle: 'Antidote Downpour',
        reward: 160,
        gif: [lookUp, raiseLeft150, raiseRight180, turnLeftHead, moveForward],
        hint: [
          'Look Up',
          'Raise Left 150',
          'Raise RIght 180',
          'Turn Head Left',
          'Move Forward',
        ],
        correctCode: [
          {
            eyes: 'd',
            head: '1',
            leftArm: '4',
            rightArm: '5',
            leftLeg: '1',
            rightLeg: '1',
          },
        ],
        completed: false,
      },
      {
        levelNum: 5,
        goalTitle: 'Playtime with Zappy',
        reward: 500,
        //gif: be free to do whatever
        gif: [''],
        hint: [''],
        correctCode: [],
        completed: false,
      },
    ],
  },
];
