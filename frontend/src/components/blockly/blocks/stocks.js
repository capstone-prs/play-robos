import Blockly from 'blockly';
import forward from '../../../assets/forward.svg'
import backward from '../../../assets/backward.svg'
import raisHandLeft from '../../../assets/raisHandLeft.svg'
import raisHandRight from '../../../assets/raisHandRight.svg'
import turnRightHead from '../../../assets/turnRightHead.svg'
import turnLeftHead from '../../../assets/turnLeftHead.svg'
import lookLeft from '../../../assets/lookLeft.svg'
import look from '../../../assets/look.svg'
import lookUp from '../../../assets/lookUp.svg'
import lookRight from '../../../assets/lookRight.svg'
import LookUpLeft from '../../../assets/LookUpLeft.svg'
import LookUpRight from '../../../assets/lookUpRight.svg'
import winkRight from '../../../assets/winkRight.svg'
import winkLeft from '../../../assets/winkLeft.svg'
import closeEyes from '../../../assets/closeEyes.svg'
import semiClose from '../../../assets/semiCLose.svg'
import halfRaiseRightArm from '../../../assets/halfRaiseRightArm.svg'
import halfRaiseLeftArm from '../../../assets/halfRaiseLeftArm.svg'
import normalArms from '../../../assets/normalArms.svg'
import duration from '../../../assets/duration.svg'
import normalLook from '../../../assets/NormalLook.svg'
import raise60Right from'../../../assets/raise60.svg'
import raise150Right from'../../../assets/raise150.svg'
import raise120Right from'../../../assets/raise120.svg'
import raise60Left from'../../../assets/raise60Left.svg'
import raise150Left from '../../../assets/raiseLeft150.svg'
import raise120Left from '../../../assets/raiseLeft120.svg'
Blockly.defineBlocksWithJsonArray(
[{
  'type': 'normal_look',
  'message0': 'normal look %1',
  'args0': [
    {
      'type': 'field_image',
      'src': look,
      'width': 25,
      'height': 25,
      'alt': '*',
      'flipRtl': false
    }
  ],
  'previousStatement': null,
  'nextStatement': null,
  'colour': 230,
  'tooltip': '',
  'helpUrl': ''
},
{
  'type': 'look_up',
  'message0': 'look up %1',
  'args0': [
    {
      'type': 'field_image',
      'src': lookUp,
      'width': 25,
      'height': 25,
      'alt': '*',
      'flipRtl': false
    }
  ],
  'previousStatement': null,
  'nextStatement': null,
  'colour': 165,
  'tooltip': '',
  'helpUrl': ''
},
{
  'type': 'semi_close',
  'message0': 'semi close %1',
  'args0': [
    {
      'type': 'field_image',
      'src': semiClose,
      'width': 25,
      'height': 25,
      'alt': '*',
      'flipRtl': false
    }
  ],
  'previousStatement': null,
  'nextStatement': null,
  'colour': 105,
  'tooltip': '',
  'helpUrl': ''
},
{
  'type': 'look_right',
  'message0': 'look right %1',
  'args0': [
    {
      'type': 'field_image',
      'src': lookRight,
      'width': 25,
      'height': 25,
      'alt': '*',
      'flipRtl': false
    }
  ],
  'previousStatement': null,
  'nextStatement': null,
  'colour': 105,
  'tooltip': '',
  'helpUrl': ''
},
{
  'type': 'look_left',
  'message0': 'look Left %1',
  'args0': [
    {
      'type': 'field_image',
      'src': lookLeft,
      'width': 25,
      'height': 25,
      'alt': '*',
      'flipRtl': false
    }
  ],
  'previousStatement': null,
  'nextStatement': null,
  'colour': 5,
  'tooltip': '',
  'helpUrl': ''
},
{
  'type': 'look_up_left',
  'message0': 'Look Upper Left %1',
  'args0': [
    {
      'type': 'field_image',
      'src': LookUpLeft,
      'width': 25,
      'height': 25,
      'alt': '*',
      'flipRtl': false
    }
  ],
  'previousStatement': null,
  'nextStatement': null,
  'colour': 155,
  'tooltip': '',
  'helpUrl': ''
},
{
  'type': 'wink_right',
  'message0': 'wink right %1',
  'args0': [
    {
      'type': 'field_image',
      'src': winkRight,
      'width': 25,
      'height': 25,
      'alt': '*',
      'flipRtl': false
    }
  ],
  'previousStatement': null,
  'nextStatement': null,
  'colour': 345,
  'tooltip': '',
  'helpUrl': ''
},
{
  'type': 'wink_left',
  'message0': 'wink left %1',
  'args0': [
    {
      'type': 'field_image',
      'src': winkLeft,
      'width': 25,
      'height': 25,
      'alt': '*',
      'flipRtl': false
    }
  ],
  'previousStatement': null,
  'nextStatement': null,
  'colour': 40,
  'tooltip': '',
  'helpUrl': ''
},
{
  'type': 'close_eyes',
  'message0': 'Close Eyes %1',
  'args0': [
    {
      'type': 'field_image',
      'src': closeEyes,
      'width': 25,
      'height': 25,
      'alt': '*',
      'flipRtl': false
    }
  ],
  'previousStatement': null,
  'nextStatement': null,
  'colour': 230,
  'tooltip': '',
  'helpUrl': ''
},
{
  'type': 'head_trun_left',
  'message0': 'turn head left %1',
  'args0': [
    {
      'type': 'field_image',
      'src': turnLeftHead,
      'width': 25,
      'height': 25,
      'alt': '*',
      'flipRtl': false
    }
  ],
  'previousStatement': null,
  'nextStatement': null,
  'colour': 45,
  'tooltip': '',
  'helpUrl': ''
},
{
  'type': 'turn_head_right',
  'message0': 'turn head right %1',
  'args0': [
    {
      'type': 'field_image',
      'src': turnRightHead,
      'width': 25,
      'height': 25,
      'alt': '*',
      'flipRtl': false
    }
  ],
  'previousStatement': null,
  'nextStatement': null,
  'colour': 240,
  'tooltip': '',
  'helpUrl': ''
},
{
  'type': 'left_wheel_forward',
  'message0': 'left wheel forward ',
  'previousStatement': null,
  'nextStatement': null,
  'colour': 90,
  'tooltip': '',
  'helpUrl': ''
},
{
  'type': 'look_up_right',
  'message0': 'look upper right %1',
  'args0': [
    {
      'type': 'field_image',
      'src':LookUpRight,
      'width': 25,
      'height': 25,
      'alt': '*',
      'flipRtl': false
    }
  ],
  'previousStatement': null,
  'nextStatement': null,
  'colour': 300,
  'tooltip': '',
  'helpUrl': ''
},

{
  'type': 'time_block',
  'message0': 'Duration:  %1 sec %2',
  'args0': [
    {
      'type': 'field_number',
      'name': 'NAME',
      'value': 0,
      'min': 1,
      'max': 10
    },
    {
      'type': 'field_image',
      'src': duration,
      'width': 25,
      'height': 25,
      'alt': '*',
      'flipRtl': false
    }
  ],
  'previousStatement': null,
  'nextStatement': null,
  'colour': 60,
  'tooltip': '',
  'helpUrl': ''
},
{
  'type': 'all_parts',
  'message0': 'eyes %1 head %2 neck %3 left arm %4 right arm %5 left leg %6 right leg %7',
  'args0': [
    {
      'type': 'input_statement',
      'name': 'eyes'
    },
    {
      'type': 'input_statement',
      'name': 'head'
    },
    {
      'type': 'input_statement',
      'name': 'neck'
    },
    {
      'type': 'input_statement',
      'name': 'left_arm'
    },
    {
      'type': 'input_statement',
      'name': 'right_arm'
    },
    {
      'type': 'input_statement',
      'name': 'left_leg'
    },
    {
      'type': 'input_statement',
      'name': 'right_leg'
    }
  ],
  'previousStatement': null,
  'nextStatement': null,
  'colour': 330,
  'tooltip': '',
  'helpUrl': ''
},
{
  'type': 'right_wheel_forward',
  'message0': 'right wheel forward  %1',
  'args0': [
    {
      'type': 'field_image',
      'src': forward,
      'width': 25,
      'height': 25,
      'alt': '*',
      'flipRtl': false
    }
  ],
  'previousStatement': null,
  'nextStatement': null,
  'colour': 195,
  'tooltip': '',
  'helpUrl': ''
},
{
  'type': 'left_wheel_forward',
  'message0': 'left wheel forward  %1',
  'args0': [
    {
      'type': 'field_image',
      'src': forward,
      'width': 25,
      'height': 25,
      'alt': '*',
      'flipRtl': false
    }
  ],
  'previousStatement': null,
  'nextStatement': null,
  'colour': 285,
  'tooltip': '',
  'helpUrl': ''
},
{
  'type': 'right_wheel_backward',
  'message0': 'right wheel backward %1',
  'args0': [
    {
      'type': 'field_image',
      'src': backward,
      'width': 25,
      'height': 25,
      'alt': '*',
      'flipRtl': false
    }
  ],
  'previousStatement': null,
  'nextStatement': null,
  'colour': 330,
  'tooltip': '',
  'helpUrl': ''
},
{
  'type': 'left_wheel_backward',
  'message0': 'left wheel backward %1',
  'args0': [
    {
      'type': 'field_image',
      'src': backward,
      'width': 25,
      'height': 25,
      'alt': '*',
      'flipRtl': false
    }
  ],
  'previousStatement': null,
  'nextStatement': null,
  'colour': 0,
  'tooltip': '',
  'helpUrl': ''
},

/////////////////////////////////////////////////

{
  'type': 'normal_head',
  'message0': 'normal head %1',
  'args0': [
    {
      'type': 'field_image',
      'src': normalLook,
      'width': 25,
      'height': 25,
      'alt': '*',
      'flipRtl': false
    }
  ],
  'previousStatement': null,
  'nextStatement': null,
  'colour': 360,
  'tooltip': '',
  'helpUrl': ''
},
{
  'type': 'normal_arms',
  'message0': 'normal arms  %1',
  'args0': [
    {
      'type': 'field_image',
      'src': normalArms,
      'width': 25,
      'height': 25,
      'alt': '*',
      'flipRtl': false
    }
  ],
  'previousStatement': null,
  'nextStatement': null,
  'colour': 75,
  'tooltip': '',
  'helpUrl': ''
},
{
  'type': 'normal_right_arm',
  'message0': 'normal right arm %1',
  'args0': [
    {
      'type': 'field_image',
      'src': 'https://www.gstatic.com/codesite/ph/images/star_on.gif',
      'width': 15,
      'height': 15,
      'alt': '*',
      'flipRtl': false
    }
  ],
  'previousStatement': null,
  'nextStatement': null,
  'colour': 300,
  'tooltip': '',
  'helpUrl': ''
},
{
  'type': 'raise_left_arm_60_',
  'message0': 'raise left arm 60° %1',
  'args0': [
    {
      'type': 'field_image',
      'src': raise60Left,
      'width': 25,
      'height': 25,
      'alt': '*',
      'flipRtl': false
    }
  ],
  'previousStatement': null,
  'nextStatement': null,
  'colour': 135,
  'tooltip': '',
  'helpUrl': ''
},
{
  'type': 'raise_left_arm_180_',
  'message0': 'raise left arm 180° %1',
  'args0': [
    {
      'type': 'field_image',
      'src': raisHandLeft,
      'width': 25,
      'height': 25,
      'alt': '*',
      'flipRtl': false
    }
  ],
  'previousStatement': null,
  'nextStatement': null,
  'colour': 270,
  'tooltip': '',
  'helpUrl': ''
},
{
  'type': 'raise_left_arm_150',
  'message0': 'raise left arm 150 ° %1',
  'args0': [
    {
      'type': 'field_image',
      'src': raise150Left,
      'width': 25,
      'height': 25,
      'alt': '*',
      'flipRtl': false
    }
  ],
  'previousStatement': null,
  'nextStatement': null,
  'colour': 300,
  'tooltip': '',
  'helpUrl': ''
},
{
  'type': 'raise_left_arm_120',
  'message0': 'raise left arm 120 ° %1',
  'args0': [
    {
      'type': 'field_image',
      'src': raise120Left,
      'width': 25,
      'height': 25,
      'alt': '*',
      'flipRtl': false
    }
  ],
  'previousStatement': null,
  'nextStatement': null,
  'colour': 120,
  'tooltip': '',
  'helpUrl': ''
},
{
  'type': 'raise_right_arm_60_',
  'message0': 'raise right arm 60° %1',
  'args0': [
    {
      'type': 'field_image',
      'src': raise60Right,
      'width': 25,
      'height': 25,
      'alt': '*',
      'flipRtl': false
    }
  ],
  'previousStatement': null,
  'nextStatement': null,
  'colour': 45,
  'tooltip': '',
  'helpUrl': ''
},
{
  'type': 'raise_right_arm_120_',
  'message0': 'raise right arm 120° %1',
  'args0': [
    {
      'type': 'field_image',
      'src': raise120Right,
      'width': 25,
      'height': 25,
      'alt': '*',
      'flipRtl': false
    }
  ],
  'previousStatement': null,
  'nextStatement': null,
  'colour': 45,
  'tooltip': '',
  'helpUrl': ''
},
{
  'type': 'raise_right_arm_150_',
  'message0': 'raise right arm 150° %1',
  'args0': [
    {
      'type': 'field_image',
      'src': raise150Right,
      'width': 25,
      'height': 25,
      'alt': '*',
      'flipRtl': false
    }
  ],
  'previousStatement': null,
  'nextStatement': null,
  'colour': 270,
  'tooltip': '',
  'helpUrl': ''
},
{
  'type': 'raise_right_arm_180_',
  'message0': 'raise right arm 180° %1',
  'args0': [
    {
      'type': 'field_image',
      'src': raisHandRight,
      'width': 25,
      'height': 25,
      'alt': '*',
      'flipRtl': false
    }
  ],
  'previousStatement': null,
  'nextStatement': null,
  'colour': 320,
  'tooltip': '',
  'helpUrl': ''
},
{
  'type': 'raise_right_arm_90_',
  'message0': 'raise right arm 90° %1',
  'args0': [
    {
      'type': 'field_image',
      'src': halfRaiseRightArm,
      'width': 25,
      'height': 25,
      'alt': '*',
      'flipRtl': false
    }
  ],
  'previousStatement': null,
  'nextStatement': null,
  'colour': 75,
  'tooltip': '',
  'helpUrl': ''
},
{
  'type': 'raise_left_arm_90_',
  'message0': 'raise left arm 90° %1',
  'args0': [
    {
      'type': 'field_image',
      'src': halfRaiseLeftArm,
      'width': 25,
      'height': 25,
      'alt': '*',
      'flipRtl': false
    }
  ],
  'previousStatement': null,
  'nextStatement': null,
  'colour': 175,
  'tooltip': '',
  'helpUrl': ''
}

]


)
