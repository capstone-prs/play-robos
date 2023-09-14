<template>
  <q-dialog v-model="isDialogOpen" persistent>
    <q-card style="width: 100%; height: 100%">
      <q-card-section class="row">
        <q-space />
        <q-btn
          icon="close"
          color="pink-4"
          size="md"
          round
          v-close-popup
          data-test-id="close-btn"
        />
      </q-card-section>
      <q-card-section align="center">
        <div class="text-h2 correct-text">CORRECT!</div>
        <div class="text-h6 detail-text">
          Upload your progam to collect coins.
        </div>
      </q-card-section>
      <q-card-section align="center">
        <ActionButton
          text-label="UPLOAD"
          color="amber-4"
          text-color="blue"
          @click="openUploadDialog"
        />
        <UploadDialog v-model="isUploadDialogOpen" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ActionButton from './buttons/ActionButton.vue';
import UploadDialog from './UploadDialog.vue';

const isDialogOpen = ref(false);
const isUploadDialogOpen = ref(false);

const openUploadDialog = () => {
  isUploadDialogOpen.value = true;
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

.detail-text {
  color: #e4b304;
  font-family: GillSans;
}
</style>
