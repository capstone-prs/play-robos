<template>
  <div>
    <q-btn class="glossy hitchcut" size="lg" rounded color="yellow" text-color="blue" data-testid="action-btn">
      {{ textLabel }}
    </q-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ActionButton',
  props: {
    'textLabel': String,
  },
  setup(props) {
    // const textLabel = props['text-label'];
    return props['textLabel']
  },
})

</script>

<style>
  @font-face {
    font-family: hitchcut ;
    src: url('/fonts/Hitchcut-Regular.woff');
  }

  .hitchcut {
    font-family: 'hitchcut';
  }
</style>
