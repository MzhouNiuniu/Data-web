import Vue from 'vue';
import router from './router';
import store from './store';

/* app */
import App from './App.vue';
import './app.scss';
import Api from './utils/api'
import Http from './utils/http'

/* lib */
import './lib/iview';

Vue.config.productionTip = false;
Vue.prototype.api = Api
Vue.prototype.http = Http

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
