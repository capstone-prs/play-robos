<template>
  <q-dialog v-model="isDialogOpen" persistent>
    <q-card class="" style="width: 35%; height: 100%; border-radius: 20px">
      <q-card-section class="q-mt-sm">
        <div class="row justify-center items-center">
          <q-icon
            class="col-3 stars"
            v-for="index in elementsArray"
            :key="index"
            name="stars"
            size="60px"
            color="amber-5"
          />
        </div>
        <div align="center">
          <div class="text-h6 level-label">LEVEL{{ levelNumber }}</div>
          <div class="text-h4 correct-text">COMPLETE</div>
        </div>
      </q-card-section>

      <q-card-section align="center" class="q-pa-none">
        <div class="text-h7 detail-title">SCORE</div>
        <div class="text-h6 detail-text-coin q-mb-sm">
          {{ score }}
        </div>
        <div class="text-h7 detail-title">REWARD</div>
        <div class="text-h6 detail-text-coin">
          <q-icon size="30px" name="img:/coin-bag.svg" />
          {{ isRetry ? 0 : coins }}
        </div>
      </q-card-section>

      <q-card-section align="center">
        <div class="row justify-center items-center">
          <IconButton
            icon="img:/home.svg"
            @click="atHome"
            class="col-2 q-ma-xs"
          />
          <IconButton
            icon="img:/restart.svg"
            class="col-2 q-ma-md"
            @click="
              retry(levelNumber - 1, settingNumber, difficulty as Difficulty)
            "
          />
          <IconButton
            icon="img:/next.svg"
            class="col-2 q-ma-xs"
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
import { computed, ref } from 'vue';
import { soundEffect } from 'src/utils/SoundUtils';
import { useRouter } from 'vue-router';
import IconButton from './buttons/IconButton.vue';
import { Difficulty } from 'src/types/Progress';

const elementsArray = computed(() =>
  Array.from(
    { length: computeStarsToDisplay(props.score) },
    (_, index) => index + 1
  )
);

const router = useRouter();
const props = defineProps<{
  coins: number;
  settingNumber: number;
  levelNumber: number;
  difficulty: string;
  maxLevel: number;
  activityScore: number;
  score: number;
  isRetry: boolean;
}>();

const computeStarsToDisplay = (activityScore: number) => {
  console.log(activityScore);

  if (activityScore <= 100 && activityScore >= 90) {
    return 3;
  } else if (activityScore < 90 && activityScore >= 50) {
    return 2;
  } else {
    return 1;
  }
};

const isDialogOpen = ref(false);

const retry = (level: number, setting: number, difficulty: Difficulty) => {
  return router.push({
    name: 'studio',
    params: { param: level + '_' + setting + '_' + difficulty },
  });
};

// const redo = () => {
//   soundEffect();
//   // FIXME: Add logic to bring back to the current level
//   // location.reload();
// };
const atHome = () => {
  soundEffect();
  // FIXME: Add logic to bring back to the current level
  return router.push('/home');
};

const postCutscenesMap = [
  ['47', '48', '49', '50', '5_6'],
  ['51', '52', '53', '54', '13_14'],
  ['55', '56', '57', '58', '20_27'],
  ['59', '60', '61', '62', '36_37'],
  ['63', '64', '65', '66', '44_46'],
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
  font-family: futura;
  src: url('../css/fonts/FuturaLT.woff');
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

.detail-text-coin {
  color: rgb(70, 68, 68);
  font-family: 'futura';
  background-color: rgb(255, 249, 165);
  border-radius: 30px;
  margin-left: 50px;
  margin-right: 50px;
}

.stars {
  animation: RewardsAnimation 6s ease 0s infinite normal forwards;
}

.level-label {
  font-family: 'futura';
  color: grey;
}

.detail-title {
  font-family: 'futura';
  color: grey;
}
@keyframes RewardsAnimation {
  0%,
  100% {
    transform: rotate(0deg);
    transform-origin: 50% 50%;
  }

  10% {
    transform: rotate(10deg);
  }

  20%,
  40%,
  60% {
    transform: rotate(-5deg);
  }

  30%,
  50%,
  70% {
    transform: rotate(10deg);
  }

  80% {
    transform: rotate(-5deg);
  }

  90% {
    transform: rotate(8deg);
  }
}
</style>
