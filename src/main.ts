import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import 'ant-design-vue/dist/reset.css';
import './style.css';

const app = createApp(App)

// using the ant-design-vue plugin
app.use(Antd)
app.mount('#app')
