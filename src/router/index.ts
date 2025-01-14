import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'), // 确保路径正确
  }

]

const router = createRouter({
  history: createWebHistory('model'),
  routes,
})

export default router