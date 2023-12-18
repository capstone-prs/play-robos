<template>
  <div>
    <q-tabs
      v-model="tab"
      class="tabs-label text-purple"
      active-bg-color="purple-1"
    >
      <q-tab name="overview" label="Overview" />
      <q-tab name="details" label="Scores" />
      <q-tab name="more" label="More" />
    </q-tabs>
    <q-tab-panels v-model="tab">
      <q-tab-panel name="overview">
        <q-card style="width: 100%">
          <q-card-section>
            <div class="row">
              <div class="col-12">
                <h4 align="left" class="q-ma-none text-style">
                  Rank: <b>{{ determineRank() }} </b>
                </h4>
                <h6 align="left" class="q-mt-sm q-mb-sm text-style">
                  Overall Score: {{ userScore }}
                </h6>
              </div>
              <q-linear-progress
                stripe
                size="30px"
                :value="userScore / 3000"
                color="blue-4"
                track-color="black"
                rounded
              >
                <div class="absolute-full flex flex-center">
                  <q-badge
                    color="white"
                    text-color="accent"
                    :label="((userScore / 2500) * 100).toFixed(2) + `%`"
                  />
                </div>
              </q-linear-progress>

              <div
                class="row q-mt-lg"
                align="center"
                style="
                  background-color: rgb(239, 239, 239);
                  border-radius: 20px;
                  width: 100%;
                "
              >
                <div class="col-6">
                  <h6 align="center" class="q-mt-sm q-mb-sm text-style">
                    Average Accuracy
                  </h6>
                  <q-circular-progress
                    :thickness="0.4"
                    show-value
                    class="text-amber-7 q-ma-md"
                    :value="Math.floor(averageAccuracy * 100)"
                    size="150px"
                    color="amber-4"
                    track-color="grey-6"
                    >{{ Math.floor(averageAccuracy * 100) }}%
                  </q-circular-progress>
                </div>
                <div class="col-6">
                  <h6 align="center" class="q-mt-sm q-mb-sm text-style">
                    Average Efficiency
                  </h6>
                  <q-circular-progress
                    :thickness="0.4"
                    show-value
                    class="text-green-5 q-ma-md"
                    :value="Math.floor(averageEfficiency * 100)"
                    size="150px"
                    color="green-5"
                    track-color="grey-6"
                  >
                    {{ Math.floor(averageEfficiency * 100) }}%
                  </q-circular-progress>
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </q-tab-panel>

      <q-tab-panel name="details">
        <div class="q-mt-lg">
          <q-table :rows="testRows" :columns="columns" row-key="name" />
        </div>
      </q-tab-panel>
      <q-tab-panel name="more">
        <q-card class="q-pa-sm">
          <q-card-section class="text-h6">
            <q-icon name="info" size="md" color="blue" />
            More About Computational Thinking...
            <q-separator />
          </q-card-section>
          <q-card-section class="q-pt-none">
            <div class="row">
              <div class="col-2 text-h6 text-style" align="center">
                <q-icon name="img:pattern.svg" size="80px" />
              </div>
              <div class="col-4 text-justify">
                Pattern Recognition is one of the fundamental elements of
                Computational Thinking. It involves finding the similarities or
                patterns among small, decomposed problems that can help us solve
                more complex problems more efficiently.
              </div>
              <div class="col-2 text-h6 text-style" align="center">
                <q-icon name="img:decomposition.svg" size="80px" />
              </div>
              <div class="col-4 text-justify">
                Decomposition is a fundamental concept in computational thinking
                that involves breaking down complex problems into smaller, more
                manageable parts. It is a problem-solving approach that allows
                individuals to tackle intricate tasks by dividing them into
                simpler subtasks.
              </div>
            </div>
          </q-card-section>
        </q-card>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { QTableColumn } from 'quasar';
import {
  getLocalActivity,
  getLocalActivityProgresses,
  getLocalUser,
} from '../dexie/db';
import { userID } from '../firebase/firestore';
import { solveAccuracyAndEfficiency } from '../utils/activityProgress';
import { AccuracyAndEfficiency, ScoreSheet } from '../types/Progress';

const userScore = ref<number>(0);
const percentage = (userScore.value / 2500) * 1000;

const testRows = ref<Array<ScoreSheet>>([]);
const accuracyAndEfficiencyValues = ref<Array<AccuracyAndEfficiency>>([]);

const totalEfficiency = ref(0);
const totalAccuracy = ref(1);
const tab = ref('overview');

const averageAccuracy = ref(0);
const averageEfficiency = ref(0);

onMounted(() => {
  getLocalUser(userID()).then((user) => {
    const score = user?.score || 0;
    userScore.value = Math.floor(score);
  });

  getLocalActivityProgresses().then((activities) => {
    activities.forEach((activity) => {
      getLocalActivity(activity.activityId).then((act) => {
        const data = {
          activity: act?.title ?? '',
          difficulty: act?.difficulty ?? 'easy',
          duration: activity.duration,
          attempt: activity.attempt,
          decomposition: activity.decomposition,
          pattern: activity.pattern,
        };

        if (userID() === activity.userId) {
          testRows.value.push(data);
          accuracyAndEfficiencyValues.value = testRows.value.map(
            ({ attempt, duration }) =>
              solveAccuracyAndEfficiency(attempt, duration)
          );

          if (testRows.value.length > 0) {
            accuracyAndEfficiencyValues.value.forEach((row) => {
              totalEfficiency.value += row.efficiency;
            });

            accuracyAndEfficiencyValues.value.forEach((row) => {
              totalAccuracy.value += row.accuracy;
            });

            if (totalAccuracy.value > 0 && totalAccuracy.value != Infinity) {
              averageAccuracy.value =
                accuracyAndEfficiencyValues.value.reduce(
                  (sum, { accuracy }) => sum + accuracy,
                  0
                ) / totalAccuracy.value;
            } else {
              averageAccuracy.value = 1;
            }

            averageEfficiency.value =
              accuracyAndEfficiencyValues.value.reduce(
                (sum, { efficiency }) => sum + efficiency,
                0
              ) / totalEfficiency.value;
          }
        }
      });
    });
  });
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
    label: 'Duration (s)',
    field: 'duration',
  },
  {
    name: 'attempt',
    align: 'center',
    label: 'No. of Attempt',
    field: 'attempt',
  },
  {
    name: 'decomposition',
    align: 'center',
    label: 'Decomposition (%)',
    field: 'decomposition',
  },
  {
    name: 'pattern',
    align: 'center',
    label: 'Pattern (%)',
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
@font-face {
  font-family: futura;
  src: url('/fonts/FuturaLT.woff');
}

.text-style {
  font-family: 'futura';
}
</style>
