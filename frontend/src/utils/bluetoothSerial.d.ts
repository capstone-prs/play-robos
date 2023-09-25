declare module 'cordova-plugin-bluetooth-serial' {
  type SuccessCallback = (data: object | string) => void;
  type FailureCallback = (error: string) => void;
  type DataCallback = (data: string) => void;
  type NotifyCallback = () => void;
  type ListCallback = (devices: BluetoothDevice[]) => void;

  interface BluetoothDevice {
    class: number;
    id: string;
    address: string;
    name: string;
  }

  interface BluetoothSerial {
    available(success: DataCallback, failure: FailureCallback): void;
    clear(success: SuccessCallback, failure: FailureCallback): void;
    clearDeviceDiscoveredListener(): void;
    connect(
      macAddress: string,
      success: SuccessCallback,
      failure: FailureCallback
    ): void;
    connectInsecure(
      macAddress: string,
      success: SuccessCallback,
      failure: FailureCallback
    ): void;
    disconnect(success: SuccessCallback, failure: FailureCallback): void;
    discoverUnpaired(success: SuccessCallback, failure: FailureCallback): void;
    enable(success: SuccessCallback, failure: FailureCallback): void;
    isConnected(success: SuccessCallback, failure: FailureCallback): void;
    isEnabled(success: SuccessCallback, failure: FailureCallback): void;
    list(success: ListCallback, failure: FailureCallback): void;
    read(success: DataCallback, failure: FailureCallback): void;
    readRSSI(success: DataCallback, failure: FailureCallback): void;
    readUntil(
      delimiter: string,
      success: DataCallback,
      failure: FailureCallback
    ): void;
    setDeviceDiscoveredListener(notify: NotifyCallback): void;
    setDiscoverable(
      discoverableDuration: number,
      success: SuccessCallback,
      failure: FailureCallback
    ): void;
    setName(
      newName: string,
      success: SuccessCallback,
      failure: FailureCallback
    ): void;
    showBluetoothSettings(
      success: SuccessCallback,
      failure: FailureCallback
    ): void;
    subscribe(
      delimiter: string,
      success: DataCallback,
      failure: FailureCallback
    ): void;
    subscribeRawData(success: DataCallback, failure: FailureCallback): void;
    unsubscribe(success: SuccessCallback, failure: FailureCallback): void;
    unsubscribeRawData(
      success: SuccessCallback,
      failure: FailureCallback
    ): void;
    write(
      data: string,
      success: SuccessCallback,
      failure: FailureCallback
    ): void;
  }
  export {
    BluetoothDevice,
    SuccessCallback,
    FailureCallback,
    BluetoothSerial as default,
  };
}
