<template>
  <div>
    <AuthPage />
  </div>
</template>

<script setup lang="ts">

import AuthPage from '../components/login/AuthPage.vue';
import { useQuasar } from 'quasar';
const $q = useQuasar();
import {
  backgroundMusic,
  stopmusic,
} from 'src/utils/SoundUtils';
import { ref, onMounted } from 'vue';


const musicFX = ref<boolean>(
  ($q?.localStorage.getItem('fx-sound') as boolean) || true
);
const musicBackground = ref<boolean>(
  ($q?.localStorage.getItem('bg-sound') as boolean) || false
);

onMounted(() => {
  $q.localStorage.set('fx-sound', musicFX.value);
  $q?.localStorage.set('bg-sound', musicBackground.value);

  if(backgroundMusic.playing()==false){
  if($q.localStorage.getItem('bg-sound') == false){
    backgroundMusic.play()
  }
  else{
    stopmusic();
  }
}
});





</script>
