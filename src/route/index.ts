import {createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {
        path: '/',
        redirect: '/main'
    }
]

export const route = createRouter({
    history: createWebHashHistory(),
    routes
})

