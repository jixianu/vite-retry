import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router/index';



const app = createApp(App);
app.config.errorHandler = (err, instance, info) => {
    console.log(err, instance, info);
  // 处理错误，例如：报告给一个服务
}
app.use(router);
app.mount('#app');
