<template>
  <q-dialog v-model="isDialogOpen" persistent>
    <q-card style="width: 100%; height: 70%; border-radius: 30px">
      <q-card-section class="row q-pa-none q-mt-lg q-mb-md">
        <q-space />
        <div class="row text-h5 detail-text-level">
          <b>LEVEL {{ levelNo }}</b>
        </div>
        <q-space />
      </q-card-section>
      <q-card-section class="q-pa-none" align="center" v-if="correct">
        <div class="text-h2 correct-text">CORRECT</div>
        <div class="q-pa-sm text-h5 detail-text">
          Congratulations! You got it right!
        </div>
      </q-card-section>
      <q-card-section class="q-pa-none" align="center" v-else-if="!correct">
        <div class="text-h2 incorrect-text">INCORRECT</div>
        <div class="q-pa-sm text-h5 detail-text">
          Check your program and try again.
        </div>
      </q-card-section>
      <q-card-section align="center">
        <ActionButton
          :text-label="correct ? 'DONE' : 'TRY AGAIN'"
          color="amber-4"
          text-color="blue"
          @click="onClick"
          data-testid="upload-btn"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import ActionButton from './buttons/ActionButton.vue';

const props = defineProps<{
  correct: boolean;
  levelNo: number;
}>();

const emits = defineEmits<{ (e: 'done'): void; (e: 'tryAgain'): void }>();

const onClick = () => {
  if (props.correct) {
    emits('done');
  } else {
    emits('tryAgain');
  }
};

const isDialogOpen = ref(false);
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
  color: rgb(141, 141, 141);
  font-family: GillSans;
}

.detail-text-level {
  color: rgb(0, 113, 200);
  font-family: GillSans;
}
</style>
