<template>
  <div>
    <q-btn round @click="inception = true">
      <q-icon name="img:/menu-btn.svg" size="50px" />
    </q-btn>

    <q-dialog v-model="inception">
        <q-card>
          <q-card-section class="row items-center q-pb-none" style="width: 300px;" >
            <div class="text-h4 futura">Menu</div>
            <q-space />
            <q-btn icon="close" color="pink" size="md" flat v-close-popup />
          </q-card-section>

          <q-card-section class="q-pt-none">
            <toggle-button />
          </q-card-section>

          <q-card-section class="q-pt-none">
            <action-button text-label="Logout" />
          </q-card-section>
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
  color: black;
}
</style>

