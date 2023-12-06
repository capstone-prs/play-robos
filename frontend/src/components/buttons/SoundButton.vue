<template>
  <div>
    <q-btn round>
      <q-icon
        :name="musicIcon"
        size="50px"
        data-testid="sound-btn"
        @click="click"
      />
    </q-btn>
  </div>
</template>

<script setup lang="ts">

import { soundEffect,musicFX} from 'src/utils/SoundUtils';
import { useQuasar } from 'quasar';
import { ref, watch } from 'vue';
const $q = useQuasar();


const musicIcon = ref(
  ($q.localStorage.getItem('music-icon-fx') as string) || 'img:/sound-btn.svg'
);
const emit = defineEmits(['update:MusicFX','update:MusicFxIcon']);

watch(musicIcon, () => {
  $q.localStorage.set('music-icon-fx', musicIcon.value);
  emit('update:MusicFxIcon', musicIcon.value);
});

 

watch(musicFX, () => {
  $q.localStorage.set('fx-sound', musicFX.value);
  emit('update:MusicFX', musicFX.value);
});


const click = () => {
  if(musicIcon.value == 'img:/sound-btn.svg'){
    musicIcon.value = 'img:/no-Fx.svg'
    musicFX.value =true
  }
  else{
    musicIcon.value = 'img:/sound-btn.svg'
    musicFX.value = false
  }
  musicFX.value = !musicFX.value;
  soundEffect();
};

</script>
