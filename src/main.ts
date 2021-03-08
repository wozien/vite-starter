import '@/styles/index.less';
import { createApp } from 'vue';
import App from './App.vue';
import Vant from './plugins/vant';
import router from './router';
import store, { key } from './store';

// console.log(import.meta.env.VITE_BASE_URL)

const app = createApp(App);
app.use(Vant);
app.use(router);
app.use(store, key);
app.mount('#app');
