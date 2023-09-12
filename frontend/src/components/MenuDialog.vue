<template>
  <q-dialog
    v-model="showDialog"
    style="background-color: transparent"
    data-test-id="menu-dialog"
  >
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

      <q-card-section class="centered">
        <ToggleButton
          v-model="selectedOption"
          @update:model-value="updateDataAndNotify"
        />
      </q-card-section>

      <q-card-section class="q-pt-none centered">
        <ActionButton
          text-label="Logout"
          @click="openLogoutDialog"
          data-test-id="logout-btn"
        />
        <LogoutDialog
          v-model="isLogoutDialogVisible"
          data-test-id="logout-dialog"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import LogoutDialog from './LogoutDialog.vue';
import ActionButton from './buttons/ActionButton.vue';
import ToggleButton from './buttons/ToggleButton.vue';
import { ref, watch } from 'vue';

const props = defineProps({
  value: Boolean,
  dataForHomepage: String,
});

const isLogoutDialogVisible = ref(false);

const openLogoutDialog = () => {
  isLogoutDialogVisible.value = true;
};

const showDialog = ref(false);
const selectedOption = ref('5-7');
const emit = defineEmits(['update:openDialog', 'update:dataForHomepage']);

watch(selectedOption, () => {
  emit('update:openDialog', props.value);
  console.log('Data from Menu dialog', selectedOption.value);
});

const updateDataAndNotify = () => {
  emit('update:dataForHomepage', selectedOption.value);
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
