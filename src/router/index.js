import Vue from 'vue'
import VueRouter from 'vue-router'
import TriviaApp from '../views/TriviaApp'
import ChuckApp from '../views/ChuckApp'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'trivia',
    component: TriviaApp
  },
  {
    path: '/chuck',
    name: 'chuck',
    component: ChuckApp
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
