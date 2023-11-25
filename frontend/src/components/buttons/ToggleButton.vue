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
    @click = "click"
  >
    <template v-slot:one />
    <template v-slot:two />
  </q-btn-toggle>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useQuasar } from 'quasar';

// defines the two options for the age group
const options = [
  { label: 'Easy', value: 'easy', slot: 'one' },
  { label: 'Hard', value: 'hard', slot: 'two' },
];

// initializes the default value of the selected option to null
// this is to not conflict it when there is already a selected value from toggling
const selectedOption = ref('');

// defines the emit functions to-use
const emit = defineEmits(['update:modelValue']);

const $q = useQuasar();

// watches for changes in the selectedOption
// when the selectedOption changes, it is stored locally and emitted to homepage
watch(selectedOption, () => {
  $q.localStorage.set('age_group', selectedOption.value);
  emit('update:modelValue', $q.localStorage.getItem('age_group'));
});

import { soundEffect } from '../../utils/SoundUtils'
const click = () => {
    soundEffect();
  }

// console.log($q.localStorage.getItem('age_group'));
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
