import Vue from 'vue';
import Vuex from 'vuex';
import { getBloglist } from '@/service/blog'

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        userInfo: null,
        keyWord: '',
        blogList: [],
    },
    mutations: {
        changKeyWord(state, { keyWords }) {
            state.keyWord = keyWords;
        },
        blogListHandle(state, { list }) {
            state.blogList = list
        }
    },
    actions: {
        getblogList(context, { keyWords }) {
            context.commit('changKeyWord', { keyWords })
            getBloglist('blog/list',{
                keyword: keyWords,
                author: ''
            }).then((data) => {
                console.log(data,1111)
                context.commit('blogListHandle', { list: data.data })
            })
        }
    }
})

export default store;