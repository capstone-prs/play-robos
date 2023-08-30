<template>
  <div>
   <button @click="login">Sign In with Google</button>
 </div>
</template>

<script lang="ts">
import '../firebase/config'
import login from '../firebase/auth'
import { defineComponent } from 'vue';
export default defineComponent({
 name: 'IndexPage',

methods: {
 login
}
});
</script>

