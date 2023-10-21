import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/denunciareporte.vue'
import denuncia from '../views/denuncia.vue'
import reporte from '../views/reporte.vue'
import practica from '../views/practica.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/denuncia',
      name: 'denuncia',
      component: denuncia
    },
    {
      path: '/reporte',
      name: 'reporte',
      component: reporte
    },
    {
      path: '/practicasmonopolicas',
      name: 'practica',
      component: practica,
      props: true
    }
  ]
})

export default router
