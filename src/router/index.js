import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Registro from '../views/Registro.vue'
import Menu from '../views/Menu.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
     path: '/registro',
     name: 'Registro',
     component: Registro
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    }
  ]
})

export default router
