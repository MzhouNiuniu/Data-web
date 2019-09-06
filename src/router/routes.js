import BasicLayout from '@/layout/BasicLayout';

export default [
    {
        path: '*',
        redirect: '/',
    },
    {
        path: '/login',
        component: lazyLoad('Login')
    },
    {
        path: '/',
        component: BasicLayout,
        children: [
            {
                path: '/demo',
                name: 'demo',
                component: lazyLoad('Demo')
            },
            {
                path: '/',
                name: 'home',
                component: lazyLoad('Home')
            },
            {
                path: '/about',
                name: 'about',
                component: lazyLoad('About')
            },
            /* 项目合作 */
            {
                path: '/projectUnion',
                name: 'projectUnion',
                component: lazyLoad('ProjectUnion')
            },
            {
                path: '/projectUnionDetail/:id',
                name: 'projectUnionDetail',
                component: lazyLoad('ProjectUnion/Detail')
            },
            // 新闻
            {
                path: '/news',
                name: 'news',
                component: lazyLoad('News/index')
            },
            {
                path: '/newsDetail/:id',
                name: 'newsDetail',
                component:lazyLoad('News/detail')
            },
            {
                path: '/newsMoreList/:index',
                name: 'newsMoreList',
                component:lazyLoad('News/moreList'),
            },
            // 行业研究
            {
                path: '/research',
                name: 'research',
                component: lazyLoad('Research/index')
            },
        ],
    },
];

function lazyLoad(path) {
    /* webpackChunkName: "${path}" */
    return () => import( `@views/${path}`);
}
