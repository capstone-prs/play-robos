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
          <div class="col q-pl-sm">
            <AgeGroupButton @click="openAgeGroupDialog" />
            <AgeGroupDialog
              v-model="isAgeGroupDialogVisible"
              @update:data-for-homepage="updateData"
            />
          </div>
        </div>
      </div>
      <q-space />

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
              @update:data-for-homepage="updateData"
            />
          </div>
        </div>
      </div>
    </q-header>

    <q-page-container class="fixed-center">
      <SettingComponent
        :key="dataForHomepage"
        :image-urls="getSettingsToDisplay"
        data-test-id="setting-component"
        :age-group="dataForHomepage"
      />
    </q-page-container>
    <q-page-container class="fixed-bottom-left q-pl-lg q-pb-md">
      <div style="padding-top: 240px">
        <RobotConnectButton
          :loading-handler="
            (isLoading) => {
              findingRobotDialog = isLoading;
            }
          "
          :open-bt-setting-handler="() => (isPairingDialog = true)"
        />

        <FindingDialog v-model="findingRobotDialog" />
        <PairingDialog v-model="isPairingDialog" />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import HelpButton from '../components/buttons/HelpButton.vue';
import AchievementButton from '../components/buttons/AchievementButton.vue';
import SoundButton from '../components/buttons/SoundButton.vue';
import MusicButton from '../components/buttons/MusicButton.vue';
import SettingComponent from '../components/SettingComponent.vue';
import MenuDialog from '../components/MenuDialog.vue';
import MenuButton from '../components/buttons/MenuButton.vue';
import RobotConnectButton from '../components/buttons/RobotConnectButton.vue';
import FindingDialog from '../components/FindingDialog.vue';
import PairingDialog from '../components/pairingDialog.vue';
import * as Levels from '../components/games/levelDetails';
import AgeGroupButton from '../components/buttons/AgeGroupButton.vue';
import AgeGroupDialog from '../components/AgeGroupDialog.vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const isMenuDialogVisible = ref(false);
const isAgeGroupDialogVisible = ref(false);
const findingRobotDialog = ref(false);
const isPairingDialog = ref(false);
const dataForHomepage = ref($q.localStorage.getItem('age_group') as string);

// makes the method a computed property to simplify access to the method
const getSettingsToDisplay = computed(() => {
  const settingUrls: Array<string> = [];
  const settings =
    dataForHomepage.value === '5-7' ? Levels.levels_5_7 : Levels.levels_8_11;

  for (const setting in settings) {
    if (settings.hasOwnProperty(setting) && setting !== 'Levels') {
      const theSetting = settings[setting];
      settingUrls.push(theSetting.SettingImage);
    }
  }
  return settingUrls;
});

watch(getSettingsToDisplay, () => {
  getSettingsToDisplay.value;
});

const openMenuDialog = () => {
  isMenuDialogVisible.value = true;
};

const openAgeGroupDialog = () => {
  isAgeGroupDialogVisible.value = true;
};

// gets value from toggle button
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

@font-face {
  font-family: hitchcut;
  src: url('/fonts/Hitchcut-Regular.woff');
}

.play-robos {
  font-family: 'hitchcut';
  color: rgb(117, 210, 35);
  text-shadow: 1px 1px #012e08;
}
</style>
