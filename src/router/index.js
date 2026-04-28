import { createRouter, createWebHistory } from 'vue-router'
import ForsideView from '@/views/ForsideView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'forside',
      component: ForsideView,
    },
    {
      path: '/category',
      name: 'category',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CategoryView.vue'),
    },
    {
      path: '/info',
      name: 'info',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/InfoView.vue'),
    },
    {
      path: '/productsite',
      name: 'productsite',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProductView.vue'),
    },
  ],
})

export default router
