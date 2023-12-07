<template>
  <q-dialog v-model="isDialogOpen">
    <q-card class="" style="width: 100%; height: 100%">
      <q-card-section class="q-pa-sm q-mb-none" align="right">
        <q-btn
          data-cy="close-btn"
          icon="close"
          color="red-3"
          size="md"
          flat
          v-close-popup
        />
      </q-card-section>
      <q-card-section align="center" class="q-pa-none">
        <div class="title-badge q-mb-sm">CONGRATULATIONS!</div>
        <div class="description">
          You have unlocked the {{ badgeName }} badge!
        </div>
        <div>
          <q-icon
            class="q-mt-sm q-mb-sm"
            size="150px"
            :name="'img:' + badgeUrl"
          />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isDialogOpen = ref(false);

defineProps({
  badgeName: String,
  badgeUrl: String,
});
</script>

<style>
@font-face {
  font-family: futura;
  src: url('../css/fonts/FuturaLT.woff');
}
@font-face {
  font-family: hitchcut;
  src: url('../css/fonts/Hitchcut-Regular.woff');
}

.title-badge {
  font-family: 'hitchcut';
  font-size: xx-large;
  color: rgb(255, 183, 0);
}

.description {
  font-family: 'futura';
  font-size: larger;
}
</style>
