import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/kn-hello',
      name: 'kn-hello',
      component: () => import('../views/kn-hello/index.vue')
    },
    {
      path: '/kn-button',
      name: 'kn-button',
      component: () => import('../views/kn-button/index.vue')
    },
    {
      path: '/useHello',
      name: 'useHello',
      component: () => import('../views/useHello/index.vue')
    },
    {
      path: '/hello',
      name: 'hello',
      component: () => import('../views/hello/index.vue')
    }
  ]
})

export default router
