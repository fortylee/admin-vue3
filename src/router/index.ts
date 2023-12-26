import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', redirect: '/login'},
    { path: '/login', name: 'Login', component: () => import('@/pages/Login.vue') },
    { path: '/home', name: 'Home', component: () => import('@/pages/Home.vue') },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default  router