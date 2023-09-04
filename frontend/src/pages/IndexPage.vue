<template>
  <div>
    <!-- <button @click="login">Sign In with Google</button> -->

    <!-- <SignupForm />
    <LoginForm /> -->


    <AuthPage />


  </div>
</template>

<script lang="ts">
// import '../firebase/config'

// import SignupForm from '../components/login/SignupForm.vue';
// import LoginForm from '../components/login/LoginForm.vue';

import AuthPage from 'src/components/login/AuthPage.vue';

import { defineComponent } from 'vue';
// import HomePage from './HomePage.vue';
// import StudioPage from './StudioPage.vue';
export default defineComponent({
  name: 'IndexPage',
  components: {
    AuthPage
  },

  methods: {},
});
</script>
