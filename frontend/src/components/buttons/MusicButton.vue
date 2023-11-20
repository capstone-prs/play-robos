<template>
  <div>
    <q-btn round>
      <q-icon
        :name="musicIcon"
        size="50px"
        data-testid="music-btn"
        @click="toggleMute"
      />
    </q-btn>
  </div>
</template>

<script setup lang="ts">
import { backgroundMusic } from 'src/utils/SoundUtils';
import { reactive,ref } from 'vue';

const musicIcon= ref('img:/music-btn.svg')

interface State {
  isBackgroundMusicPlaying: boolean;
}

const state = reactive<State>({
  isBackgroundMusicPlaying: false
});

const toggleMute = () => {
  if (state.isBackgroundMusicPlaying==false ) {
    backgroundMusic.play();
    musicIcon.value=('img:/music-btn.svg')
  } else {
    backgroundMusic.stop();
    musicIcon.value=('img:/no-music.svg')
  }
  state.isBackgroundMusicPlaying = !state.isBackgroundMusicPlaying;
};
</script>
