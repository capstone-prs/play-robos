<template>
  <q-layout view="hHh lpR fFf" class="bg" data-test-id="homepage">
    <q-header class="transparent row q-pa-md">
      <div class="col-3">
        <div class="row float-left">
          <div class="col q-pl-sm">
            <HelpButton />
          </div>

          <div class="col q-pl-sm">
            <AchievementButton />
          </div>
        </div>
      </div>
      <div class="col level-board" align="center">
        <LevelBoard
          levelNumber="1"
          levelGoal="Wake up"
          levelReward="50"
          data-test-id="level-board"
        />
      </div>

      <div class="col-3">
        <div class="row float-right">
          <div class="col q-pr-sm">
            <SoundButton />
          </div>

          <div class="col q-pr-sm">
            <MusicButton />
          </div>

          <div class="col q-pr-sm">
            <MenuButton @open-dialog="openMenuDialog" data-test-id="menu-btn" />
            <MenuDialog
              v-model="isMenuDialogVisible"
              data-test-id="menu-dialog"
              :data-for-homepage="dataForHomepage"
              @update:data-for-homepage="updateData"
            />
          </div>
        </div>
      </div>
    </q-header>

    <q-page-container class="fixed-center">
      <SettingComponent
        v-if="dataForHomepage == '5-7'"
        :image-urls="['/setting1.svg', '/setting3.svg', '/setting1.svg']"
        data-test-id="setting-component"
      />

      <SettingComponent
        v-if="dataForHomepage == '8-11'"
        :image-urls="['/setting2.svg', '/setting4.svg', '/setting2.svg']"
        data-test-id="setting-component"
      />
    </q-page-container>

    <q-col class="q-gutter-lg">
      <div style="padding-top: 240px">
        <robotConnectButton @click="openPairingDialogAfterDelay" />
        <FindingDialog v-model="findingRobotDialog" />
        <PairingDialog v-model="ispairingDialog" />
      </div>
    </q-col>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import HelpButton from '../components/buttons/HelpButton.vue';
import AchievementButton from '../components/buttons/AchievementButton.vue';
import SoundButton from '../components/buttons/SoundButton.vue';
import MusicButton from '../components/buttons/MusicButton.vue';
import SettingComponent from '../components/SettingComponent.vue';
import LevelBoard from '../components/LevelBoard.vue';
import MenuDialog from '../components/MenuDialog.vue';
import MenuButton from '../components/buttons/MenuButton.vue';
import robotConnectButton from '../components/buttons/robotConnectButton.vue';
import FindingDialog from '../components/FindingDialog.vue';
import PairingDialog from '../components/PairingDialog.vue';
const isMenuDialogVisible = ref(false);

const openMenuDialog = () => {
  isMenuDialogVisible.value = true;
};

const findingRobotDialog = ref(false);
const ispairingDialog = ref(false);

function openPairingDialogAfterDelay() {
  // Set isFindingDialogOpen to true if it's not already open
  if (!findingRobotDialog.value) {
    findingRobotDialog.value = true;
  }

  // After a 5-second delay, set ispairingDialog to true
  setTimeout(() => {
    ispairingDialog.value = true;
  }, 5000); // 5000 milliseconds (5 seconds)
}

let dataForHomepage = ref('5-7');

const updateData = (newData: string) => {
  dataForHomepage.value = newData;
};
</script>

<style>
.bg {
  background: linear-gradient(
    180deg,
    rgba(225, 229, 242, 1) 5%,
    rgb(169, 209, 248) 35%,
    rgba(157, 202, 255, 1) 100%
  ) !important;
  width: 100% !important;
  height: 100vh !important;
}

.responsive-container {
  margin-top: -165px;
  margin-bottom: 120px;
  margin-left: 20px;
  text-align: left;
  display: flex;
}
</style>
