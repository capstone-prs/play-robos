<template>
  <div>
    <!-- <button @click="login">Sign In with Google</button> -->
    <AuthPage />

  </div>
</template>

<script lang="ts">
// import '../firebase/config'
import AuthPage from 'src/components/login/AuthPage.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'IndexPage',
  components: {
    AuthPage
  },
  methods: {},
});
</script>
