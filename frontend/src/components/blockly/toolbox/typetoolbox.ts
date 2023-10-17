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
const setting1_5_7 = [
  'normal_look',
  'close_eyes',
  'look_right',
  'look_left',
  'look_up_left',
  'look_up_right',
  'raise_left_arm_60_',
  'raise_right_arm_60_',
];

const setting2_5_7 = [
  'normal_look',
  'close_eyes',
  'look_right',
  'look_left',
  'look_up_left',
  'look_up_right',
  'raise_left_arm_60_',
  'raise_right_arm_60_',
  'head_trun_left',
  'turn_head_right',
];

const setting3_5_7 = [
  'normal_look',
  'close_eyes',
  'look_right',
  'look_left',
  'look_up_left',
  'look_up_right',
  'head_trun_left',
  'turn_head_right',
  'raise_left_arm_60_',
  'raise_right_arm_60_',
  'raise_left_arm_90_',
  'raise_right_arm_90_',
];

// export the toolbox of each setting. NOTE: To improve
export const toolbox_5_7: Array<ToolboxDefinition> = [
  {
    kind: 'flyoutToolbox',
    contents: getBlocks(setting1_5_7),
  },
  {
    kind: 'flyoutToolbox',
    contents: getBlocks(setting2_5_7),
  },
  {
    kind: 'flyoutToolbox',
    contents: getBlocks(setting3_5_7),
  },
];

const setting1_5_8 = [
  'normal_look',
  'close_eyes',
  'look_right',
  'look_left',
  'look_up_left',
  'look_up_right',
  'head_trun_left',
  'turn_head_right',
  'raise_left_arm_120',
  'raise_right_arm_120_',
];

const setting2_5_8 = [
  'normal_look',
  'close_eyes',
  'look_right',
  'look_left',
  'look_up_left',
  'look_up_right',
  'head_trun_left',
  'turn_head_right',
  'raise_left_arm_120',
  'raise_right_arm_120_',
  'raise_left_arm_90_',
  'raise_right_arm_90_',
];

const setting3_5_8 = [
  'normal_look',
  'close_eyes',
  'look_right',
  'look_left',
  'look_up_left',
  'look_up_right',
  'head_trun_left',
  'turn_head_right',
  'raise_left_arm_120',
  'raise_right_arm_120_',
  'raise_left_arm_90_',
  'raise_right_arm_90_',
  'raise_right_arm_150_',
  'raise_left_arm_150',
];

// NOTE: To improve
export const toolbox_8_11: Array<ToolboxDefinition> = [
  {
    kind: 'flyoutToolbox',
    contents: getBlocks(setting1_5_8),
  },
  {
    kind: 'flyoutToolbox',
    contents: getBlocks(setting2_5_8),
  },
  {
    kind: 'flyoutToolbox',
    contents: getBlocks(setting3_5_8),
  },
];
