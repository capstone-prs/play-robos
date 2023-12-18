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
          <span style="color: rgb(255, 247, 28)"> {{ getSettingName }}</span>
        </div>
      </div>

      <div class="col-3">
        <div class="row float-right">
          <q-btn
            glossy
            rounded
            color="grey-7"
            text-color="white"
            icon="img:/coin-bag.svg"
            :disable="true"
            :label="coinsStorage"
            id="coin-storage"
          />
          <div class="col q-pr-sm q-pl-sm">
            <SoundButton data-cy="sound-btn" />
          </div>

          <div class="col q-pr-sm">
            <MusicButton data-cy="music-btn" />
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
                : allLevels.find(
                    (completedLevel) =>
                      completedLevel.difficulty === difficulty &&
                      completedLevel.setting === settingNumber &&
                      completedLevel.level === level.levelNum - 1
                  )?.completed ?? false
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
        <div
          class="col q-mr-xl q-ml-xl q-mt-sm"
          align="center"
          style="margin-left: 200px; margin-right: 270px"
        >
          <q-linear-progress
            stripe
            size="30px"
            :value="doneAct / 5"
            color="green-4"
            track-color="white"
            rounded
            style="border-radius: 30px"
          >
            <div class="absolute-full flex flex-center">
              <q-badge
                color="white"
                text-color="red-5"
                :label="doneAct.toString() + ' / 5'"
              />
            </div>
          </q-linear-progress>
        </div>
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
import ActivityComponent from '../components/games/ActivityComponent.vue';
import { settings_easy } from '../components/games/levels-easy';
import { settings_hard } from '../components/games/levels-hard';
import PreviousButton from '../components/buttons/PreviousButton.vue';
import { Activity } from '../types/Progress';
import { getLocalActivities, getLocalUser } from '../dexie/db';
import { userID } from 'src/firebase/firestore';
const router = useRouter();
const coinsStorage = ref();
const route = router.currentRoute;
const levelNumber = route.value.params.param as string;
const splitParams = levelNumber.split(' ');
const difficulty = splitParams[0];
const settingNumber = parseInt(splitParams[1]);
const allLevels = ref<Array<Activity>>([]);
const doneAct = ref(0);

onMounted(async () => {
  allLevels.value = await getLocalActivities();
  introScene(settingNumber);
  checkSettingProgress();
  determineProgress();
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

const checkSettingProgress = async () => {
  if (difficulty === 'easy') {
    const isAllCompleted = settings_easy[settingNumber].levels.every((lev) =>
      allLevels.value.find(
        (level) =>
          level.difficulty === 'easy' &&
          level.setting === settingNumber &&
          level.level &&
          lev.levelNum
      )
    );
    const currentCompleted = localStorage.getItem('activeSetting') ?? '0';

    if (isAllCompleted && settingNumber >= parseInt(currentCompleted)) {
      settings_easy[settingNumber + 1].accessible = true;
      localStorage.setItem('activeSetting', (settingNumber + 1).toString());
      localStorage.setItem(
        'latestAccessibleSetting',
        (settingNumber + 1).toString()
      );
    }
  } else {
    const isAllCompleted = settings_easy[settingNumber].levels.every((lev) =>
      allLevels.value.find(
        (level) =>
          level.difficulty === 'hard' &&
          level.setting === settingNumber &&
          level.level &&
          lev.levelNum
      )
    );

    const currentCompleted = localStorage.getItem('activeSettingHard') ?? '0';

    if (isAllCompleted && settingNumber >= parseInt(currentCompleted)) {
      settings_hard[settingNumber + 1].accessible = true;
      localStorage.setItem('activeSettingHard', (settingNumber + 1).toString());
    }
  }
};

onMounted(()=>{
  getLocalUser(userID()).then((user) => {
    coinsStorage.value = user?.coins;
  });
})

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

const determineProgress = () => {
  determineLevelsToDisplay.value.forEach((level) => {
    const determinant = allLevels.value.find(
      (completedLevel) =>
        completedLevel.difficulty === difficulty &&
        completedLevel.setting === settingNumber &&
        completedLevel.level === level.levelNum - 1
    )?.completed;

    determinant ? (doneAct.value += 1) : '';
  });
};
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
