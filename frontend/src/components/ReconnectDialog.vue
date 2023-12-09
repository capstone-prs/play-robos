window-height window-width
<template>
  <q-dialog :persistent="true" class="q-ma-lg">
    <q-card class="cardStyle" :style="style">
      <q-card-section style="width: 500px">
        <div class="row justify-center">
          <q-badge class="text-h4 hitchcut-reconnect q-px-sm" color="red"
            >Please Reconnect</q-badge
          >
        </div>
        <div class="row justify-center q-mt-xs">
          <q-badge class="text-h5 hitchcut-reconnect q-px-sm" color="red"
            >to Zappy...</q-badge
          >
        </div>
      </q-card-section>
      <q-card-section>
        <div class="row justify-center">
          <RobotConnectButton
            class="q-pa-xs"
            persistent
            :loading-handler="loading"
            :open-bt-setting-handler="cannotConnectHandler"
            @connected="
              () => {
                emit('close');
              }
            "
            id="robot-btn"
          />
        </div>
        <div class="row justify-left">
          <q-btn @click="redirectToHome" round glossy size="sm">
            <q-icon name="home" color="white" size="xs" />
          </q-btn>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useQuasar } from 'quasar';
import RobotConnectButton from './buttons/RobotConnectButton.vue';
import { Setting } from 'src/types/Levels';
import { useRouter } from 'vue-router';

const props = defineProps<{
  levelSetting: Setting;
}>();

const emit = defineEmits<{ (e: 'close'): void }>();

const style = computed(() => ({
  backgroundImage: `url(${props.levelSetting.settingBg})`,
}));

const $q = useQuasar();

const router = useRouter();

const loading = (isLoading: boolean) => {
  if (isLoading) {
    $q.loading.show({ message: 'Connecting to Zappy...' });
  } else {
    $q.loading.hide();
  }
};

const cannotConnectHandler = () => {
  $q.notify({ type: 'negative', message: 'Cannot Connect' });
};

const redirectToHome = () => {
  router.push('/home');
};
</script>
<style scoped>
@font-face {
  font-family: hitchcut;
  src: url('/fonts/Hitchcut-Regular.woff');
}
.hitchcut-reconnect {
  font-family: 'hitchcut';
  /* text-shadow: 1px 1px rgb(197, 145, 0);
  color: rgb(255, 187, 0); */
}

.cardStyle {
  background-size: cover;
  background-attachment: scroll;
  border-radius: 15px;
  border-style: solid;
  border-color: red;
}
</style>
