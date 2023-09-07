<template>
  <q-btn-toggle
    size="lg"
    class="toggle-btn"
    v-model="model"
    glossy
    rounded
    toggle-color="amber"
    :options="[
      { label: '5-7', value: '5-7', slot: 'one' },
      { label: '8-11', value: '8-11', slot: 'two' },
    ]"
  >
    <template v-slot:one />
    <template v-slot:two />
  </q-btn-toggle>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ToggleButton',
  setup() {
    return {
      model: ref('5-7'),
    };
  },
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
