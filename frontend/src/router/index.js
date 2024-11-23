import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/Home.vue'
import Test from '@/views/Test.vue'
import Login from '@/views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router 