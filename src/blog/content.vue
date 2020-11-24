<template>
    <div class="content-main">
        <div v-for="item in blogList" :key="item.id" class="article-list">
            <div class="article-title">{{item.title}}</div>
            <div class="article-info">
                <span>作者:{{item.author}}</span>
                <span>时间:{{item.createtime}}</span>
            </div>
            <div class="article-content">
                {{item.content}}
            </div>
        </div>
    </div>
</template>

<script>
import { getBloglist } from '@/service/blog'
export default {
    mounted() {
       this.$store.dispatch('getblogList', { keyWords: '' })
    },
    data() {
        return {
            list: [],
        }
    },
    computed: {
        blogList() {
            return this.$store.state.blogList;
        },
    },
    methods: {
        
    }

}
</script>

<style lang="less">
    .content-main {
        margin: 0 20%;
        background: cornflowerblue;
        .article-list {
            .article-title {
                text-align: center;
            }
            .article-info {
                font-size: 12px;
                text-align: center;
            }
            .article-content {
                text-indent: 50px;
                font-weight: normal;
                font-size: 18px;
            }
        }
    }
</style>