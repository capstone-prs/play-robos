<template>
  <div class="row">
    <BadgeDetails
      :badge-name="selectedBadge.name"
      :badge-url="selectedBadge.url"
      :badge-desc="selectedBadge.description"
      v-model="isDetailOpen"
    />
    <q-card
      style="width: 120px; border-radius: 30px"
      class="q-ma-md"
      v-for="index in allBadges"
      :key="index.name"
      @click="openDetail(index)"
    >
      <q-card-section align="center">
        <q-icon
          class="q-mb-sm"
          :name="'img:' + index.url"
          size="80px"
          style="
            background-color: rgb(236, 236, 233);
            border-radius: 50px;
            box-shadow: rgba(163, 163, 163, 0.55) 5px 5px 2px -3px;
          "
        />
        <h8 class="title" align="center">{{ index.name }}</h8>
      </q-card-section>
    </q-card>
    <q-card-section>
      <div
        v-if="allBadges.length === 0"
        class="description fixed-center"
        style="color: grey"
      >
        <i>No badges yet. Complete activities to unlock badges!</i>
      </div>
    </q-card-section>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { NewBadge } from '../types/Progress';
import { getLocalBadges } from '../dexie/db';
import BadgeDetails from './BadgeDetails.vue';

const isDetailOpen = ref(false);

const openDetail = (badge: NewBadge) => {
  selectedBadge.value = badge;
  isDetailOpen.value = true;
};

const allBadges = ref<NewBadge[]>([
  {
    userId: '',
    name: '',
    url: '',
    description: '',
  },
]);

const selectedBadge = ref<NewBadge>({
  userId: '',
  name: '',
  url: '',
  description: '',
});

onBeforeMount(() => {
  getLocalBadges().then((result) => {
    allBadges.value = result;
  });
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

.title {
  font-family: 'futura';
  text-transform: uppercase;
}
</style>
