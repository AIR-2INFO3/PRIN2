import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Contact from '../views/ContatoView.vue'
import ProjRoxo from '../views/ProjRoxo.vue'
import ProjRosa from '../views/ProjRosa.vue'
import ProjAzul from '../views/ProjAzul.vue'
import Ana from '../views/AnaView.vue'
import Isabelli from '../views/IsabelliView.vue'
import Rafaela from '../views/RafaelaView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/ProjRoxo',
      name: 'projeto roxo',
      component: ProjRoxo 
    },
    {
      path: '/ProjRosa',
      name: 'projeto rosa',
      component: ProjRosa 
    },
    {
      path: '/ProjAzul',
      name: 'projeto azul',
      component: ProjAzul 
    },
    {
      path: '/Ana',
      name: 'ana',
      component: Ana 
    },
    {
      path: '/Isabelli',
      name: 'isabelli',
      component: Isabelli 
    },
    {
      path: '/Rafaela',
      name: 'rafaela',
      component: Rafaela 
    },
  ]
})

export default router
