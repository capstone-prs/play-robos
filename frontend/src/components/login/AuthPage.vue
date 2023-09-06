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
  import PlayRobos1 from '../../assets/PlayRobos1.svg';
  import LoginForm from '../../components/login/LoginForm.vue';
  import SignupForm from '../../components/login/SignupForm.vue';
  import '../../css/style.css'
  
  export default defineComponent({
    name: 'HomePage',
    data() {
      return {
        image: PlayRobos1,
      };
    },
    components:{
        LoginForm,
        SignupForm
      
    },
  
  
  });
  </Script>
  