<template>
  <q-layout
    view="hHh lpR fFf"
    class="bg-activity"
    :style="setBackgroundImage"
    data-cy="activities-page"
  >
    <q-header elevated class="bg-white row q-pa-sm">
      <div class="col-3">
        <div class="row float-left">
          <div class="col q-pl-sm">
            <HelpButton data-cy="help-btn" />
          </div>

          <div class="col q-pl-sm">
            <AchievementButton data-cy="achievement-btn" />
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
            <SoundButton data-cy="sound-btn" />
          </div>

          <div class="col q-pr-sm">
            <MusicButton data-cy="music-btn" />
          </div>

          <div class="col q-pr-sm">
            <MenuButton @open-dialog="openMenuDialog" data-cy="menu-btn" />
            <MenuDialog
              v-model="isMenuDialogVisible"
              data-cy="menu-dialog"
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
            :age-group="ageGroup"
            :setting-num="settingNumber"
            :level-num="level.levelNum"
            :goal-title="level.goalTitle"
            :reward="level.reward"
          />
        </div>
      </div>
    </q-page-container>
    <q-footer class="transparent">
      <div class="home row q-ml-md q-mb-md">
        <PreviousButton @click="navigateBack" data-cy="previous-btn" />
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
import { settings_5_7 } from '../components/games/levels_5_7';
import { settings_8_11 } from '../components/games/levels_8_11';
import PreviousButton from '../components/buttons/PreviousButton.vue';

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
    ? settings_5_7[settingNumber].settingBg
    : settings_8_11[settingNumber].settingBg;
});

const getSettingName = computed(() => {
  return ageGroup === '5-7'
    ? settings_5_7[settingNumber].settingName
    : settings_8_11[settingNumber].settingName;
});

const determineLevelsToDisplay = computed(() => {
  return ageGroup === '5-7'
    ? settings_5_7[settingNumber].levels
    : settings_8_11[settingNumber].levels;
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
