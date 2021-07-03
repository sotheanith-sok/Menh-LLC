import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import fontAwesomeIcon from './font-awesomes';
import { key, store } from './store';

createApp(App)
    .component('font-awesome-icon', fontAwesomeIcon)
    .use(store, key)
    .use(router)
    .mount('#app');
