<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="login" class="login-form">
      <label for="username">Brugernavn:</label>
      <input type="text" id="username" v-model="username" />

      <label for="password">Adgangskode:</label>
      <input type="password" id="password" v-model="password" />

      <button type="submit">Log ind</button>
    </form>
    <div v-if="loggedIn" class="logged-in-info">
      <p>Du er logget ind som {{ username }}</p>
      <button @click="logout">Log ud</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      loggedIn: false
    };
  },
  methods: {
    login() {
     
      const correctUsername = "bruger123";
      const correctPassword = "kode123";

      if (this.username === correctUsername && this.password === correctPassword) {
        this.loggedIn = true;
        this.$router.push({ name: 'Home', params: { username: this.username } });
      } else {
        alert("Forkert brugernavn eller adgangskode");
      }
    },
    logout() {
      this.username = "";
      this.password = "";
      this.loggedIn = false;
      this.$router.push({ name: 'Login' }); 
    }
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

.login-form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 8px;
}

input {
  padding: 10px;
  margin-bottom: 16px;
  box-sizing: border-box;
}

button {
  padding: 10px;
  background-color: #3C412A;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #3C412A;
}

.logged-in-info {
  margin-top: 20px;
  text-align: center;
}
</style>

  
  