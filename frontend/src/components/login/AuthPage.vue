<template>
    <div class="element">
      <div class="container">
        <!-- Use the imported image -->
        <img :src="image" class="centered-image" alt="PlayRobosLogo"  />
      </div>
      <h2 class="text">
        <span style="color: #006DF0;">Play</span>
        <span style="color: #FE66C4;">Robo</span>
        <span style="color: #FBDE4E;">S</span>
      </h2>
      <q-space />
      <div class="container">
        <div class="button-container">
          <LoginForm/>
          <SignupForm/>
          
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import PlayRobosLogo from '../../assets/PlayRobosLogo1.png';
  import LoginForm from '../../components/login/LoginForm.vue';
  import SignupForm from '../../components/login/SignupForm.vue';
  import '../../css/style.css'
  
  export default defineComponent({
    name: 'HomePage',
    data() {
      return {
        image: PlayRobosLogo,
      };
    },
    components:{
        LoginForm,
        SignupForm
      
    },
  
  
  });
  </Script>
  