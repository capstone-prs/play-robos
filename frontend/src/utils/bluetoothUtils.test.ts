import { vi, expect, it, describe } from 'vitest';
import bluetoothConnectDevice, {
  isConnected,
  openBluetoothSetting,
} from './bluetoothUtils';
import BluetoothSerial, {
  BluetoothDevice,
} from 'cordova-plugin-bluetooth-serial';

describe('File bluetoothutils.ts', () => {
  describe('Bluetooth Functions', () => {
    // Mock the BluetoothSerial object
    const bluetoothSerial: BluetoothSerial = {
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
      name: 'JDY-33-SPP',
      address: '00:00:00:00:00:00',
    };

    describe('Bluetooth Functions', () => {
      it('should check if Bluetooth is connected', async () => {
        bluetoothSerial.isConnected = (success) => {
          success('true'); // Simulate that Bluetooth is connected
        };

        const connected = await isConnected(bluetoothSerial);
        expect(connected).toBe(true);
      });

      it('should open Bluetooth settings', async () => {
        bluetoothSerial.showBluetoothSettings = (success) => success('true');

        expect(openBluetoothSetting(bluetoothSerial)).resolves;
      });
    });

    describe('bluetoothConnectDevice', () => {
      it('should handle the connection process when it is already connected', async () => {
        bluetoothSerial.isConnected = (success) => success('true');

        bluetoothSerial.isEnabled = (success) => success('true');

        bluetoothSerial.enable = (success) => success('true');

        bluetoothSerial.list = (callback) =>
          callback([mockBluetoothDevice as BluetoothDevice]);

        // Mock connecting to the device
        bluetoothSerial.connect = (address, success) => success('true');

        const successCallback = vi.fn();
        const failCallback = vi.fn();
        const loadingCallback = vi.fn();
        const bondCallback = vi.fn();

        await bluetoothConnectDevice(
          bluetoothSerial,
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
        bluetoothSerial.isConnected = (success, reject) => reject('true');

        bluetoothSerial.isEnabled = (success) => success('true');

        bluetoothSerial.enable = (success) => success('true');

        bluetoothSerial.list = (callback) =>
          callback([mockBluetoothDevice as BluetoothDevice]);

        // Mock connecting to the device
        bluetoothSerial.connect = (address, success) => success('true');

        const successCallback = vi.fn();
        const failCallback = vi.fn();
        const loadingCallback = vi.fn();
        const bondCallback = vi.fn();

        await bluetoothConnectDevice(
          bluetoothSerial,
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
      bluetoothSerial.isConnected = (success, reject) => reject('true');

      bluetoothSerial.isEnabled = (success) => success('true');

      bluetoothSerial.enable = (success) => success('true');

      bluetoothSerial.list = (callback) => callback([]);

      // Mock connecting to the device
      bluetoothSerial.connect = (address, success) => success('true');

      const successCallback = vi.fn();
      const failCallback = vi.fn();
      const loadingCallback = vi.fn();
      const bondCallback = vi.fn();

      await bluetoothConnectDevice(
        bluetoothSerial,
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
      bluetoothSerial.isConnected = (success, reject) => reject('true');

      bluetoothSerial.isEnabled = (success, reject) => reject('true');

      bluetoothSerial.enable = (success) => success('true');

      bluetoothSerial.list = (callback) => callback([]);

      // Mock connecting to the device
      bluetoothSerial.connect = (address, success) => success('true');

      const successCallback = vi.fn();
      const failCallback = vi.fn();
      const loadingCallback = vi.fn();
      const bondCallback = vi.fn();

      await bluetoothConnectDevice(
        bluetoothSerial,
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
