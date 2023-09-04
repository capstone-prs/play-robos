<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn label="Sign Up" class="kid-button-sign-in " @click="signInModal = true" />
    <q-dialog rounded outlined v-model="signInModal">
      <q-card style="width: 700px; height: 400px;">
        <form @submit.prevent.stop="submitForm" class="q-gutter-md">
          <div class="element-login">
            <q-btn class="glossy" round color="red" icon="close" style="margin-top: 5px;" @click="signInModal = false" />

            <div class="container">
              <!-- Use the imported image -->
              <img :src="image" class="centered-image" alt="PlayRobosLogo" />
            </div>


            <!-- <q-card-section class="authInputContainer ">
              <q-input class="authInputsBig" id="name" ref="nameRef" rounded outlined v-model="name" label="Your name">
                <template v-slot:prepend>
                </template>
              </q-input>
            </q-card-section>


            <q-card-section class="authInputContainer">
              <q-input class="authInputsSmall" ref="ageRef" rounded outlined v-model="age" type="number" label="age">
                <template v-slot:prepend>
                </template>
              </q-input>


              <div class="q-pa-md" style="max-width: 300px">
                <q-select class="authInputsSmall" rounded outlined v-model="genderModal" :options="gender" label="Gender">
                  <template v-slot:prepend>
                  </template>
                </q-select>
              </div>
            </q-card-section> -->



            <q-card-section class="authInputContainer">
              <q-input class="authInputsBig" id="email" rounded outlined v-model="email" label="Email" :error="isError">
                <template v-slot:prepend>
                </template>
              </q-input>
            </q-card-section>


            <q-card-section class="authInputContainer">
              <q-input class="authInputsBig" rounded outlined v-model="password" id="password" label="Password"
                :error='isError' type="password">
                <template v-slot:prepend>
                </template>
              </q-input>
            </q-card-section>

            <q-card-section class="authInputContainer">
              <q-input class="authInputsBig" rounded outlined v-model="rePassword" id="rePassword" :error='isError'
                label="Confirm Password" type="password">
                <template v-slot:prepend>
                </template>
              </q-input>
            </q-card-section>

            <p v-if="error" class="error text-h6 text-red q-mb-md text-center">{{ error }}</p>
            <div class="container-auth-modal">
              <q-btn class='kid-button-sign-in' @click="submit" label="Submit" type="submit" />
             
            </div>
          </div>
        </form>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { signup } from '../../firebase/auth';
import '../../css/style.css'
import PlayRobos1 from '../../assets/PlayRobos1.svg';
import { useQuasar } from 'quasar'
import { ref } from 'vue';
export default {
  name: 'SignupForm',
  setup() {
    const $q = useQuasar()

    return {

      image: PlayRobos1,
      signInModal: ref(false),

      triggerNotify(type, message) {
    $q.notify({
      type: type,
      message: message,
    });
      }

    }
  },

  data() {
    return {
      email: '',
      password: '',
      rePassword: '',
      isError: 'false',
      error: '',
      errorMessage: ''
    };
  },
  methods: {
    async submit() {
      const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
      if (!emailRegex.test(this.email)) {
        this.error = 'Invalid email address';
        this.isError = true 
        this.triggerNotify('negative', 'SignIn Failed: Invalid credentials');
        return;
      };


      if (this.password !== this.rePassword) {
        this.error = "Passwords don't match!";
        this.triggerNotify('negative', 'SignIn Failed: Invalid credentials');
        return;
      }

      if (this.password === '') {
        this.error = 'Password cannot be empty';
        this.triggerNotify('negative', 'SignIn Failed: Invalid credentials');
        return;
      }

      // this.email = '';
      // this.password = '';
      // this.rePassword = '';
      // this.error = '';

      return signup(this.email, this.password)
        .then(() => {this.triggerNotify('positive', 'Successful Sign In')
        

      this.error=''})
        .catch((error) => {
          this.triggerNotify('negative', 'SignIn Failed: Invalid credentials');
          this.isError = true
          this.error = error
        });
    },
  },
};
</script>


