<template>
  <q-btn-toggle
    size="lg"
    class="toggle-btn q-mt-md"
    v-model="selectedOption"
    glossy
    rounded
    text-color="grey-7"
    color="white"
    toggle-color="blue-4"
    :options="options"
    data-testid="toggle-btn"
    @click="click"
  >
    <template v-slot:one />
    <template v-slot:two />
  </q-btn-toggle>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { soundEffect } from '../../utils/SoundUtils';

// defines the two options for the age group
const options = [
  { label: 'Easy', value: 'easy', slot: 'one' },
  { label: 'Hard', value: 'hard', slot: 'two' },
];

const selectedOption = ref('');

const click = () => {
  soundEffect();
};
const emit = defineEmits(['update:modelValue']);

watch(selectedOption, (newVal) => {
  // Update localStorage when selectedOption changes
  localStorage.setItem('userDifficulty', newVal === 'easy' ? 'easy' : 'hard');
  emit('update:modelValue', newVal);
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
