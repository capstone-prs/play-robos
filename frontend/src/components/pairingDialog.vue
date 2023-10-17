<template>
  <q-dialog v-model="isPairingDialogOpen">
    <q-card style="width: 65%; height: 90%">
      <q-card-section class="row items-center card-title" >
        <div class="text-h4 futura">Instructions</div>
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
        <div class="q-pa-none">
          <div class="q-gutter-md">
            <q-carousel v-model="slide" 
            swipeable
            animated
              navigation 
              padding 
              control-color="amber"
              arrows
              height="300px"
              class="transparent">

              <q-carousel-slide name="instruc1" class="column no-wrap flex-center">
                <q-icon name="img:/instruc1.gif" size="170px" class="absolute flex-center" />
                <div class="q-mt-auto q-pt-xl">
                  <text class="futura" style="font-size: 20px">
                    <span style="color: #096cef">Turn On </span>
                    <span style="color: #fe66c4">bluetooth</span>
                  </text>
                </div>
              </q-carousel-slide>
                    <q-carousel-slide name="instruc2" class="column no-wrap flex-center">
                <q-icon name="img:/instruc2.gif" size="170px" class="absolute flex-center"/>
                <div class="q-mt-auto q-pt-xl">
                  <text class="futura" style="font-size: 20px">
                    <span style="color: #096cef">Click On </span>
                    <span style="color: #fe66c4">device HC-05</span>
                  </text>
                </div>
              </q-carousel-slide>
              <q-carousel-slide name="instruc3" class="column no-wrap flex-center">
                <q-icon name="img:/instruc3.gif" size="170px"/>
                <div class="q-mt-auto ">
                  <text class="futura" style="font-size: 20px">
                    <span style="color: #fe66c4">Put Password </span>
                    <span style="color: #096cef">1234</span>
                    <span style="color: #fe66c4"> and click</span>
                    <span style="color: #096cef"> ok</span>  
                  </text>
                </div>
              </q-carousel-slide>
            </q-carousel>
          </div>
        </div>
        <div class ='q-pt-none' style="position: absolute; top: 80%; left:32%;">
          <ActionButton size="md" text-label="Open Bluetooth" color="green" text-color="white"
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
