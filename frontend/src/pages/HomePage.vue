<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="transparent row q-pa-md">
      <div class="col">
      <div class="row" >
        <HelpButton />
        <AchievementButton />
      </div>
      </div>

      <div class="col-6">
        Insert Level Board Here
      </div>
      <div class="col">
        <div class="row" >
          <SoundButton />
          <MusicButton />
          <MenuButton />
        </div>
        </div>
    </q-header>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue';
import HelpButton from '../components/buttons/HelpButton.vue';
import AchievementButton from '../components/buttons/AchievementButton.vue';
import SoundButton from '../components/buttons/SoundButton.vue';
import MusicButton from '../components/buttons/MusicButton.vue';
import MenuButton from '../components/buttons/MenuButton.vue';

console.log('here')

export default defineComponent({
    name: 'HomePage',
    components: { HelpButton, AchievementButton, SoundButton, MusicButton, MenuButton }
});
</script>

<style>
  body {
  background: rgb(225,229,242) !important;
  background: linear-gradient(180deg, rgba(225,229,242,1) 5%, rgb(169, 209, 248) 35%, rgba(157,202,255,1) 100%) !important;
  width: 100vh !important;
  height: 100vh !important;
  }
</style>
