<template>
  <div >
    <action-button :textLabel="Text" class='text' @click="signInModal = true"></action-button>


    <q-dialog :maximized="maximizedToggle" rounded outlined v-model="signInModal">
      <q-card style="width: 100vw; height: 100vw;">
        <form @submit.prevent.stop="submitForm" class="q-gutter-md">
          <div class="element-login">
            <q-btn class="glossy" round color="red" icon="close" style="position: absolute; margin: 10px 0px;  right: 20px;"  @click="signInModal = false" />
            

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


            <div class="groupedSignIn">
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
</div>
            <p v-if="error" class="error text-h6 text-red q-mb-md text-center">{{ error }}</p>
            <div class="container-auth-modal">
              <action-button :textLabel="Text" class='text' @click="submit"></action-button>
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
import ActionButton from '../buttons/ActionButton.vue';

export default {
  name: 'SignupForm',
  components: {
    'action-button': ActionButton, // Register the ActionButton component
  },
  setup() {
    const $q = useQuasar()

    return {
      ActionButton,
      Text:'Sign in',
      image: PlayRobos1,
      signInModal: ref(false),
      maximizedToggle: ref(true),

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
        
        this.logInModal  = (false)
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


