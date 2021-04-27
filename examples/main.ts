import { createApp } from 'vue'
import App from './App.vue'
import store from '../src/store/index'
import ElementUI from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale/lang/zh-cn'

createApp(App).use(ElementUI, {locale}).use(store).mount('#app')
