<template>
  <q-dialog v-model="isPairingDialogOpen">
    <q-card style="width: 100%; height: 100%">
      <q-btn
          class="glossy "
          round
          color="red"
          icon="close"
          v-close-popup
          style="position: ; left: 500px; top: 10px"
        />
      <q-card-section align="center">
        <text class="text" style="font-size: 20px">
          <span style="color: #fbde4e">Instructions for </span>
          <span style="color: #fe66c4">Pairing Robot</span>
        </text>
        <div class="q-pa-md">
          <div class="q-gutter-md">
            <q-carousel v-model="slide" 
              transition-prev="scale" 
              transition-next="scale" 
              swipeable animated
              control-color="white" 
              navigation padding arrows height="300px"
              class="bg-primary text-white shadow-1 rounded-borders">

              <q-carousel-slide name="instruc1" class="column no-wrap flex-center">
                <q-icon name="img:/instruc-1.svg" size="250px" class="absolute flex-center" />
                <div class="q-mt-auto q-pt-xl">
                  <text class="futura" style="font-size: 20px">
                    <span style="color: #fbde4e">Turn On </span>
                    <span style="color: #fe66c4">BlueTooth</span>
                  </text>
                </div>
              </q-carousel-slide>
                    <q-carousel-slide name="instruc2" class="column no-wrap flex-center">
                <q-icon name="img:/instruc-2.svg" size="270px" class="absolute flex-center"/>
                <div class="q-mt-auto q-pt-xl">
                  <text class="futura" style="font-size: 20px">
                    <span style="color: #fbde4e">Click On </span>
                    <span style="color: #fe66c4">device HC-05</span>
                  </text>
                </div>
              </q-carousel-slide>
              <q-carousel-slide name="instruc3" class="column no-wrap flex-center">
                <q-icon name="img:/instruc-3.svg" size="190px" class="absolute flex-center"/>
                <div class="q-mt-auto q-pt-xl">
                  <text class="futura" style="font-size: 20px">
                    <span style="color: #fe66c4">Put Password </span>
                    <span style="color: #fbde4e">1234</span>
                    <span style="color: #fe66c4"> and </span>
                    <span style="color: #fbde4e">click ok</span>  
                  </text>
                </div>
              </q-carousel-slide>
            </q-carousel>
          </div>
        </div>
        <div>
          <ActionButton text-label="Open Bluetooth" color="green" text-color="white"
            @click="() => openBluetoothSetting(bluetoothSerial)" v-close-popup />
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
const slide = ref('instruc1');

</script>

<style scoped>
.overlay-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  /* Semi-transparent black overlay */
  z-index: 999;
  /* Make sure the overlay is on top of everything else */
}
</style>
