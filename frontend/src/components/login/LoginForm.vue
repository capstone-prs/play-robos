<template>
  <div >
    
 <action-button :textLabel="Text" class='text' @click="logInModal = true"></action-button>

    <q-dialog  :maximized="maximizedToggle" rounded outlined v-model="logInModal"  no-refocus no-hide-on-route-change>
      <q-card style="width: 100vw; height: 100vw;">
        <form @submit.prevent.stop="submit" class="q-gutter-md">
          <div class="element-login">

            <q-btn class="glossy" round color="red" icon="close" style="position: absolute; margin: 10px 0px;  right: 20px;"  @click="logInModal = false" />
            
          <div class="groupedLogIn">
            <q-card-section class="authInputContainer ">
              <q-input class="authInputsBig" rounded outlined v-model="email" id="email" type="email" label="Email"
                :error='isError'>

                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>
            </q-card-section>


            <q-card-section class="authInputContainer">
              <q-input class="authInputsBig" rounded outlined v-model="password" id="password" label="Password"
                :error="isError" type="password">
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
            </q-card-section>
            <p v-if="errorMessage" class="text text-red " style="font-size: 20px;">{{ errorMessage }}</p>

</div>

            <p v-if="error" class="error text-h6 text-red q-mb-md text-center">{{ error }}</p>
            <div class="container-auth-modal">
              <action-button :textLabel="Text" class='text'  @click="submit" type="submit"></action-button>
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
import PlayRobos1 from '../../assets/PlayRobos1.svg';
import { useQuasar } from 'quasar'
import ActionButton from '../buttons/ActionButton.vue';


export default {
  name:'LoginForm',
  components: {
    'action-button': ActionButton, // Register the ActionButton component
  },
  setup() {
  const $q = useQuasar()


    return {
      Text: 'Log In',
      image: PlayRobos1,
      logInModal: ref(false),
      maximizedToggle: ref(true),
      ActionButton,

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
      errorMessage: '',
      isError:false
    };

  },
  methods: {

    async submit() {
      try {
        await login(this.email, this.password);
        this.triggerNotify('positive', 'Successful Login');
        this.isError = false;
        this.error = '';
        this.errorMessage = ''
        this.logInModal ='false'

      } catch (error) {
        this.triggerNotify('negative', 'Login Failed: Invalid credentials');
        this.error = '';
        this.isError = true;
        this.password = ''; 
        this.errorMessage = 'Invalid credentials'

      }
    },

  },
};
</script>
