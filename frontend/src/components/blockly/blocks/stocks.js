import Blockly from 'blockly';

Blockly.defineBlocksWithJsonArray(
[{
  'type': 'blink',
  'message0': 'blink %1',
  'args0': [
    {
      'type': 'input_value',
      'name': 'blink',
      'check': 'Boolean'
    }
  ],
  'colour': 230,
  'tooltip': '',
  'helpUrl': ''
},
{
  'type': 'wink',
  'message0': 'wink %1',
  'args0': [
    {
      'type': 'input_value',
      'name': 'wink',
      'check': 'Boolean'
    }
  ],
  'output': null,
  'colour': 230,
  'tooltip': '',
  'helpUrl': ''
},
{
  'type': 'eye_roll',
  'message0': 'roll eyes %1',
  'args0': [
    {
      'type': 'input_value',
      'name': 'eye_roll',
      'check': 'Boolean'
    }
  ],
  'output': null,
  'colour': 60,
  'tooltip': '',
  'helpUrl': ''
}]
)
