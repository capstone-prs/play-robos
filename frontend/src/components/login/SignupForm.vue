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
              :ref="data.age.ref"
              class="authInputsSmall"
              rounded
              outlined
              v-model="data.age.model.value"
              type="number"
              label="Age"
              :rules="data.age.rules"
              lazyRules
            >
              <template v-slot:prepend>
                <q-icon name="img:/age-icon.svg " size="30px" />
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
                type="password"
                :rules="data.password.rules"
                lazyRules
              >
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
                type="password"
                :rules="data.rePassword.rules"
                lazyRules
                aria-required
              >
                <template v-slot:prepend> <q-icon name="lock" />
                </template>
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
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { signup } from '../../firebase/auth';
import '../../css/style.css';
import { QInput, useQuasar } from 'quasar';
import { ref } from 'vue';
import ActionButton from '../buttons/ActionButton.vue';
import { useRouter } from 'vue-router';
import { addUser } from '../../firebase/firestore';
import { Gender } from '../../types/Users';
import validate from '../../utils/signUpUtils';

const $q = useQuasar();
const router = useRouter();

const Text = 'sign up';

const triggerNotify = (type: string, message: string) => {
  $q.notify({
    type: type,
    message: message,
  });
};
const validateRePassword = (val: string) =>
  validate('REPASSWORD', data.password.model.value ?? '')(val);

const navigateBack = () => router.go(-1);

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
  age: {
    ref: ref<QInput | null>(null),
    model: ref<number>(),
    rules: [validate('AGE')],
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
  isSubmitted.value = true;
  Object.values(data).map((field) => field.ref.value?.validate());

  const hasErrors = Object.values(data).some(
    (field) => field.ref.value?.hasError
  );

  if (hasErrors) {
    isSubmitted.value = false;
    return triggerNotify('negative', 'SignIn Failed: Invalid credentials');
  }
  isSubmitted.value = true;

  return signup(data.email.model.value, data.password.model.value)
    .then((newUser) => {
      if (
        data.name.model.value &&
        data.gender.model.value &&
        data.age.model.value
      ) {
        return addUser(
          {
            name: data.name.model.value,
            gender: data.gender.model.value,
            age: data.age.model.value,
          },
          newUser.user.uid
        )
          .then(() => triggerNotify('positive', 'Successful Sign In'))
          .then(() => {
            router.push('/home');
            showLoading();
          });
      }
      throw new Error('Invalid');
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

      return triggerNotify('negative', 'SignUp Failed: Invalid credentials');
    });
};
</script>
../../types/users
