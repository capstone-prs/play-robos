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
        <q-btn flat label="Yes" class="text-pink" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LogoutDialog',
  props: {
    value: Boolean,
  },
  data() {
    return {
      secondDialog: false,
    };
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
