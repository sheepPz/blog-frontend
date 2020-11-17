import Vue from 'vue';
import Router from 'vue-router'
import todo from '../todo/index.vue' 

Vue.use(Router);

const routes = [
    {
        path: '/',
        component: todo,
    },
    {
        path: '/blog',
        component: todo,
        name: 'index',
    },
]

const router = new Router({
    mode: 'history',
    routes,
})

export {
    router
}

