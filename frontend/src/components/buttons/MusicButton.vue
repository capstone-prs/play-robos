<template>
  <div>
    <q-btn round>
      <q-icon name="img:/music-btn.svg" size="50px" data-testid="music-btn" />
    </q-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MusicButton',
});
</script>
