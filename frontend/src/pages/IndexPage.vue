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
if($q.localStorage.getItem('bg-sound') == false){
  backgroundMusic.play()
}
else{
  stopmusic();
}



</script>
