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
    path: '/user/:login',
    name: 'user',
    component: () => import('../views/user'),
    children: [
      {
        path: '',
        name: 'user-default',
        component: () => import('../views/user-default'),
        props: true,
      },
      {
        path: 'characters',
        name: 'characters',
        component: () => import('../views/characters'),
      },
      {
        path: 'settings',
        name: 'settings',
        component: () => import('../views/settings'),
      },
    ],
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
