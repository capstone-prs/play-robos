export type RobotParts =
  | 'eyes'
  | 'head'
  | 'leftArm'
  | 'rightArm'
  | 'leftLeg'
  | 'rightLeg';

export type Eyes = {
  eyes: '0' | 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i';
};

export type Head = {
  head: '0' | '1' | '2';
};

export type LeftArm = {
  leftArm: '0' | '1' | '2' | '3' | '4' | '5' | '6';
};

export type RightArm = {
  rightArm: '0' | '1' | '2' | '3' | '4' | '5' | '6';
};

export type LeftLeg = {
  leftLeg: '0' | '1';
};

export type RightLeg = {
  rightLeg: '0' | '1';
};

export type BlockGeneratorType = {
  name: string;
  data: Eyes | Head | LeftArm | RightArm | LeftLeg | RightLeg;
};

export interface RobotState {
  eyes: Eyes['eyes'];
  head: Head['head'];
  leftArm: LeftArm['leftArm'];
  rightArm: RightArm['rightArm'];
  leftLeg: LeftLeg['leftLeg'];
  rightLeg: RightLeg['rightLeg'];
}

export interface GeneratorCode {
  eyes?: Eyes['eyes'];
  head?: Head['head'];
  leftArm?: LeftArm['leftArm'];
  rightArm?: RightArm['rightArm'];
  leftLeg?: LeftLeg['leftLeg'];
  rightLeg?: RightLeg['rightLeg'];
}
