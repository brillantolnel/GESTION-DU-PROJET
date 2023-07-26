import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Poste from '../views/Poste.vue'
import Postes from '../views/Postes.vue'
import Membre from '../views/Membre.vue'
import Client from '../views/Client.vue'
import Projet from '../views/Projet.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/poste',
    name: 'Poste',
    component:Poste
  },
  {
    path: '/postes',
    name: 'Postes',
    component:Postes
  },
  {
    path: '/membre',
    name: 'Membre',
    component:Membre
  },
  {
    path: '/client',
    name: 'Client',
    component:Client
  },
  {
    path: '/projet',
    name: 'Projet',
    component:Projet
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
