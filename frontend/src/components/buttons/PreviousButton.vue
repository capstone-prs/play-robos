<template>
  <div>
    <q-btn round color="amber">
      <q-icon
        color="white"
        name="arrow_back"
        size="50px"
        data-testid="home-btn"
        @click="click"
      />
    </q-btn>
  </div>
</template>

<script setup lang="ts">
import { soundEffect } from '../../utils/SoundUtils';
const click = () => {
  soundEffect();
};
</script>
