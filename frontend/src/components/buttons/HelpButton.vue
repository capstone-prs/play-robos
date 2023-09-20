<template>
  <div>
    <q-btn round>
      <q-icon name="img:/help-btn.svg" size="50px" data-testid="help-btn" />
    </q-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelpButton',
});
</script>
