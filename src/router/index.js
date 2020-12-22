import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import Reference from '../views/Reference'
import Script from '../views/Script'
import Animation from '../views/Animation'
import Site from '../views/Site'
import Contact from '../views/Contact'

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
    component: About
  },
  {
    path: '/reference',
    name: 'Reference',
    component: Reference
  },
  {
    path: '/script',
    name: 'Script',
    component: Script
  },
  {
    path: '/animation',
    name: 'Animation',
    component: Animation
  },
  {
    path: '/site',
    name: 'Site',
    component: Site
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
