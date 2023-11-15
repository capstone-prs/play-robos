<template>
  <q-layout>
    <q-header elevated class="bg-yellow-1">
      <div class="row">
        <div class="col">
          <q-tabs v-model="tab" class="tabs-label text-yellow-9">
            <q-tab
              name="achievements"
              label="Achievements"
              icon="emoji_events"
            />
            <q-tab name="progress" label="Progress" icon="auto_graph" />
          </q-tabs>
        </div>
      </div>
    </q-header>
    <q-page-container class="transparent">
      <div class="row" align="center">
        <div class="col">
          <q-tab-panels v-model="tab">
            <q-tab-panel name="achievements" class="row">
              <!-- Note: To-update based on gamification logic -->
              <BadgeComponent badge-url="img:/badge-unlock.svg" />
            </q-tab-panel>
            <q-tab-panel name="progress" class="row">
              <!-- Note: To-update data based on real progress -->
              <ProgressComponent class="col-12" />
            </q-tab-panel>
          </q-tab-panels>
        </div>
      </div>
    </q-page-container>
    <q-footer class="transparent">
      <div class="home row q-ml-md q-mb-md">
        <PreviousButton @click="navigateBack" data-cy="previous-btn" />
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import PreviousButton from '../components/buttons/PreviousButton.vue';
import BadgeComponent from '../components/BadgeComponent.vue';
import ProgressComponent from '../components/ProgressComponent.vue';

const router = useRouter();
const tab = ref('achievements');
const navigateBack = () => {
  return router.go(-1);
};
</script>

<style>
@font-face {
  font-family: futura;
  src: url('/fonts/FuturaLT.woff');
}

.tabs-label {
  font-family: futura;
  font-weight: bold !important;
}
</style>
