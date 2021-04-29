import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Logg from '../views/Logg.vue'
import Profile from '../views/Profile.vue'
import CurrentExercise from '../views/CurrentExercise.vue'


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Logg',
    name: 'Logg',
    component: Logg
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile
  }, 
  {
    path: '/CurrentExercise',
    name: 'Current exercise',
    component: CurrentExercise
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
