<template>
  <q-dialog
    v-model="openPlayDialog"
    style="background-color: transparent"
    transition-show="scale"
    transition-hide="scale"
  >
    <q-card style="width: 450px; height: 250px">
      <q-card-section class="row items-center q-pa-md">
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
          <q-icon name="img:/goal.svg" size="35px"> </q-icon>
          <div class="text-h6 play-dialog">Goal: {{ goalTitle }}</div>
          <q-space />
          <q-icon name="img:/coin.svg" size="35px"> </q-icon>
          <div class="text-h6 play-dialog">Reward: {{ reward }}</div>
        </div>
      </q-card-section>
      <q-card-section align="center">
        <action-button
          text-label="PLAY"
          @click="navigateToStudio(settingNum, levelNum, ageGroup)"
        />
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
  ageGroup: {
    type: String,
    required: true,
  },
  settingNum: {
    type: Number,
    required: true,
  },
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
    type: Array<string>,
    required: true,
  },
});

const openPlayDialog = ref(false);
const $q = useQuasar();

const router = useRouter();
const navigateToStudio = (
  levNum: number,
  settNum: number,
  ageGroup: string
) => {
  showLoading();
  return router.push({
    name: 'studio',
    params: { param: levNum + ' ' + settNum + ' ' + ageGroup },
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
  font-size: 40px;
  text-shadow: 3px 0px 2px rgba(9, 39, 0, 0.6);
}
</style>
