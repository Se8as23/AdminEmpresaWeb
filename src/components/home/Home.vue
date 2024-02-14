<template>
  <div class="container">
    <div class="imagen-container">
      <img src="https://www.unemi.edu.ec/wp-content/uploads/2022/08/banner_administracion_de_empresas_01-1.jpg" alt="Imagen" style="height: 250px;">
    </div>

    <div class="texto">
      Bienvenido a nuestra Plataforma de Asesoramiento Empresarial
      ¿Qué ofrecemos?
      Somos una plataforma dedicada a impulsar el crecimiento y éxito de emprendedores y empresas emergentes a través de asesoramiento empresarial de alta calidad. Nuestro compromiso es brindar herramientas y recursos para el desarrollo y fortalecimiento de negocios en todas las etapas.
    </div>

    <div class="imagen2">
      <img src="https://carreraadministraciondeempresas.cl/wp-content/uploads/2022/01/01-1490-1068x712.jpeg" alt="imagen2" style="height: 250px; ">
    </div>

    <!-- Contenedor adicional para el botón del chatbot -->
    <div class="chatbot-container" @click="toggleChatbot">
      <div class="chatbot" v-if="showChatbot">
        <!-- Contenido del chatbot aquí -->
        <button @click="toggleChatbot">Cerrar Chat</button>
      </div>
      <button class="chatbot-toggle"><img src="https://www.grupocibernos.com/hubfs/chatbot-4071274_1920.jpg" alt="" style="height: 40px;"></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showChatbot: false
    };
  },
  methods: {
    toggleChatbot() {
      this.showChatbot = !this.showChatbot;
    }
  }
};
</script>

<style>
.container {
  position: relative;
}

.chatbot-container {
  position: absolute;
  bottom: 20px;
  right: 20px;
}

.chatbot {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: none;
}

.chatbot button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
}

.chatbot-toggle {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
