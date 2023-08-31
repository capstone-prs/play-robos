<template>
  <div class="login-form">
    <h2>Log in</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>

      <button type="submit" @click="submit">Log in</button>
      <p v-if="error" class="error">{{ error }}</p>
    </form>
    <h3>{{ log }}</h3>
  </div>
</template>

<script>
import login from '../../firebase/auth';
export default {
  data() {
    return {
      email: '',
      password: '',

      error: '',
    };
  },
  methods: {
    async submit() {
      // this.email = '';
      // this.password = '';
      // this.error = '';

      return login(this.email, this.password)
        .then(() => (this.error = 'success'))
        .catch((error) => (this.error = error));
    },
  },
};
</script>

<style>
.login-form {
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
