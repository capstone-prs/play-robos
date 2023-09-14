<template>
  <q-dialog v-model="isUploadDialogOpen" persistent>
    <q-card style="width: 100%; height: 90%">
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
        <div class="text-h2 correct-text">UPLOADING</div>
      </q-card-section>
      <q-card-section align="center">
        <q-linear-progress
          stripe
          rounded
          size="50px"
          :value="0.7"
          color="blue"
          class="q-mt-sm"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const isUploadDialogOpen = ref(false);
</script>
