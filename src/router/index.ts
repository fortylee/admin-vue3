import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', redirect: '/login'},
    { path: '/login', name: 'Login', component: () => import('@/pages/Login.vue') },
    { path: '/home', name: 'Home', component: () => import('@/pages/Home.vue') },
    { path: '/404', name: '404', component: () => import('@/components/404.vue') },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default  router