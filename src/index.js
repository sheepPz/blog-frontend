import Vue from 'vue';
import App from './app.vue';
import { router } from './route/index.js'
import store from './store'
import './assets/styles/style.less'
import './assets/styles/global.less';
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import VueFullPage from 'vue-fullpage.js'

Vue.use(VueFullPage)


const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount(root)