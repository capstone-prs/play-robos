<template>
  <div>
    <q-btn round>
      <q-icon name="img:/sound-btn.svg" size="50px" data-testid="sound-btn"       @click = "click"/>
    </q-btn>
  </div>
</template>

<script setup lang="ts">
import { soundEffect } from '../../utils/SoundUtils'
const click = () => {
    soundEffect();
  }
</script>
