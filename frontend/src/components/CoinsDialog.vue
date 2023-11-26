<template>
  <q-dialog v-model="isDialogOpen">
    <q-card style="width: 200%; height: 100%">
      <div class="q-pt-xs q-pm-none">
        <q-card-section class="q-pt-none q-pm-none" align="center">
          <div class="text-h4 correct-text">CONGRATULATIONS!</div>
          <div class="text-h6 detail-text">
            YOU HAVE RECEIVE <q-icon name="img:/coin.svg" />{{ coins }}
          </div>
          <q-icon name="verified" size="90px" />
          <q-icon name="verified" size="90px" />
          <q-icon name="verified" size="90px" />
        </q-card-section>
      </div>
      <q-card-section align="center">
        <div class="row" q-pa-xs>
          <q-btn
            class="col-3 q-ma-xs"
            @click="atHome"
            icon="home"
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
            @click="nextLevel"
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
}>();

const isDialogOpen = ref(false);
const atHome = () => {
  soundEffect();
  return router.push('/home');
};
const redo = () => {
  soundEffect();
  // return router.push('/home');
};

const nextLevel = () => {
  soundEffect();
  console.log(router.currentRoute.value.path);
  router.push('/studio/0_2_easy');
  // Next page logic
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
