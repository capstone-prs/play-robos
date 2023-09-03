<template>
  <div>
    <!-- <button @click="login">Sign In with Google</button> -->
    <!-- <SignupForm />
    <LoginForm /> -->
    <!-- <StudioPage /> -->
    <HomePage />
    <ToggleButton />
  </div>
</template>

<script lang="ts">
// import '../firebase/config'
// import SignupForm from '../components/login/SignupForm.vue';
// import LoginForm from '../components/login/LoginForm.vue';
import { defineComponent } from 'vue';
import ToggleButton from '../components/buttons/ToggleButton.vue';
import HomePage from './HomePage.vue';
// import StudioPage from './StudioPage.vue';
export default defineComponent({
  name: 'IndexPage',
  components: {
    ToggleButton,
    HomePage
},
  methods: {},
});
</script>
