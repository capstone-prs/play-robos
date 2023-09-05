<template>
  <div>
    <q-btn round @click="inception = true">
      <q-icon name="img:/menu-btn.svg" size="50px" />
    </q-btn>

    <q-dialog v-model="inception" class="bg-modal">
        <q-card>
          <q-card-section class="row items-center q-pb-none" style="width: 300px;" >
            <div class="text-h4 futura">Menu</div>
            <q-space />
            <q-btn icon="close" color="pink" size="md" flat v-close-popup />
          </q-card-section>

          <q-card-section class="q-pt-none centered">
            <toggle-button />
          </q-card-section>

          <q-card-section class="q-pt-none centered">
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

 .bg-modal {
  background: rgb(225,229,242) !important;
  background: linear-gradient(180deg, rgba(225,229,242,1) 5%, rgb(169, 209, 248) 35%, rgba(157,202,255,1) 100%) !important;
  height: 100vh !important;
  position: fixed;
  }

  .centered {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

</style>
