<template>
  <div>
    <q-btn
      class="glossy hitchcut"
      size="lg"
      rounded
      :color="$props.color"
      :text-color="$props.textColor"
      data-testid="action-btn"
      :disable="isDisabled"
    >
      {{ textLabel }}
    </q-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ActionButton',
  props: {
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
