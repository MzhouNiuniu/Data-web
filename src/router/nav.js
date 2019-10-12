export default [
    // {
    //     name: '选中状态',
    //     path: '/activeState',
    //     children: [
    //         {
    //             name: '首页',
    //             path: '/activeState',
    //         },
    //         {
    //             name: 'pageOne',
    //             path: '/activeState/pageOne',
    //         },
    //     ],
    // },
    {
        name: '首页',
        path: '/Index',
    },
    {
        name: '城投数据',
        path: '/InvestCom/Map',
        children: [
            {
                name: '地图模式',
                path: '/InvestCom/Map',
            },
            {
                name: '列表模式',
                path: '/InvestCom',
            },
        ],
    },

    {
        name: '智库平台',
        path: '/organizationRepo',
        children: [
            {
                name: '机构库',
                path: '/organizationRepo',
            },
            {
                name: '专家库',
                path: '/expertRepo',
            },
        ],
    },
    {
        name: '行业研究',
        path: '/research', // 点击的同时是否可以跳转路由，例如/about
        children: [
            {
                name: '经典案例',
                path: '/classicList',
            },
            {
                name: '专题报告',
                path: '/studyList/0',
            },
            {
                name: '定期报告',
                path: '/studyList/1',
            },
        ],
    },
    {
        name: '项目合作',
        path: '/projectUnion',
    },
    {
        name: '新闻动态',
        path: '/news',
        children: [
            {
                name: '行业动态',
                path: '/newsMoreList/0',
            },
            {
                name: '城投新闻',
                path: '/newsMoreList/1',
            },
            {
                name: '智库动态',
                path: '/newsMoreList/2',
            },
            {
                name: '项目动态',
                path: '/newsMoreList/3',
            },
        ],
    },
    {
        name: '城投杂志',
        path: '/magazine',
    },
    {
        name: '政策法规',
        path: '/policy',
        className: 'long',
        children: [
            {
                name: '政策法规',
                path: '/policyMore/0',
            },
            {
                name: '指南标准',
                path: '/policyMore/1',
            },
            {
                name: '国务院规范性文件',
                path: '/policyMore/2',
            },
            {
                name: '地方性规范性文件',
                path: '/policyMore/3',
            },
            {
                name: '部门规范性文件',
                path: '/policyMore/4',
            },
        ],
    },


    {
        name: '关于我们',
        path: '/about',
    },
]
