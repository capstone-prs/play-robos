<template>
  <q-dialog v-model="isPairingDialogOpen">
    <q-card style="width: 100%; height: 100%">
      <q-card-section align="center">
        <text class="text" style="font-size: 30px">
          <span style="color: #fbde4e">Instructions for</span>
          <span style="color: #fe66c4">Opening BT</span>
        </text>
        <div style="margin-top: 25px">
          <ActionButton
            text-label="Open"
            color="green"
            text-color="white"
            @click="() => openBluetoothSetting(bluetoothSerial)"
            v-close-popup
          />

          <ActionButton
            text-label="Cancel"
            color="red-14"
            text-color="white"
            v-close-popup
          />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ActionButton from './buttons/ActionButton.vue';
import { openBluetoothSetting, bluetoothSerial } from '../utils/bluetoothUtils';
import '../css/style.css';

const isPairingDialogOpen = ref(false);
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
