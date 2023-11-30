<template>
  <div class="row">
    <div
      v-for="(char, i) of `${getStringTime(time.hr)}:${getStringTime(
        time.min
      )}:${getStringTime(time.sec)}`.split('')"
      :key="i"
    >
      <q-badge
        class="q-pa-s"
        color="blue-grey"
        v-if="char !== ':'"
        style="margin: 0.5px"
        :label="char"
      />
      <b style="margin: 0.5px" v-else>{{ char }}</b>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';

const props = defineProps<{ initialTime: number }>();

const timeStarted = ref(0);
const isStarting = ref(false);
const timer = ref<NodeJS.Timeout>();
const totalTime = ref(props.initialTime);
const time = ref({
  sec: 0,
  min: 0,
  hr: 0,
});
const getStringTime = (time: number) =>
  time < 10 ? `0${time}` : time.toString();

const getTime = () => {
  return {
    sec: totalTime.value % 60,
    min: ((totalTime.value % 3600) - (totalTime.value % 60)) / 60,
    hr: (totalTime.value - (totalTime.value % 3600)) / 3600,
  };
};

watch(totalTime, () => {
  time.value = getTime();
});

onMounted(() => {
  start();
});

const start = () => {
  isStarting.value = true;
  timeStarted.value = Math.floor(Date.now() / 1000);

  timer.value = setInterval(() => {
    const now = Math.floor(Date.now() / 1000);
    totalTime.value = props.initialTime + now - timeStarted.value;
  }, 1000);
};

const stop = () => {
  isStarting.value = false;
  clearInterval(timer.value);
};

defineExpose({ start, stop, totalTime, time, isStarting });
</script>
