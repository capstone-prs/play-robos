<template>
  <q-layout view="hHh lpR fFf" class="bg" data-cy="homepage">
    <q-header class="transparent row q-pa-md">
      <div class="col-3">
        <div class="row float-left">
          <div class="col q-pl-sm">
            <HelpButton id="help-btn" />
          </div>

          <div class="col q-pl-sm">
            <AchievementButton id="achievement-btn" />
          </div>
          <div class="col q-pl-sm">
            <AgeGroupButton @click="openAgeGroupDialog" id="age-group-btn" />
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
            <SoundButton id="sound-btn" />
          </div>

          <div class="col q-pr-sm">
            <MusicButton id="music-btn" />
          </div>

          <div class="col q-pr-sm">
            <MenuButton
              @open-dialog="openMenuDialog"
              data-cy="menu-btn"
              id="menu-btn"
            />
            <MenuDialog
              v-model="isMenuDialogVisible"
              data-cy="menu-dialog"
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
        data-cy="setting-component"
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
          id="robot-btn"
        />

        <FindingDialog v-model="findingRobotDialog" />
        <PairingDialog v-model="isPairingDialog" />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
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
import AgeGroupButton from '../components/buttons/AgeGroupButton.vue';
import AgeGroupDialog from '../components/AgeGroupDialog.vue';
import { settings_5_7 } from '../components/games/levels_5_7';
import { settings_8_11 } from '../components/games/levels_8_11';
import { useQuasar } from 'quasar';
import introJS from 'intro.js';
import 'intro.js/introjs.css';
import introConfig from '../onboarding/intro.json';
import { Options } from 'intro.js/src/option';

const $q = useQuasar();
const isMenuDialogVisible = ref(false);
const isAgeGroupDialogVisible = ref(false);
const findingRobotDialog = ref(false);
const isPairingDialog = ref(false);
const dataForHomepage = ref($q.localStorage.getItem('age_group') as string);
const intro = introJS();

// introduces a walkthrough on homepage launch
onMounted(() => {
  startOnboarding();
});

const startOnboarding = () => {
  const hasCompletedOnboarding = sessionStorage.getItem(
    'hasCompletedOnboarding'
  );
  if (hasCompletedOnboarding != 'true') {
    intro.setOptions(introConfig as Partial<Options>);
    intro.start();
    sessionStorage.setItem('hasCompletedOnboarding', 'true');
  }
};

// makes the method a computed property to simplify access to the method
const getSettingsToDisplay = computed(() => {
  const settingUrls: Array<string> = [];
  const settings =
    dataForHomepage.value === '5-7' ? settings_5_7 : settings_8_11;

  for (const setting in settings) {
    if (settings.hasOwnProperty(setting)) {
      const theSetting = settings[setting];
      settingUrls.push(theSetting.settingImage);
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
