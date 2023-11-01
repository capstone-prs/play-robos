<template>
  <q-card align="center" style="width: 120px" class="q-ma-md">
    <q-card-section>
      <q-icon :name="badgeUrl" size="80px" />
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
defineProps({
  badgeUrl: String,
});
</script>
