<template>
  <div class="full-width column justify-center">
      <div class="element-login">
        <div class="q-pt-none" align="center">
          <h4>Please Verify your email</h4>
          <h6>
            <span>We have sent an email to </span>
            <q-space />
            <span v-text="sentemail" class></span>
            <div class="q-pa-md">
            <ActionButton
              textLabel="Resend email"
              color="pink-12"
              text-color="white"
              data-cy="signup-n\"
              @click="reSendEmail"
            />
            </div>
            <span class="futura-warn">
              Note: You are not allowed to continue to the app if your email is
              not verified</span
            >
            <div class="q-pa-md">
            <ActionButton
              textLabel="Done"
              color="pink-12"
              text-color="white"
              data-cy="signup-btn"
              @click="submitReset"
            />
            </div>
          </h6>
        
        <div class="col futura-warn" align="center">
          <div class="row centered" align="center"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ActionButton from '../buttons/ActionButton.vue';
import { ref } from 'vue';
import { verifyEmail } from '../../firebase/auth';
import { useQuasar } from 'quasar';
import { getAuth } from 'firebase/auth';
import app from 'src/boot/firebase';
import { useRouter } from 'vue-router';

const sentemail = ref(getAuth(app).currentUser?.email);

// const verfyopen = ref(false);
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



const user = getAuth().currentUser;
const submitReset = () => {

  if (user) {
    user.reload().then(() => {
      if (user.emailVerified == true) {
        triggerNotify('positive', 'Successful Sign In');
        router.push('/home');
      } else {
        triggerNotify('negative', 'Please Verify Email');
        showLoading();
      }
    });
  }
  router.push('/');
};
const reSendEmail = () => {
  
  if (user) {
    verifyEmail(user);
    triggerNotify('positive', 'Email Verification Sent');
  }
};
</script>
<style>
@font-face {
  font-family: futura;
  src: url('/fonts/FuturaLT.woff');
}

.futura {
  font-family: 'futura';
  color: black;
}
.futura-warn {
  font-family: 'futura';
  color: red;
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
.element-login {
  background: linear-gradient(
    180deg,
    #31d7f8 20%,
    rgb(114, 221, 237) 45%,
    rgb(177, 243, 255) 100%
  );
  height: 100vh;
  overflow: hidden;
}
</style>
