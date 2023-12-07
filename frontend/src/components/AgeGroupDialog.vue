<template>
  <q-dialog
    v-model="showDialog"
    style="background-color: transparent"
    data-cy="age-group-dialog"
  >
    <q-card>
      <q-card-section class="row items-center card-title" style="width: 400px">
        <div class="text-h6 futura">Switch Difficulty</div>
        <q-space />
        <q-btn
          icon="close"
          color="white"
          size="md"
          flat
          v-close-popup
          data-cy="close-btn"
        />
      </q-card-section>

      <q-card-section class="q-pt-none centered">
        <ToggleButton
          @update:model-value="updateDataAndNotify"
          v-model="selectedOption"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import ToggleButton from './buttons/ToggleButton.vue';
import { useQuasar } from 'quasar';

defineProps({
  value: Boolean,
  dataForHomepage: String,
});

const $q = useQuasar();
const showDialog = ref(false);

const selectedOption = ref($q.localStorage.getItem('userDifficulty'));
const emit = defineEmits(['update:openDialog', 'update:dataForHomepage']);

const updateDataAndNotify = () => {
  emit('update:dataForHomepage', selectedOption.value);
};

watch(selectedOption, (newVal) => {
  emit('update:dataForHomepage', newVal);
});
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
