import Vue from 'vue';
import router from './router';
import store from './store';

/* app */
import App from './App.vue';
import './app.scss';

/* lib */
import './lib/iview';

Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
