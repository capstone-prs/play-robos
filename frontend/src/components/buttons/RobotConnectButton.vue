<template>
  <div>
    <q-btn
      :class="`q-pa-xs ${
        isConnected ? 'active-green-background' : 'active-red-background'
      }`"
      round
      @click="bluetoothConnect"
    >
      <q-icon
        name="img:/robot-connect-v2.svg"
        size="50px"
        data-testid="connect-btn"
      />
    </q-btn>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, onUnmounted, ref, watch } from 'vue';
import { useQuasar } from 'quasar';

import bluetoothConnectDevice, {
  bluetoothSerial,
  isConnected as getIsConnected,
  onDisconnect,
} from '../../utils/bluetoothUtils';

const $q = useQuasar();
const emit = defineEmits<{ (e: 'connected'): void }>();
const isConnected = ref(false);
const disconnectListener = ref<ReturnType<typeof onDisconnect>>();

const props = defineProps<{
  loadingHandler: (loading: boolean) => void;
  openBtSettingHandler: () => void;
}>();

const bluetoothConnect = () =>
  bluetoothConnectDevice(
    bluetoothSerial,

    (success) => {
      isConnected.value = true;
      $q.notify({
        type: 'positive',
        message: success,
      });
      emit('connected');
    },
    (fail) => {
      isConnected.value = false;
      $q.notify({
        type: 'negative',
        message: fail,
      });
    },
    props.loadingHandler,
    props.openBtSettingHandler
  );

onBeforeMount(() => {
  getIsConnected(bluetoothSerial).then((connected) => {
    isConnected.value = connected;
  });
});

watch(isConnected, () => {
  if (isConnected.value) {
    disconnectListener.value = onDisconnect(bluetoothSerial, () => {
      isConnected.value = false;
    });
  }
});

onUnmounted(() => {
  clearInterval(disconnectListener.value);
});
</script>
<style scoped>
.active-red-background {
  animation: blinkingBackgroundRed 2s infinite;
}
@keyframes blinkingBackgroundRed {
  0% {
    background-color: red;
  }
  50% {
    background-color: rgb(255, 74, 74);
  }
  100% {
    background-color: rgba(253, 204, 204, 0.227);
  }
}

.active-green-background {
  animation: blinkingBackgroundGreen 2s infinite;
}
@keyframes blinkingBackgroundGreen {
  0% {
    background-color: rgb(0, 255, 0);
  }
  50% {
    background-color: rgb(115, 255, 115);
  }
  100% {
    background-color: rgb(224, 255, 224);
  }
}
</style>
