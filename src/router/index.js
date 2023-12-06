import { createRouter, createWebHashHistory } from 'vue-router';
// Import your components
import Home from '../views/Home.vue';
import Salma from '../views/Salma.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/salma', // Define a route for "/signin"
    name: 'Salma',
    component: Salma,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
