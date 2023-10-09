<template>
  <div class="full-width column justify-center">
    <form @submit.prevent.stop="submit" class="q-gutter-md">
      <div class="element-login">
        <q-btn class="glossy"
         round color="red" icon="arrow_back" style="position: fixed; left: 20px; top: 20px"
          @click="navigateBack" />

        <div class="groupedLogIn">
          <q-card-section class="authInputContainer">
            <q-input class="authInputsBig"
             rounded outlined
              v-model="data.email.value"
              id="email" 
              type="email"
              label="Email" 
              :error="data.isError.value">
              <template v-slot:prepend>
                <q-icon name="mail" />
              </template>
            </q-input>
          </q-card-section>
          <q-card-section class="authInputContainer">
            <q-input class="authInputsBig" 
              rounded outlined v-model="data.password.value"
               id="password"
               label="Password"
              :error="data.isError.value" 
              type="password">
              <template v-slot:prepend>
                <q-icon name="lock" />
              </template>
            </q-input>
            <div class="">
              <ForgetPassDialog v-model="isForgetPasswordOpen" />
              <q-btn flat rounded color="grey-7"
                label="Forgot password" 
                style="position:absolute; left:20%; bottom: -30%;"
                @click="openForgetPassword()" />
            </div>
          </q-card-section>

          <p v-if="data.errorMessage.value" 
          class="errorPrompt text-red" 
          style="font-size: 20px">
            {{ data.errorMessage.value }}
          </p>
        </div>

        <div class="container-auth-modal q-pt-lg">
          <ActionButton :textLabel="Text"
            class="text" 
            @click="submit" 
            type="submit" 
            :isDisabled="isSubmitted">
          </ActionButton>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import login from '../../firebase/auth';
import { ref } from 'vue';
import '../../css/style.css';

import { useQuasar } from 'quasar';
import ActionButton from '../buttons/ActionButton.vue';
import ForgetPassDialog from '../../components/ForgetPassDialog.vue'
import { useRouter } from 'vue-router';
import click from '../../assets/sounds/click.mp3'
import back from '../../assets/sounds/back.mp3'
import errorSnd from '../../assets/sounds/errorSnd.mp3'
import { soundEffect } from '../../utils/SoundUtils'

const $q = useQuasar();
const router = useRouter();


const isForgetPasswordOpen = ref(false);

const openForgetPassword = () => {
  soundEffect();
  isForgetPasswordOpen.value = true;
};

const Text = ref('Log In');
const isSubmitted = ref(false);
const data = {
  email: ref<string>(''),
  password: ref<string>(''),
  error: ref<string>(''),
  errorMessage: ref<string>(''),
  isError: ref(false),
};

const showLoading = () => {
  $q.loading.show({
    spinnerColor: 'white',
    backgroundColor: 'black',
    message: 'Setting everthing up...',
  });

  setTimeout(() => {
    $q.loading.hide();
  }, 4000);
};

const triggerNotify = (type: string, message: string) =>
  $q.notify({
    type: type,
    message: message,
  });

const navigateBack = () => {
  soundEffect(back);
  return router.go(-1)
};

const submit = () => {
  isSubmitted.value = true;
  return login(data.email.value, data.password.value)
    .then(() => {
      data.isError.value = false;
      data.error.value = '';
      data.errorMessage.value = '';
      soundEffect(click);
      return triggerNotify('positive', 'Successful Login');
    })
    .then(() => {
      router.push('/home');
      showLoading();
    })
    .catch(() => {
      isSubmitted.value = false;
      soundEffect(errorSnd);
      data.isError.value = true;
      data.password.value = '';
      data.errorMessage.value = 'Invalid credentials';
      return triggerNotify('negative', 'Login Failed: Invalid credentials');
    });
};
</script>
