import { javascriptGenerator } from 'blockly/javascript';

const blocks = [
  { name: 'normal_look', code: '000000\n' },
  { name: 'look_up', code: 'd00000\n' },
  { name: 'semi_close', code: 'a00000\n' },
  { name: 'look_right', code: 'c00000\n' },
  { name: 'look_left', code: 'b00000\n' },
  { name: 'look_up_left', code: 'e00000\n' },
  { name: 'look_up_right', code: 'f00000\n' },
  { name: 'wink_right', code: 'h00000\n' },
  { name: 'wink_left', code: 'g00000\n' },
  { name: 'close_eyes', code: 'i00000\n' },
  { name: 'head_trun_left', code: '010000\n' },
  { name: 'turn_head_right', code: '020000\n' },
  { name: 'normal_head', code: '000000\n' },
  { name: 'normal_left_arm', code: '000000\n' },
  { name: 'raise__left_arm_60_', code: '001000\n' },
  { name: 'raise_left_arm_120', code: '003000\n' },
  { name: 'raise_left_arm_150', code: '004000\n' },
  { name: 'raise_left_arm_180_', code: '005000\n' },
  { name: 'normal_right_arm', code: '000000\n' },
  { name: 'raise_right_arm_60_', code: '000100\n' },
  { name: 'raise_right_arm_120_', code: '000300\n' },
  { name: 'raise_right_arm_150_', code: '000400\n' },
  { name: 'raise_right_arm_180_', code: '000500\n' },
];

blocks.forEach((block) => {
  return (javascriptGenerator.forBlock[block.name] = function () {
    var code = block.code;
    return code;
  });
});

javascriptGenerator.forBlock['time_block'] = function (block, generator) {
  var code = ['0', '0', '0', '0', '0', '0'];
  var dropdown_sec = block.getFieldValue('sec');
  var statements_duration = generator.statementToCode(block, 'duration');

  const codeString = statements_duration
    .split('')
    .filter((block) => block.trim() !== '');

  function positionData(position) {
    const codeObj = codeString.map((char) => ({ character: char }));
    codeObj.forEach((char) => {
      if (codeObj.indexOf(char) === position) {
        code[position] = char.character;
      }
    });
  }

  var i = 0;
  for (i; i <= 5; i++) {
    positionData(i);
  }

  const collatedCode = code.join('') + dropdown_sec;

  return collatedCode;
};

javascriptGenerator.forBlock['all_parts'] = function (block, generator) {
  // initialize the code to be return by this generator
  var code = ['0', '0', '0', '0', '0', '0'];
  // get all the blocks nested in the all_parts block
  var statements_eyes = generator.statementToCode(block, 'eyes');
  var statements_head = generator.statementToCode(block, 'head');
  var statements_left_arm = generator.statementToCode(block, 'left_arm');
  var statements_right_arm = generator.statementToCode(block, 'right_arm');
  var statements_left_leg = generator.statementToCode(block, 'left_leg');
  var statements_right_leg = generator.statementToCode(block, 'right_leg');
  var duration_field = block.getFieldValue('NAME');

  // f(x) to handle the positioning of the data to its correct index in the code
  function positionData(theString, position) {
    const codeString = theString
      .split('')
      .filter((block) => block.trim() !== '');
    const codeObj = codeString.map((char) => ({ character: char }));
    codeObj.forEach((char) => {
      if (codeObj.indexOf(char) === position) {
        code[position] = char.character;
      }
    });
  }

  // lists of all code returned by each nested blocks
  const statementLists = [
    statements_eyes,
    statements_head,
    statements_left_arm,
    statements_right_arm,
    statements_left_leg,
    statements_right_leg,
  ];

  // handler for positioning each data from the nested blocks
  var i = 0;
  for (i; i <= 5; i++) {
    positionData(statementLists[i], i);
  }

  // join the array of code to string since blockly generator expects a string return
  const collatedCode = code.join('') + duration_field;

  return collatedCode;
};
