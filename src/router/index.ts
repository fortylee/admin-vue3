import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', redirect: '/login'},
    { path: '/login', name: 'login', component: () => import('@/pages/login.vue') },
    { path: '/register', name: 'register', component: () => import('@/pages/register.vue') },
    { path: '/home', name: 'Home', component: () => import('@/pages/home.vue') },
    { path: '/404', name: '404', component: () => import('@/components/404.vue') },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default  router