import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
  
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/product',
    name: '/product',
    component: () => import(/* webpackChunkName: "about" */ '../views/product.vue')
  },
  {
    path: '/login',
    name: '/login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login/login.vue')
  },
  {
    path: '/signup',
    name: '/Sign up',
    component: () => import(/* webpackChunkName: "about" */ '../views/login/signup.vue')
  },
  {
    path: '/reset',
    name: '/Reset',
    component: () => import(/* webpackChunkName: "about" */ '../views/login/reset.vue')
  },
  {
    path: '/signin',
    name: '/Sign in',
    component: () => import(/* webpackChunkName: "about" */ '../views/login/signin.vue')
  },
  {
    path: '/signup1',
    name: '/Sign up1',
    component: () => import(/* webpackChunkName: "about" */ '../views/login/signup1.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
