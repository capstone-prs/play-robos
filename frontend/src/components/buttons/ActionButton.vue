<template>
  <div>
    <q-btn
      class="glossy hitchcut"
      :size="size"
      rounded
      :color="color"
      :text-color="textColor"
      data-cy="action-btn"
      :disable="isDisabled"
      @click="click"
      :loading="loading"
    >
      {{ textLabel }}
    </q-btn>
  </div>
</template>

<script setup lang="ts">
import { soundEffect } from '../../utils/SoundUtils';
const click = () => {
  soundEffect();
};
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
  size: {
    type: String,
    default: 'lg',
  },
  loading: {
    type: Boolean,
    default: undefined,
  },
});
</script>
const
<style>
@font-face {
  font-family: hitchcut;
  src: url('/fonts/Hitchcut-Regular.woff');
}

.hitchcut {
  font-family: 'hitchcut';
}
</style>
