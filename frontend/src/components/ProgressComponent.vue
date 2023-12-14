<template>
  <div class="row row-style q-pa-sm q-ml-none">
    <div class="col">
      <div class="row">
        <div class="col-12">
          <h4 align="left" class="q-ma-none text-style">
            Rank: <b>{{ determineRank() }} </b>
          </h4>
          <h6 align="left" class="q-mt-sm q-mb-sm text-style">
            Overall Score: {{ userScore }} / 3000
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
            <q-table :rows="testRows" :columns="columns" row-key="name" />
          </div>
          <div class="q-mt-lg">
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
                    Computational Thinking. It involves finding the similarities
                    or patterns among small, decomposed problems that can help
                    us solve more complex problems more efficiently.
                  </div>
                  <div class="col-2 text-h6 text-style" align="center">
                    <q-icon name="img:decomposition.svg" size="80px" />
                  </div>
                  <div class="col-4 text-justify">
                    Decomposition is a fundamental concept in computational
                    thinking that involves breaking down complex problems into
                    smaller, more manageable parts. It is a problem-solving
                    approach that allows individuals to tackle intricate tasks
                    by dividing them into simpler subtasks.
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { QTableColumn } from 'quasar';
import {
  getLocalActivity,
  getLocalActivityProgress,
  getLocalUser,
} from '../dexie/db';
import { userID } from '../firebase/firestore';

const userScore = ref<number>(0);
const percentage = (userScore.value / 3000) * 1000;

const testRows = ref<Array<object>>([]);

onMounted(() => {
  getLocalUser(userID()).then((user) => {
    const score = user?.score || 0;
    userScore.value = Math.floor(score);
  });

  getLocalActivityProgress().then((activities) => {
    activities.forEach((activity) => {
      getLocalActivity(activity.activityId).then((act) => {
        const data = {
          activity: act?.title,
          difficulty: act?.difficulty,
          duration: activity.duration,
          attempt: activity.attempt,
          decomposition: activity.decomposition,
          pattern: activity.pattern,
        };
        testRows.value.push(data);
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
