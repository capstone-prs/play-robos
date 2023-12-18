<template>
  <div class="app">
    <div class="background" ref="lottieContainer"></div>
    <div class="element">
      <div class="container">
        <!-- Use the imported image -->
        <img
          src="../../assets/PlayRobos1.svg"
          class="centered-image"
          alt="PlayRobosLogo"
        />
      </div>
      <h2 class="text">
        <span style="color: #006df0">Play</span>
        <span style="color: #fe66c4">Robo</span>
        <span style="color: #fbde4e">S</span>
      </h2>
      <q-space />
      <div class="container">
        <div class="button-container">
          <div class="q-pa-md q-gutter-sm">
            <ActionButton
              textLabel="Log In"
              @click="navigateToLogin"
              data-cy="login-btn"
            />
          </div>
          <div class="q-pa-md q-gutter-sm">
            <ActionButton
              textLabel="Sign Up"
              color="pink-12"
              text-color="white"
              @click="navigateToSignup"
              data-cy="signup-btn"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ActionButton from '../buttons/ActionButton.vue';
import { useRouter } from 'vue-router';

import { onMounted, ref } from 'vue';
import '../../css/style.css';
import lottie from 'lottie-web';
import animationData from '../../../public/bgs/index-bg.json';

const lottieContainer = ref();

onMounted(() => {
  lottie.loadAnimation({
    container: lottieContainer.value,
    loop: true,
    autoplay: true,
    renderer: 'svg',
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice', // Adjust the preserveAspectRatio as needed
    },
  });
});

const router = useRouter();
const navigateToLogin = () => {
  router.push('/login');
};

const navigateToSignup = () => {
  return router.push('/signup');
};
</script>

<style>
.app {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1; /* Place it behind other content */
}
</style>
