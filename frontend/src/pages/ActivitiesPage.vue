<template>
  <q-layout view="hHh lpR fFf" class="bg" data-test-id="homepage">
    <q-header class="transparent row q-pa-md">
      <div class="col-3">
        <div class="row float-left">
          <div class="col q-pl-sm">
            <HelpButton />
          </div>

          <div class="col q-pl-sm">
            <AchievementButton />
          </div>
        </div>
      </div>
      <div class="col level-board" align="center">
        <LevelBoard
          levelNumber="1"
          levelGoal="Wake up"
          levelReward="50"
          data-test-id="level-board"
        />
      </div>

      <div class="col-3">
        <div class="row float-right">
          <div class="col q-pr-sm">
            <SoundButton />
          </div>

          <div class="col q-pr-sm">
            <MusicButton />
          </div>

          <div class="col q-pr-sm">
            <MenuButton @open-dialog="openMenuDialog" data-test-id="menu-btn" />
            <MenuDialog
              v-model="isMenuDialogVisible"
              data-test-id="menu-dialog"
              :data-for-homepage="dataForHomepage"
              @update:data-for-homepage="updateData"
            />
          </div>
        </div>
      </div>
    </q-header>
    <q-page-container>
      <div class="row" align="center">
        <div class="col-2" v-for="level in Levels.levels" :key="level.levelNum">
          <ActivityComponent
            :level-num="level.levelNum"
            :goal-title="level.goalTitle"
            :reward="level.reward"
            :toolbox="level.toolbox"
            :correct-code="level.correctCode"
          />
        </div>
      </div>
      <div class="row q-mt-xl q-ml-md">
        <ActionButton text-label="HOME" @click="navigateBack" />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import HelpButton from '../components/buttons/HelpButton.vue';
import AchievementButton from '../components/buttons/AchievementButton.vue';
import SoundButton from '../components/buttons/SoundButton.vue';
import MusicButton from '../components/buttons/MusicButton.vue';
import LevelBoard from '../components/LevelBoard.vue';
import MenuDialog from '../components/MenuDialog.vue';
import MenuButton from '../components/buttons/MenuButton.vue';
import ActivityComponent from '../components/games/ActivityComponent.vue';
import ActionButton from '../components/buttons/ActionButton.vue';
import * as Levels from '../components/games/levelDetails';
// import PairingDialog from '../components/PairingDialog.vue';

const isMenuDialogVisible = ref(false);

const openMenuDialog = () => {
  isMenuDialogVisible.value = true;
};

let dataForHomepage = ref('5-7');

const updateData = (newData: string) => {
  dataForHomepage.value = newData;
};

const router = useRouter();

const navigateBack = () => {
  return router.go(-1);
};
</script>

<style>
.bg {
  background: linear-gradient(
    180deg,
    rgba(225, 229, 242, 1) 5%,
    rgb(169, 209, 248) 35%,
    rgba(157, 202, 255, 1) 100%
  ) !important;
  width: 100% !important;
  height: 100vh !important;
}

.responsive-container {
  margin-top: -165px;
  margin-bottom: 120px;
  margin-left: 20px;
  text-align: left;
  display: flex;
}
</style>
