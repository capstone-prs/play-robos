<template>
  <div>
    <q-card
      class="my-card level-text q-ml-sm q-mr-sm q-mt-sm q-mb-sm"
      @click="openPlayDialog"
    >
      <q-item class="title">
        <q-item-section>
          <q-item-label>Level: {{ levelNum }} </q-item-label>
          <q-item-label caption>Goal: {{ goalTitle }} </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />

      <q-item-section>
        <q-card-section horizontal>
          <q-card-section>
            <q-icon name="img:/coin.svg" size="20px"> </q-icon>
            <span>{{ reward }}</span>
          </q-card-section>
        </q-card-section>
      </q-item-section>
    </q-card>

    <PlayDialog
      :setting-num="settingNum"
      :level-num="levelNum"
      v-model="showPlayDialog"
      :goal-title="goalTitle"
      :reward="reward"
      :correct-code="correctCode"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PlayDialog from '../PlayDialog.vue';

defineProps({
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
  toolbox: {
    type: Object,
    required: true,
  },
  correctCode: {
    type: Array<string>,
    required: true,
  },
});

const showPlayDialog = ref(false);
const openPlayDialog = () => {
  showPlayDialog.value = true;
};
</script>

<style>
.my-card {
  width: 100%;
  max-width: 80%;
  max-height: 100%;
  height: 120px;
  border-radius: 10px;
  cursor: pointer;
}

.title {
  background-color: rgb(232, 255, 230);
  max-height: 80%;
}

@font-face {
  font-family: futura;
  src: url('/fonts/FuturaLT.woff');
}

.level-text {
  font-family: futura;
}
</style>
