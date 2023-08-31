<template>
  <div class="signup-form">
    <h2>Sign Up</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <div class="form-group">
        <label for="rePassword">Re-enter Password:</label>
        <input type="password" id="rePassword" v-model="rePassword" required />
      </div>
      <button type="submit" @click="submit">Sign Up</button>
      <p v-if="error" class="error">{{ error }}</p>
    </form>
    <h3>{{ log }}</h3>
  </div>
</template>

<script>
import { signup } from '../../firebase/auth';
export default {
  data() {
    return {
      email: '',
      password: '',
      rePassword: '',
      error: '',
    };
  },
  methods: {
    submit() {
      if (this.password !== this.rePassword) {
        this.error = "Passwords don't match!";
        return;
      }

      // this.email = '';
      // this.password = '';
      // this.rePassword = '';
      // this.error = '';

      return signup(this.email, this.password)
        .then(() => (this.error = 'success'))
        .catch((error) => (this.error = error));
    },
  },
};
</script>

<style>
.signup-form {
  max-width: 300px;
  margin: 0 auto;
}
.form-group {
  margin-bottom: 1rem;
}
label {
  display: block;
  font-weight: bold;
}
input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
