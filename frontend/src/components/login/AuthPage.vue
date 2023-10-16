<template>
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
</template>

<script setup lang="ts">
import ActionButton from '../buttons/ActionButton.vue';
import { useRouter } from 'vue-router';
import { soundEffect } from 'src/utils/SoundUtils';
import '../../css/style.css';

const router = useRouter();

const navigateToLogin = () => {
  soundEffect();
  router.push('/login');
};

const navigateToSignup = () => {
  soundEffect();
  return router.push('/signup');
};
</script>
