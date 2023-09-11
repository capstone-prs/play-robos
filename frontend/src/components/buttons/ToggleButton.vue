<template>
  <q-btn-toggle
    size="lg"
    class="toggle-btn"
    v-model="selectedOption"
    glossy
    rounded
    toggle-color="amber"
    :options="options"
  >
    <template v-slot:one />
    <template v-slot:two />
  </q-btn-toggle>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const selectedOption = ref('5-7');
const options = [
  { label: '5-7', value: '5-7', slot: 'one' },
  { label: '8-11', value: '8-11', slot: 'two' },
];

const emit = defineEmits(['update:modelValue']);

watch(selectedOption, () => {
  emit('update:modelValue', selectedOption.value);
  console.log('selected option from Toggle button:', selectedOption.value);
});
</script>

<style>
@font-face {
  font-family: hitchcut;
  src: url('/fonts/Hitchcut-Regular.woff');
}

.toggle-btn {
  font-family: 'hitchcut';
}
</style>
