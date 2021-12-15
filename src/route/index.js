import Vue from 'vue';
import Router from 'vue-router'
import todo from '../todo/index.vue' 
import blog from '../blog/index.vue' 
import login from '../blog/login.vue'

Vue.use(Router);

const routes = [
    {
        path: '/',
        component: todo,
    },
    {
        path: '/blog',
        component: blog,
        name: 'index',
    },
    {
        path: '/login',
        component: login,
        name: 'login',
    }
]

const router = new Router({
    routes,
})

export {
    router
}

