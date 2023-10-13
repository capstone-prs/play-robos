<template>
  <q-dialog v-model="isFindingDialogOpen">
    <q-card style="width: 60%; height: 90%">
      <q-card-section class="row items-center card-title" >
        <div class="text-h4 futura">Finding</div>
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
      <q-card-section align="center">
        <q-card-section >
          <q-spinner-rings style="color: #096cef" size="90px" />
        </q-card-section>
        <text class="text " style="font-size: 200%">
          <span style="color: #fe66c4">Please Wait</span>
        </text>

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
