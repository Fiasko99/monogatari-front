import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home')
  },
  {
    path: '/location/:name',
    name: 'location',
    component: () => import('../views/location')
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../views/auth')
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
