<template>
  <q-btn round @click="openDialog">
    <q-icon name="img:/menu-btn.svg" size="50px" />
  </q-btn>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MenuButton',
  methods: {
    openDialog() {
      this.$emit('open-dialog');
    },
  },
});
</script>
