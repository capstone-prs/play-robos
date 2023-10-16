import BluetoothSerial, {
  BluetoothDevice,
} from 'cordova-plugin-bluetooth-serial';

export const bluetoothSerial: BluetoothSerial = window.cordova?.require(
  'cordova-plugin-bluetooth-serial.bluetoothSerial'
);

const BT_DEVICE = 'HC-05';

const getBondedBluetoothDevice = (btSerial: BluetoothSerial) =>
  new Promise<BluetoothDevice>((res, rej) => {
    btSerial.list((devices) => {
      const foundDevice = devices.find((device) => device.name === BT_DEVICE);

      if (foundDevice) {
        res(foundDevice);
      } else {
        rej('Device not found');
      }
    }, rej);
  });

const connectBluetoothDevice = (
  btSerial: BluetoothSerial,
  device: BluetoothDevice
) =>
  new Promise<string>((res, rej) => {
    btSerial.connect(
      device.address,
      () => res('Successfully Connected'),
      () => rej('Unable to Connect')
    );
  });

const enableBluetooth = (btSerial: BluetoothSerial) =>
  new Promise<boolean>((res, rej) => {
    btSerial.enable(
      () =>
        btSerial.isEnabled(
          () => res(true),
          () => rej('Bluetooth is not enabled')
        ),
      () => rej('Bluetooth is not enabled')
    );
  });

const initializeBluetoothConnection = (btSerial: BluetoothSerial) =>
  new Promise<string>((resolve, reject) => {
    if (btSerial) {
      enableBluetooth(btSerial)
        .then(() =>
          getBondedBluetoothDevice(btSerial)
            .then((device) => connectBluetoothDevice(btSerial, device))
            .then(() => resolve('Succesfully Connected'))
            .catch(() => reject('No Bonded Device Found'))
        )
        .catch(() => reject('Bluetooth is disabled'));
    } else {
      reject('Cordova is not running.');
    }
  });

export const isConnected = (btSerial: BluetoothSerial) =>
  new Promise<boolean>((resolve, reject) => {
    if (btSerial) {
      btSerial.isConnected(
        () => resolve(true),
        () => resolve(false)
      );
    } else {
      reject('Cordova is not running.');
    }
  });

export const openBluetoothSetting = (btSerial: BluetoothSerial) =>
  new Promise<void>((resolve, reject) => {
    if (btSerial) {
      btSerial.showBluetoothSettings(
        () => resolve(),
        () => reject('Failed to open Bluetooth Settings')
      );
    } else {
      reject('Cordova is not running.');
    }
  });

const bluetoothConnectDevice = (
  btSerial: BluetoothSerial,
  successHandler: (message: string) => void,
  failHandler: (message: string) => void,
  loadingHandler: (isLoading: boolean) => void,
  bondDeviceHandler: () => void
) =>
  new Promise<void>((resolve, reject) => {
    isConnected(btSerial)
      .then((connected) => {
        if (connected) {
          successHandler('Already Connected');
          resolve();
        } else {
          loadingHandler(true);
          return initializeBluetoothConnection(btSerial)
            .then((message) => {
              loadingHandler(false);
              successHandler(message);
              resolve();
            })
            .catch((error) => {
              loadingHandler(false);
              if (error === 'No Bonded Device Found') {
                bondDeviceHandler();
              } else {
                failHandler(error);
              }
              resolve();
            });
        }
      })
      .catch(reject);
  });

export const isCorrectMessage = (message: string) => {
  const regEx = /^(0|[a-i])[0-2][0-6]{2}[0-2]{2}$/;
  return regEx.test(message);
};

export const bluetoothWrite = (btSerial: BluetoothSerial, message: string) =>
  new Promise<void>((resolve, reject) =>
    isConnected(btSerial).then((connected) => {
      if (connected) {
        if (isCorrectMessage(message)) {
          btSerial.write(
            `<${message}>\n`,
            () => resolve(),
            (error) => reject(error)
          );
          resolve();
        } else {
          reject(`Not valid message: ${message}`);
        }
      } else {
        reject('Bt Device Not Connected');
      }
    })
  );

export const bluetoothWriteStart = (btSerial: BluetoothSerial) =>
  new Promise<void>((resolve, reject) => {
    isConnected(btSerial).then((connected) => {
      if (connected) {
        btSerial.write(
          '^\n',
          () => resolve(),
          (error) => reject(error)
        );
      } else {
        reject('Bt Device Not Connected');
      }
    });
  });

export const bluetoothWriteEnd = (btSerial: BluetoothSerial) =>
  new Promise<void>((resolve, reject) => {
    btSerial.write(
      '$\n',
      () => resolve(),
      (error) => reject(error)
    );
    resolve();
  });

export const bluetoothRead = (btSerial: BluetoothSerial) =>
  new Promise<string>((resolve, reject) => {
    btSerial.read(
      (message) => resolve(message),
      (error) => reject(error)
    );
  });

export const onDisconnect = (
  btSerial: BluetoothSerial,
  onDisconnect: () => void
) => {
  const interval = setInterval(() => {
    isConnected(btSerial).then((connected) => {
      if (!connected) {
        onDisconnect();
        clearInterval(interval);
      }
    });
  }, 1000);
};

const btRemoveListener = (btSerial: BluetoothSerial) =>
  new Promise((resolve) => {
    btSerial.unsubscribe(resolve, resolve);
  });

export const btListenser = (
  btSerial: BluetoothSerial,
  onWrite: (data: string) => void,
  onError: (error: string) => void
) =>
  isConnected(btSerial).then((connected) => {
    if (connected) {
      return btRemoveListener(btSerial).then(() => {
        btSerial.subscribe('\n', onWrite, onError);
      });
    }

    throw new Error('Bt Device Not Connected');
  });

export default bluetoothConnectDevice;
