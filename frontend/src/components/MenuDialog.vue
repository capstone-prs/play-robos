<template>
  <q-dialog
    data-cy="menu-dialog"
    v-model="showDialog"
    style="background-color: transparent"
  >
    <q-card>
      <q-card-section class="row items-center card-title" style="width: 400px">
        <div class="text-h4 futura">Menu</div>
        <q-space />
        <q-btn
          data-cy="close-btn"
          icon="close"
          color="white"
          size="md"
          flat
          v-close-popup
        />
      </q-card-section>

      <q-card-section class="centered" v-if="path !== '/home'">
        <q-btn
          @click="atHome"
          color="pink-12"
          class="glossy hitchcut"
          size="lg"
          rounded
        >
          <q-icon name="home" />
          Home
        </q-btn>
      </q-card-section>

      <q-card-section class="q-pt-md centered">
        <ActionButton
          text-label="Logout"
          @click="openLogoutDialog"
          data-cy="logout-btn"
        />
        <LogoutDialog v-model="isLogoutDialogVisible" data-cy="logout-dialog" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import LogoutDialog from './LogoutDialog.vue';
import ActionButton from './buttons/ActionButton.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const path = router.currentRoute.value.path;
defineProps({
  value: Boolean,
  dataForHomepage: String,
});

const isLogoutDialogVisible = ref(false);
const showDialog = ref(false);
// initializes the selected option age group using the value from home

// opens the logout dialog
const openLogoutDialog = () => {
  isLogoutDialogVisible.value = true;
};

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
