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
];

const setting2_5_7 = [
  'normal_look',
  'look_up',
  'look_right',
  'look_left',
  'look_up_left',
  'look_up_right',
  'wink_right',
  'wink_left',
  'semi_close',
  'close_eyes',
];

const setting3_5_7 = [
  'normal_look',
  'look_up',
  'look_right',
  'look_left',
  'look_up_left',
  'look_up_right',
  'wink_right',
  'wink_left',
  'semi_close',
  'close_eyes',
];

// export the toolbox of each setting
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
];

const setting2_5_8 = [
  'normal_look',
  'look_up',
  'look_right',
  'look_left',
  'look_up_left',
  'look_up_right',
  'wink_right',
  'wink_left',
  'semi_close',
  'close_eyes',
];

const setting3_5_8 = [
  'normal_look',
  'look_up',
  'look_right',
  'look_left',
  'look_up_left',
  'look_up_right',
  'wink_right',
  'wink_left',
  'semi_close',
  'close_eyes',
];

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
