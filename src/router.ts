import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  routes: [
    {
      path: '/:pathMatch(.*)*',
      component: () => import('./views/NotFound.vue')
    },
    {
      path: '/',
      name: 'auth',
      component: () => import('./views/AuthView.vue')
    },
    {
      path: '/main',
      component: () => import('./views/MainView.vue'),
      children: [
        {
          path: '',
          name: 'main',
          component: () => import('./views/WelcomeView.vue'),
        },
        {
          path: ':alias',
          component: () => import('./views/CategoryView.vue'),
        }
      ]
    }
  ],
  history: createWebHistory(),
});
