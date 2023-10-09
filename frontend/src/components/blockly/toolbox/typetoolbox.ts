import { ToolboxDefinition } from 'blockly/core/utils/toolbox';

// define blocks for each setting. NOTE: To-change based on activities
const setting1 = [
  'normal_look',
  'look_up',
  'look_right',
  'look_left',
  'look_up_left',
  'look_up_right',
];

const setting2 = [
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
const setting3 = [
  'normal_look',
  'semi_close',
  'close_eyes',
];
const setting4 = [
  'normal_look',
  'wink_right',
  'wink_left',
];
const setting5 = [
  'normal_look',
  'close_eyes',
  'wink_left',
];
const setting6 = [
  'head_trun_left',
  'turn_head_right',
  'normal_head',
];
// get the blocks of a certain setting
const getBlocks = (setting: Array<string>) => {
  return setting.map((block) => {
    return {
      kind: 'block',
      type: block,
    };
  });
};

// export the toolbox of each setting
export const toolbox: Array<ToolboxDefinition> = [
  {
    kind: 'flyoutToolbox',
    contents: getBlocks(setting1),
  },
  {
    kind: 'flyoutToolbox',
    contents: getBlocks(setting2),

  },
  {
    kind: 'flyoutToolbox',
    contents: getBlocks(setting3),
  },
  {
    kind: 'flyoutToolbox',
    contents: getBlocks(setting4),
    },
    {
      kind: 'flyoutToolbox',
      contents: getBlocks(setting5),
    },
    {
      kind: 'flyoutToolbox',
      contents: getBlocks(setting6),
      }
];
