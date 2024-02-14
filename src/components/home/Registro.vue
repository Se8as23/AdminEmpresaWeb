<template>
    <div class="register-container">
      <div class="register-box">
        <h2>Registrarse</h2>
        <form @submit.prevent="register">
          <div class="form-group">
            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" v-model="email" required>
          </div>
          <div class="form-group">
            <label for="name">Nombre:</label>
            <input type="text" id="name" v-model="name" required>
          </div>
          <div class="form-group">
            <label for="lastname">Apellido:</label>
            <input type="text" id="lastname" v-model="lastname" required>
          </div>
          <div class="form-group">
            <label for="password">Contraseña:</label>
            <input type="password" id="password" v-model="password" required>
          </div>
          <div class="form-group">
            <label for="cedula">Cédula:</label>
            <input type="text" id="cedula" v-model="cedula" required>
          </div>
          <button type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        name: '',
        lastname: '',
        password: '',
        cedula: ''
      };
    },
    methods: {
      register() {
        // Aquí puedes agregar la lógica para registrar al usuario utilizando los datos ingresados
        // Por ejemplo, puedes enviar estos datos a un servidor para el registro del usuario
        console.log('Correo:', this.email);
        console.log('Nombre:', this.name);
        console.log('Apellido:', this.lastname);
        console.log('Contraseña:', this.password);
        console.log('Cédula:', this.cedula);
        // Luego del registro, puedes redirigir al usuario a otra página si es necesario
      }
    }
  };
  </script>
  
  <style scoped>
  .register-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
  }
  
  .register-box {
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
  input[type="text"],
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
  