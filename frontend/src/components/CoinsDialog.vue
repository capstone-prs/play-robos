<template>
  <q-dialog v-model="isDialogOpen">
    <q-card class="q-ma-lg" style="width: 200%; height: 69%">
      <div class="q-pt-lg q-pm-none">
        <q-card-section class="q-pt-none q-pm-none" align="center">
          <div class="text-h3 correct-text">CONGRATULATIONS!</div>
          <div class="text-h4 detail-text q-pt-md">
            YOU WON <q-icon name="img:/coin.svg" />{{ coins }}!
          </div>
        </q-card-section>
      </div>
      <q-card-section align="center">
        <div class="row" q-pa-xs>
          <q-btn
            class="col q-ma-xs"
            @click="navigateToActivities(settingNumber, difficulty)"
            icon="arrow_back"
            color="purple"
            rounded
            text-color="white"
            size="lg"
            data-testid="upload-btn"
          />
          <q-btn
            class="col q-ma-xs"
            rounded
            icon="refresh"
            color="pink-6"
            size="lg"
            text-color="white"
            @click="redo"
            data-testid="upload-btn"
          ></q-btn>
          <q-btn
            class="col q-ma-xs"
            rounded
            text-label="Next Level"
            icon="play_arrow"
            color="amber-4"
            size="lg"
            text-color="white"
            data-testid="upload-btn"
            icon-class="custom-icon"
            @click="
              postCutscenes(settingNumber, levelNumber, difficulty, maxLevel)
            "
          />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { soundEffect } from 'src/utils/SoundUtils';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';

const $q = useQuasar();

console.log($q.localStorage.getItem('coin_storage'));
const router = useRouter();
defineProps<{
  coins: number;
  settingNumber: number;
  levelNumber: number;
  difficulty: string;
  maxLevel: number;
}>();

const isDialogOpen = ref(false);

const navigateToActivities = (settingNum: number, difficulty: string) => {
  soundEffect();
  return router.push({
    name: 'activity',
    params: { param: (difficulty + ' ' + settingNum) as string },
  });
};

const redo = () => {
  soundEffect();
  location.reload();
};

const nextLevel = async (
  setting: number,
  level: number,
  difficulty: string
) => {
  soundEffect();
  console.log(router.currentRoute.value.path);
  await router.push({
    name: 'studio',
    params: { param: setting + '_' + level + '_' + difficulty },
  });
  console.log(router.currentRoute.value.path);
  location.reload();
};

const postCutscenesMap = [
  ['0', '1', '2', '3', '20'],
  ['4', '5', '6', '7', '21'],
  ['8', '9', '10', '11', '22'],
  ['12', '13', '14', '15', '23'],
  ['16', '17', '18', '19', '24'],
];

const postCutscenes = (
  setting: number,
  levelNum: number,
  difficulty: string,
  maxLevel: number
) => {
  const isNextSetting = ref(false);
  levelNum > maxLevel ? (isNextSetting.value = true) : false;
  postCutscenesMap.map((scene) => {
    if (postCutscenesMap.indexOf(scene) === setting) {
      scene.map((level) => {
        if (scene.indexOf(level) === levelNum - 1) {
          console.log(scene);
          console.log(level);
          router.push({
            name: 'narrative',
            params: {
              param:
                level +
                '_' +
                setting +
                '_' +
                levelNum +
                '_' +
                difficulty +
                '_' +
                isNextSetting.value,
            },
          });
        }
      });
    }
  });
};
</script>

<style>
@font-face {
  font-family: hitchcut;
  src: url('/fonts/Hitchcut-Regular.woff');
}

@font-face {
  font-family: GillSans;
  src: url('/fonts/GillSansInfant.woff');
}
.correct-text {
  font-family: 'hitchcut';
  color: rgb(255, 222, 37);
  text-shadow: 3px 0px 2px rgba(0, 120, 112, 0.6);
}

.incorrect-text {
  font-family: 'hitchcut';
  color: rgb(236, 74, 49);
  text-shadow: 3px 0px 2px rgba(248, 239, 0, 0.906);
}

.detail-text {
  color: #e4b304;
  font-family: GillSans;
}
</style>
