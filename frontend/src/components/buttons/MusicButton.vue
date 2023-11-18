<template>
  <div>
    <q-btn round>
      <q-icon
        name="img:/music-btn.svg"
        size="50px"
        data-testid="music-btn"
        @click="toggleMute"
      />
    </q-btn>
  </div>
</template>

<script setup lang="ts">
import { backgroundMusic } from 'src/utils/SoundUtils';
import { reactive } from 'vue';

interface State {
  isBackgroundMusicPlaying: boolean;
}

const state = reactive<State>({
  isBackgroundMusicPlaying: false
});

const toggleMute = () => {
  if (state.isBackgroundMusicPlaying) {
    backgroundMusic.stop();
  } else {
    backgroundMusic.play();
  }
  state.isBackgroundMusicPlaying = !state.isBackgroundMusicPlaying;
};
</script>
