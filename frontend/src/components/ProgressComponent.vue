<template>
  <div class="row row-style q-pa-sm q-ml-none">
    <div class="col">
      <div class="row">
        <div class="col-12">
          <h6 align="left" class="q-ma-none">
            Overall Score: {{ userScore }} / 3000 - {{ determineRank() }}
          </h6>

          <q-linear-progress
            stripe
            size="30px"
            :value="userScore / 3000"
            color="accent"
            track-color="black"
            rounded
          >
            <div class="absolute-full flex flex-center">
              <q-badge
                color="white"
                text-color="accent"
                :label="((userScore / 3000) * 100).toFixed(2) + `%`"
              />
            </div>
          </q-linear-progress>
          <div class="q-mt-lg">
            <q-table
              title="Gradebook"
              :rows="rows"
              :columns="columns"
              row-key="name"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { LocalData } from '../types/Progress';
import { QTableColumn } from 'quasar';

const userScore = ref(0);
const percentage = (userScore.value / 3000) * 1000;
let rows = [];

onMounted(() => {
  const storedDataString = localStorage.getItem('localData');
  const storedUserData: LocalData = storedDataString
    ? JSON.parse(storedDataString)
    : null;

  userScore.value = storedUserData.score;
  rows = storedUserData.activityProgress.map((progress) => {
    return {
      activity: `S${progress.activity.setting + 1}-L${progress.activity.id}`,
      difficulty: progress.activity.difficulty,
      duration: progress.duration,
      attempt: progress.attempt,
      decomposition: progress.decomposition,
      pattern: progress.pattern,
    };
  });

  console.log(rows);
});

const columns: QTableColumn[] = [
  {
    name: 'activity',
    label: 'Activity',
    align: 'left',
    field: 'activity',
  },
  {
    name: 'difficulty',
    align: 'center',
    label: 'Difficulty',
    field: 'difficulty',
  },
  {
    name: 'duration',
    align: 'center',
    label: 'Duration',
    field: 'duration',
  },
  {
    name: 'attempt',
    align: 'center',
    label: 'Attempt',
    field: 'attempt',
  },
  {
    name: 'decomposition',
    align: 'center',
    label: 'Decomposition %',
    field: 'decomposition',
  },
  {
    name: 'pattern',
    align: 'center',
    label: 'Pattern %',
    field: 'pattern',
  },
];

const determineRank = () => {
  let userRank;
  switch (true) {
    case percentage < 20:
      userRank = 'Novice';
      return userRank;

    case percentage >= 20 && percentage < 40:
      userRank = 'Beginner';
      return userRank;

    case percentage >= 40 && percentage < 60:
      userRank = 'Intermediate';
      return userRank;

    case percentage >= 60 && percentage < 80:
      userRank = 'Advanced';
      return userRank;

    case percentage >= 80:
      userRank = 'Expert';
      return userRank;
  }
};
</script>

<style>
.row-style {
  color: rgb(101, 101, 101);
}
</style>
