<template>
  <div class="login">
        <div class="login-padding">
            <span>用户名：</span><input type="text" name="fname" v-model="name">
        </div>
        <div class="login-padding">
            <span>密码：</span><input type="password" name="fname" v-model="passwords">
        </div>
        <div class="login-padding">
            <button @click="loginHandle">登录</button>
        </div>
  </div>
</template>

<script>
import { login } from '@/service/blog'

export default {
    data() {
        return {
            name: "",
            passwords: "",
        }
    },
    methods: {
        loginHandle() {
            login({
                username: this.name,
                password: this.passwords,
            }).then((data) => {
                const { errno }  = data;
                if (!errno) {
                    this.$store.commit('setUesrName', this.name);
                    this.$router.push({name: 'index'});
                }
            });
        }
    }
}
</script>

<style lang="less">
    .login-padding {    
        padding: 15px;
    }
</style>