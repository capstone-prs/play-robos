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
import { backgroundMusic} from 'src/utils/SoundUtils';
import { ref,watch } from 'vue';
const $q = useQuasar();

const musicIcon = ref(
  $q.localStorage.getItem('musicIcon') as string | undefined
);


const emit = defineEmits(['update:MusicValue']);

watch(musicIcon, () => {
  $q.localStorage.set('musicIcon', musicIcon.value); // Correct key: 'musicIcon'
  emit('update:MusicValue', $q.localStorage.getItem('musicIcon'))
})

 
const toggleMute = () => {
  if (backgroundMusic.playing() == false) {
    backgroundMusic.play();
    musicIcon.value = 'img:/music-btn.svg';

  } else {
    backgroundMusic.stop();
    musicIcon.value = 'img:/no-music.svg';
  }
};
</script>
