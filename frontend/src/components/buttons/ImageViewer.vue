<template>
  <div>
    <q-btn
      style="
        background-color: whitesmoke;
        border-style: solid;
        border-radius: 5%;
        border-color: black;
        border-width: 2px;
      "
      class="q-pa-sm"
      @click="play"
    >
      <q-icon
        v-if="!showPlaying"
        style="height: 100px; width: 100px"
        :name="icon"
        size="lg"
      />
      <q-img
        v-if="showPlaying"
        style="height: 100px; width: 100px"
        :src="showing"
      />

      <q-badge color="red" class="hitchcut q-pa-xs" floating label="GOAL" />
    </q-btn>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { soundEffect } from '../../utils/SoundUtils';

const props = defineProps({
  pics: {
    type: Array<string>,
    required: true,
  },
});

const showing = ref(props.pics[0]);
const showPlaying = ref(false);
const icon = ref('play_arrow');

const play = async () => {
  if (!showPlaying.value) {
    soundEffect();
    showPlaying.value = true;
    for (let i = 0; i < props.pics.length; i++) {
      showing.value = props.pics[i];

      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    showPlaying.value = false;
    icon.value = 'replay';
  }
};
</script>
<style>
@font-face {
  font-family: hitchcut;
  src: url('/fonts/Hitchcut-Regular.woff');
}

.blur {
  filter: blur(10px);
}

.hitchcut {
  font-family: 'hitchcut';
  font-size: large;
}
</style>
