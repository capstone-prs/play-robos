<template>
  <q-dialog
    v-model="openPlayDialog"
    style="background-color: transparent"
    transition-show="scale"
    transition-hide="scale"
  >
    <q-card style="width: 500px; height: 200px">
      <q-card-section class="row items-center">
        <div class="text-h4 play-dialog">Level:</div>
        <q-space />
        <q-btn
          icon="close"
          color="pink"
          size="md"
          round
          v-close-popup
          data-test-id="close-btn"
        />
      </q-card-section>
      <q-card-section align="center">
        <action-button text-label="ENTER" @click="navigateToStudio(levelNum)" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import ActionButton from './buttons/ActionButton.vue';
import { useQuasar } from 'quasar';

defineProps({
  levelNum: {
    type: Number,
    required: true,
  },
});

const openPlayDialog = ref(false);
const $q = useQuasar();

const router = useRouter();
const navigateToStudio = (paramVal: number) => {
  showLoading();
  return router.push({ name: 'studio', params: { param: paramVal - 1 } });
};

const showLoading = () => {
  $q.loading.show({
    spinnerColor: 'white',
    backgroundColor: 'black',
    message: 'Preparing your studio',
  });

  setTimeout(() => {
    $q.loading.hide();
  }, 4000);
};
</script>

<style>
@font-face {
  font-family: futura;
  src: url('/fonts/FuturaLT.woff');
}

.play-dialog {
  font-family: 'futura';
  color: blue;
}
</style>
