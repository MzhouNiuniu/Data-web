<template>
    <section>
        <ul class="nav">
            <li v-for="(item,index) in navList" :key="index" class="nav__item">
                <router-link v-if="!item.children" :to="item.path" class="nav__item__header">
                    {{item.name}}
                </router-link>
                <div v-else class="nav__group">
                    <router-link v-if="item.path" :to="item.path" class="nav__item__header" :class="item.className">
                        {{item.name}}
                        <Icon type="ios-arrow-down" class="nav__item__header__arrow"/>
                    </router-link>
                    <p v-else class="nav__item__header" :class="item.className">
                        {{item.name}}
                        <Icon type="ios-arrow-down" class="nav__item__header__arrow"/>
                    </p>
                    <ul class="hide-nav">
                        <li v-for="(item,index) in item.children" :key="index" class="hide-nav__item">
                            <router-link :to="item.path">{{item.name}}</router-link>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
    /**
     * 仅支持2层
     * */
    export default {
        name: "Nav",
        data() {
            const navList = [
                {
                    name: '城投数据',
                    path: '',
                    children: [
                        {
                            name: 'TEST',
                            path: '',
                        },
                    ],
                },
                {
                    name: '项目合作',
                    path: '/projectUnion',
                    children: [
                        {
                            name: 'TEST',
                            path: '',
                        },
                    ],
                },
                {
                    name: '智库平台',
                    path: '',
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
                    name: '城投杂志',
                    path: '',
                    children: [
                        {
                            name: 'TEST',
                            path: '',
                        },
                    ],
                },
                {
                    name: '政策法规',
                    path: '',
                    className: 'long',
                    children: [
                        {
                            name: '政策法规',
                            path: '',
                        },
                        {
                            name: '指南标准',
                            path: '',
                        },
                        {
                            name: '国务院规范性文件',
                            path: '',
                        },
                        {
                            name: '地方性规范性文件',
                            path: '',
                        },
                        {
                            name: '部门规范性文件',
                            path: '',
                        },
                    ],
                },
                {
                    name: '行业研究',
                    path: '/research', // 点击的同时是否可以跳转路由，例如/about
                    children: [
                        {
                            name: 'TEST',
                            path: '',
                        },
                    ],
                },
                {
                    name: '新闻动态',
                    path: '/news',
                },
                {
                    name: '关于我们',
                    path: '/about',
                },
                {
                    name: '组件库',
                    path: '/demo',
                },
            ];
            this.navList = navList;
            return {};
        },
    };
</script>

<style lang="scss" scoped>
    .nav {
        position: relative; // fix will-change
        z-index: 999; // fix will-change
        will-change: transform;
        font-size: 0;
    }

    .nav__item {
        position: relative;
        display: inline-block;
        height: $project-nav-height;
        line-height: $project-nav-height;
        font-size: 16px;
        color: #fff;
        cursor: pointer;

        &:last-child .nav__item__header::after {
            display: none;
        }
    }


    .nav__group {
        position: relative;
    }


    .hide-nav {
        overflow: hidden;
        position: absolute;
        top: $project-nav-height;
        left: 0;
        right: 0;
        max-height: 0;
        background-color: #358BFE;
        text-align: center;
    }

    .hide-nav__item {
        margin: 0 12px;
        height: 32px;
        line-height: 32px;
        white-space: nowrap;
        font-size: 12px;
        border-bottom: 1px dashed rgba(255, 255, 255, 0.5);

        &:last-child {
            border-bottom: none;
        }

        a {
            color: #fff;

            &:hover, &.active {
                color: $primary-color;
            }
        }
    }


    .nav__item__header {
        display: block; // 没有子菜单时，是a标签
        padding: 0 11px 0 13px;
        color: #fff;

        &::after {
            content: '|';
            position: absolute;
            right: -3px;
            top: 0;
            vertical-align: middle;
            line-height: 62px;
        }

        &.long {
            padding: 0 16px 0 22px;
        }
    }

    .nav__item__header__arrow {
        transition: transform .5s;
    }

    .nav__group {
        &:hover {
            background-color: #358BFE;

            .nav__item__header__arrow {
                transform: rotate(180deg);
            }

            // 数字越精确，效果越好，这里假设菜单不超过400px
            .hide-nav {
                transition: max-height 1.2s;
                max-height: 400px;
                padding-bottom: 12px;
            }

            .nav__item__header::after {
                display: none;
            }
        }
    }

</style>
