<template>
  <q-dialog v-model="isFindingDialogOpen">
    <q-card style="width: 50%; height: 60%; border-radius: 20px">
      <q-card-section class="row items-center card-title">
        <div class="text-h4 futura">Please Wait...</div>
        <q-space />
        <q-btn
          icon="close"
          color="white"
          size="md"
          flat
          v-close-popup
          data-test-id="close-btn"
        />
      </q-card-section>
      <q-card-section align="center" class="q-pa-none q-mt-sm">
        <div>
          <q-spinner-rings style="color: #27cf01" size="100px" />
        </div>
        <div
          class="text-h6"
          style="font-style: italic; color: grey; font-family: 'futura'"
        >
          Scanning for Zappy
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import '../css/style.css';
import { QSpinnerRings } from 'quasar';

const isFindingDialogOpen = ref(false);
</script>

<style scoped>
.overlay-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black overlay */
  z-index: 999; /* Make sure the overlay is on top of everything else */
}
</style>
