<template>
  <div>
    <q-btn round>
      <q-icon
        name="img:/home.svg"
        size="50px"
        @click="click"
      />
    </q-btn>
  </div>
</template>

<script setup lang="ts">
import { soundEffect } from '../../utils/SoundUtils';
import { useRouter } from 'vue-router';

const router = useRouter();
const click = () => {
  soundEffect();
  return router.push('/home');
};
</script>
