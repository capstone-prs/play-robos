<template>
  <div>
    <q-btn round style="padding: 0%" @click="bluetoothConnect">
      <q-icon P name="img:/connect-btn.svg" size="50px" data-testid="connect-btn"/>
    </q-btn>
  </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';

import bluetoothConnectDevice, {
  bluetoothSerial,
} from '../../utils/bluetoothUtils';

const $q = useQuasar();

const props = defineProps<{
  loadingHandler: (loading: boolean) => void;
  openBtSettingHandler: () => void;
}>();

const bluetoothConnect = () =>
  bluetoothConnectDevice(
    bluetoothSerial,

    (success) =>
      $q.notify({
        type: 'positive',
        message: success,
      }),
    (fail) =>
      $q.notify({
        type: 'negative',
        message: fail,
      }),
    props.loadingHandler,
    props.openBtSettingHandler
  );
</script>
