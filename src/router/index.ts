import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/hello',
      name: 'hello',
      component: () => import('../views/hello/index.vue')
    },
    {
      path: '/button',
      name: 'button',
      component: () => import('../views/button/index.vue')
    }
  ]
})

export default router
