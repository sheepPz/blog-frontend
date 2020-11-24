import Vue from 'vue';
import Router from 'vue-router'
import todo from '../todo/index.vue' 
import blog from '../blog/index.vue' 

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
]

const router = new Router({
    routes,
})

export {
    router
}

