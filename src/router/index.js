import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import Home from './components/home/Home.vue';

const routes = [

    {
        path: '/',
        name: 'Home',
        component: Home
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router