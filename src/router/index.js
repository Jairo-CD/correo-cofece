import { createRouter, createWebHistory } from 'vue-router'
import denuncia from '../views/denuncia.vue'
import denunciaReporte from '../views/denunciareporte.vue'
import noAntiComp from '../views/noAntiComp.vue'
import otraInstitucion from '../views/otraInstitucion.vue'
import practica from '../views/practica.vue'
import presentacion from '../views/presentacion.vue'
import reporte from '../views/reporte.vue'

const routes = [
    {
      path: '/',
      name: 'home',
      component: presentacion
    },
    {
      path: '/:catchAll(.*)*',
      name: "PageNotFound",
      component: presentacion,
     },
    {
      path: '/denuncia',
      name: 'denuncia',
      component: denuncia
    },
    {
      path: '/denunciaReporte',
      name: 'denunciaReporte',
      component: denunciaReporte
    },
    {
      path: '/reporte',
      name: 'reporte',
      component: reporte
    },
    {
      path: '/practica:titulo',
      name: 'practica',
      component: practica,
      props: true
    },
    {
      path: '/noAntiComp',
      name: 'noAntiComp',
      component: noAntiComp
    },
    {
      path: '/otraInstitucion',
      name: 'otraInstitucion',
      component: otraInstitucion
    }
  ]

  const router = createRouter({
    history: createWebHistory(),
    routes
  })

export default router
