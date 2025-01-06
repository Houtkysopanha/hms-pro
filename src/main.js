import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './assets/tailwind.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Chart from 'chart.js/auto';

const app = createApp(App);

app.use(router);
app.config.globalProperties.$Chart = Chart;

app.mount('#app');