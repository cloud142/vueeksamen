import { createRouter, createWebHashHistory } from 'vue-router';

// Import your components
import Claudia from './views/Claudia.vue';
import Salma from './views/Salma.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Claudia,
  },
  {
    path: '/signin', // Define a route for "/signin"
    name: 'signin',
    component: Salma,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;