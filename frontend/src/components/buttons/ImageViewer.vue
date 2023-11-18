<template>
  <div>
    <q-img
      :class="showLabel === 'replay' && !showPlaying && 'blur'"
      style="height: 140px; max-width: 150px"
      :src="showing"
    />
  </div>
  <q-btn @click="play" :label="showLabel" :loading="showPlaying" />
</template>
<script setup lang="ts">
import { ref } from 'vue';

const pics = [
  'look.svg',
  'bgs/beach-cove.svg',
  'look.svg',
  'bgs/beach-cove.svg',
];
const showing = ref(pics[0]);
const showLabel = ref('play');
const showPlaying = ref(false);

const play = async () => {
  showPlaying.value = true;
  for (let i = 0; i < pics.length; i++) {
    showing.value = pics[i];

    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
  showPlaying.value = false;
  showLabel.value = 'replay';
};
</script>
<style>
.blur {
  filter: blur(10px);
}
</style>
