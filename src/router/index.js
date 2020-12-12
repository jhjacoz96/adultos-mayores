// Imports
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash }
    if (savedPosition) return savedPosition

    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/home/Index.vue'),
      children: [
        {
          path: '',
          name: 'Inicio',
          component: () => import('@/views/inicio/Index.vue'),
        },
        {
          path: 'contactos',
          name: 'Contactos',
          component: () => import('@/views/inicio/Index.vue'),
        },
        {
          path: 'agendar-cita',
          name: 'Cita',
          component: () => import('@/views/cita/Index.vue'),
          meta: { src: require('@/assets/about.jpg') },
        },
        {
          path: 'quienes-somos',
          name: '¿Quienes somos?',
          component: () => import('@/views/somos/Index.vue'),
          meta: { src: require('@/assets/about.jpg') },
        },
        // {
        //   path: '',
        //   name: 'Home',
        //   component: () => import('@/views/home/Index.vue'),
        //   meta: { src: require('@/assets/about.jpg') },
        // },
        {
          path: 'about',
          name: 'About',
          component: () => import('@/views/about/Index.vue'),
          meta: { src: require('@/assets/home.jpg') },
        },
        {
          path: 'contact-us',
          name: 'Contact',
          component: () => import('@/views/contact-us/Index.vue'),
          meta: { src: require('@/assets/contact.jpg') },
        },
        {
          path: 'pro',
          name: 'Pro',
          component: () => import('@/views/pro/Index.vue'),
          meta: { src: require('@/assets/pro.jpg') },
        },
        {
          path: 'salud-fisica',
          name: 'Salud-fisica',
          component: () => import('@/views/fisica/Index.vue'),
          meta: { src: require('@/assets/salud-fisica.jpg') },
        },
        {
          path: 'cuidado-piel',
          name: 'Cuidado-piel',
          component: () => import('@/views/cuidado/Index.vue'),
          meta: { src: require('@/assets/cuidado-piel.jpg') },
        },
        {
          path: 'salud-espiritual',
          name: 'Salud-espiritual',
          component: () => import('@/views/espiritual/Index.vue'),
          meta: { src: require('@/assets/salud-espiritual.jpg') },
        },
        {
          path: 'nutricion',
          name: 'Nutricion',
          component: () => import('@/views/nutricion/Index.vue'),
          meta: { src: require('@/assets/alimentos.jpg') },
        },
        {
          path: 'salud-psicoemocional',
          name: 'Salud-psicoemocional',
          component: () => import('@/views/psicoemocional/Index.vue'),
          meta: { src: require('@/assets/salud-psicoemocional.jpg') },
        },
        {
          path: 'login',
          name: 'Login',
          component: () => import('@/views/login/Index.vue'),
          meta: { src: require('@/assets/ayuda.jpg') },
        },
        {
          path: 'Administrador',
          name: 'administrador',
          component: () => import('@/views/administrador/Index.vue'),
          meta: { src: require('@/assets/ayuda.jpg') },
        },
        {
          path: 'ayuda',
          name: 'Ayuda',
          component: () => import('@/views/ayuda/Index.vue'),
          meta: { src: require('@/assets/ayuda.jpg') },
        },
        {
          path: '*',
          name: 'FourOhFour',
          component: () => import('@/views/404/Index.vue'),
        },
      ],
    },

  ],
})

export default router
