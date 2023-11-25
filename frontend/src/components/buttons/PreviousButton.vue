<template>
  <div>
    <q-btn round>
      <q-icon name="img:/back-btn.svg" size="55px" data-testid="home-btn"       @click = "click"/>
    </q-btn>
  </div>
</template>

<script setup lang="ts">
import { soundEffect } from '../../utils/SoundUtils'
import back from '../../assets/sounds/back.mp3'
const click = () => {
    soundEffect(back);
  }
</script>
