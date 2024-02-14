<template>
    <div class="login-container">
      <div class="login-box">
        <h2>Iniciar Sesión</h2>
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" v-model="email" required>
          </div>
          <div class="form-group">
            <label for="password">Contraseña:</label>
            <input type="password" id="password" v-model="password" required>
          </div>
          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      login() {
        // Aquí puedes agregar la lógica para iniciar sesión utilizando el correo y la contraseña
        // Por ejemplo, puedes enviar estos datos a un servidor para autenticación
        console.log('Correo:', this.email);
        console.log('Contraseña:', this.password);
        // Luego de la autenticación, puedes redirigir al usuario a otra página si es necesario
      }
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
  }
  
  .login-box {
    width: 300px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    font-weight: bold;
  }
  
  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-sizing: border-box;
  }
  
  button[type="submit"] {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 3px;
    background-color: #007bff;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button[type="submit"]:hover {
    background-color: #0056b3;
  }
  </style>
  