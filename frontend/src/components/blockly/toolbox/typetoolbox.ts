import { ToolboxDefinition } from 'blockly/core/utils/toolbox';

// get the blocks of a certain setting
const getBlocks = (setting: Array<string>) => {
  return setting.map((block) => {
    return {
      kind: 'block',
      type: block,
    };
  });
};

// define blocks for each setting
//<-------- setting 1 ---------------->
const setting1_easy_eyes = [
  'normal_look',
  'close_eyes',
  'look_right',
  'look_left',
  'look_up_left',
  'look_up_right',
];
const setting1_easy_arms = ['raise_left_arm_60_', 'raise_right_arm_60_'];
//<-------- setting 1 ---------------->

//-----------------------------------//

//<-------- setting 2 ---------------->
const setting2_easy_eyes = [
  'normal_look',
  'close_eyes',
  'look_right',
  'look_left',
  'look_up_left',
  'look_up_right',
];
const setting2_easy_arms = ['raise_left_arm_60_', 'raise_right_arm_60_'];

const setting2_easy_head = ['head_trun_left', 'turn_head_right'];
//<-------- setting 2 ---------------->

//-----------------------------------//

//<-------- setting 3 ---------------->
const setting3_easy_eyes = [
  'normal_look',
  'close_eyes',
  'look_right',
  'look_left',
  'look_up_left',
  'look_up_right',
];
const setting3_easy_arms = [
  'raise_left_arm_60_',
  'raise_right_arm_60_',
  'raise_left_arm_90_',
  'raise_right_arm_90_',
];

const setting3_easy_head = ['head_trun_left', 'turn_head_right'];
//<-------- setting 3 ---------------->

// export the toolbox of each setting. NOTE: To improve
export const toolbox_easy: Array<ToolboxDefinition> = [
  //<-------- setting 1 ---------------->
  {
    kind: 'categoryToolbox',
    contents: [
      {
        kind: 'category',
        name: 'Eyes',
        contents: getBlocks(setting1_easy_eyes),
      },
      {
        kind: 'category',
        name: 'Arms',
        contents: getBlocks(setting1_easy_arms),
      },
    ],
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
        contents: getBlocks(setting2_easy_head),
      },
      {
        kind: 'category',
        name: 'Eyes',
        contents: getBlocks(setting2_easy_eyes),
      },
      {
        kind: 'category',
        name: 'Arms',
        contents: getBlocks(setting2_easy_arms),
      },
    ],
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
        contents: getBlocks(setting3_easy_head),
      },
      {
        kind: 'category',
        name: 'Eyes',
        contents: getBlocks(setting3_easy_eyes),
      },
      {
        kind: 'category',
        name: 'Arms',
        contents: getBlocks(setting3_easy_arms),
      },
    ],
  },
];
//<-------- setting 1 age group8-11---------------->
const setting1_hard_eyes = [
  'normal_look',
  'close_eyes',
  'look_right',
  'look_left',
  'look_up_left',
  'look_up_right',
];
const setting1_hard_head = ['head_trun_left', 'turn_head_right'];
const setting1_hard_arms = [
  'raise_left_arm_120',
  'raise_right_arm_120_',
  'raise_right_arm_60_',
  'raise_left_arm_60_',
];
//<-------- setting 1 age group8-11---------------->

const setting2_hard_eyes = [
  'normal_look',
  'close_eyes',
  'look_right',
  'look_left',
  'look_up_left',
  'look_up_right',
];
const setting2_hard_head = ['head_trun_left', 'turn_head_right'];
const setting2_hard_arms = [
  'raise_left_arm_120',
  'raise_right_arm_120_',
  'raise_left_arm_90_',
  'raise_right_arm_90_',
];

const setting3_hard_eyes = [
  'normal_look',
  'close_eyes',
  'look_right',
  'look_left',
  'look_up_left',
  'look_up_right',
];
const setting3_hard_head = ['head_trun_left', 'turn_head_right'];
const setting3_hard_arms = [
  'raise_left_arm_120',
  'raise_right_arm_120_',
  'raise_left_arm_90_',
  'raise_right_arm_90_',
  'raise_right_arm_150_',
  'raise_left_arm_150',
];

// NOTE: To improve
export const toolbox_hard: Array<ToolboxDefinition> = [
  {
    kind: 'categoryToolbox',
    contents: [
      {
        kind: 'category',
        name: 'Head',
        contents: getBlocks(setting1_hard_head),
      },
      {
        kind: 'category',
        name: 'Eyes',
        contents: getBlocks(setting1_hard_eyes),
      },
      {
        kind: 'category',
        name: 'Arms',
        contents: getBlocks(setting1_hard_arms),
      },
    ],
  },
  {
    kind: 'categoryToolbox',
    contents: [
      {
        kind: 'category',
        name: 'Head',
        contents: getBlocks(setting2_hard_head),
      },
      {
        kind: 'category',
        name: 'Eyes',
        contents: getBlocks(setting2_hard_eyes),
      },
      {
        kind: 'category',
        name: 'Arms',
        contents: getBlocks(setting2_hard_arms),
      },
    ],
  },
  {
    kind: 'categoryToolbox',
    contents: [
      {
        kind: 'category',
        name: 'Head',
        contents: getBlocks(setting3_hard_head),
      },
      {
        kind: 'category',
        name: 'Eyes',
        contents: getBlocks(setting3_hard_eyes),
      },
      {
        kind: 'category',
        name: 'Arms',
        contents: getBlocks(setting3_hard_arms),
      },
    ],
  },
];
