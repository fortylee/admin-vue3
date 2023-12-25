import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', redirect: '/login'},
    { path: '/login', name: 'Login', component: () => import('@/components/login.vue') },
    { path: '/home', name: 'Home', component: () => import('@/components/Home.vue') },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default  router