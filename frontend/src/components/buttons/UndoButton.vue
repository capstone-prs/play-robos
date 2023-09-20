<template>
  <div>
    <q-btn round>
      <q-icon name="img:/undo-btn.svg" size="50px" data-testid="undo-btn" />
    </q-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UndoButton',
});
</script>
