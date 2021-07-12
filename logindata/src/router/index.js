import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import logindate from '../views/logindate.vue'
Vue.use(VueRouter)

const routes = [
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
    path: '/logindate',
    name: 'logindate',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/logindate.vue')
  },
  {
    path: '/ResumenEjecutivo',
    name: 'ResumenEjecutivo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ResumenEjecutivo.vue')
  },
  {
    path: '/PosicionamientoWeb',
    name: 'PosicionamientoWeb',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PosicionamientoWeb.vue')
  },

  {
    path: '/test_Chart',
    name: 'test_Chart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/test_Chart.vue')
  }



]

const router = new VueRouter({
  routes
})

export default router
