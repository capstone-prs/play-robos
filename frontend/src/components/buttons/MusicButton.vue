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

import { useQuasar } from 'quasar';
import {
  soundEffect,
  stopmusic,
  musicBackground,
  backgroundMusicHome,
  backgroundMusic
} from 'src/utils/SoundUtils';
import { ref, watch } from 'vue';
const $q = useQuasar();

const musicIcon = ref(
  ($q.localStorage.getItem('musicIcon') as string) || 'img:/music-btn.svg'
);

const emit = defineEmits(['update:MusicValueIcon', 'update:MusicValue']);
watch(musicIcon, () => {
  $q.localStorage.set('musicIcon', musicIcon.value);
  emit('update:MusicValueIcon', musicIcon.value);
});

watch(musicBackground, () => {
  $q.localStorage.set('bg-sound', musicBackground.value);
  emit('update:MusicValue', musicBackground.value);
});

const toggleMute = () => {
  soundEffect();
  if (musicBackground.value === true) {
    musicBackground.value = false;
    musicIcon.value = 'img:/music-btn.svg';
    backgroundMusic.play();
  } else {
    musicBackground.value = true;
    stopmusic();
    musicIcon.value = 'img:/no-music.svg';
  }
};
</script>
