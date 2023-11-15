<template>
  <q-btn round @click="openDialog">
    <q-icon glossy name="img:/gear.svg" size="50px" data-testid="menu-btn" />
  </q-btn>
</template>

<script setup lang="ts">
const emit = defineEmits(['open-dialog']);
const openDialog = () => {
  emit('open-dialog');
};
</script>
