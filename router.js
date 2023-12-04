import { createRouter, createWebHistory } from 'vue-router';
import Salma from './views/Salma.vue'; // Importer jeres Salma.vue komponent

const routes = [
  { path: '/', component: Salma },
  // Tilføj eventuelle andre ruter efter behov
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;