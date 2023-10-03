<template>
  <q-dialog
    style="background-color: transparent"
    v-model="secondDialog"
    persistent
    transition-show="scale"
    transition-hide="scale"
  >
    <q-card class="bg-blue text-white" style="width: 300px">
      <q-card-section>
        <div class="text-h6">We're sad to see you leave</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Are you sure you want to log out?
      </q-card-section>

      <q-card-actions align="center" class="bg-white text-teal">
        <q-btn flat label="Cancel" class="text-blue" v-close-popup />

        <!-- Add handler for log out here -->
        <q-btn
          @click="handleLogout"
          flat
          label="OK"
          class="text-red"
          v-close-popup
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { logout } from '../firebase/auth';
import { ref } from 'vue';

const router = useRouter();
const secondDialog = ref(false);
const handleLogout = () => {
  logout()
    .then(() => {
      console.log('logout');
      router.push('/#/');
    })

    .catch(() => {
      console.error('Logout failed:');
      // Handle any errors that may occur during logout
    });
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
