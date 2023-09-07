<template>
  <q-dialog v-model="showDialog" style="background-color: transparent">
    <q-card>
      <q-card-section class="row items-center card-title" style="width: 400px">
        <div class="text-h4 futura">Menu</div>
        <q-space />
        <q-btn icon="close" color="white" size="md" flat v-close-popup />
      </q-card-section>

      <q-card-section class="centered">
        <ToggleButton />
      </q-card-section>

      <q-card-section class="q-pt-none centered">
        <ActionButton text-label="Logout" @click="openLogoutDialog" />
        <LogoutDialog v-model="isLogoutDialogVisible" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import LogoutDialog from './LogoutDialog.vue';
import ActionButton from './buttons/ActionButton.vue';
import ToggleButton from './buttons/ToggleButton.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MenuDialog',
  props: {
    value: Boolean,
  },
  setup() {
    const isLogoutDialogVisible = ref(false);

    const openLogoutDialog = () => {
      isLogoutDialogVisible.value = true;
    };

    return {
      isLogoutDialogVisible: isLogoutDialogVisible,
      openLogoutDialog: openLogoutDialog,
    };
  },
  data() {
    return {
      showDialog: false,
    };
  },
  components: { ToggleButton, ActionButton, LogoutDialog },
  methods: {
    openDialog() {
      this.$emit('open-dialog');
    },
  },
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
