<template>
  <div class="full-width column justify-center">
    <div class="element-login">
      <div class="futura" align="center">
        <h3>Please verify you email</h3>

        <h6>
          <span class="futura-warn">
            Note: You are not allowed to continue to the app if your email is
            not verified</span
          >

          <h6>
            We have sent an email to
            <q-space />
            <span style="font-style: italic;" v-text="sentemail" class></span>
          </h6>
            <span>Didn't received an email? </span
            ><q-btn flat @click="reSendEmail" color="primary"> click here</q-btn>
  

          <div class="q-pa-xs">
            <ActionButton
              textLabel="Done"
              color="green"
              text-color="white"
              data-cy="signup-btn"
              @click="submitReset"
            />
          </div>
        </h6>
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
  color: #4f575f;
}
.futura-warn {
  font-family: 'futura';
  color: red;
}
h6 {
  margin: 3%; /* Set margin to 0 to remove default margin */
  padding: 10; /* Set padding to 0 to remove default padding */
}
h3 {
  margin: 10; /* Set margin to 0 to remove default margin */
  margin-bottom: 3%;
  padding: 10; /* Set padding to 0 to remove default padding */
}
.centered {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.full-width {
  padding-top: 0; /* Adjust this value as needed */
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
