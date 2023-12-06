<template>
    <q-dialog v-model="isDialogOpen" persistent>
      <q-card class="q-pa-md" style="width: 100%; height: 100% CLaa" >
           
        <q-card-section class="q-pt-lg q-pm-none q-pa" align="center">
            <div class="text-h2 incorrect-text">GameOver</div>
            <div class="text-h4 detail-text q-pt-md">
            Better Luck Next Time! 
          </div>
        </q-card-section>

        <div class="row" q-pa-md>
          <q-btn
            class="col q-ma-xs"
            icon="arrow_back"
            color="purple"
            rounded
            text-color="white"
            size="lg"
            data-testid="upload-btn"
            @click="navigateBack"
          />
          <q-btn
            class="col q-ma-xs"
            rounded
            icon="refresh"
            color="pink-6"
            size="lg"
            text-color="white"
            data-testid="upload-btn"
            @click="retry"
          ></q-btn>
          <q-btn
            class="col q-ma-xs"
            rounded
            text-label="100"
            icon="home"
            color="green-6"
            size="lg"
            text-color="white"
            data-testid="upload-btn"
            @click="navigateHome"

          />
        </div>
      </q-card>
    </q-dialog>
  </template>

<script setup lang="ts">

import { ref } from 'vue';
import { useRouter } from 'vue-router';
const isDialogOpen = ref(false)

const router = useRouter()
  const retry = () => {
    localStorage.removeItem('lives');

  }
const navigateBack = () => {
  localStorage.removeItem('lives');
     router.go(-1);
}
const navigateHome = () => {
  localStorage.removeItem('lives');
    router.push('/home')
}

</script>