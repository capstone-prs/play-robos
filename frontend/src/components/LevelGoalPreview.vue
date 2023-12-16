<template>
  <q-dialog :persistent="true" class="q-ma-lg">
    <q-card class="preview-goal-card">
      <q-card-section :style="style" class="q-ma-md">
        <div @click="play" class="absolute-center">
          <div v-if="!showPlaying">
            <div
              class="row justify-center q-mt-sm"
              style="opacity: 80%; color: white"
            >
              <div
                class="no-wrap-text text-h4 hitchcut-h4 beat"
                style="
                  white-space: nowrap;
                  text-shadow: 4px 4px 5px rgb(0, 47, 47);
                "
              >
                {{ level.goalTitle }}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div v-if="showPlaying">
            <div class="row justify-center">
              <q-img
                :src="showing"
                style="width: 20vw; height: auto"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </q-card-section>

      <div v-if="!showPlaying" class="row justify-center q-mt-lg">
        <q-badge class="hitchcut-h4 q-px-md text-h5" color="red">
          LEVEL: {{ level.levelNum }}
        </q-badge>
      </div>
      <div>
        <div v-if="showPlaying">
          <div class="row justify-center aligh-bottom q-mt-lg">
            <q-badge class="hitchcut-h4 q-px-lg text-h5" color="red"
              >LEVEL GOAL</q-badge
            >
          </div>
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
  backgroundColor: showPlaying.value ? 'rgb(166, 166, 166)' : '',
  backgroundBlendMode: showPlaying.value ? 'multiply' : '',
  height: '65%',
  backgroundSize: 'cover',
  boxShadow: '8px 8px 2px #dcdcdc',
  borderRadius: '20px 20px 5px 5px',
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
  border-radius: 20px;
  width: 100%;
  height: 100%;
}

.beat {
  animation: beat 3s infinite alternate;
}

@keyframes beat {
  to {
    transform: scale(0.9);
  }
}
</style>
window-height window-width
