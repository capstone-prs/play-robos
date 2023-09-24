<template>
  <div>
    <q-card
      class="my-card level-text q-ml-sm q-mr-sm q-mt-sm"
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
      :level-num="levelNum"
      v-model="showPlayDialog"
      :goal-title="goalTitle"
      :reward="reward"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PlayDialog from '../PlayDialog.vue';

defineProps({
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
    type: String,
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
  max-width: 120px;
  border-radius: 10px;
  cursor: pointer;
}

.title {
  background-color: rgb(232, 255, 230);
}

@font-face {
  font-family: futura;
  src: url('/fonts/FuturaLT.woff');
}

.level-text {
  font-family: futura;
}
</style>
