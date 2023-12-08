<template>
  <q-dialog :persistent="true" class="q-ma-lg">
    <q-card class="preview-goal-card" :style="style">
      <div @click="play" class="absolute-center">
        <div v-if="!showPlaying">
          <div class="row justify-center">
            <q-badge class="hitchcut-h4 q-pa-md text-h4" style="opacity: 80%"
              >LEVEL: {{ level.levelNum }}</q-badge
            >
          </div>
          <div class="row justify-center q-mt-sm">
            <q-badge class="hitchcut-h4 q-pa-md text-h4" style="opacity: 80%">{{
              level.goalTitle
            }}</q-badge>
          </div>
        </div>
        <div
          class="fit justify-center q-pa-md"
          style="
            background-color: whitesmoke;
            border-style: solid;
            border-radius: 5%;
            border-color: black;
            border-width: 2px;
          "
          v-if="showPlaying"
        >
          <q-img
            :src="showing"
            style="width: 20vw; height: auto"
            loading="eager"
          />
          <q-badge color="red" class="hitchcut q-pa-xs" floating label="GOAL" />
        </div>
      </div>
    </q-card>
  </q-dialog>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { Setting } from 'src/types/Levels';

const props = defineProps<{ levelSetting: Setting; levelNum: number }>();
const emit = defineEmits<{ (e: 'ended'): void }>();

const style = computed(() => ({
  backgroundImage: `url(${props.levelSetting.settingBg})`,
}));

const level = props.levelSetting.levels[props.levelNum];

const showing = ref(level.gif[0]);
const showPlaying = ref(false);

const play = async () => {
  if (!showPlaying.value) {
    showPlaying.value = true;
    for (let i = 0; i < level.gif.length; i++) {
      showing.value = level.gif[i];

      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    showPlaying.value = false;
    emit('ended');
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

.preview-goal-card {
  background-size: cover;
  background-attachment: scroll;
  border-radius: 15px;
  width: 100%;
  height: 100%;
}
</style>
window-height window-width
