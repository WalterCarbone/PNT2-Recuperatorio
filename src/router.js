import Vue from 'vue'
import VueRouter from 'vue-router'

import Formulario from './components/Formulario.vue'
import Respuestas from './components/Respuestas'

export const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/', redirect: '/formulario' },
        { path: '/formulario', component: Formulario },
        { path: '/respuestas', component: Respuestas },
        { path: '*', redirect: '/' },
    ]
})


Vue.use(VueRouter)