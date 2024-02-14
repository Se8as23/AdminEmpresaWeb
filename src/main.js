import { createApp } from 'vue';
import App from './App.vue';

import Home from './components/home/Home.vue';
import { createRouter, createWebHistory } from 'vue-router';
import inicioSecion from './components/home/inicioSecion.vue';
import Registro from './components/home/Registro.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/inicioSecion.vue', component: inicioSecion },
  {path: '/Registro.vue', component: Registro},
  // Puedes agregar más rutas aquí según sea necesario
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
