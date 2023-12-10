<template>
  <q-dialog v-model="isDialogOpen" persistent>
    <q-card class="" style="width: 40%; height: 100%; border-radius: 30px">
      <q-card-section align="center" class="q-pa-none q-mt-lg">
        <div class="title-badge q-mb-sm">CONGRATULATIONS!</div>

        <div>
          <q-icon
            class="q-mt-sm q-mb-sm url"
            size="160px"
            :name="'img:' + badgeUrl"
          />
        </div>
        <div class="description q-mt-sm">
          You have unlocked the <b>{{ badgeName }}</b> badge!
        </div>
      </q-card-section>
      <q-card-section class="q-pa-sm q-mb-none q-mt-lg" align="center">
        <q-btn
          v-close-popup
          label="CLOSE"
          color="blue-6"
          style="border-radius: 20px; padding-left: 120px; padding-right: 120px"
        />
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
.url {
  animation: badgeAnimation 1s ease 1s infinite alternate forwards;
}

@keyframes badgeAnimation {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}
</style>
