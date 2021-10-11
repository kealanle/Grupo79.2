import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import('../views/Registro.vue')
  },
  {
    path: '/accesorios',
    name: 'Accesorios',
    component: () => import('../views/Accesorios.vue')
  },
  {
    path: '/hombre',
    name: 'Hombre',
    component: () => import('../views/Hombre.vue')
  },
  {
    path: '/mujer',
    name: 'Mujer',
    component: () => import('../views/Mujer.vue')
  },

  {
    path: '/junior',
    name: 'Junior',
    component: () => import('../views/Junior.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
