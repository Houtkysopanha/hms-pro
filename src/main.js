import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './assets/tailwind.css';
import Chart from 'chart.js/auto';
import PrimeVue from 'primevue/config';



const app = createApp(App);
app.use(PrimeVue);
app.use(router);
app.config.globalProperties.$Chart = Chart;
app.mount('#app');