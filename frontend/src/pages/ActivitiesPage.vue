<template>
  <q-layout
    view="hHh lpR fFf"
    class="bg-activity"
    :style="setBackgroundImage"
    data-test-id="homepage"
  >
    <q-header elevated class="bg-white row q-pa-sm">
      <div class="col-3 ">
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
        <div class="setting-level-text">
          <!-- to change settings name -->
          <span style="color: rgb(244, 240, 0)"> {{ getSettingName }}</span>
        </div>
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
              :data-for-homepage="ageGroup"
              @update:data-for-homepage="updateData"
            />
          </div>
        </div>
      </div>
    </q-header>
    <q-page-container>
      <div class="row q-mt-lg" align="center">
        <div
          class="col-3"
          v-for="level in determineLevelsToDisplay"
          :key="level.levelNum"
        >
          <ActivityComponent
            :level-num="level.levelNum"
            :goal-title="level.goalTitle"
            :reward="level.reward"
            :toolbox="level.toolbox"
            :correct-code="level.correctCode"
          />
        </div>
      </div>
    </q-page-container>
    <q-footer class="transparent">
      <div class="home row q-ml-md q-mb-md">
        <PreviousButton @click="navigateBack" />
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

import HelpButton from '../components/buttons/HelpButton.vue';
import AchievementButton from '../components/buttons/AchievementButton.vue';
import SoundButton from '../components/buttons/SoundButton.vue';
import MusicButton from '../components/buttons/MusicButton.vue';
import MenuDialog from '../components/MenuDialog.vue';
import MenuButton from '../components/buttons/MenuButton.vue';
import ActivityComponent from '../components/games/ActivityComponent.vue';
import * as Levels from '../components/games/levelDetails';
import PreviousButton from '../components/buttons/PreviousButton.vue';
// import PairingDialog from '../components/PairingDialog.vue';

const isMenuDialogVisible = ref(false);
const route = useRouter().currentRoute;
const levelNumber = route.value.params.param as string;
const splitParams = levelNumber.split(' ');
const ageGroup = splitParams[0];
const settingNumber = parseInt(splitParams[1]);

const openMenuDialog = () => {
  isMenuDialogVisible.value = true;
};

const dataForHomepage = ref('8-11');

const getSettingImage = computed(() => {
  return ageGroup === '5-7'
    ? Levels.levels_5_7[settingNumber].SettingBg
    : Levels.levels_8_11[settingNumber].SettingBg;
});

const getSettingName = computed(() => {
  return ageGroup === '5-7'
    ? Levels.levels_5_7[settingNumber].SettingName
    : Levels.levels_8_11[settingNumber].SettingName;
});

const determineLevelsToDisplay = computed(() => {
  return ageGroup === '5-7'
    ? Levels.levels_5_7[settingNumber].Levels
    : Levels.levels_8_11[settingNumber].Levels;
});

const updateData = (newData: string) => {
  dataForHomepage.value = newData;
};

const router = useRouter();

const navigateBack = () => {
  return router.go(-1);
};

const setBackgroundImage = computed(() => ({
  backgroundImage: `url(${getSettingImage.value})`,
  backgroundSize: 'cover',
}));
</script>

<style>
.bg-activity {
  background-size: cover;
  width: 100% !important;
  height: 100% !important;
}

.home {
  background-color: none !important;
}

.responsive-container {
  margin-top: -165px;
  margin-bottom: 120px;
  margin-left: 20px;
  text-align: left;
  display: flex;
}

.setting-level-text {
  font-family: 'hitchcut';
  font-size: 40px;
  text-shadow: 3px 0px 2px rgba(70, 71, 0, 0.55);
}
</style>
