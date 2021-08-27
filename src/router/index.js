import { createRouter, createWebHistory } from '@ionic/vue-router';
import memoriesPage from '../pages/memoriesPage.vue';
const routes = [
  {
    path: '/',
    redirect: '/memories'
  },
  {
    path: '/memories',
    component: memoriesPage
  },
  {
    path: '/memories/:id',
    component: () => import('../pages/memoryDetailsPage.vue')
  },
  {
    path: '/memories/add',
    component: () => import('../pages/addMemoryPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
