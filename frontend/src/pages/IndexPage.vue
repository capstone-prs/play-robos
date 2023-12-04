<template>
  <div>
    <AuthPage />
  </div>
</template>

<script setup lang="ts">
import { Q } from 'app/src-cordova/www/assets/QSpace.d8600468';
import AuthPage from '../components/login/AuthPage.vue';
import { useQuasar } from 'quasar';
const $q = useQuasar();
import {
  backgroundMusic,
  backgroundMusicHome,
  backgroundMusicStudio,
  stopmusic,
  musicBackground
} from 'src/utils/SoundUtils';
if($q.localStorage.getItem('bg-sound') == false){
  backgroundMusic.play()
}
else{
  stopmusic();
}



</script>
