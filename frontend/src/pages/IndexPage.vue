<template>
  <div>
    <!-- <button @click="login">Sign In with Google</button> -->
    <!-- <SignupForm />
    <LoginForm /> -->
    <StudioPage />
  </div>
</template>

<script lang="ts">
// import '../firebase/config'
// import SignupForm from '../components/login/SignupForm.vue';
// import LoginForm from '../components/login/LoginForm.vue';
import { defineComponent } from 'vue';
import StudioPage from './StudioPage.vue';
export default defineComponent({
  name: 'IndexPage',
  components: {
    StudioPage
},
  methods: {},
});
</script>
