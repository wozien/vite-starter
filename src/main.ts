import { createApp } from 'vue';
import App from './App.vue';
import Vant from './plugins/vant';
import router from './router';
import store, { key } from './store';

import '@/styles/index.less';
if(import.meta.env.DEV) {
  import ('vant/lib/index.less');
}

// console.log(import.meta.env.VITE_BASE_URL)

const app = createApp(App);
app.use(Vant);
app.use(router);
app.use(store, key);
app.mount('#app');
