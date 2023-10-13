<template>
  <q-dialog
    v-model="openPlayDialog"
    style="background-color: transparent"
    transition-show="scale"
    transition-hide="scale"
  >
    <q-card style="width: 65%; height: 65%">
      <q-card-section class="row items-center q-pt-md q-pb-xs q-pl-md q-pr-md">
        <div class="play-level-text">
          LEVEL: <span style="color: rgb(116, 201, 11)">{{ levelNum }}</span>
        </div>
        <q-space />
        <q-btn
          icon="close"
          color="pink"
          size="md"
          round
          v-close-popup
          data-test-id="close-btn"
        />
      </q-card-section>
      <q-card-section>
        <div class="row">
          <q-icon name="img:/goal.svg" size="25px"> </q-icon>
          <div class="play-dialog" style="font-size: 130%;">Goal: {{ goalTitle }}</div>
          <q-space />
          <q-icon name="img:/coin.svg" size="25px"> </q-icon>
          <div class="play-dialog" style="font-size: 130%;">Reward: {{ reward }}</div>
        </div>
      </q-card-section>
      <q-card-section align="center" class="q-pt-none" >
        <action-button text-label="PLAY" @click="navigateToStudio(levelNum)" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import ActionButton from './buttons/ActionButton.vue';
import { useQuasar } from 'quasar';

const props = defineProps({
  levelNum: {
    type: Number,
    required: true,
  },
  goalTitle: {
    type: String,
    required: true,
  },
  reward: {
    type: Number,
    required: true,
  },
  correctCode: {
    type: String,
    required: true,
  },
});

const openPlayDialog = ref(false);
const $q = useQuasar();

const router = useRouter();
const navigateToStudio = (paramVal: number) => {
  showLoading();
  return router.push({
    name: 'studio',
    params: { param: paramVal - 1 + ' ' + props.correctCode },
  });
};

const showLoading = () => {
  $q.loading.show({
    spinnerColor: 'white',
    backgroundColor: 'black',
    message: 'Preparing your studio',
  });

  setTimeout(() => {
    $q.loading.hide();
  }, 4000);
};
</script>

<style>
@font-face {
  font-family: futura;
  src: url('/fonts/FuturaLT.woff');
}

@font-face {
  font-family: hitchcut;
  src: url('/fonts/Hitchcut-Regular.woff');
}

.play-dialog {
  font-family: 'futura';
  color: rgb(0, 0, 0);
  padding-left: 5px;
}

.play-level-text {
  font-family: 'hitchcut';
  color: rgb(255, 240, 29);
  font-size: 290%;
  text-shadow: 3px 0px 2px rgba(9, 39, 0, 0.6);
}
</style>
