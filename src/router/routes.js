import BasicLayout from '@/layout/BasicLayout'

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
            // 导航栏选中效果，需要改为这个结构，结合router-link的active实现
            {
                path: '/activeState',
                name: 'activeState',
                component: {
                    render() {
                        return <router-view/>
                    },
                },
                children: [
                    // http://localhost:8080/activeState
                    {
                        path: '/',
                        name: 'index',
                        component: {
                            render() {
                                return (
                                    <div>
                                        1232
                                    </div>
                                )
                            },
                        },
                    },
                    // http://localhost:8080/activeState/pageOne
                    {
                        path: 'pageOne',
                        name: 'pageOne',
                        component: {
                            render() {
                                return (
                                    <div>
                                        pageOne
                                    </div>
                                )
                            },
                        },
                    },
                ],
            },
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
            /* 城投数据 */
            {
                path: '/InvestCom',
                name: 'InvestCom',
                component: lazyLoad('InvestCom')
            },
            {
                path: '/InvestCom/Map',
                name: 'InvestComMap',
                component: lazyLoad('InvestCom/MapList')
            },
            {
                path: '/InvestComDetail/:id',
                name: 'InvestComDetail',
                component: lazyLoad('InvestCom/Detail')
            },
            {
                path: '/BondRecordList/:id',
                name: 'BondRecordList',
                component: lazyLoad('InvestCom/BondRecordList')
            },
            {
                path: '/BondDetail/:id',
                name: 'BondDetail',
                component: lazyLoad('InvestCom/BondDetail')
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
            {
                path: '/projectUnionDetail/:id',
                name: 'projectUnionDetail',
                component: lazyLoad('ProjectUnion/Detail')
            },
            /* 政策法规 */
            {
                path: '/policy',
                name: 'policy',
                component: lazyLoad('Policy')
            },
            {
                path: '/policyMore/:index',
                name: 'policyMore',
                component: lazyLoad('Policy/More')
            },
            {
                path: '/policyDetail/:id',
                name: 'policyDetail',
                component: lazyLoad('Policy/Detail')
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
            // 新闻
            {
                path: '/news',
                name: 'news',
                component: lazyLoad('News/index')
            },
            {
                path: '/newsDetail/:id',
                name: 'newsDetail',
                component: lazyLoad('News/detail')
            },
            {
                path: '/newsMoreList/:index',
                name: 'newsMoreList',
                component: lazyLoad('News/moreList'),
            },
            // 行业研究
            {
                path: '/research',
                name: 'research',
                component: lazyLoad('Research/index')
            },
            {
                path: '/studyList/:index',
                name: 'studyList',
                component: lazyLoad('Research/studyList')
            },
            {
                path: '/studyDetail/:id',
                name: 'studyList',
                component: lazyLoad('Research/studyDetail')
            },
            {
                path: '/classicList',
                name: 'studyList',
                component: lazyLoad('Research/classicList')
            },
            {
                path: '/classicDetail/:id',
                name: 'studyList',
                component: lazyLoad('Research/classicDetail')
            },
            //杂志
            {
                path: '/magazine',
                name: 'magazine',
                component: lazyLoad('Magazine')
            },
        ],
    },
]

function lazyLoad(path) {
    /* webpackChunkName: "${path}" */
    return () => import( `@views/${path}`)
}
