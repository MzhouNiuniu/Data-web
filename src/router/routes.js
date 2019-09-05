import BasicLayout from '@/layout/BasicLayout';

export default [
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
            {
                path: '/news',
                name: 'news',
                component: lazyLoad('News/index.vue')
            },
            {
                path: '/projectUnion',
                name: 'projectUnion',
                component: lazyLoad('ProjectUnion')
            },
        ],
    },
];

function lazyLoad(path) {
    /* webpackChunkName: "${path}" */
    return () => import( `@views/${path}`);
}
