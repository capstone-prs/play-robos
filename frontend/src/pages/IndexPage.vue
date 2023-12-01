<template>
  <div>
    <AuthPage />
  </div>
</template>

<script setup lang="ts">
import AuthPage from '../components/login/AuthPage.vue';
import {
  backgroundMusic,
  backgroundMusicHome,
  backgroundMusicStudio,
} from 'src/utils/SoundUtils';
if (
  backgroundMusicHome.playing() == true ||
  backgroundMusicStudio.playing() == true ||
  backgroundMusic.playing() == false
) {
  backgroundMusicHome.stop();
  backgroundMusicStudio.stop();
  backgroundMusic.play();
}
</script>
