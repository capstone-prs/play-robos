import { WorkspaceSvg } from 'blockly';
export const onStart = (workspace: WorkspaceSvg) => {
  const allPartsBLock = workspace.newBlock('all_parts');
  allPartsBLock.setMovable(false)
  const lookUp = workspace.newBlock('look_up');
  lookUp.setMovable(false)
  const headLeftRun = workspace.newBlock('head_trun_left');
  headLeftRun.setMovable(false)
  const rightarm180 = workspace.newBlock('raise_right_arm_180_');
  rightarm180.setMovable(false)
  const leftArm180 = workspace.newBlock('raise_left_arm_180_');
  leftArm180.setMovable(false)
  const leftWheelForward = workspace.newBlock('left_wheel_forward');
  leftWheelForward.setMovable(false)
  const rightWheelForward = workspace.newBlock('right_wheel_forward');
  rightWheelForward.setMovable(false)
  const leftArm150 = workspace.newBlock('raise_left_arm_150');
  leftArm150.setMovable(false)
  const leftArm60 = workspace.newBlock('raise_left_arm_60_');
  leftArm60.setMovable(false)
  const upRight = workspace.newBlock('look_up_right');
  upRight.setMovable(false)
  const upLeft = workspace.newBlock('look_up_left');
  upLeft.setMovable(false)
  const raiseRight60 = workspace.newBlock('raise_right_arm_60_');
  raiseRight60.setMovable(false)
  const raiseRight180 = workspace.newBlock('raise_right_arm_150_');
  raiseRight180.setMovable(false);
  allPartsBLock
    .getInput('eyes')
    ?.connection?.connect(lookUp.previousConnection);
  allPartsBLock
    .getInput('head')
    ?.connection?.connect(headLeftRun.previousConnection);
  allPartsBLock
    .getInput('leftArm')
    ?.connection?.connect(leftArm180.previousConnection);
  allPartsBLock
    .getInput('rightArm')
    ?.connection?.connect(rightarm180.previousConnection);
  allPartsBLock
    .getInput('leftLeg')
    ?.connection?.connect(leftWheelForward.previousConnection);
  allPartsBLock
    .getInput('rightLeg')
    ?.connection?.connect(rightWheelForward.previousConnection);
  leftArm150.nextConnection.connect(allPartsBLock.previousConnection);
  leftArm60.nextConnection.connect(leftArm150.previousConnection);
  raiseRight180.nextConnection.connect(leftArm60.previousConnection);
  raiseRight60.nextConnection.connect(raiseRight180.previousConnection);
  upRight.nextConnection.connect(raiseRight60.previousConnection);
  upLeft.nextConnection.connect(upRight.previousConnection);
  allPartsBLock.initSvg();
  lookUp.initSvg();
  rightarm180.initSvg();
  leftArm180.initSvg();
  leftWheelForward.initSvg();
  rightWheelForward.initSvg();
  headLeftRun.initSvg();
  leftArm150.initSvg();
  leftArm60.initSvg();
  upRight.initSvg();
  upLeft.initSvg();
  raiseRight60.initSvg();
  raiseRight180.initSvg();
  workspace.render();
};
