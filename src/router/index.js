import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/builder',
    name: 'Builder',
    component: () => import('../views/Builder.vue')
  },
  {
    path: '/render',
    name: 'Render',
    component: () => import('../views/Render.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
