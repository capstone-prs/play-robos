<template>
  <q-dialog v-model="isDialogOpen">
    <q-card style="width: 200%; height: 100%">
      <q-space />
      <div class="q-pt-lg q-pm-none">
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
        <div class="row">
          <ActionButton
            class="col-3"
            @click="atHome"
            text-label="Home"
            color="purple"
            text-color="white"
            data-testid="upload-btn"
          />
          <ActionButton
            class="col"
            text-label="RESTART"
            color="pink-6"
            text-color="white"
            data-testid="upload-btn"
          ></ActionButton>
          <ActionButton
            class="col"
            text-label="Next Level"

            color="amber-4"
            text-color="blue"
            data-testid="upload-btn"
          />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ActionButton from './buttons/ActionButton.vue';
import { useRouter } from 'vue-router';


const router = useRouter();
defineProps<{
  coins: number;
}>();

const isDialogOpen = ref(false);
const atHome = () => {
  return router.push('/home');
};

// const nextLevel = () => {
//    console.log( router.currentRoute.value.path);
//     router.push('/studio/0_2_easy')
// Next page logic 
// }
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
