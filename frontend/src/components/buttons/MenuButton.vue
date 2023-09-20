<template>
  <q-btn round @click="openDialog">
    <q-icon name="img:/menu-btn.svg" size="50px" data-testid="menu-btn" />
  </q-btn>
</template>

<script setup lang="ts">
const emit = defineEmits(['open-dialog']);
const openDialog = () => {
  emit('open-dialog');
};
</script>
