<template>
  <q-dialog v-model="showMenuActivity" style="background-color: transparent">
    <q-card>
      <q-card-section class="row items-center card-title" style="width: 400px">
        <div class="text-h4 futura">Menu</div>
        <q-space />
        <q-btn
          icon="close"
          color="white"
          size="md"
          flat
          v-close-popup
          data-test-id="close-btn"
        />
      </q-card-section>

      <q-card-section class="centered"> </q-card-section>

      <q-card-section class="q-pt-none centered">
        <ActionButton text-label="Home" @click="atHome" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import ActionButton from './buttons/ActionButton.vue';
import { ref } from 'vue';

const showMenuActivity = ref(false);
const router = useRouter();

const atHome = () => {
  return router.push('/home');
};
</script>

<style>
@font-face {
  font-family: futura;
  src: url('/fonts/FuturaLT.woff');
}

.futura {
  font-family: 'futura';
  color: yellow;
}

.centered {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.card-title {
  background-color: #2196f3;
}
</style>
