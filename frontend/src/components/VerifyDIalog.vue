<template>
  <q-dialog
    class="q-pb"
    style="background-color: transparent"
    v-model="verfyopen"
    persistent
    transition-hide="scale"
  >
    <q-card class="bg-blue text-white" align="center" style="width: 500px">
      <q-card-section>
        <div class="text-h5">Email Verification Sent!</div>
      </q-card-section>

      <q-card-section class="q-pt-none font-face">
        After signing in please verify your email address Then You may Proceed
      </q-card-section>
      <q-card-section class="q-pt-none q-pd-nonde futura">
        Note: You are not allowed to continue to the app if your email is not
        verified
      </q-card-section>

      <q-card-section class="q-pt-none"> </q-card-section>
      <q-card-actions class="bg-white text-teal">
        <q-btn
          style="position: relative; left: 20%"
          flat
          label="Cancel"
          @click="soundEffect()"
          class="text-grey"
          v-close-popup
        />

        <q-btn
          style="position: relative; left: 50%"
          @click="submitReset"
          flat
          label="CONFIRM"
          class="text-red"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { soundEffect } from './../utils/SoundUtils';
import success from '../assets/sounds/success-notify.mp3';
import { getAuth } from 'firebase/auth';
import app from 'src/boot/firebase';
import { useRouter } from 'vue-router';
const verfyopen = ref(false);
const router = useRouter();
const $q = useQuasar();
const showLoading = () => {
  $q.loading.show({
    spinnerColor: 'white',
    backgroundColor: 'black',
    message: 'Setting everthing up...'
  });

  setTimeout(() => {
    $q.loading.hide();
  }, 3000);
};

const triggerNotify = (type: string, message: string) =>
  $q.notify({
    type: type,
    message: message
  });

const submitReset = () => {
  // location.reload();
setTimeout(()=>{
  showLoading();
  console.log('1')
  if (getAuth(app).currentUser?.emailVerified == true) {
    triggerNotify('positive', 'Successful Sign In');
    soundEffect(success);
    router.push('/home');

  }
  else{

    triggerNotify('negative', 'Please Verify Email');
    showLoading();
  }
},2000);
};

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
