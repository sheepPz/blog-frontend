import Vue from 'vue';
import Vuex from 'vuex';
import { getBloglist } from '@/service/blog'

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        userInfo: '',
        keyWord: '',
        blogList: [],
    },
    mutations: {
        changKeyWord(state, { keyWords }) {
            state.keyWord = keyWords;
        },
        blogListHandle(state, { list }) {
            state.blogList = list;
        },
        setUesrName(state, name) {
            state.userInfo = name;
        }
    },
    actions: {
        getblogList(context, { keyWords }) {
            context.commit('changKeyWord', { keyWords })
            getBloglist({
                keyword: keyWords,
                author: ''
            }).then((data) => {
                context.commit('blogListHandle', { list: data.data })
            })
        }
    }
})

export default store;