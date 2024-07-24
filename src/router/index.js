import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Registro from '../views/Registro.vue'
import Menu from '../views/Menu.vue'
import Perfil from '../views/Perfil.vue'
import Producto from '../views/ProductoView.vue'
import CategoriasView from '@/views/CategoriasView.vue'
import ProductoView from '../views/ProductoView.vue'

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
    },
    {
      path: '/menu/perfil',
      name: 'Perfil',
      component: Perfil
    },
    {
      path: '/menu/producto/:id',
      name: 'Producto',
      component: ProductoView
    },
    {
      path: '/menu/categorias/:tipo',
      name: 'Categorias',
      component: CategoriasView
    },    
  ]
})

export default router
