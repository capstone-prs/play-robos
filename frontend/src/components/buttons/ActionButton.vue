<template>
  <div>
    <q-btn
      class="glossy hitchcut"
      size="lg"
      rounded
      :color="color"
      :text-color="textColor"
      data-testid="action-btn"
      :disable="isDisabled"
    >
      {{ textLabel }}
    </q-btn>
  </div>
</template>

<script setup lang="ts">
defineProps({
  textLabel: {
    type: String,
    required: true,
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: 'yellow',
  },
  textColor: {
    type: String,
    default: 'blue',
  },
});
</script>

<style>
@font-face {
  font-family: hitchcut;
  src: url('/fonts/Hitchcut-Regular.woff');
}

.hitchcut {
  font-family: 'hitchcut';
}
</style>
