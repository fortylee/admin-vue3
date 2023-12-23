import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import 'ant-design-vue/dist/reset.css';
import './style.css';

// iconfont
import '@/assets/iconfont/iconfont.js'
import '@/assets/iconfont/iconfont.css'
// router
import router from '@/router'

const app = createApp(App)

// using the ant-design-vue plugin
app.use(router)
app.use(Antd)
app.mount('#app')