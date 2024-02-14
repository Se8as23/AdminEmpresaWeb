import { createApp } from 'vue';
import App from './App.vue';

import Home from './components/home/Home.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: Home },
  
  // Puedes agregar más rutas aquí según sea necesario
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');