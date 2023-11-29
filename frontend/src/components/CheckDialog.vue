<template>
  <q-dialog v-model="isDialogOpen">
    <q-card style="width: 100%; height: 100%">
      <q-card-section class="row">
        <q-space />
        <q-btn
          data-testid="close-btn"
          icon="close"
          color="pink-4"
          size="md"
          round
          v-close-popup
          data-test-id="close-btn"
        />
      </q-card-section>
      <div>
        <q-card-section align="center" v-if="correct">
          <div class="text-h2 correct-text">CORRECT!</div>
          <div class="text-h6 detail-text">
            Upload your progam to collect coins.
          </div>
        </q-card-section>
        <q-card-section align="center" v-else-if="!correct">
          <div class="text-h2 incorrect-text">INCORRECT</div>
          <div class="text-h6 detail-text">
            Check your program and try again.
          </div>
        </q-card-section>
      </div>
      <q-card-section align="center">
        <ActionButton
          text-label="UPLOAD"
          color="amber-4"
          text-color="blue"
          @click="onCorrect"
          data-testid="upload-btn"
          :is-disabled="!correct"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ActionButton from './buttons/ActionButton.vue';

defineProps<{
  correct: boolean;
  onCorrect: () => void;
}>();

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
  color: #e4b304;
  font-family: GillSans;
}
</style>
