<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn label="Log In" class="kid-button-log-in" @click="logInModal = true" />

    <q-dialog rounded outlined v-model="logInModal" no-refocus no-hide-on-route-change>
      <q-card style="width: 700px; height: 400px;">
        <form @submit.prevent.stop="submit">
          <div class="element-login">
            <q-btn icon="close" flat round dense v-close-popup />
            <div class="container-logo-login">
              <img :src="image" class="centered-image" alt="PlayRobosLogo" />
            </div>


            <q-card-section class="authInputContainer ">
              <q-input class="authInputsBig" rounded outlined v-model="email" id="email" type="email" label="Email"
                :error='error'>

                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>
            </q-card-section>


            <q-card-section class="authInputContainer">
              <q-input class="authInputsBig" rounded outlined v-model="password" id="password" label="Password"
                :error="error" type="password">
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
            </q-card-section>



            <p v-if="error" class="error text-h6 text-red q-mb-md text-center">{{ error }}</p>
            <div class="container-auth-modal">
              <q-btn class="kid-button-log-in" @click="submit" label="Log In" type="submit" />
            </div>
          </div>
        </form>
      </q-card>

    </q-dialog>
  </div>
</template>

<script>
import login from '../../firebase/auth';
import { ref } from 'vue'
import '../../css/style.css'
import PlayRobosLogo from '../../assets/PlayRobosLogo1.png';
import { useQuasar } from 'quasar'


export default {
  name:'LoginForm',
  setup() {
  const $q = useQuasar()


    return {
      image: PlayRobosLogo,
      logInModal: ref(false),



    triggerNotify(type, message) {
    $q.notify({
      type: type,
      message: message,
    });

    },

    }
  },
  data() {


    return {
      email: '',
      password: '',
      error: false,
      errorMessage: ''
    };

  },
  methods: {

    async submit() {
      try {
        await login(this.email, this.password);
        this.triggerNotify('success', 'Successful Login');
        this.error = 'success';

      } catch (error) {
        this.triggerNotify('negative', 'Login Failed: Invalid credentials');
        this.error = true;
        this.password = ''; // Clear the password field

      }
    },

  },
};
</script>
