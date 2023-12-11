<template>
  <div class="row">
    <q-card
      style="width: 120px; border-radius: 30px"
      class="q-ma-md"
      v-for="index in badges"
      :key="index.name"
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
import { Badge } from '../types/Progress';

const sampleArray = [
  {
    badgeName: 'Galactic Adventurer',
    badgeUrl: '/galactic-adventurer.svg',
    description: 'You received this after reaching 100 points.',
  },
];
let badges: Badge[] = [];
onBeforeMount(() => {
  sampleArray.forEach((badge) => {
    if (badge.badgeName != '' && badge.badgeUrl != '') {
      const newElement = {
        name: badge.badgeName,
        url: badge.badgeUrl,
        description: badge.description,
      };
      badges.push(newElement);
    }
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
