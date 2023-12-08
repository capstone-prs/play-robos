import Blockly from 'blockly';
import forward from '../../../assets/forward.svg';
//eyes assets
import normalArms from '../../../assets/normalArms.svg';
import normalLook from '../../../assets/normalLook.svg';
import closeEyes from '../../../assets/closeEyes.svg';
import lookLeft from '../../../assets/lookLeft.svg';
import lookRight from '../../../assets/lookRight.svg';
import lookUpLeft from '../../../assets/LookUpLeft.svg';
import lookUpRight from '../../../assets/lookUpRight.svg';
import winkRight from '../../../assets/winkRight.svg';
import winkLeft from '../../../assets/winkLeft.svg';
import lookUp from '../../../assets/lookUp.svg';
import semiClose from '../../../assets/semiCLose.svg'
import duration from '../../../assets/duration.svg'
//head assets
import normalHead from '../../../assets/normalHead.svg';
import turnLeftHead from '../../../assets/turnLeftHead.svg';
import turnRightHead from '../../../assets/turnRightHead.svg';

//left arm assets
import raiseLeft60 from '../../../assets/raiseLeft60.svg';
import raiseLeft90 from '../../../assets/raiseLeft90.svg';
import raiseLeft120 from '../../../assets/raiseLeft120.svg';
import raiseLeft150 from '../../../assets/raiseLeft150.svg';
import raiseLeft180 from '../../../assets/raiseLeft180.svg';

//right arm assets
import raiseRight60 from '../../../assets/raiseRight60.svg';
import raiseRight90 from '../../../assets/raiseRight90.svg';
import raiseRight120 from '../../../assets/raiseRight120.svg';
import raiseRight150 from '../../../assets/raiseRight150.svg';
import raiseRight180 from '../../../assets/raiseRight180.svg';
import backward from '../../../assets/backward.svg'

Blockly.defineBlocksWithJsonArray([
  {
    type: 'normal_look',
    message0: 'normal look %1',
    args0: [
      {
        type: 'field_image',
        src: normalLook,
        width: 25,
        height: 25,
        alt: '*',
        flipRtl: false,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: '',
    helpUrl: '',
  },
  {
    type: 'look_up',
    message0: 'look up %1',
    args0: [
      {
        type: 'field_image',
        src: lookUp,
        width: 25,
        height: 25,
        alt: '*',
        flipRtl: false,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 165,
    tooltip: '',
    helpUrl: '',
  },
  {
    type: 'semi_close',
    message0: 'semi close %1',
    args0: [
      {
        type: 'field_image',
        src: semiClose,
        width: 25,
        height: 25,
        alt: '*',
        flipRtl: false,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 105,
    tooltip: '',
    helpUrl: '',
  },
  {
    type: 'look_right',
    message0: 'look right %1',
    args0: [
      {
        type: 'field_image',
        src: lookRight,
        width: 25,
        height: 25,
        alt: '*',
        flipRtl: false,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 105,
    tooltip: '',
    helpUrl: '',
  },
  {
    type: 'look_left',
    message0: 'look Left %1',
    args0: [
      {
        type: 'field_image',
        src: lookLeft,
        width: 25,
        height: 25,
        alt: '*',
        flipRtl: false,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 5,
    tooltip: '',
    helpUrl: '',
  },
  {
    type: 'look_up_left',
    message0: 'look upper left %1',
    args0: [
      {
        type: 'field_image',
        src: lookUpLeft,
        width: 25,
        height: 25,
        alt: '*',
        flipRtl: false,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 155,
    tooltip: '',
    helpUrl: '',
  },
  {
    type: 'wink_right',
    message0: 'wink right %1',
    args0: [
      {
        type: 'field_image',
        src: winkRight,
        width: 25,
        height: 25,
        alt: '*',
        flipRtl: false,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 345,
    tooltip: '',
    helpUrl: '',
  },
  {
    type: 'wink_left',
    message0: 'wink left %1',
    args0: [
      {
        type: 'field_image',
        src: winkLeft,
        width: 25,
        height: 25,
        alt: '*',
        flipRtl: false,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 40,
    tooltip: '',
    helpUrl: '',
  },
  {
    type: 'close_eyes',
    message0: 'close eyes %1',
    args0: [
      {
        type: 'field_image',
        src: closeEyes,
        width: 25,
        height: 25,
        alt: '*',
        flipRtl: false,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: '',
    helpUrl: '',
  },
  {
    type: 'head_trun_left',
    message0: 'turn head left %1',
    args0: [
      {
        type: 'field_image',
        src: turnLeftHead,
        width: 25,
        height: 25,
        alt: '*',
        flipRtl: false,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 45,
    tooltip: '',
    helpUrl: '',
  },
  {
    type: 'turn_head_right',
    message0: 'turn head right %1',
    args0: [
      {
        type: 'field_image',
        src: turnRightHead,
        width: 25,
        height: 25,
        alt: '*',
        flipRtl: false,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 240,
    tooltip: '',
    helpUrl: '',
  },
  {
    type: 'left_wheel_forward',
    message0: 'left wheel forward ',
    previousStatement: null,
    nextStatement: null,
    colour: 90,
    tooltip: '',
    helpUrl: '',
  },
  {
    type: 'look_up_right',
    message0: 'look upper right %1',
    args0: [
      {
        type: 'field_image',
        src: lookUpRight,
        width: 25,
        height: 25,
        alt: '*',
        flipRtl: false,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 300,
    tooltip: '',
    helpUrl: '',
  },
  {
    type: 'all_parts',
    message0:
      'eyes %1 head %2 left arm %3 right arm %4 left leg %5 right leg %6',
    args0: [
      {
        type: 'input_statement',
        name: 'eyes',
        check: 'eye',
      },
      {
        type: 'input_statement',
        name: 'head',
        check: 'head',
      },
      {
        type: 'input_statement',
        name: 'left_arm',
      },
      {
        type: 'input_statement',
        name: 'right_arm',
      },
      {
        type: 'input_statement',
        name: 'left_leg',
      },
      {
        type: 'input_statement',
        name: 'right_leg',
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 40,
    tooltip: '',
    helpUrl: '',
  },
  {
    type: 'time_block',
    message0: 'Duration:  %1 sec %2 %3',
    args0: [
      {
        type: 'field_dropdown',
        name: 'sec',
        options: [
          ['1', '1'],
          ['2', '2'],
          ['3', '3'],
          ['4', '4'],
          ['5', '5'],
          ['6', '6'],
          ['7', '7'],
          ['8', '8'],
          ['9', '9'],
          ['0', '0'],
          ['0.5', '0.5'],
        ],
      },
      {
        type: 'field_image',
        src: duration,
        width: 20,
        height: 20,
        alt: '*',
        flipRtl: false,
      },
      {
        type: 'input_statement',
        name: 'duration',
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 60,
    tooltip: '',
    helpUrl: '',
  },
  {
    type: 'right_wheel_forward',
    message0: 'right wheel forward  %1',
    args0: [
      {
        type: 'field_image',
        src: forward,
        width: 25,
        height: 25,
        alt: '*',
        flipRtl: false,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 195,
    tooltip: '',
    helpUrl: '',
  },
  {
    type: 'left_wheel_forward',
    message0: 'left wheel forward  %1',
    args0: [
      {
        type: 'field_image',
        src: forward,
        width: 25,
        height: 25,
        alt: '*',
        flipRtl: false,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 285,
    tooltip: '',
    helpUrl: '',
  },
  {
    type: 'right_wheel_backward',
    message0: 'right wheel backward %1',
    args0: [
      {
        type: 'field_image',
        src: backward,
        width: 25,
        height: 25,
        alt: '*',
        flipRtl: false,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 330,
    tooltip: '',
    helpUrl: '',
  },
  {
    type: 'left_wheel_backward',
    message0: 'left wheel backward %1',
    args0: [
      {
        type: 'field_image',
        src: backward,
        width: 25,
        height: 25,
        alt: '*',
        flipRtl: false,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 0,
    tooltip: '',
    helpUrl: '',
  },

  /////////////////////////////////////////////////

  {
    type: 'normal_head',
    message0: 'normal head %1',
    args0: [
      {
        type: 'field_image',
        src: normalHead,
        width: 25,
        height: 25,
        alt: '*',
        flipRtl: false,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 360,
    tooltip: '',
    helpUrl: '',
  },
  {
    type: 'normal_arms',
    message0: 'normal arms  %1',
    args0: [
      {
        type: 'field_image',
        src: normalArms,
        width: 25,
        height: 25,
        alt: '*',
        flipRtl: false,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 75,
    tooltip: '',
    helpUrl: '',
  },
  {
    type: 'normal_right_arm',
    message0: 'normal right arm %1',
    args0: [
      {
        type: 'field_image',
        src: 'https://www.gstatic.com/codesite/ph/images/star_on.gif',
        width: 15,
        height: 15,
        alt: '*',
        flipRtl: false,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 300,
    tooltip: '',
    helpUrl: '',
  },
  {
    type: 'raise_left_arm_60_',
    message0: 'raise left arm 60° %1',
    args0: [
      {
        type: 'field_image',
        src: raiseLeft60,
        width: 25,
        height: 25,
        alt: '*',
        flipRtl: false,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 135,
    tooltip: '',
    helpUrl: '',
  },
  {
    type: 'raise_left_arm_180_',
    message0: 'raise left arm 180° %1',
    args0: [
      {
        type: 'field_image',
        src: raiseLeft180,
        width: 25,
        height: 25,
        alt: '*',
        flipRtl: false,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 270,
    tooltip: '',
    helpUrl: '',
  },
  {
    type: 'raise_left_arm_150',
    message0: 'raise left arm 150 ° %1',
    args0: [
      {
        type: 'field_image',
        src: raiseLeft150,
        width: 25,
        height: 25,
        alt: '*',
        flipRtl: false,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 300,
    tooltip: '',
    helpUrl: '',
  },
  {
    type: 'raise_left_arm_120',
    message0: 'raise left arm 120 ° %1',
    args0: [
      {
        type: 'field_image',
        src: raiseLeft120,
        width: 25,
        height: 25,
        alt: '*',
        flipRtl: false,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: '',
    helpUrl: '',
  },
  {
    type: 'raise_right_arm_60_',
    message0: 'raise right arm 60° %1',
    args0: [
      {
        type: 'field_image',
        src: raiseRight60,
        width: 25,
        height: 25,
        alt: '*',
        flipRtl: false,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 45,
    tooltip: '',
    helpUrl: '',
  },
  {
    type: 'raise_right_arm_120_',
    message0: 'raise right arm 120° %1',
    args0: [
      {
        type: 'field_image',
        src: raiseRight120,
        width: 25,
        height: 25,
        alt: '*',
        flipRtl: false,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 145,
    tooltip: '',
    helpUrl: '',
  },
  {
    type: 'raise_right_arm_150_',
    message0: 'raise right arm 150° %1',
    args0: [
      {
        type: 'field_image',
        src: raiseRight150,
        width: 25,
        height: 25,
        alt: '*',
        flipRtl: false,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 30,
    tooltip: '',
    helpUrl: '',
  },
  {
    type: 'raise_right_arm_180_',
    message0: 'raise right arm 180° %1',
    args0: [
      {
        type: 'field_image',
        src: raiseRight180,
        width: 25,
        height: 25,
        alt: '*',
        flipRtl: false,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 320,
    tooltip: '',
    helpUrl: '',
  },
  {
    type: 'raise_right_arm_90_',
    message0: 'raise right arm 90° %1',
    args0: [
      {
        type: 'field_image',
        src: raiseRight90,
        width: 25,
        height: 25,
        alt: '*',
        flipRtl: false,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 75,
    tooltip: '',
    helpUrl: '',
  },
  {
    type: 'raise_left_arm_90_',
    message0: 'raise left arm 90° %1',
    args0: [
      {
        type: 'field_image',
        src: raiseLeft90,
        width: 25,
        height: 25,
        alt: '*',
        flipRtl: false,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 175,
    tooltip: '',
    helpUrl: '',
  },
  {
    type: 'all_part',
    message0:
      'eyes %1 head %2 left arm %3 right arm %4 left leg %5 right leg %6',
    args0: [
      {
        type: 'input_statement',
        name: 'eyes',
      },
      {
        type: 'input_statement',
        name: 'head',
      },
      {
        type: 'input_statement',
        name: 'left_arm',
      },
      {
        type: 'input_statement',
        name: 'right_arm',
      },
      {
        type: 'input_statement',
        name: 'left_leg',
      },
      {
        type: 'input_statement',
        name: 'right_leg',
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 330,
    tooltip: '',
    helpUrl: '',
  },
]);
