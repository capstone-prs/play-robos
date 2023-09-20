<template>
  <div>
    <q-btn round>
      <q-icon name="img:/sound-btn.svg" size="50px" data-testid="sound-btn" />
    </q-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SoundButton',
});
</script>
