<template>
  <q-dialog v-model="extra" persistent>
    <q-card
      class="q-pa-md"
      style="width: 35%; height: 100%; border-radius: 20px"
    >
      <q-card-section class="q-pt-xl q-pm-none q-pa" align="center">
        <div class="text-h4 incorrect-text">Continue</div>
        <div class="text-h6 display q-pt-md">
          Wanna try again? <span v-text="timer"></span><q-space />
          <span class="detail-coin"
            >-100<q-icon name="img:/coin-bag.svg" size="25px"
          /></span>
        </div>
      </q-card-section>
      <GameOver v-model="gameover" />
      <div class="row justify-center items-center">
        <IconButton
          icon="img:/no-btn.svg"
          @click="cancel"
          class="col-2 q-ma-xs"
        />
        <IconButton
          icon="img:/check-btn.svg"
          @click="addLife"
          class="col-2 q-ma-md"
        />
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
import IconButton from './buttons/IconButton.vue';
const extra = ref(false);
const timer = ref(10);
const gameover = ref(false);
const emits = defineEmits<{
  (e: 'num', isAdd: number): void;
  (e: 'close-dialog'): void;
}>();
const countDown = () => {
  if (timer.value != 0) {
    soundEffect(tick);
    timer.value -= 1;
    // soundEffect(tick)
  } else if (timer.value === 0) {
    gameover.value = true;
    emits('close-dialog');
    clearInterval(set);
    soundEffect(gameoverSnd);
  }
};
const set = setInterval(countDown, 1000);
const cancel = () => {
  clearInterval(set);
  soundEffect(gameoverSnd);
  gameover.value = true;
  emits('close-dialog');
};

const addLife = () => {
  clearInterval(set);
  emits('num', 100);

};
onMounted(() => {
  timer.value = 10;
});
</script>
<style>
.display {
  color: rgb(70, 68, 68);
  font-family: 'futura';
}
.detail-coin {
  color: rgb(70, 68, 68);
  font-family: 'futura';
  background-color: rgb(173, 210, 49);
  border-radius: 50px;
  margin-left: 55px;
  margin-right: 55px;
}
</style>
