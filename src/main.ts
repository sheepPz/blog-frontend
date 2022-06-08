import 'uno.css'
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import messages from './i18n/index'
import App from './App.vue'
import { route } from './route'


const app = createApp(App);
const i18n = createI18n({
    locale: 'zh',
    fallbackLocale: 'en',
    messages,
});

app.use(route)
app.use(i18n)

app.mount('#app')
console.log(app, 'app')
