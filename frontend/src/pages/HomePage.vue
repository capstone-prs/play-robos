<template>
  <q-layout view="hHh lpR fFf" class="bg">
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
        <LevelBoard levelNumber="1" levelGoal="Wake up" levelReward="50" />
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
            <MenuButton @open-dialog="openMenuDialog" />
            <MenuDialog v-model="isMenuDialogVisible" />
          </div>
        </div>
      </div>
    </q-header>

    <q-page-container class="fixed-center">
      <SettingComponent />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';
import HelpButton from '../components/buttons/HelpButton.vue';
import AchievementButton from '../components/buttons/AchievementButton.vue';
import SoundButton from '../components/buttons/SoundButton.vue';
import MusicButton from '../components/buttons/MusicButton.vue';
import SettingComponent from '../components/SettingComponent.vue';
import LevelBoard from '../components/LevelBoard.vue';
import MenuDialog from '../components/MenuDialog.vue';
import MenuButton from '../components/buttons/MenuButton.vue';

console.log('here');

export default defineComponent({
  name: 'HomePage',
  components: {
    HelpButton,
    AchievementButton,
    SoundButton,
    MusicButton,
    MenuButton,
    SettingComponent,
    LevelBoard,
    MenuDialog,
    MenuButton,
  },
  setup() {
    const isMenuDialogVisible = ref(false);

    const openMenuDialog = () => {
      isMenuDialogVisible.value = true;
    };

    return {
      isMenuDialogVisible,
      openMenuDialog,
    };
  },
});
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

.level-board {
  z-index: 2;
}
</style>
