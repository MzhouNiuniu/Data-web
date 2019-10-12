import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';

// fix 新版本做了验证，如果跳转相同的路径会抛出错误
// 错误：/projectUnion?projectType=融资项目 -》 /projectUnion?projectType=融资项目
// 正常：/projectUnion?projectType=融资项目 -》 /projectUnion?projectType=融资项目1

const _push = Router.prototype.push;
Router.prototype.push = function push(location) {
    return _push.call(this, location).catch(() => {
    });
};


Vue.use(Router);
const router = new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior () {
        return { x: 0, y: 0 }
    },
    routes,
});
router.beforeEach(function (to, from, next) {
    const store = router.app.$options.store;
    store.commit('app/setDefaultBgColor');
    next();
});
export default router;
