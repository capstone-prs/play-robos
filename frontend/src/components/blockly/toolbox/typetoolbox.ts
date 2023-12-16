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
const setting1_easy_head = ['normal_head', 'head_trun_left', 'turn_head_right'];
const setting1_easy_eyes = [
  'normal_look',
  'close_eyes',
  'look_up',
  'wink_right',
  'wink_left',
  'look_right',
  'look_left',
  'look_up_left',
  'look_up_right',
];
const setting1_easy_left_arms = [
  'normal_left_arm',
  'raise_left_arm_60_',
  'raise_left_arm_90_',
  'raise_left_arm_120',
  'raise_left_arm_150',
  'raise_left_arm_180_',
];
const setting1_easy_right_arms = [
  'normal_right_arm',
  'raise_right_arm_60_',
  'raise_right_arm_90_',
  'raise_right_arm_120_',
  'raise_right_arm_150_',
  'raise_right_arm_180_',
];
const setting1_easy_wheels = ['left_wheel_forward', 'right_wheel_forward'];
const special_block = ['all_parts'];

// export the toolbox of each setting. NOTE: To improve
export const toolbox_easy: Array<ToolboxDefinition> = [
  //<-------- setting 1 ---------------->
  {
    kind: 'categoryToolbox',
    contents: [
      {
        kind: 'category',
        name: 'Head',
        contents: getBlocks(setting1_easy_head),
      },
      {
        kind: 'category',
        name: 'Eyes',
        contents: getBlocks(setting1_easy_eyes),
      },
      {
        kind: 'category',
        name: 'Left Arm',
        contents: getBlocks(setting1_easy_left_arms),
      },
      {
        kind: 'category',
        name: 'Right Arm',
        contents: getBlocks(setting1_easy_right_arms),
      },
      {
        kind: 'category',
        name: 'Wheels',
        contents: getBlocks(setting1_easy_wheels),
      },
      {
        kind: 'category',
        name: 'Special Block',
        contents: getBlocks(special_block),
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
        contents: getBlocks(setting1_easy_head),
      },
      {
        kind: 'category',
        name: 'Eyes',
        contents: getBlocks(setting1_easy_eyes),
      },
      {
        kind: 'category',
        name: 'Left Arm',
        contents: getBlocks(setting1_easy_left_arms),
      },
      {
        kind: 'category',
        name: 'Right Arm',
        contents: getBlocks(setting1_easy_right_arms),
      },
      {
        kind: 'category',
        name: 'Wheels',
        contents: getBlocks(setting1_easy_wheels),
      },
      {
        kind: 'category',
        name: 'Special Block',
        contents: getBlocks(special_block),
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
        contents: getBlocks(setting1_easy_head),
      },
      {
        kind: 'category',
        name: 'Eyes',
        contents: getBlocks(setting1_easy_eyes),
      },
      {
        kind: 'category',
        name: 'Left Arm',
        contents: getBlocks(setting1_easy_left_arms),
      },
      {
        kind: 'category',
        name: 'Right Arm',
        contents: getBlocks(setting1_easy_right_arms),
      },
      {
        kind: 'category',
        name: 'Wheels',
        contents: getBlocks(setting1_easy_wheels),
      },
      {
        kind: 'category',
        name: 'Special Block',
        contents: getBlocks(special_block),
      },
    ],
  },
  {
    kind: 'categoryToolbox',
    contents: [
      {
        kind: 'category',
        name: 'Head',
        contents: getBlocks(setting1_easy_head),
      },
      {
        kind: 'category',
        name: 'Eyes',
        contents: getBlocks(setting1_easy_eyes),
      },
      {
        kind: 'category',
        name: 'Left Arm',
        contents: getBlocks(setting1_easy_left_arms),
      },
      {
        kind: 'category',
        name: 'Right Arm',
        contents: getBlocks(setting1_easy_right_arms),
      },
      {
        kind: 'category',
        name: 'Wheels',
        contents: getBlocks(setting1_easy_wheels),
      },
      {
        kind: 'category',
        name: 'Special Block',
        contents: getBlocks(special_block),
      },
    ],
  },
  {
    kind: 'categoryToolbox',
    contents: [
      {
        kind: 'category',
        name: 'Head',
        contents: getBlocks(setting1_easy_head),
      },
      {
        kind: 'category',
        name: 'Eyes',
        contents: getBlocks(setting1_easy_eyes),
      },
      {
        kind: 'category',
        name: 'Left Arm',
        contents: getBlocks(setting1_easy_left_arms),
      },
      {
        kind: 'category',
        name: 'Right Arm',
        contents: getBlocks(setting1_easy_right_arms),
      },
      {
        kind: 'category',
        name: 'Wheels',
        contents: getBlocks(setting1_easy_wheels),
      },
      {
        kind: 'category',
        name: 'Special Block',
        contents: getBlocks(special_block),
      },
    ],
  },
];


// NOTE: To improve
export const toolbox_hard: Array<ToolboxDefinition> = [
  {
    kind: 'categoryToolbox',
    contents: [
      {
        kind: 'category',
        name: 'Head',
        contents: getBlocks(setting1_easy_head),
      },
      {
        kind: 'category',
        name: 'Eyes',
        contents: getBlocks(setting1_easy_eyes),
      },
      {
        kind: 'category',
        name: 'Left Arm',
        contents: getBlocks(setting1_easy_left_arms),
      },
      {
        kind: 'category',
        name: 'Right Arm',
        contents: getBlocks(setting1_easy_right_arms),
      },
      {
        kind: 'category',
        name: 'Wheels',
        contents: getBlocks(setting1_easy_wheels),
      },
      {
        kind: 'category',
        name: 'Special Block',
        contents: getBlocks(special_block),
      },
    ],
  },
  {
    kind: 'categoryToolbox',
    contents: [
      {
        kind: 'category',
        name: 'Head',
        contents: getBlocks(setting1_easy_head),
      },
      {
        kind: 'category',
        name: 'Eyes',
        contents: getBlocks(setting1_easy_eyes),
      },
      {
        kind: 'category',
        name: 'Left Arm',
        contents: getBlocks(setting1_easy_left_arms),
      },
      {
        kind: 'category',
        name: 'Right Arm',
        contents: getBlocks(setting1_easy_right_arms),
      },
      {
        kind: 'category',
        name: 'Wheels',
        contents: getBlocks(setting1_easy_wheels),
      },
      {
        kind: 'category',
        name: 'Special Block',
        contents: getBlocks(special_block),
      },
    ],
  },
  {
    kind: 'categoryToolbox',
    contents: [
      {
        kind: 'category',
        name: 'Head',
        contents: getBlocks(setting1_easy_head),
      },
      {
        kind: 'category',
        name: 'Eyes',
        contents: getBlocks(setting1_easy_eyes),
      },
      {
        kind: 'category',
        name: 'Left Arm',
        contents: getBlocks(setting1_easy_left_arms),
      },
      {
        kind: 'category',
        name: 'Right Arm',
        contents: getBlocks(setting1_easy_right_arms),
      },
      {
        kind: 'category',
        name: 'Wheels',
        contents: getBlocks(setting1_easy_wheels),
      },
      {
        kind: 'category',
        name: 'Special Block',
        contents: getBlocks(special_block),
      },
    ],
  },
  {
    kind: 'categoryToolbox',
    contents: [
      {
        kind: 'category',
        name: 'Head',
        contents: getBlocks(setting1_easy_head),
      },
      {
        kind: 'category',
        name: 'Eyes',
        contents: getBlocks(setting1_easy_eyes),
      },
      {
        kind: 'category',
        name: 'Left Arm',
        contents: getBlocks(setting1_easy_left_arms),
      },
      {
        kind: 'category',
        name: 'Right Arm',
        contents: getBlocks(setting1_easy_right_arms),
      },
      {
        kind: 'category',
        name: 'Wheels',
        contents: getBlocks(setting1_easy_wheels),
      },
      {
        kind: 'category',
        name: 'Special Block',
        contents: getBlocks(special_block),
      },
    ],
  },
  {
    kind: 'categoryToolbox',
    contents: [
      {
        kind: 'category',
        name: 'Head',
        contents: getBlocks(setting1_easy_head),
      },
      {
        kind: 'category',
        name: 'Eyes',
        contents: getBlocks(setting1_easy_eyes),
      },
      {
        kind: 'category',
        name: 'Left Arm',
        contents: getBlocks(setting1_easy_left_arms),
      },
      {
        kind: 'category',
        name: 'Right Arm',
        contents: getBlocks(setting1_easy_right_arms),
      },
      {
        kind: 'category',
        name: 'Wheels',
        contents: getBlocks(setting1_easy_wheels),
      },
      {
        kind: 'category',
        name: 'Special Block',
        contents: getBlocks(special_block),
      },
    ],
  },
];
