<template>
  <div>
    <!-- <button @click="login">Sign In with Google</button> -->
    <SignupForm />
    <LoginForm />
  </div>
</template>

<script lang="ts">
// import '../firebase/config'
import SignupForm from '../components/login/SignupForm.vue';
import LoginForm from '../components/login/LoginForm.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'IndexPage',
  components: {
    SignupForm,
    LoginForm,
  },
  methods: {},
});
</script>
