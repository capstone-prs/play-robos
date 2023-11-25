<template>
  <div>
    <q-btn round color="amber">
      <q-icon
        color="white"
        name="arrow_back"
        size="50px"
        data-testid="home-btn"
      />
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
