<template>
  <q-dialog
    v-model="openPlayDialog"
    style="background-color: transparent"
    transition-show="scale"
    transition-hide="scale"
  >
    <q-card style="width: 35%; height: 320px; border-radius: 15px">
      <q-card-section>
        <div align="center">
          <div class="text-h4 correct-text">LEVEL {{ levelNum }}</div>
        </div>
      </q-card-section>

      <q-separator class="q-ml-xl q-mr-xl" />

      <q-card-section align="center" class="q-pa-none q-mt-sm">
        <div class="text-h6 detail-title">{{ goalTitle }}</div>

        <div class="text-h7 detail-title q-mt-md">EXPECTED REWARD</div>
        <div class="text-h6 detail-text-coin q-mt-sm">
          <q-icon size="30px" name="img:/coin-bag.svg" />
          {{ reward }}
        </div>
      </q-card-section>

      <q-card-section align="center">
        <div class="row justify-center items-center q-mt-md">
          <ActionButton
            :is-disabled="completed ? false : true"
            text-label="PLAY"
            @click="
              !completed
                ? ''
                : navigateToStudio(settingNum, levelNum, difficulty)
            "
          />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import ActionButton from './buttons/ActionButton.vue';

defineProps({
  difficulty: {
    type: String,
    required: true,
  },
  settingNum: {
    type: Number,
    required: true,
  },
  levelNum: {
    type: Number,
    required: true,
  },
  goalTitle: {
    type: String,
    required: true,
  },
  reward: {
    type: Number,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
});

const openPlayDialog = ref(false);

const router = useRouter();
const navigateToStudio = (
  levNum: number,
  settNum: number,
  difficulty: string
) =>
  router.push({
    name: 'studio',
    params: { param: levNum + '_' + settNum + '_' + difficulty },
  });
</script>

<style>
@font-face {
  font-family: hitchcut;
  src: url('/fonts/Hitchcut-Regular.woff');
}
@font-face {
  font-family: futura;
  src: url('../css/fonts/FuturaLT.woff');
}
@font-face {
  font-family: GillSans;
  src: url('/fonts/GillSansInfant.woff');
}
.correct-text {
  font-family: 'hitchcut';
  color: rgb(255, 222, 37);
  text-shadow: 3px 0px 2px rgba(0, 120, 112, 0.6);
}

.incorrect-text {
  font-family: 'hitchcut';
  color: rgb(236, 74, 49);
  text-shadow: 3px 0px 2px rgba(248, 239, 0, 0.906);
}

.detail-text-coin {
  color: rgb(70, 68, 68);
  font-family: 'futura';
  background-color: rgb(255, 249, 165);
  border-radius: 30px;
  margin-left: 50px;
  margin-right: 50px;
  padding: 5px;
}

.stars {
  animation: RewardsAnimation 6s ease 0s infinite normal forwards;
}

.level-label {
  font-family: 'futura';
  color: grey;
}

.detail-title {
  font-family: 'futura';
  color: rgb(82, 82, 82);
}
</style>
