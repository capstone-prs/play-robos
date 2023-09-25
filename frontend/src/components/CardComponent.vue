<template>
  <div>
    <q-card
      flat
      style="height: 170px; width: 150px"
      class="transparent q-mt-lg"
    >
      <img :src="imageUrl" />
    </q-card>
  </div>
</template>

<script setup lang="ts">
defineProps({
  imageUrl: String,
});
</script>
