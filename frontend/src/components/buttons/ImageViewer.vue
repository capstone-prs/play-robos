<template>
  <div>
    <div
      style="
        border-style: solid;
        border-radius: 5%;
        border-color: black;
        border-width: 2px;
      "
      class="q-pa-sm"
    >
      <q-img
        :class="showLabel === 'replay' && !showPlaying && 'blur'"
        style="height: 100px; width: 100px"
        :src="showing"
      />
    </div>
    <div
      class="q-pt-xs"
      style="display: flex; justify-content: center; align-items: center"
    >
      <q-btn
        color="blue"
        size="10px"
        :icon="icon"
        @click="play"
        :loading="showPlaying"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  pics: {
    type: Array<string>,
    required: true,
  },
});

const showing = ref(props.pics[0]);
const showLabel = ref('play');
const showPlaying = ref(false);
const icon = ref('play_arrow');
import { soundEffect } from '../../utils/SoundUtils'
const play = async () => {
  soundEffect();
  showPlaying.value = true;
  for (let i = 0; i < props.pics.length; i++) {
    showing.value = props.pics[i];

    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
  showPlaying.value = false;
  showLabel.value = 'replay';
  icon.value = 'replay';
};
</script>
<style>
.blur {
  filter: blur(10px);
}
</style>
