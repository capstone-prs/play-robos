<template>
  <div>
    <HomePage />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HomePage from './HomePage.vue';

export default defineComponent({
    name: 'IndexPage',
    components: { HomePage }
});
</script>
