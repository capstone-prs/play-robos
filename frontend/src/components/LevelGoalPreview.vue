window-height window-width
<template>
  <q-dialog :persistent="true" class="q-ma-lg" v-model="open">
    <q-card :style="style">
      <div @click="play" class="absolute-center">
        <div v-if="!showPlaying">
          <div class="row justify-center">
            <q-badge class="hitchcut-h4 q-pa-md text-h4" style="opacity: 80%"
              >LEVEL: {{ 1 }}</q-badge
            >
          </div>
          <div class="row justify-center q-mt-sm">
            <q-badge class="hitchcut-h4 q-pa-md text-h4" style="opacity: 80%">{{
              levelTitle
            }}</q-badge>
          </div>
        </div>

        <div
          class="row justify-center q-pa-md"
          style="
            background-color: whitesmoke;
            border-style: solid;
            border-radius: 5%;
            border-color: black;
            border-width: 2px;
            width: 150px;
            height: 150px;
          "
          v-if="showPlaying"
        >
          <q-img :src="showing" />
          <q-badge color="red" class="hitchcut q-pa-xs" floating label="GOAL" />
        </div>
      </div>
    </q-card>
  </q-dialog>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { settings_hard } from './games/levels-hard';

const levelTitle = settings_hard[0].levels[3].goalTitle;
const imageSet = settings_hard[0].settingBg;
const props = { pics: settings_hard[0].levels[3].gif };
const style = computed(() => ({
  backgroundImage: `url(${imageSet})`,
  backgroundSize: 'cover',
  backgroundAttachment: 'scroll',
  borderRadius: '15px',
  width: '100%',
  height: '100%',
}));

const open = ref(true);

const emits = defineEmits<{ (e: 'close'): void }>();

const showing = ref(props.pics[0]);
const showPlaying = ref(false);

const play = async () => {
  if (!showPlaying.value) {
    showPlaying.value = true;
    for (let i = 0; i < props.pics.length; i++) {
      showing.value = props.pics[i];

      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    showPlaying.value = false;
    open.value = false;
    emits('close');
  }
};

onMounted(() => {
  setTimeout(play, 5000);
});
</script>
<style scoped>
@font-face {
  font-family: hitchcut;
  src: url('/fonts/Hitchcut-Regular.woff');
}

.hitchcut-h4 {
  font-family: 'hitchcut';
}
</style>
