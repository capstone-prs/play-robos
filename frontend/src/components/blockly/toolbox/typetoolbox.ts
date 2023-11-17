import { ToolboxDefinition } from 'blockly/core/utils/toolbox';

// get the blocks of a certain setting
const getBlocks = (setting: Array<string>) => {
  return setting.map((block) => {
    return {
      kind: 'block',
      type: block
    };
  });
};

// define blocks for each setting
//<-------- setting 1 ---------------->
const setting1_5_7_eyes = [
  'normal_look',
  'close_eyes',
  'look_right',
  'look_left',
  'look_up_left',
  'look_up_right'
];
const setting1_5_7_arms = ['raise_left_arm_60_', 'raise_right_arm_60_'];
//<-------- setting 1 ---------------->

//-----------------------------------//

//<-------- setting 2 ---------------->
const setting2_5_7_eyes = [
  'normal_look',
  'close_eyes',
  'look_right',
  'look_left',
  'look_up_left',
  'look_up_right'
];
const setting2_5_7_arms = ['raise_left_arm_60_', 'raise_right_arm_60_'];

const setting2_5_7_head = ['head_trun_left', 'turn_head_right'];
//<-------- setting 2 ---------------->

//-----------------------------------//

//<-------- setting 3 ---------------->
const setting3_5_7_eyes = [
  'normal_look',
  'close_eyes',
  'look_right',
  'look_left',
  'look_up_left',
  'look_up_right'
];
const setting3_5_7_arms = [
  'raise_left_arm_60_',
  'raise_right_arm_60_',
  'raise_left_arm_90_',
  'raise_right_arm_90_'
];

const setting3_5_7_head = ['head_trun_left', 'turn_head_right'];
//<-------- setting 3 ---------------->

// export the toolbox of each setting. NOTE: To improve
export const toolbox_5_7: Array<ToolboxDefinition> = [
  //<-------- setting 1 ---------------->
  {
    kind: 'categoryToolbox',
    contents: [
      {
        kind: 'category',
        name: 'Eyes',
        contents: getBlocks(setting1_5_7_eyes)
      },
      {
        kind: 'category',
        name: 'Arms',
        contents: getBlocks(setting1_5_7_arms)
      }
    ]
  },
  //<-------- setting 1 ---------------->
  //-----------------------------------//
  //<-------- setting 2 ---------------->
  {
    kind: 'categoryToolbox',
    contents: [
      {
        kind: 'category',
        name: 'Head',
        contents: getBlocks(setting2_5_7_head)
      },
      {
        kind: 'category',
        name: 'Eyes',
        contents: getBlocks(setting2_5_7_eyes)
      },
      {
        kind: 'category',
        name: 'Arms',
        contents: getBlocks(setting2_5_7_arms)
      }
    ]
  },
  //<-------- setting 2 ---------------->
  //-----------------------------------//
  //<-------- setting 2 ---------------->
  {
    kind: 'categoryToolbox',
    contents: [
      {
        kind: 'category',
        name: 'Head',
        contents: getBlocks(setting3_5_7_head)
      },
      {
        kind: 'category',
        name: 'Eyes',
        contents: getBlocks(setting3_5_7_eyes)
      },
      {
        kind: 'category',
        name: 'Arms',
        contents: getBlocks(setting3_5_7_arms)
      }
    ]
  }
];
//<-------- setting 1 age group8-11---------------->
const setting1_5_8_eyes = [
  'normal_look',
  'close_eyes',
  'look_right',
  'look_left',
  'look_up_left',
  'look_up_right'
];
const setting1_5_8_head = ['head_trun_left', 'turn_head_right'];
const setting1_5_8_arms = [
  'raise_left_arm_120',
  'raise_right_arm_120_',
  'raise_right_arm_60_',
  'raise_left_arm_60_'
];
//<-------- setting 1 age group8-11---------------->

const setting2_5_8_eyes = [
  'normal_look',
  'close_eyes',
  'look_right',
  'look_left',
  'look_up_left',
  'look_up_right'
];
const setting2_5_8_head = ['head_trun_left', 'turn_head_right'];
const setting2_5_8_arms = [
  'raise_left_arm_120',
  'raise_right_arm_120_',
  'raise_left_arm_90_',
  'raise_right_arm_90_'
];

const setting3_5_8_eyes = [
  'normal_look',
  'close_eyes',
  'look_right',
  'look_left',
  'look_up_left',
  'look_up_right'

];
const setting3_5_8_head = [
  'head_trun_left',
  'turn_head_right'
];
const setting3_5_8_arms = [
  'raise_left_arm_120',
  'raise_right_arm_120_',
  'raise_left_arm_90_',
  'raise_right_arm_90_',
  'raise_right_arm_150_',
  'raise_left_arm_150'
];

// NOTE: To improve
export const toolbox_8_11: Array<ToolboxDefinition> = [
  {
    kind: 'categoryToolbox',
    contents: [
      {
        kind: 'category',
        name: 'Head',
        contents: getBlocks(setting1_5_8_head)
      },
      {
        kind: 'category',
        name: 'Eyes',
        contents: getBlocks(setting1_5_8_eyes)
      },
      {
        kind: 'category',
        name: 'Arms',
        contents: getBlocks(setting1_5_8_arms)
      }
    ]
  },
  {
    kind: 'categoryToolbox',
    contents: [
      {
        kind: 'category',
        name: 'Head',
        contents: getBlocks(setting2_5_8_head)
      },
      {
        kind: 'category',
        name: 'Eyes',
        contents: getBlocks(setting2_5_8_eyes)
      },
      {
        kind: 'category',
        name: 'Arms',
        contents: getBlocks(setting2_5_8_arms)
      }
    ]
  },
  {
    kind: 'categoryToolbox',
    contents: [
      {
        kind: 'category',
        name: 'Head',
        contents: getBlocks(setting3_5_8_head)
      },
      {
        kind: 'category',
        name: 'Eyes',
        contents: getBlocks(setting3_5_8_eyes)
      },
      {
        kind: 'category',
        name: 'Arms',
        contents: getBlocks(setting3_5_8_arms)
      }
    ]
  }
];
