<template>
  <q-dialog v-model="isDialogOpen" persistent>
    <q-card class="q-pa-md" style="width: 100%; height: 70%">
      <q-card-section class="q-pt-lg q-pm-none q-pa" align="center">
        <div class="text-h2 incorrect-text">Continue</div>
        <div class="text-h4 detail-text q-pt-md">
          Wanna try again? <span v-text="timer"></span>
        </div>
      </q-card-section>
      <GameOver v-model="gameover" />
      <div class="row" q-pa-md>
        <q-btn
          class="col q-ma-xs"
          label="NO"
          color="red"
          rounded
          text-color="white"
          size="lg"
          data-testid="upload-btn"
          @click="cancel"
        />

        <q-btn
          class="col q-ma-xs"
          rounded
          label="-100"
          color="green-6"
          size="lg"
          text-color="white"
          data-testid=""
          @click="addLife"
          v-close-popup
          icon="img:/coin.svg"
        ></q-btn>
      </div>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import GameOver from './GameOver.vue';
import gameoverSnd from '../assets/sounds/game-over.mp3';
import tick from '../assets/sounds/tick.mp3';
import { soundEffect } from 'src/utils/SoundUtils';
const isDialogOpen = ref(false);
const timer = ref(10);
const gameover = ref(false);
const countDown = () => {
  if (timer.value != 0) {
    soundEffect(tick);
    timer.value -= 1;
    // soundEffect(tick)
  } else if (timer.value === 0) {
    gameover.value = true;
    clearInterval(set);
    soundEffect(gameoverSnd);
  }
};
const set = setInterval(countDown, 1000);
const cancel = () => {
  isDialogOpen.value = false;
  clearInterval(set);
  soundEffect(gameoverSnd);
  gameover.value = true;
};
const emits = defineEmits<{ (e: 'num', isAdd: number): void }>();
const addLife = () => {
  clearInterval(set);
  emits('num', 100);
};
onMounted(() => {
  timer.value = 10;
});
</script>
