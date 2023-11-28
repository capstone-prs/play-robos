<template>
  <div class="app">
    <div class="background" ref="lottieContainer"></div>
    <FlipbookComponent />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import animationData from '../../public/bgs/bg-animation.json';
import FlipbookComponent from '../components/FlipbookComponent.vue';
import { lottieBackgroundLoader } from '../utils/lottieUtils';

const lottieContainer = ref();

onMounted(() => {
  lottieBackgroundLoader(animationData, lottieContainer);
});
</script>

<style scoped>
.app {
  position: relative;
  height: 100vh;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1; /* Place it behind other content */
}

.foreground {
  /* Add any styling for the HelloWorld component here */
  /* You can set a higher z-index value to make sure it appears above the background */
  z-index: 1;
}
</style>
