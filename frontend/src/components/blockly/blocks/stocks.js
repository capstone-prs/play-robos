import Blockly from 'blockly';
import forward from '../../../assets/forward.svg';
import backward from '../../../assets/backward.svg';
import raisHandLeft from '../../../assets/raisHandLeft.svg';
import raisHandRight from '../../../assets/raisHandRight.svg';
import turnRightHead from '../../../assets/turnRightHead.svg';
import turnLeftHead from '../../../assets/turnLeftHead.svg';
import lookLeft from '../../../assets/lookLeft.svg';
import look from '../../../assets/look.svg';
import lookUp from '../../../assets/lookUp.svg';
import lookRight from '../../../assets/lookRight.svg';
import LookUpLeft from '../../../assets/LookUpLeft.svg';
import LookUpRight from '../../../assets/lookUpRight.svg';
import winkRight from '../../../assets/winkRight.svg';
import winkLeft from '../../../assets/winkLeft.svg';
import closeEyes from '../../../assets/closeEyes.svg';
import semiClose from '../../../assets/semiCLose.svg';
import halfRaiseRightArm from '../../../assets/halfRaiseRightArm.svg';
import halfRaiseLeftArm from '../../../assets/halfRaiseLeftArm.svg';
import duration from '../../../assets/duration.svg';
Blockly.defineBlocksWithJsonArray([
  {
    type: 'normal_look',
    message0: 'normal look %1',
    args0: [
      {
        type: 'field_image',
        src: look,
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
    message0: 'Look Upper Left %1',
    args0: [
      {
        type: 'field_image',
        src: LookUpLeft,
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
    message0: 'Close Eyes %1',
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
    type: 'left_arm_raise',
    message0: 'raise left arm %1',
    args0: [
      {
        type: 'field_image',
        src: raisHandLeft,
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
    type: 'right_arm_raise',
    message0: 'raise right arm %1',
    args0: [
      {
        type: 'field_image',
        src: raisHandRight,
        width: 25,
        height: 25,
        alt: '*',
        flipRtl: false,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 315,
    tooltip: '',
    helpUrl: '',
  },
  {
    type: 'half_right_arm_raise',
    message0: 'half raise right arm %1',
    args0: [
      {
        type: 'field_image',
        src: halfRaiseRightArm,
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
    type: 'half_left_arm_raise',
    message0: 'half raise left arm %1',
    args0: [
      {
        type: 'field_image',
        src: halfRaiseLeftArm,
        width: 25,
        height: 25,
        alt: '*',
        flipRtl: false,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 125,
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
        src: LookUpRight,
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
    type: 'time_block',
    message0: 'Duration:  %1 sec %2',
    args0: [
      {
        type: 'field_number',
        name: 'NAME',
        value: 0,
        min: 1,
        max: 10,
      },
      {
        type: 'field_image',
        src: duration,
        width: 25,
        height: 25,
        alt: '*',
        flipRtl: false,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 60,
    tooltip: '',
    helpUrl: '',
  },
  {
    type: 'all_together',
    message0: 'all together %1',
    args0: [
      {
        type: 'input_statement',
        name: 'NAME',
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 195,
    tooltip: '',
    helpUrl: '',
  },
  {
    type: 'all_parts',
    message0:
      'eyes %1 head %2 neck %3 left arm %4 right arm %5 left leg %6 right leg %7',
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
        name: 'neck',
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
]);
