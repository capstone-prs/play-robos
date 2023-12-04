<template>
  <div style="width: 100vw; height: 100vh">
    <Flipbook
      class="flipbook"
      :pages="splitParams.length == 5 ? inlevelpages : intropages"
      :start-page="1"
      single-page
      :zooms="[1]"
      ref="flipbook"
    />
  </div>

  <q-card-actions
    horizontal
    class="q-pa-md"
    style="position: fixed; bottom: 0; right: 0"
  >
    <div class="q-ma-sm">
      <q-btn
        glossy
        round
        color="amber"
        icon="arrow_back"
        size="md"
        :disable="!flipbook?.canFlipLeft"
        @click="flipbook.canFlipLeft ? flipbook.flipLeft() : ''"
      />
    </div>

    <div class="q-ma-sm">
      <ActionButton
        text-label="CONTINUE"
        @click="navigateBack(settingNum, levelNum + 1, difficulty)"
        v-if="!flipbook?.canFlipRight"
      />
    </div>

    <div class="q-ma-sm">
      <q-btn
        glossy
        round
        color="amber"
        icon="arrow_forward"
        size="md"
        :disable="!flipbook?.canFlipRight"
        @click="flipbook.canFlipRight ? flipbook.flipRight() : ''"
      />
    </div>
  </q-card-actions>
  <div class="background" ref="lottieContainer"></div>
</template>

<script setup lang="ts">
import Flipbook from 'flipbook-vue';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import ActionButton from './buttons/ActionButton.vue';
import { lottieBackgroundLoader } from '../utils/lottieUtils';
import animationData from '../../public/bgs/bg-animation.json';

const show = ref(false);
const router = useRouter();
const routeParam = router.currentRoute.value.params.param as string;
const splitParams = routeParam.split('_');
const startPage = parseInt(splitParams[0]);
const endPage = parseInt(splitParams[1]);
const settingNum = parseInt(splitParams[1]);
const levelNum = parseInt(splitParams[2]);
const difficulty = splitParams[3];
const isNextSetting = splitParams[4];

const flipbook = ref();

const lottieContainer = ref();

console.log(splitParams);
const scenes = [
  'scenes/scorcha-1.svg',
  'scenes/page2.svg',
  'scenes/page3.svg',
  'scenes/page4.svg',
  'scenes/page5.svg',
  'scenes/page6.svg',
  'scenes/page7.svg',
  'scenes/page8.svg',
  'scenes/page9.svg',
  'scenes/page10.svg',
  'scenes/page11.svg',
  'scenes/page12.svg',
  'scenes/page13.svg',
  'scenes/page14.svg',
  'scenes/page15.svg',
  'scenes/page16.svg',
  'scenes/page17.svg',
  'scenes/page18.svg',
  'scenes/page19.svg',
  'scenes/page20.svg',
  'scenes/page21.svg',
  'scenes/page22.svg',
  'scenes/page23.svg',
  'scenes/page24.svg',
  'scenes/page25.svg',
  'scenes/page26.svg',
  'scenes/page27.svg',
  'scenes/page28.svg',
  'scenes/page29.svg',
  'scenes/page30.svg',
  'scenes/page31.svg',
  'scenes/page32.svg',
  'scenes/page33.svg',
  'scenes/page34.svg',
  'scenes/page35.svg',
  'scenes/page36.svg',
  'scenes/page37.svg',
  'scenes/page38.svg',
  'scenes/page39.svg',
  'scenes/page40.svg',
  'scenes/page41.svg',
  'scenes/page42.svg',
  'scenes/page43.svg',
  'scenes/page44.svg',
  'scenes/page45.svg',
  'scenes/page46.svg',
  'scenes/page47.svg',
];
const intropages = scenes.slice(startPage, endPage + 1);
const inlevelpages = scenes.slice(startPage, startPage + 1);

onMounted(() => {
  show.value = true;
});

const navigateBack = (setting: number, level: number, difficulty: string) => {
  if (splitParams.length == 5) {
    if (isNextSetting === 'true' && setting != 4) {
      lottieBackgroundLoader(animationData, lottieContainer);

      router.push({
        name: 'activity',
        params: { param: (difficulty + ' ' + setting) as string },
      });
    } else {
      router.push({
        name: 'studio',
        params: { param: setting + '_' + level + '_' + difficulty },
      });
    }
  } else {
    router.go(-1);
  }
};
</script>

<style>
.flipbook {
  height: 100% !important;
  width: 100% !important;
  margin: 0; /* Remove any default margin */
  padding: 0; /* Remove any default padding */
  box-sizing: border-box; /* Ensure box sizing includes borders and padding */
}

/* .flipbook .viewport {
  width: 100vw !important;
  height: calc(100vh - 50px - 40px) !important;
} */

.flipbook .bounding-box {
  box-shadow: 0 0 80px #000 !important;
}
</style>
