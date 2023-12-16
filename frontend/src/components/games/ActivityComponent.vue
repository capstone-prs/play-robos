<template>
  <div>
    <q-card
      data-cy="activity-card"
      class="my-card level-text q-ml-sm q-mr-sm q-mt-sm q-mb-sm"
      @click="openPlayDialog"
    >
      <q-item
        class="title"
        :class="activityStyle"
        style="box-shadow: rgba(163, 163, 163, 0.55) 5px 5px 7px -4px"
      >
        <q-item-section>
          <q-item-label data-cy="level-label" class="text-h6"
            >Level: {{ levelNum }}
          </q-item-label>
          <q-item-label data-cy="goal-label" style="color: rgb(40, 39, 39)"
            >Goal: {{ goalTitle }}
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />

      <q-item-section>
        <q-card-section horizontal>
          <q-card-section>
            <q-icon data-cy="coin-img" name="img:/gold-coin.svg" size="25px" />

            <span data-cy="reward-label">{{ ' ' + reward }}</span>
          </q-card-section>
        </q-card-section>
      </q-item-section>
    </q-card>

    <PlayDialog
      :difficulty="difficulty"
      :setting-num="settingNum"
      :level-num="levelNum"
      v-model="showPlayDialog"
      :goal-title="goalTitle"
      :reward="reward"
      :completed="completed"
      data-cy="play-dialog"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import PlayDialog from '../PlayDialog.vue';

const props = defineProps({
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
    type: Boolean || undefined,
    required: true,
  },
});

const showPlayDialog = ref(false);
const openPlayDialog = () => {
  showPlayDialog.value = true;
};

const activityStyle = computed(() => {
  return {
    'bg-green-2': props.completed,
    'bg-grey-3': !props.completed,
  };
});
</script>

<style>
.my-card {
  width: 100%;
  max-width: 80%;
  max-height: 100%;
  height: 130px;
  border-radius: 10px;
  cursor: pointer;
}

.title {
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
