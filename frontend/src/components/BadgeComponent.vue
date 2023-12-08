<template>
  <div class="row">
    <q-card
      style="width: 150px"
      class="q-ma-md"
      v-for="index in badges"
      :key="index.badgeName"
    >
      <q-card-section align="center">
        <q-icon :name="'img:' + index.badgeUrl" size="80px" />
        <h8 class="title" align="center">{{ index.badgeName }}</h8>
      </q-card-section>
    </q-card>
    <q-card-section>
      <div
        v-if="badges.length === 0"
        class="description fixed-center"
        style="color: grey"
      >
        <i>No badges yet. Complete activities to unlock badges!</i>
      </div>
    </q-card-section>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { Badge, LocalData } from '../types/Progress';

let badges: Badge[] = [];

onBeforeMount(() => {
  const storedDataString = localStorage.getItem('localData');
  const storedUserData: LocalData = storedDataString
    ? JSON.parse(storedDataString)
    : null;

  storedUserData.badgesReceived.forEach((badge) => {
    if (badge.badgeName != '' && badge.badgeUrl != '') {
      const newElement = {
        badgeName: badge.badgeName,
        badgeUrl: badge.badgeUrl,
      };
      badges.push(newElement);
    }
  });
});

defineProps({
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

.title {
  font-family: 'futura';
  text-transform: uppercase;
}
</style>
