<template>
  <div class="full-width column justify-center">
    <form @submit.prevent.stop="submit" class="q-gutter-md">
      <div class="element-signup">
        <div class="wrap" style="padding: 10px 0px 0px 10px">
          <q-btn
            class="glossy"
            round
            color="red"
            icon="arrow_back"
            @click="navigateBack"
          />
        </div>
        <div>
          <q-card-section class="authInputContainer">
            <q-input
              class="authInputsBig"
              id="name"
              :ref="data.name.ref"
              rounded
              outlined
              v-model="data.name.model.value"
              label="Your name"
              :rules="data.name.rules"
              lazyRules
            >
              <template v-slot:prepend> <q-icon name="person" /></template>
            </q-input>
          </q-card-section>

          <q-card-section class="authInputContainer">
            <q-input
              :ref="data.birthdate.ref"
              class="authInputsSmall"
              rounded
              outlined
              v-model="data.birthdate.model.value"
              type="date"
              label="Birthday"
              :rules="data.birthdate.rules"
              lazyRules
            >
              <template v-slot:prepend>
                <q-icon name="cake" />
              </template>
            </q-input>

            <q-select
              class="authInputsSmall"
              rounded
              outlined
              :ref="data.gender.ref"
              v-model="data.gender.model.value"
              :options="data.gender.options"
              label="Gender"
              style="margin-left: 5%"
              :rules="data.gender.rules"
              lazyRules
            >
              <template v-slot:prepend>
                <q-icon name="wc" />
              </template>
            </q-select>
          </q-card-section>

          <div class="groupedSignIn">
            <q-card-section class="authInputContainer">
              <q-input
                :ref="data.email.ref"
                class="authInputsBig"
                rounded
                outlined
                v-model="data.email.model.value"
                id="email"
                type="email"
                label="Email"
                :error="data.email.isError.value"
                :errorMessage="data.email.errorMessage.value"
                :rules="data.email.rules"
                :onChange="
                  () => {
                    if (data.email.isError.value) {
                      data.email.isError.value = false;
                      data.email.errorMessage.value = '';
                    }
                  }
                "
                lazyRules
              >
                <template v-slot:prepend>
                  <q-icon name="mail" />
                </template>
              </q-input>
            </q-card-section>

            <q-card-section class="authInputContainer">
              <q-input
                :ref="data.password.ref"
                class="authInputsBig"
                rounded
                outlined
                v-model="data.password.model.value"
                id="password"
                label="Password"
                :type="isPwd ? 'password' : 'text'"
                :rules="data.password.rules"
                lazyRules
              >
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
                <template v-slot:prepend> <q-icon name="lock" /></template>
              </q-input>
            </q-card-section>

            <q-card-section class="authInputContainer">
              <q-input
                :ref="data.rePassword.ref"
                class="authInputsBig"
                rounded
                outlined
                v-model="data.rePassword.model.value"
                id="rePassword"
                label="Confirm Password"
                :type="isConPwd ? 'password' : 'text'"
                :rules="data.rePassword.rules"
                lazyRules
                aria-required
              >
                <template v-slot:append>
                  <q-icon
                    :name="isConPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isConPwd = !isConPwd"
                  />
                </template>
                <template v-slot:prepend> <q-icon name="lock" /> </template>
              </q-input>
            </q-card-section>
          </div>
        </div>
        <div class="container-auth-modal-signup">
          <ActionButton
            :textLabel="Text"
            color="pink-12"
            text-color="white"
            class="text"
            @click="submit"
            :isDisabled="isSubmitted"
          ></ActionButton>
        </div>
        <VerifyDIalog v-model="verfyopen" />
        <q-btn @click="open()" />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { signup, verifyEmail } from '../../firebase/auth';
import VerifyDIalog from '../VerifyDIalog.vue';
// import success from '../../assets/sounds/success-notify.mp3';
import '../../css/style.css';
import { QInput, useQuasar } from 'quasar';
import { ref } from 'vue';
import ActionButton from '../buttons/ActionButton.vue';
import { useRouter } from 'vue-router';
import { addUser } from '../../firebase/firestore';
import { Gender } from '../../types/Users';
import validate from '../../utils/signUpUtils';
import { soundEffect } from '../../utils/SoundUtils';
import errorSnd from '../../assets/sounds/errorSnd.mp3';
import back from '../../assets/sounds/back.mp3';
import getAge from '../../utils/ageGetter';
const $q = useQuasar();
const router = useRouter();

const Text = 'sign up';
const isPwd = ref(true);
const isConPwd = ref(true);

const triggerNotify = (type: string, message: string) => {
  $q.notify({
    type: type,
    message: message,
  });
};
const verfyopen = ref(false);
const open = () => {
  verfyopen.value = true;
};
const validateRePassword = (val: string) =>
  validate('REPASSWORD', data.password.model.value ?? '')(val);

const navigateBack = () => {
  soundEffect(back);
  router.go(-1);
};

const isSubmitted = ref(false);
const data = {
  name: {
    ref: ref<QInput | null>(null),
    model: ref<string>(''),
    rules: [validate('NAME')],
  },
  gender: {
    ref: ref<QInput | null>(null),
    model: ref<Gender>(),
    options: ['Male', 'Female'],
    rules: [validate('GENDER')],
  },
  birthdate: {
    ref: ref<QInput | null>(null),
    model: ref<string>(),
    rules: [validate('BIRTHDATE')],
  },
  email: {
    ref: ref<QInput | null>(null),
    model: ref<string>(''),
    rules: [validate('EMAIL')],
    isError: ref(false),
    errorMessage: ref<string>(''),
  },
  password: {
    ref: ref<QInput | null>(null),
    model: ref<string>(''),
    rules: [validate('PASSWORD')],
  },
  rePassword: {
    ref: ref<QInput | null>(null),
    model: ref<string>(''),
    rules: [validateRePassword],
  },
};

const showLoading = () => {
  $q.loading.show({
    spinnerColor: 'white',
    backgroundColor: 'black',
    message: 'Setting everthing up...',
  });

  setTimeout(() => {
    $q.loading.hide();
  }, 3000);
};

const submit = () => {
  soundEffect();
  isSubmitted.value = true;
  Object.values(data).map((field) => field.ref.value?.validate());

  const hasErrors = Object.values(data).some(
    (field) => field.ref.value?.hasError
  );

  if (hasErrors) {
    soundEffect(errorSnd);
    isSubmitted.value = false;
    return triggerNotify('negative', 'SignIn Failed: Invalid credentials');
  }

  isSubmitted.value = true;

  return signup(data.email.model.value, data.password.model.value)
    .then((newUser) => {
      return verifyEmail(newUser).then(() => {
        if (
          data.name.model.value &&
          data.gender.model.value &&
          data.birthdate.model.value
        ) {
          const userBirthdate = new Date(data.birthdate.model.value);

          const difficulty =
            getAge(userBirthdate, new Date()) >= 5 &&
            getAge(userBirthdate, new Date()) <= 7
              ? 'easy'
              : 'hard';
          localStorage.setItem('userDifficulty', difficulty);
          return addUser(
            {
              name: data.name.model.value,
              gender: data.gender.model.value,
              birthdate: new Date(data.birthdate.model.value),
              coins: 0,
              score: 0,
            },
            newUser.uid
          ).then(() => {
            triggerNotify('positive', 'Email Verification Sent');
            // soundEffect(success);
            router.push('/verifyemail');
            showLoading();
          });
        }
        throw new Error('Invalid');
      });
    })

    .catch((error) => {
      isSubmitted.value = false;
      data.password.model.value = '';
      data.rePassword.model.value = '';
      data.email.isError.value = true;

      if (error.code === 'auth/email-already-in-use') {
        data.email.errorMessage.value = 'Email already in used';
      } else if (error.code === 'auth/invalid-email') {
        data.email.errorMessage.value = 'Invalid email';
      } else if (error.code === 'auth/network-request-failed') {
        return triggerNotify(
          'negative',
          'SignUp Failed: No Internet Connection'
        );
      }
      console.log(error);
      return triggerNotify('negative', 'SignUp Failed: Invalid credentials');
    });
};
</script>
../../types/users
