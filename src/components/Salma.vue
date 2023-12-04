<template>
    <div class="salma-container">
      <div class="form-container">
        <div class="login-container">
          <h2>Login</h2>
          <form @submit.prevent="login" class="form">
            <label>Brugernavn:</label>
            <input v-model="loginUsername" type="text" required class="input-field">
            <label>Kodeord:</label>
            <input v-model="loginPassword" type="password" required class="input-field">
            <button type="submit" class="submit-button">Log ind</button>
            <div v-if="loginError" class="error-message">{{ loginError }}</div>
          </form>
        </div>
        <div class="signup-container">
          <h2>Tilmelding</h2>
          <form @submit.prevent="signup" class="form">
            <label>Brugernavn:</label>
            <input v-model="signupUsername" type="text" required class="input-field">
            <label>Kodeord:</label>
            <input v-model="signupPassword" type="password" required class="input-field">
            <button type="submit" class="submit-button">Tilmeld</button>
            <div v-if="signupError" class="error-message">{{ signupError }}</div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        loginUsername: '',
        loginPassword: '',
        signupUsername: '',
        signupPassword: '',
        loginError: '',
        signupError: ''
      };
    },
    methods: {
      login() {
        // Nulstil fejlmeddelelser
        this.loginError = '';
  
        // Simulerer en enkel autentifikation
        if (this.loginUsername === 'bruger123' && this.loginPassword === 'kode123') {
          console.log('Login successful');
          // Yderligere handling, f.eks. navigering til en anden side
          this.navigateToAnotherPage();
        } else {
          this.loginError = 'Forkert brugernavn eller kodeord';
        }
      },
      signup() {
        // Nulstil fejlmeddelelser
        this.signupError = '';
  
        // Simulerer en enkel tilmelding
        if (this.signupUsername === 'tilmeld123' && this.signupPassword === 'kode123') {
          console.log('Signup successful');
          // Yderligere handling, f.eks. navigering til en anden side
        } else {
          this.signupError = 'Forkert brugernavn eller kodeord';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .salma-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50vh;
  }
  
  .form-container {
    display: flex;
    justify-content: space-around;
    max-width: 800px;
    width: 100%;
  }
  
  .login-container,
  .signup-container {
    flex: 1;
    padding: 20px;
    box-sizing: border-box;
  }
  
  .form {
    display: flex;
    flex-direction: column;
  }
  
  .input-field {
    margin-bottom: 10px;
    padding: 8px;
  }
  
  .submit-button {
    background-color: #3C412A;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .submit-button:hover {
    background-color: #3C412A;
  }
  
  .error-message {
    color: red;
    margin-top: 5px;
  }
  </style>
  
  