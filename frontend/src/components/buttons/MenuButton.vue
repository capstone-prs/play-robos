<template>
  <div>
    <q-btn round @click="inception = true">
      <q-icon name="img:/menu-btn.svg" size="50px" />
    </q-btn>

      <q-dialog v-model="inception" style="background-color: transparent;">
          <q-card>
            <q-card-section class="row items-center card-title" style="width: 400px;" >
              <div class="text-h4 futura">Menu</div>
              <q-space />
              <q-btn icon="close" color="white" size="md" flat v-close-popup />
            </q-card-section>

            <q-card-section class=" centered">
              <toggle-button />
            </q-card-section>

            <q-card-section class="q-pt-none centered">
              <action-button text-label="Logout" @click="secondDialog = true" />
            </q-card-section>
          </q-card>
      </q-dialog>

      <q-dialog style="background-color: transparent;" v-model="secondDialog" persistent transition-show="scale" transition-hide="scale">
          <q-card class="bg-blue text-white" style="width: 300px;" >

            <q-card-section>
              <div class="text-h6">We're sad to see you leave</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              Are you sure you want to log out?
            </q-card-section>

            <q-card-actions align="center" class="bg-white text-teal">
              <q-btn flat label="Cancel" class="text-blue" v-close-popup />
              <q-btn flat label="Yes" class="text-pink"  v-close-popup />
            </q-card-actions>

          </q-card>
      </q-dialog>


  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ToggleButton from './ToggleButton.vue';
import ActionButton from './ActionButton.vue';

export default defineComponent({
    name: 'MenuButton',
    setup() {
        return {
          inception: ref(false),
          secondDialog: ref(false),
        };
    },
    components: { ToggleButton, ActionButton }
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
  background-color: #2196F3;
}

</style>
