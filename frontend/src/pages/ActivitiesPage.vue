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
            <AchievementButton
              data-cy="achievement-btn"
              @click="navigateToAchievements"
            />
          </div>
        </div>
      </div>
      <div class="col level-board" align="center">
        <div class="setting-level-text">
          <!-- to change settings name -->
          <q-icon color="red-7" name="place" size="xl" />
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
              :data-for-homepage="difficulty"
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
            :completed="
              level.levelNum === 1
                ? true
                : completedLevels()?.find(
                    (completedLevel) =>
                      completedLevel.activity.difficulty === difficulty &&
                      completedLevel.activity.setting === settingNumber &&
                      completedLevel.activity.id === level.levelNum - 1
                  )?.completed
            "
            :difficulty="difficulty"
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
import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

import AchievementButton from '../components/buttons/AchievementButton.vue';
import SoundButton from '../components/buttons/SoundButton.vue';
import MusicButton from '../components/buttons/MusicButton.vue';
import MenuDialog from '../components/MenuDialog.vue';
import MenuButton from '../components/buttons/MenuButton.vue';
import ActivityComponent from '../components/games/ActivityComponent.vue';
import { settings_easy } from '../components/games/levels-easy';
import { settings_hard } from '../components/games/levels-hard';
import PreviousButton from '../components/buttons/PreviousButton.vue';
import { LocalData } from '../types/Progress';

const isMenuDialogVisible = ref(false);
const router = useRouter();
const route = router.currentRoute;
const levelNumber = route.value.params.param as string;
const splitParams = levelNumber.split(' ');
const difficulty = splitParams[0];
const settingNumber = parseInt(splitParams[1]);

onMounted(() => {
  introScene(settingNumber);
  checkSettingProgress();
});

const introMapScenes = ['0_3', '8_12', '16_19', '29_35', '39_43'];

const introScene = (setting: number) => {
  const hasLoadedIntroScene = sessionStorage.getItem(
    `hasLoadedIntro${setting}`
  );
  if (!hasLoadedIntroScene) {
    introMapScenes.map((scene) => {
      introMapScenes.indexOf(scene) === setting &&
      !settings_easy[settingNumber].levels[1].completed
        ? router.push({
            name: 'narrative',
            params: {
              param: scene + '_' + setting + '_' + difficulty,
            },
          })
        : '';
    });
    sessionStorage.setItem(`hasLoadedIntro${setting}`, 'true');
  }
};

const completedLevels = () => {
  const storedDataString = localStorage.getItem('localData');
  const storedUserData: LocalData = storedDataString
    ? JSON.parse(storedDataString)
    : null;

  return storedUserData?.activityProgress;
};

const checkSettingProgress = () => {
  if (difficulty === 'easy') {
    const isAllCompleted = settings_easy[settingNumber].levels.every((level) =>
      completedLevels()?.find(
        (completedLevel) =>
          completedLevel.activity.difficulty === 'easy' &&
          completedLevel.activity.setting === settingNumber &&
          completedLevel.activity.id === level.levelNum
      )
    );

    if (isAllCompleted) {
      settings_easy[settingNumber + 1].accessible = true;
      localStorage.setItem('activeSetting', (settingNumber + 1).toString());
      localStorage.setItem(
        'latestAccessibleSetting',
        (settingNumber + 1).toString()
      );
    }
  } else {
    const isAllCompleted = settings_hard[settingNumber].levels.every((level) =>
      completedLevels()?.find(
        (completedLevel) =>
          completedLevel.activity.difficulty === 'hard' &&
          completedLevel.activity.setting === settingNumber &&
          completedLevel.activity.id === level.levelNum
      )
    );

    if (isAllCompleted) {
      settings_hard[settingNumber + 1].accessible = true;
      localStorage.setItem('activeSetting', (settingNumber + 1).toString());
    }
  }
};

const openMenuDialog = () => {
  isMenuDialogVisible.value = true;
};

const dataForHomepage = ref('8-11');

const getSettingImage = computed(() => {
  return difficulty === 'easy'
    ? settings_easy[settingNumber].settingBg
    : settings_hard[settingNumber].settingBg;
});

const getSettingName = computed(() => {
  return difficulty === 'easy'
    ? settings_easy[settingNumber].settingName
    : settings_hard[settingNumber].settingName;
});

const determineLevelsToDisplay = computed(() => {
  return difficulty === 'easy'
    ? settings_easy[settingNumber].levels
    : settings_hard[settingNumber].levels;
});

const updateData = (newData: string) => {
  dataForHomepage.value = newData;
};

const navigateBack = () => {
  return router.push('/home');
};

const navigateToAchievements = () => {
  router.push('/achievement');
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
