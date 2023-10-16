import BluetoothSerial from 'cordova-plugin-bluetooth-serial';
import { GeneratorCode, RobotState } from 'src/types/robotParts';
import {
  bluetoothWrite,
  bluetoothWriteEnd,
  bluetoothWriteStart,
} from 'src/utils/bluetoothUtils';

const executeCodes = async (
  btSerial: BluetoothSerial,
  codes: GeneratorCode[],
  showStatus: () => void,
  endHandler: () => void,
  errorHandler: (e: string) => void
) => {
  let robotState: RobotState = {
    eyes: '0',
    head: '0',
    leftArm: '0',
    rightArm: '0',
    leftLeg: '0',
    rightLeg: '0',
  };

  await new Promise((resolve, reject) =>
    bluetoothWriteStart(btSerial)
      .then(() => {
        showStatus();
      })
      .then(() => setTimeout(resolve, 1000))
      .catch(reject)
  ).catch(errorHandler);

  for (const code of codes) {
    // console.log('execute code:', code, { ...robotState.value, ...code }); //DEBUG
    robotState = { ...robotState, ...code };

    const { eyes, head, leftArm, rightArm, leftLeg, rightLeg } = robotState;

    bluetoothWrite(
      btSerial,
      eyes + head + leftArm + rightArm + leftLeg + rightLeg
    ).catch(errorHandler);

    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  await bluetoothWriteEnd(btSerial).then(
    () =>
      new Promise<void>((resolve) =>
        setTimeout(() => {
          endHandler();
          resolve();
        }, 1000)
      )
  );
};

export default executeCodes;
