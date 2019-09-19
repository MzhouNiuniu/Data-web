import Vue from 'vue';
import router from './router';
import store from './store';

/* app */
import App from './App.vue';
import './app.scss';
import Api from './utils/api';
import Http from './utils/http';
import {filterHTMLTag} from './utils/index';
/* lib */
import './lib/iview';

Vue.config.productionTip = false;
Vue.prototype.api = Api;
Vue.prototype.http = Http;
Vue.prototype.filterHTMLTag = filterHTMLTag;




// // 临时使用后台的api，方便测试
// Http.post('http://192.168.9.105:3000/user/login', {
//     userName: 'root',
//     password: '123',
// }).finally(() => {
//    // 有时需要等很长时间
// });

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');


