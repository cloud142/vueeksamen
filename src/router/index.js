import { createRouter, createWebHashHistory } from 'vue-router';
// Import your components
import Home from '../views/Home.vue';
import Salma from '../views/Salma.vue';
import Buy from '../views/Buy.vue';
import Buyy from '../views/Buyy.vue';
import Winter from '../views/winter.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/salma', 
    name: 'Salma',
    component: Salma,
  },
  {
    path: '/buy', 
    name: 'Buy',
    component: Buy,
  },
  {
    path: '/buyy', 
    name: 'Buyy',
    component: Buyy,
  },
  {
    path: '/winter', 
    name: 'Winter',
    component: Winter,
  }
];



const router = createRouter({
  history: createWebHashHistory(),
  routes,
});



export default router;
