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
            data-testid="login-btn"
          />
        </div>
        <div class="q-pa-md q-gutter-sm">
          <ActionButton
            textLabel="Sign Up"
            @click="navigateToSignup"
            data-testid="signup-btn"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ActionButton from '../buttons/ActionButton.vue';
import { useRouter } from 'vue-router';

import '../../css/style.css';

export default defineComponent({
  name: 'HomePage',

  components: {
    ActionButton,
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {
    navigateToLogin() {
      return this.router.push('/login');
    },
    navigateToSignup() {
      return this.router.push('/signup');
    },
  },
});
</script>
