<template>
  <div class="row row-style q-pa-sm q-ma-sm">
    <div class="col">
      <div class="row">
        <div class="col-3">
          <q-circular-progress
            rounded
            :value="accuracy"
            color="blue-3"
            size="140px"
            class="q-ma-md"
            :thickness="0.3"
            track-color="grey-2"
            show-value
          >
          </q-circular-progress>
          <div class="text-h6">ACCURACY</div>
        </div>

        <div class="col-3">
          <q-circular-progress
            rounded
            :value="efficiency"
            color="green-3"
            size="140px"
            class="q-ma-md"
            :thickness="0.3"
            track-color="grey-2"
            show-value
          >
          </q-circular-progress>
          <div class="text-h6">EFFICIENCY</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const accuracy = ref(70);
const efficiency = ref(88);
</script>

<style>
.row-style {
  color: rgb(101, 101, 101);
}
</style>
