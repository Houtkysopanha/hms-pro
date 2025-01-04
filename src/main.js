import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './assets/tailwind.css';
import Chart from 'chart.js/auto';
const app = createApp(App);
app.use(router);
app.mount('#app');
app.config.globalProperties.$Chart = Chart;
