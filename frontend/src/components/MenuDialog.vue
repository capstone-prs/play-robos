<template>
  <q-dialog
    data-cy="menu-dialog"
    v-model="showDialog"
    style="background-color: transparent"
  >
    <q-card>
      <q-card-section class="row items-center card-title" style="width: 400px">
        <div class="text-h4 futura">Menu</div>
        <q-space />
        <q-btn
          data-cy="close-btn"
          icon="close"
          color="white"
          size="md"
          flat
          v-close-popup
        />
      </q-card-section>

      <q-card-section class="centered q-mb-none" v-if="path !== '/home'">
        <q-btn
          @click="atHome"
          color="pink-12"
          class="glossy hitchcut"
          size="lg"
          rounded
        >
          <q-icon name="home" />
          Home
        </q-btn>
      </q-card-section>
      <q-card-section
        class="centered q-pa-none q-mb-md"
        v-if="path !== '/home'"
      >
        <q-btn
          @click="atBack"
          color="purple"
          class="glossy hitchcut"
          size="lg"
          rounded
        >
          <q-icon name="arrow_back" />
          Back
        </q-btn>
      </q-card-section>
      <q-card-section class="centered q-pa-none q-mb-md">
        <ActionButton
          text-label="Logout"
          @click="openLogoutDialog"
          data-cy="logout-btn"
        />
        <LogoutDialog v-model="isLogoutDialogVisible" data-cy="logout-dialog" />
      </q-card-section>
      <q-card-section
        class="centered q-pa-none q-mb-md"
        v-if="path !== '/home'"
      >
        <div class="q-pa-xs">
          <MusicButton />
        </div>
        <SoundButton />
        <RobotConnectButton
        class="q-pa-xs"
          :loading-handler="
            (isLoading) => {
              findingRobotDialog = isLoading;
            }
          "
          :open-bt-setting-handler="() => (isPairingDialog = true)"
          id="robot-btn"
        />
      </q-card-section>
      <div class="col q-pl-sm">
            <FindingDialog v-model="findingRobotDialog" />
            <PairingDialog v-model="isPairingDialog" />
          </div>
      
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import LogoutDialog from './LogoutDialog.vue';
import ActionButton from './buttons/ActionButton.vue';
import MusicButton from './buttons/MusicButton.vue';
import SoundButton from './buttons/SoundButton.vue';
import back from '../assets/sounds/back.mp3';
import RobotConnectButton from './buttons/RobotConnectButton.vue';
import { soundEffect } from 'src/utils/SoundUtils';
import { ref } from 'vue';
const findingRobotDialog = ref(false);
const isPairingDialog = ref(false);

import { useRouter } from 'vue-router';

const router = useRouter();
const path = router.currentRoute.value.path;
defineProps({
  value: Boolean,
  dataForHomepage: String
});

const isLogoutDialogVisible = ref(false);
const showDialog = ref(false);
const openLogoutDialog = () => {
  isLogoutDialogVisible.value = true;
};

const atHome = () => {
  soundEffect();
  return router.push('/home');
};
const atBack = () => {
  soundEffect(back);
  return router.go(-1);
};
</script>

<style>
@font-face {
  font-family: futura;
  src: url('/fonts/FuturaLT.woff');
}

.futura {
  font-family: 'futura';
  color: yellow;
}

.centered {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.card-title {
  background-color: #2196f3;
}
</style>
