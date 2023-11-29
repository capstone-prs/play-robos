<template>
  <q-btn
    class="fit wrap"
    :color="color"
    stack
    glossy
    size="sm"
    :icon="icon"
    :label="label"
  />
</template>
<script setup lang="ts">
defineProps<{ icon: string; label: string; color: string }>();
</script>
