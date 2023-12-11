<template>
  <div style="width: 100vw; height: 100vh">
    <Flipbook
      class="flipbook"
      :pages="splitParams.length == 5 ? inlevelpages : intropages"
      :start-page="1"
      single-page
      :zooms="[1]"
      ref="flipbook"
      @flip-right-end="onFlipRightEnd"
      @flip-right-start="onFlipRightStart"
      @flip-left-end="onFlipLeftEnd"
      @flip-left-start="onFlipLeftStart"
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
import { onMounted, onUnmounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import ActionButton from './buttons/ActionButton.vue';
import {
  narrator,
  introNarrationsScorcha,
  introNarrationsFlora,
  introNarrationsDarka,
  introNarrationsMistica,
  introNarrationsFutura,
  postNarrationsScorcha,
  postNarrationsFlora,
  postNarrationsDarka,
  postNarrationsMistica,
  postNarrationsFutura,
} from '../utils/SoundUtils';

const show = ref(false);
const router = useRouter();
const routeParam = router.currentRoute.value.params.param as string;
const splitParams = routeParam.split('_');
const startPage = parseInt(splitParams[0]);
const endPage = parseInt(splitParams[1]);
const settingNum = ref(parseInt(splitParams[1]));
const levelNum = ref(parseInt(splitParams[2]));
const difficulty = splitParams[3];
const isNextSetting = splitParams[4];
const flipbook = ref();
const lottieContainer = ref();
const howler = ref<Howl>();
const postNarrations = ref<Array<string[]>>([['']]);
const introNarrations = ref<Array<string[]>>([['']]);

onMounted(() => {
  postNarrations.value = [
    postNarrationsScorcha,
    postNarrationsFlora,
    postNarrationsDarka,
    postNarrationsMistica,
    postNarrationsFutura,
  ];

  introNarrations.value = [
    introNarrationsScorcha,
    introNarrationsFlora,
    introNarrationsDarka,
    introNarrationsMistica,
    introNarrationsFutura,
  ];

  if (splitParams.length === 5) {
    settingNum.value = parseInt(splitParams[1]);
    levelNum.value = parseInt(splitParams[2]);

    postNarrations.value.forEach((postNarration) => {
      if (postNarrations.value.indexOf(postNarration) === settingNum.value) {
        postNarration.forEach((narration) => {
          if (postNarration.indexOf(narration) === levelNum.value - 1) {
            howler.value = narrator(postNarration[levelNum.value - 1]);
            howler.value.play();
          }
        });
      }
    });
  } else if (splitParams.length === 6) {
    settingNum.value = parseInt(splitParams[2]);
    levelNum.value = parseInt(splitParams[3]);

    postNarrations.value.forEach((postNarration) => {
      if (postNarrations.value.indexOf(postNarration) === settingNum.value) {
        howler.value = narrator(postNarration[4]);
        howler.value.play();
      }
    });
  } else {
    settingNum.value = parseInt(splitParams[2]);

    introNarrations.value.forEach((introNarration) => {
      if (introNarrations.value.indexOf(introNarration) === settingNum.value) {
        howler.value = narrator(introNarration[0]);
        howler.value.play();
      }
    });
  }
});

const onFlipRightEnd = (page: number) => {
  introNarrations.value.forEach((introNarration) => {
    if (
      introNarrations.value.indexOf(introNarration) === settingNum.value &&
      splitParams.length === 4
    ) {
      howler.value = narrator(introNarration[page - 1]);
      howler.value.play();
    }
  });

  if (splitParams.length === 6) {
    postNarrations.value.forEach((postNarration) => {
      if (postNarrations.value.indexOf(postNarration) === settingNum.value) {
        howler.value = narrator(postNarration[page + 3]);
        howler.value.play();
      }
    });
  }
};

const onFlipLeftEnd = (page: number) => {
  introNarrations.value.forEach((introNarration) => {
    if (
      introNarrations.value.indexOf(introNarration) === settingNum.value &&
      splitParams.length === 4
    ) {
      howler.value = narrator(introNarration[page - 1]);
      howler.value.play();
    }
  });

  if (splitParams.length === 6) {
    postNarrations.value.forEach((postNarration) => {
      if (postNarrations.value.indexOf(postNarration) === settingNum.value) {
        howler.value = narrator(postNarration[page + 3]);
        howler.value.play();
      }
    });
  }
};

const onFlipRightStart = () => {
  howler.value?.stop();
};

const onFlipLeftStart = () => {
  howler.value?.stop();
};

console.log(splitParams);
const scenes = [
  'scenes/page1.svg',
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
  'scenes/scorcha-L1-post.svg', //47
  'scenes/scorcha-L2-post.svg', //48
  'scenes/scorcha-L3-post.svg', //49
  'scenes/scorcha-L4-post.svg', //50
  'scenes/flora-L1-post.svg', //51
  'scenes/flora-L2-post.svg', //52
  'scenes/flora-L3-post.svg', //53
  'scenes/flora-L4-post.svg', //54
  'scenes/darka-L1-post.svg', //55
  'scenes/darka-L2-post.svg', //56
  'scenes/darka-L3-post.svg', //57
  'scenes/darka-L4-post.svg', //58
  'scenes/mistica-L1-post.svg', //59
  'scenes/mistica-L2-post.svg', //60
  'scenes/mistica-L3-post.svg', //61
  'scenes/mistica-L4-post.svg', //62
  'scenes/futura-L1-post.svg', //63
  'scenes/futura-L2-post.svg', //64
  'scenes/futura-L3-post.svg', //65
  'scenes/futura-L4-post.svg', //66
  'scenes/ending.svg', //67
];
const intropages = scenes.slice(startPage, endPage + 1);
const inlevelpages = scenes.slice(startPage, startPage + 1);

onMounted(() => {
  show.value = true;
});

onUnmounted(() => {
  howler.value?.stop();
});

const navigateBack = (setting: number, level: number, difficulty: string) => {
  if (splitParams.length == 5) {
    if (isNextSetting === 'true' && setting != 4) {
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
  } else if (splitParams.length == 6) {
    if (isNextSetting === 'easy' || isNextSetting === 'hard') {
      router.push({
        name: 'activity',
        params: { param: (splitParams[4] + ' ' + splitParams[2]) as string },
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
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.flipbook .bounding-box {
  box-shadow: 0 0 80px #000 !important;
}
</style>
