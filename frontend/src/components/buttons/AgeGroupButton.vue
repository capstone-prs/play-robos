<template>
  <div>
    <q-btn round>
      <q-icon
        name="img:/age-group-btn.svg"
        size="50px"
        data-testid="age-group-btn"
        @click = "click"
      />
    </q-btn>
  </div>
</template>

<script setup lang="ts">
import { soundEffect } from '../../utils/SoundUtils'
const click = () => {
    soundEffect();
  }
</script>
