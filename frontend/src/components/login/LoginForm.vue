<template>
  <q-layout class="element-login">
    <div class="full-width column justify-center">
      <form @submit.prevent.stop="submit" class="q-gutter-md">
        <div class="q-mb-xl">
          <q-btn
            class="glossy"
            round
            color="red"
            icon="arrow_back"
            style="position: absolute; left: 20px; top: 20px"
            @click="navigateBack"
          />

          <div class="groupedLogIn">
            <q-card-section class="authInputContainer">
              <q-input
                class="authInputsBig"
                rounded
                outlined
                v-model="data.email.value"
                id="email"
                type="email"
                label="Email"
                :error="data.isError.value"
              >
                <template v-slot:prepend>
                  <q-icon name="mail" />
                </template>
              </q-input>
            </q-card-section>
            <q-card-section class="authInputContainer">
              <q-input
                class="authInputsBig"
                rounded
                outlined
                password-reveal
                v-model="data.password.value"
                id="password"
                label="Password"
                :error="data.isError.value"
                :type="showPwd ? 'text' : 'password'"
                :ref="password"
              >
                <template v-slot:append>
                  <q-icon
                    :name="showPwd ? 'visibility' : 'visibility_off'"
                    class="cursor-pointer"
                    @click="showPwd = !showPwd"
                  />
                </template>
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
              <div>
                <ForgetPassDialog v-model="isForgetPasswordOpen" />
                <q-btn
                  flat
                  rounded
                  color="grey-7"
                  label="Forgot password"
                  style="position: absolute; left: 20%; bottom: -30%"
                  @click="openForgetPassword()"
                />
              </div>
            </q-card-section>
            <p
              v-if="data.errorMessage.value"
              class="errorPrompt text-red q-pb-lg"
              style="font-size: 20px"
            >
              {{ data.errorMessage.value }}
            </p>
          </div>

          <div class="container-auth-modal q-py-lg">
            <ActionButton
              :textLabel="Text"
              class="text"
              @click="submit"
              type="submit"
              :textColor="isSubmitted ? 'white' : undefined"
              :isDisabled="isSubmitted"
              :loading="isSubmitted"
            >
            </ActionButton>
          </div>
        </div>
      </form>
    </div>
  </q-layout>
</template>

<script setup lang="ts">
import login, { isEmailVerified, verifyEmail } from '../../firebase/auth';
import { ref } from 'vue';
import '../../css/style.css';

import { useQuasar } from 'quasar';
import ActionButton from '../buttons/ActionButton.vue';
import ForgetPassDialog from '../../components/ForgetPassDialog.vue';
import { useRouter } from 'vue-router';
import click from '../../assets/sounds/click.mp3';
import success from '../../assets/sounds/success-notify.mp3';
import back from '../../assets/sounds/back.mp3';
import errorSnd from '../../assets/sounds/errorSnd.mp3';
import { soundEffect } from '../../utils/SoundUtils';

const $q = useQuasar();
const router = useRouter();

const password = ref();
const showPwd = ref(false);
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

const triggerNotify = (type: string, message: string) => {
  $q.notify({
    type: type,
    message: message,
  });
};
const navigateBack = () => {
  soundEffect(back);
  return router.go(-1);
};

const submit = () => {
  soundEffect(click);
  isSubmitted.value = true;
  return login(data.email.value, data.password.value)
    .then((user) =>
      isEmailVerified(user)
        .then(() => {
          soundEffect(success);
          data.isError.value = false;
          data.error.value = '';
          data.errorMessage.value = '';
          return triggerNotify('positive', 'Successful Login');
        })
        .then(() => {
          router.push('/home');
          showLoading();
        })
        .catch(() => {
          verifyEmail(user);
          router.push('/verifyemail');
          return triggerNotify('negative', 'Login Failed: Email Not Verified');
        })
    )
    .catch((e) => {
      isSubmitted.value = false;
      soundEffect(errorSnd);
      data.isError.value = true;
      data.password.value = '';
      if (e.code === 'auth/network-request-failed') {
        data.errorMessage.value = 'Network Error. Please try Again';

        return triggerNotify('negative', 'Login Failed: Network Error');
      }
      data.errorMessage.value = 'Invalid credentials';
      return triggerNotify('negative', 'Login Failed: Invalid credentials');
    });
};
</script>
