<template>
  <header class="header-main">
      <div class="header-left">
        <input
            class="find-input"
            placeholder="喜欢什么呢？" 
            v-model="keyWords" 
            @keyup.enter="submitKeyWords"
        />
      </div>
      <div class="header-right">
          <div class="user-info">
            {{userInfo}}
            <div class="user-info-quit" @click="exit">
                退出
            </div>
          </div>
      </div>
  </header>
</template>

<script>
import { mapState } from 'vuex';
import { exit } from '@/service/blog'

export default {
    data() {
        return {
            keyWords: '',
        }
    },
    computed: {
        ...mapState([
            'userInfo',
        ]),
    },
    methods: {
        submitKeyWords() {
            console.log(this.keyWords);
            // this.$store.commit('changKeyWord',{
            //     keyWords: this.keyWords
            // })
            this.$store.dispatch('getblogList', { keyWords: this.keyWords })
        },
        exit() {
            exit().then((data) => {
                console.log(data);
            })
        }
    }
}
</script>

<style lang="less">
    .header-main {
        background: lightblue;
        padding: 0 1%;
        height: 60px;
        position: sticky;
        top: 0;
    }
    .header-left {
        float: left;
        height: 100%;
        display: flex;
        align-items: center;
        .find-input {
            position: relative;
            margin: 0;
            font-size: 24px;
            font-family: inherit;
            font-weight: inherit;
            line-height: 1.4em;
            border: none;
            outline: none;
            color: inherit;
            caret-color: #4d4d4d;
            box-sizing: border-box;
            font-smoothing: antialiased;
            // padding: 16px 16px 16px 36px;
            border: none;
            box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
            background-color: #ffffff;
        }
    }
    .header-right {
        float: right;
        overflow: hidden;
        display: flex;
        height: 100%;
        align-items: center;
        max-width: 200px;
        .user-info {
            &:hover .user-info-quit{
                display: block;
            }
        }
        .user-info-quit {
            display: none;
            position: absolute;
            padding: 10px 0;
            border: 1px solid lightblue;
            width: 100%;
            box-sizing: border-box;
            background: white;
            cursor: pointer;
        }
    }
</style>