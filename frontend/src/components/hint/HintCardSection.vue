<template>
  <div :class="`q-pa-xs ${isMistakeBlock && 'highlighted-mistake'}`">
    <q-icon
      v-if="isMistakeBlock"
      name="warning"
      color="orange"
      class="q-mr-sm"
      size="sm"
    />
    <q-icon
      v-else
      name="check_circle"
      color="green"
      class="q-mr-sm"
      size="sm"
    />
    <q-badge>Code Block {{ blockNumber }}:</q-badge>
    <q-icon :name="hintIcon" size="xl" class="q-pl-sm"></q-icon>
    {{ hint }}
  </div>
</template>
<script setup lang="ts">
defineProps<{
  blockNumber: number | string;
  hintIcon: string;
  hint: string;
  isMistakeBlock: boolean;
}>();
</script>

<style scoped>
.highlighted-mistake {
  background-color: #ffcccc;
  border-style: solid;
  border-radius: 5px;
  border-color: red;
  border-width: 2px;
}
</style>
