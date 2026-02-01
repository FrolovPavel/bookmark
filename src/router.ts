import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  routes: [
    {
      path: '/',
      component: () => import('./views/AuthView.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('./views/MainView.vue')
    }
  ],
  history: createWebHistory(),
});
