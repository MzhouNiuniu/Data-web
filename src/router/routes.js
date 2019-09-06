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
            {
                path: '/news',
                name: 'news',
                component: lazyLoad('News/index.vue')
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
            /* 库 */
            {
                path: '/organizationRepo',
                name: 'organizationRepo',
                component: lazyLoad('Repo/Organization')
            },
            {
                path: '/organizationDetail/:id',
                name: 'organizationDetail',
                component: lazyLoad('Repo/OrganizationDetail')
            },
            {
                path: '/expertRepo',
                name: 'expertRepo',
                component: lazyLoad('Repo/Expert')
            },
            {
                path: '/expertDetail/:id',
                name: 'expertDetail',
                component: lazyLoad('Repo/ExpertDetail')
            },
        ],
    },
];

function lazyLoad(path) {
    /* webpackChunkName: "${path}" */
    return () => import( `@views/${path}`);
}
