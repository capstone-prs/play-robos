<template>
    <q-dialog class="q-pb" style="background-color: transparent" v-model="isForgetPasswordOpen" 
      transition-hide="scale">
      <q-card class="bg-blue text-white" align='center' style="width: 500px">
        <q-card-section>
          <div class="text-h5">Forgot Your Password?</div>
        </q-card-section>
  
        <q-card-section class="q-pt-none font-face">
          Enter your email address below.

        </q-card-section>
        <q-card-section class="q-pt-none q-pd-nonde futura">
          After confirming, please check your inbox to reset your password.
        </q-card-section>
  
        <q-card-section class="q-pt-none">
          <q-input class="authInputsBig" rounded outlined v-model="data.emailReset.value" id="email" label="Email address"
            type="email" :error="data.isError.value">
          </q-input>
        </q-card-section>
        <q-card-actions class="bg-white text-teal ">
          <q-btn style="position: relative; left: 20%;" flat label="Cancel" @click="soundEffect()" class="text-grey" v-close-popup />

          <q-btn  style="position: relative; left: 50%;" @click="submitReset" flat label="CONFIRM" class="text-red"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </template>
    
  <script setup lang="ts">
  import { ref } from 'vue';
  import { resetPassword } from '../firebase/auth';
  import { useQuasar } from 'quasar';
  import {soundEffect} from './../utils/SoundUtils'
  import errorSnd from './../assets/sounds/errorSnd.mp3'
  import '../css/style.css';
  
  const isForgetPasswordOpen = ref(false);
  const data = {
    emailReset: ref<string>(''),
    isError: ref(false)
  };
  const $q = useQuasar();
  
  const triggerNotify = (type: string, message: string) =>
    $q.notify({
      type: type,
      message: message,
    });
  
  
  const submitReset = () => {
    soundEffect();
    return resetPassword(data.emailReset.value)
      .then(() => {
        data.isError.value = false;
        triggerNotify('positive', 'Check your Email');
        isForgetPasswordOpen.value =false
      })
      .catch(() => {
        soundEffect(errorSnd);
        data.isError.value = true;
        triggerNotify('negative', 'Email Does Not Exist');
        console.log(isForgetPasswordOpen.value)
      })
  }
  
  
  
  </script>
    
  <style>
  @font-face {
    font-family: futura;
    src: url('/fonts/FuturaLT.woff');
  }
  
  .futura {
    font-family: 'futura';
    color: yellow;
  }
  
  .centered {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  
  .card-title {
    background-color: #2196f3;
  }
  </style>
    