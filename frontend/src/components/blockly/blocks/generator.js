import { javascriptGenerator } from 'blockly/javascript';

javascriptGenerator.forBlock['normal_look'] = function () {
  var code = '000000';
  return code;
};

javascriptGenerator.forBlock['look_up'] = function () {
  var code = 'd00000';
  return code;
};

javascriptGenerator.forBlock['semi_close'] = function () {
  var code = 'a00000\n';
  return code;
};

javascriptGenerator.forBlock['look_right'] = function () {
  var code = 'c00000\n';
  return code;
};

javascriptGenerator.forBlock['look_left'] = function () {
  var code = 'b00000\n';
  return code;
};

javascriptGenerator.forBlock['look_up_left'] = function () {
  var code = 'e00000\n';
  return code;
};

javascriptGenerator.forBlock['look_up_right'] = function () {
  var code = 'f00000\n';
  return code;
};

javascriptGenerator.forBlock['wink_right'] = function () {
  var code = 'h00000\n';
  return code;
};

javascriptGenerator.forBlock['wink_left'] = function () {
  var code = 'g00000\n';
  return code;
};

javascriptGenerator.forBlock['close_eyes'] = function () {
  var code = 'i00000\n';
  return code;
};

javascriptGenerator.forBlock['head_trun_left'] = function () {
  var code = '010000\n';
  return code;
};

javascriptGenerator.forBlock['turn_head_right'] = function () {
  var code = '020000';
  return code;
};

javascriptGenerator.forBlock['normal_head'] = function () {
  var code = '000000\n';
  return code;
};

javascriptGenerator.forBlock['normal_left_arm'] = function () {
  var code = '000000\n';
  return code;
};

javascriptGenerator.forBlock['raise__left_arm_60_'] = function () {
  var code = '001000\n';
  return code;
};

javascriptGenerator.forBlock['raise_left_arm_120'] = function () {
  var code = '003000\n';
  return code;
};

javascriptGenerator.forBlock['raise_left_arm_150'] = function () {
  var code = '004000\n';
  return code;
};

javascriptGenerator.forBlock['raise_left_arm_180_'] = function () {
  var code = '005000\n';
  return code;
};

javascriptGenerator.forBlock['normal_right_arm'] = function () {
  var code = '000000\n';
  return code;
};

javascriptGenerator.forBlock['raise_right_arm_60_'] = function () {
  var code = '001000\n';
  return code;
};

javascriptGenerator.forBlock['raise_right_arm_120_'] = function () {
  var code = '003000\n';
  return code;
};

javascriptGenerator.forBlock['raise_right_arm_150_'] = function () {
  var code = '004000\n';
  return code;
};

javascriptGenerator.forBlock['raise_right_arm_180_'] = function () {
  var code = '005000\n';
  return code;
};

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

  // console.log(code);
  return collatedCode;
};

javascriptGenerator.forBlock['normal_head'] = function () {
  var code = '000000';
  return code;
};

javascriptGenerator.forBlock['normal_left_arm'] = function () {
  var code = '000000';
  return code;
};

javascriptGenerator.forBlock['raise_left_arm_60_'] = function () {
  var code = '001000';
  return code;
};

javascriptGenerator.forBlock['raise_left_arm_90_'] = function () {
  // TODO: Assemble javascript into code variable.
  var code = '002000';
  return code;
};

javascriptGenerator.forBlock['raise_left_arm_120'] = function () {
  var code = '003000';
  return code;
};

javascriptGenerator.forBlock['raise_left_arm_150'] = function () {
  var code = '004000';
  return code;
};

javascriptGenerator.forBlock['raise_left_arm_180_'] = function () {
  var code = '005000';
  return code;
};

javascriptGenerator.forBlock['raise_right_arm_60_'] = function () {
  var code = '000100';
  return code;
};

javascriptGenerator.forBlock['raise_right_arm_90_'] = function () {
  var code = '000200';
  return code;
};

javascriptGenerator.forBlock['raise_right_arm_120_'] = function () {
  var code = '000300';
  return code;
};

javascriptGenerator.forBlock['raise_right_arm_150_'] = function () {
  var code = '000400';
  return code;
};

javascriptGenerator.forBlock['raise_right_arm_180_'] = function () {
  var code = '000500';
  return code;
};

javascriptGenerator.forBlock['left_wheel_forward'] = function () {
  var code = '000010';
  return code;
};

javascriptGenerator.forBlock['left_wheel_backward'] = function () {
  var code = '000020';
  return code;
};

javascriptGenerator.forBlock['right_wheel_forward'] = function () {
  var code = '000001';
  return code;
};

javascriptGenerator.forBlock['right_wheel_backward'] = function () {
  var code = '00002';
  return code;
};
