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
import { soundEffect, backgroundMusicHome } from 'src/utils/SoundUtils';
import { ref, watch } from 'vue';
const $q = useQuasar();

const musicIcon = ref(
  ($q.localStorage.getItem('musicIcon') as string) || 'img:/music-btn.svg'
);

const emit = defineEmits(['update:MusicValue']);
watch(musicIcon, () => {
  $q.localStorage.set('musicIcon', musicIcon.value);
  emit('update:MusicValue', musicIcon.value);
});

const toggleMute = () => {
  soundEffect();
  if (backgroundMusicHome.playing() === false) {
    backgroundMusicHome.play();
    musicIcon.value = 'img:/music-btn.svg';
  } else {
    backgroundMusicHome.stop();
    musicIcon.value = 'img:/no-music.svg';
  }
};
</script>
