export type RobotParts =
  | 'eyes'
  | 'head'
  | 'leftArm'
  | 'rightArm'
  | 'leftLeg'
  | 'rightLeg';

// type Eyes = {
//   key: 'eyes';
//   value: '0' | 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i';
// };

type Eyes = {
  eyes: '0' | 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i';
};
// type Head = {
//   key: 'head';
//   value: '0' | '1' | '2';
// };

type Head = {
  head: '0' | '1' | '2';
};

// type Arms = {
//   key: 'leftArm' | 'rightArm';
//   value: '0' | '1' | '2' | '3' | '4' | '5' | '6';
// };

type LeftArm = {
  leftArm: '0' | '1' | '2' | '3' | '4' | '5' | '6';
};

type RightArm = {
  rightArm: '0' | '1' | '2' | '3' | '4' | '5' | '6';
};

// type Legs = {
//   key: 'leftLeg' | 'rightLeg';
//   value: '0' | '1' | '2';
// };

type LeftLeg = {
  leftLeg: '0' | '1' | '2';
};

type RightLeg = {
  rightLeg: '0' | '1' | '2';
};

export type BlockGeneratorType = {
  name: string;
  data: Eyes | Head | LeftArm | RightArm | LeftLeg | RightLeg;
};
