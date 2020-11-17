import Vue from 'vue';
import App from './app.vue';
import { router } from './route/index.js'
import './assets/styles/style.less'
import './assets/styles/global.less';



const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
  router,
  render: (h) => h(App)
}).$mount(root)