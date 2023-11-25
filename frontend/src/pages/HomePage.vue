<template>
  <div class="app">
    <div class="background" ref="lottieContainer"></div>
    <div class="foreground">
      <q-layout view="hHh lpR fFf" class="bg" data-cy="homepage">
        <q-header class="transparent row q-pa-md">
          <div class="col-3">
            <div class="row float-left">
              <div class="col q-pl-sm">
                <HelpButton id="help-btn" />
              </div>

              <div class="col q-pl-sm">
                <AchievementButton
                  id="achievement-btn"
                  @click="navigateToAchievements"
                />
              </div>
              <div class="col q-pl-sm">
                <AgeGroupButton
                  @click="openAgeGroupDialog"
                  id="age-group-btn"
                />
                <AgeGroupDialog
                  v-model="isAgeGroupDialogVisible"
                  @update:data-for-homepage="updateData"
                />
              </div>
            </div>
          </div>
          <q-space />
          <q-space />
          <q-btn
            glossy
            rounded
            color="grey-9"
            icon="img:/coin.svg"
            :disable="true"
            label="100"
          />

          <div class="col-3">
            <div class="row float-right">
              <div class="col q-pr-sm q-pl-sm">
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

        <q-page-container>
          <SettingComponent
            id="setting"
            :key="dataForHomepage"
            :image-urls="getSettingsToDisplay.settingIcons"
            :setting-names="getSettingsToDisplay.settingNames"
            :accessibility="getSettingsToDisplay.settingAccess"
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
          </div>
          <div class="col q-pl-sm">
            <FindingDialog v-model="findingRobotDialog" />
            <PairingDialog v-model="isPairingDialog" />
          </div>
        </q-page-container>
      </q-layout>
    </div>
  </div>
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
import { settings_easy } from '../components/games/levels-easy';
import { settings_hard } from '../components/games/levels-hard';
import { useQuasar } from 'quasar';
import introJS from 'intro.js';
import 'intro.js/introjs.css';
import introConfig from '../onboarding/intro.json';
import { Options } from 'intro.js/src/option';
import { getUser, userID } from '../firebase/firestore';
import { useRouter } from 'vue-router';
import lottie from 'lottie-web';
import animationData from '../../public/bgs/bg-animation.json';

const $q = useQuasar();
const isMenuDialogVisible = ref(false);
const isAgeGroupDialogVisible = ref(false);
const findingRobotDialog = ref(false);
const isPairingDialog = ref(false);
const dataForHomepage = ref($q.localStorage.getItem('age_group') as string);
const intro = introJS();
const router = useRouter();
const lottieContainer = ref();

// introduces a walkthrough on homepage launch
onMounted(() => {
  startOnboarding();

  // to improve
  if (sessionStorage.getItem('hasCompletedOnboarding') != 'true') {
    getUser(userID()).then((user) => {
      const age = user.user_birthdate;
      console.log(age);
      // if (age >= 5 && age <= 7) {
      dataForHomepage.value = 'hard';
      // } else {
      //   dataForHomepage.value = '8-11';
      // }
    });
  }

  lottie.loadAnimation({
    container: lottieContainer.value,
    loop: true,
    autoplay: true,
    renderer: 'svg',
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  });
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
  const settingTitles: Array<string> = [];
  const settingUrls: Array<string> = [];
  const settingAccessibility: Array<boolean> = [];
  const settings =
    dataForHomepage.value === 'easy' ? settings_easy : settings_hard;

  for (const setting in settings) {
    if (settings.hasOwnProperty(setting)) {
      const theSetting = settings[setting];
      settingUrls.push(theSetting.settingImage);
      settingTitles.push(theSetting.settingName);
      settingAccessibility.push(theSetting.accessible);
    }
  }
  return {
    settingIcons: settingUrls,
    settingNames: settingTitles,
    settingAccess: settingAccessibility,
  };
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

const navigateToAchievements = () => {
  router.push('/achievement');
};
</script>

<style>
.app {
  position: relative;
  height: 100vh;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
}

.foreground {
  z-index: 1;
}
.bg {
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
