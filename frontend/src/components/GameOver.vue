<template>
  <q-dialog v-model="isDialogOpen" persistent>
    <q-card
      class="q-pa-md"
      style="width: 35%; height: 100%; border-radius: 20px"
    >
      <q-card-section class="q-pt-xl q-pm-none q-pa" align="center">
        <div class="text-h4 incorrect-text">GameOver</div>
        <div class="text-h6 game-over q-pt-md">Better Luck Next Time!</div>
      </q-card-section>

      <div class="row justify-center items-center">
        <IconButton
          icon="img:/home.svg"
          @click="atHome"
          class="col-2 q-ma-xs"
        />
        <IconButton
          icon="img:/restart.svg"
          class="col-2 q-ma-md"
          @click="retry"
          v-close-popup
        />
      </div>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { WorkspaceSvg } from 'blockly';
import IconButton from './buttons/IconButton.vue';
import { useQuasar } from 'quasar';
const $q = useQuasar();
const isDialogOpen = ref(false);
const router = useRouter();


const props = defineProps<{
  clear?: WorkspaceSvg;
}>();
const showLoading = () => {
  $q.loading.show({
    spinnerColor: 'white',
    backgroundColor: 'black',
    message: 'Setting everthing up...',
  });

  setTimeout(() => {
    $q.loading.hide();
  }, 2000);
};

const emit = defineEmits<{ (e: 'retry'): void;  (e: 'new-life'): void; }>();

const retry = () => {
  showLoading();
  props.clear?.clear();
  emit('retry');
  emit('new-life');
  // $q.localStorage.set('lives', arrayOfLives.value);

};

const atHome = () => {
  localStorage.removeItem('lives');
  return router.push('/home');
};
</script>
<style>
.game-over {
  color: rgb(70, 68, 68);
  font-family: 'futura';
}
</style>
