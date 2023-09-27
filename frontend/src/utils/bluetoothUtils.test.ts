import { vi, expect, it, describe, beforeEach } from 'vitest';
import bluetoothConnectDevice, {
  isConnected,
  isCorrectMessage,
  openBluetoothSetting,
  bluetoothWrite,
  bluetoothRead,
} from './bluetoothUtils';
import BluetoothSerial, {
  BluetoothDevice,
} from 'cordova-plugin-bluetooth-serial';

describe('File bluetoothutils.ts', () => {
  describe('Bluetooth Functions', () => {
    // Mock the BluetoothSerial object
    const mockedBluetoothSerial: BluetoothSerial = {
      available: vi.fn(),
      clear: vi.fn(),
      clearDeviceDiscoveredListener: vi.fn(),
      connect: vi.fn(),
      connectInsecure: vi.fn(),
      disconnect: vi.fn(),
      discoverUnpaired: vi.fn(),
      enable: vi.fn(),
      isConnected: vi.fn(),
      isEnabled: vi.fn(),
      list: vi.fn(),
      read: vi.fn(),
      readRSSI: vi.fn(),
      readUntil: vi.fn(),
      setDeviceDiscoveredListener: vi.fn(),
      setDiscoverable: vi.fn(),
      setName: vi.fn(),
      showBluetoothSettings: vi.fn(),
      subscribe: vi.fn(),
      subscribeRawData: vi.fn(),
      unsubscribe: vi.fn(),
      unsubscribeRawData: vi.fn(),
      write: vi.fn(),
    };

    // Mock a Bluetooth device
    const mockBluetoothDevice = {
      name: 'HC-05',
      address: '00:00:00:00:00:00',
    };

    describe('Bluetooth Functions', () => {
      it('should check if Bluetooth is connected', async () => {
        mockedBluetoothSerial.isConnected = (success) => {
          success('true'); // Simulate that Bluetooth is connected
        };

        const connected = await isConnected(mockedBluetoothSerial);
        expect(connected).toBe(true);
      });

      it('should open Bluetooth settings', async () => {
        mockedBluetoothSerial.showBluetoothSettings = (success) =>
          success('true');

        expect(openBluetoothSetting(mockedBluetoothSerial)).resolves;
      });
    });

    describe('isCorrectMessage', () => {
      it('should return true for valid messages', () => {
        expect(isCorrectMessage('000000')).toBeTruthy();
        expect(isCorrectMessage('i26622')).toBeTruthy();
        expect(isCorrectMessage('a11111')).toBeTruthy();
        expect(isCorrectMessage('a25511')).toBeTruthy();
        expect(isCorrectMessage('i20602')).toBeTruthy();

        // Add more valid test cases as needed
      });

      it('should return false for invalid messages', () => {
        expect(isCorrectMessage('invalid')).toBeFalsy();
        expect(isCorrectMessage('j27733')).toBeFalsy();
        expect(isCorrectMessage('0a0611')).toBeFalsy(); // letter as a second character
        expect(isCorrectMessage('0j0611')).toBeFalsy(); // 'j' is not allowed
        expect(isCorrectMessage('b0401')).toBeFalsy(); // lacking character
        expect(isCorrectMessage('a062111')).toBeFalsy(); // Too many characters
        // Add more invalid test cases as needed
      });
    });

    describe('write', () => {
      beforeEach(() => {
        // Reset the mock function before each test
        vi.clearAllMocks();
      });

      it('should write a valid message successfully', async () => {
        const validMessage = 'a00611';

        await expect(
          bluetoothWrite(mockedBluetoothSerial, validMessage)
        ).resolves.toBeUndefined();

        expect(mockedBluetoothSerial.write).toHaveBeenCalledWith(
          `<${validMessage}>\n`,
          expect.any(Function),
          expect.any(Function)
        );
      });

      it('should reject and not write an invalid message', async () => {
        const invalidMessage = 'invalid';

        await expect(
          bluetoothWrite(mockedBluetoothSerial, invalidMessage)
        ).rejects.toEqual('Not valid message: invalid');

        expect(mockedBluetoothSerial.write).not.toHaveBeenCalled();
      });
    });

    describe('bluetoothRead', () => {
      it('should resolve with the message on successful read', async () => {
        mockedBluetoothSerial.read = (successCallback) => {
          successCallback('Mocked Bluetooth message');
        };

        await expect(bluetoothRead(mockedBluetoothSerial)).resolves.toEqual(
          'Mocked Bluetooth message'
        );
      });

      it('should reject with an error on read error', async () => {
        const errorMessage = 'Bluetooth read error';

        // Mock BluetoothSerial to simulate an error
        mockedBluetoothSerial.read = (successCallback, errorCallback) => {
          errorCallback(errorMessage);
        };

        await expect(bluetoothRead(mockedBluetoothSerial)).rejects.toEqual(
          errorMessage
        );
      });
    });

    describe('bluetoothConnectDevice', () => {
      it('should handle the connection process when it is already connected', async () => {
        mockedBluetoothSerial.isConnected = (success) => success('true');

        mockedBluetoothSerial.isEnabled = (success) => success('true');

        mockedBluetoothSerial.enable = (success) => success('true');

        mockedBluetoothSerial.list = (callback) =>
          callback([mockBluetoothDevice as BluetoothDevice]);

        // Mock connecting to the device
        mockedBluetoothSerial.connect = (address, success) => success('true');

        const successCallback = vi.fn();
        const failCallback = vi.fn();
        const loadingCallback = vi.fn();
        const bondCallback = vi.fn();

        await bluetoothConnectDevice(
          mockedBluetoothSerial,
          successCallback,
          failCallback,
          loadingCallback,
          bondCallback
        );

        expect(loadingCallback).not.toHaveBeenCalled();
        expect(successCallback).toHaveBeenCalledWith('Already Connected');
        expect(failCallback).not.toHaveBeenCalled();
        expect(bondCallback).not.toHaveBeenCalled();
      });

      it('should handle the connection process', async () => {
        mockedBluetoothSerial.isConnected = (success, reject) => reject('true');

        mockedBluetoothSerial.isEnabled = (success) => success('true');

        mockedBluetoothSerial.enable = (success) => success('true');

        mockedBluetoothSerial.list = (callback) =>
          callback([mockBluetoothDevice as BluetoothDevice]);

        // Mock connecting to the device
        mockedBluetoothSerial.connect = (address, success) => success('true');

        const successCallback = vi.fn();
        const failCallback = vi.fn();
        const loadingCallback = vi.fn();
        const bondCallback = vi.fn();

        await bluetoothConnectDevice(
          mockedBluetoothSerial,
          successCallback,
          failCallback,
          loadingCallback,
          bondCallback
        );

        expect(loadingCallback).toHaveBeenCalledTimes(2);
        expect(successCallback).toHaveBeenCalledWith('Succesfully Connected');
        expect(failCallback).not.toHaveBeenCalled();
        expect(bondCallback).not.toHaveBeenCalled();
      });
    });

    it('should handle the connection process when there is no bonded device', async () => {
      mockedBluetoothSerial.isConnected = (success, reject) => reject('true');

      mockedBluetoothSerial.isEnabled = (success) => success('true');

      mockedBluetoothSerial.enable = (success) => success('true');

      mockedBluetoothSerial.list = (callback) => callback([]);

      // Mock connecting to the device
      mockedBluetoothSerial.connect = (address, success) => success('true');

      const successCallback = vi.fn();
      const failCallback = vi.fn();
      const loadingCallback = vi.fn();
      const bondCallback = vi.fn();

      await bluetoothConnectDevice(
        mockedBluetoothSerial,
        successCallback,
        failCallback,
        loadingCallback,
        bondCallback
      );

      expect(loadingCallback).toHaveBeenCalledTimes(2);
      expect(successCallback).not.toHaveBeenCalled();
      expect(failCallback).not.toHaveBeenCalled();
      expect(bondCallback).toHaveBeenCalledOnce();
    });

    it('should handle the connection process when bluetooth is disabled', async () => {
      mockedBluetoothSerial.isConnected = (success, reject) => reject('true');

      mockedBluetoothSerial.isEnabled = (success, reject) => reject('true');

      mockedBluetoothSerial.enable = (success) => success('true');

      mockedBluetoothSerial.list = (callback) => callback([]);

      // Mock connecting to the device
      mockedBluetoothSerial.connect = (address, success) => success('true');

      const successCallback = vi.fn();
      const failCallback = vi.fn();
      const loadingCallback = vi.fn();
      const bondCallback = vi.fn();

      await bluetoothConnectDevice(
        mockedBluetoothSerial,
        successCallback,
        failCallback,
        loadingCallback,
        bondCallback
      );

      expect(loadingCallback).toHaveBeenCalledTimes(2);
      expect(successCallback).not.toHaveBeenCalled();
      expect(failCallback).toHaveBeenCalledWith('Bluetooth is disabled');
      expect(bondCallback).not.toHaveBeenCalled();
    });
  });
});
