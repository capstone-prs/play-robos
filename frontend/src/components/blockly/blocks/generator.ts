import { javascriptGenerator } from 'blockly/javascript';
import { BlockGeneratorType } from '../../../types/robotParts';
import { Block, Generator } from 'blockly';

const blocks: BlockGeneratorType[] = [
  { name: 'normal_look', data: { eyes: '0' } },
  { name: 'semi_close', data: { eyes: 'a' } },
  { name: 'look_left', data: { eyes: 'b' } },
  { name: 'look_right', data: { eyes: 'c' } },
  { name: 'look_up', data: { eyes: 'd' } },
  { name: 'look_up_left', data: { eyes: 'e' } },
  { name: 'look_up_right', data: { eyes: 'f' } },
  { name: 'wink_left', data: { eyes: 'g' } },
  { name: 'wink_right', data: { eyes: 'h' } },
  { name: 'close_eyes', data: { eyes: 'i' } },
  { name: 'normal_head', data: { head: '0' } },
  {
    name: 'head_trun_left',
    data: { head: '1' },
  },
  {
    name: 'turn_head_right',
    data: { head: '2' },
  },
  {
    name: 'normal_left_arm',
    data: { leftArm: '0' },
  },
  {
    name: 'raise_left_arm_60_',
    data: { leftArm: '1' },
  },
  {
    name: 'raise_left_arm_90_',
    data: { leftArm: '2' },
  },
  {
    name: 'raise_left_arm_120',
    data: { leftArm: '3' },
  },
  {
    name: 'raise_left_arm_150',
    data: { leftArm: '4' },
  },
  {
    name: 'raise_left_arm_180_',
    data: { leftArm: '5' },
  },
  {
    name: 'normal_right_arm',
    data: { rightArm: '0' },
  },
  {
    name: 'raise_right_arm_60_',
    data: { rightArm: '1' },
  },
  {
    name: 'raise_right_arm_90_',
    data: { rightArm: '2' },
  },
  {
    name: 'raise_right_arm_120_',
    data: { rightArm: '3' },
  },
  {
    name: 'raise_right_arm_150_',
    data: { rightArm: '4' },
  },
  {
    name: 'raise_right_arm_180_',

    data: { rightArm: '5' },
  },
  {
    name: 'right_wheel_forward',
    data: { rightLeg: '1' },
  },

  {
    name: 'right_wheel_backward',
    data: { rightLeg: '2' },
  },

  {
    name: 'left_wheel_forward',
    data: { leftLeg: '1' },
  },
  {
    name: 'left_wheel_backward',
    data: { leftLeg: '2' },
  },
];

blocks.forEach((block) => {
  return (javascriptGenerator.forBlock[block.name] = function () {
    return JSON.stringify(block.data) + '\n';
  });
});

javascriptGenerator.forBlock['time_block'] = function (
  block: Block,
  generator: Generator
) {
  const duration = block.getFieldValue('sec');
  const statements_duration = generator.statementToCode(block, 'duration');

  if (statements_duration !== '') {
    const parsed = JSON.parse(statements_duration);
    const collatedCode = JSON.stringify({
      ...parsed,
      duration,
    });

    return collatedCode;
  }

  return '';
};

javascriptGenerator.forBlock['all_parts'] = function (
  block: Block,
  generator: Generator
) {
  const blockNames = [
    'eyes',
    'head',
    'left_arm',
    'right_arm',
    'left_leg',
    'right_leg',
  ];
  const duration = block.getFieldValue('NAME');

  const collatedCode = blockNames.reduce((previous, blockName) => {
    const blockValue = generator.statementToCode(block, blockName);

    if (blockValue !== '') {
      const value = JSON.parse(blockValue);

      return { ...previous, ...value };
    }

    return previous;
  }, {} as { [key: string]: string });

  if (Object.keys(collatedCode).length !== 0) {
    return JSON.stringify({ ...collatedCode, duration });
  }

  return '';
};

export default blocks;
