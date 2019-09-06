<template>
    <section class="project-container__wrapper">
        <section class="basic-layout__footer project-container">
            <div class="left">
                <div class="logo">
                    <img src="~@public/logo.png" alt="logo" width="80">
                    <p>
                        南京橙红科技
                    </p>
                </div>
            </div>
            <div class="right">
                <ul class="nav">
                    <li v-for="(item,index) in navList" :key="index" class="nav__item">
                        <router-link v-if="!item.children" :to="item.path" class="nav__item__header">
                            {{item.name}}
                        </router-link>
                        <div v-else class="nav__group">
                            <p :class="item.className" class="nav__item__header">
                                {{item.name}}
                            </p>
                            <!-- <ul class="sub-nav">-->
                            <!-- <li v-for="(item,index) in item.children" :key="index">-->
                            <!-- <router-link :to="item.path">{{item.name}}</router-link>-->
                            <!-- </li>-->
                            <!-- </ul>-->
                        </div>
                    </li>
                </ul>
                <h6 class="copy-right">
                    南京橙红科技股份有限公司版权所有@（2016-2018） 苏ICP备10229471号
                </h6>
            </div>
        </section>
    </section>
</template>

<script>
    export default {
        name: "Footer",
        data() {
            const navList = [
                {
                    name: '城投数据',
                    path: '',
                    children: [
                        {
                            name: '列表模式',
                            path: '',
                        },
                        {
                            name: '地图模式',
                            path: '',
                        },
                    ],
                },
                {
                    name: '项目合作',
                    path: '',
                    children: [
                        {
                            name: '工程项目',
                            path: '',
                        },
                        {
                            name: '投资项目',
                            path: '',
                        },
                        {
                            name: '融资项目',
                            path: '',
                        },
                        {
                            name: '其它',
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
                            path: '',
                        },
                        {
                            name: '专家库',
                            path: '',
                        },
                    ],
                },
                {
                    name: '城投杂志',
                    path: '',
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
                    path: '',
                    children: [
                        {
                            name: '研究报告',
                            path: '',
                        },
                        {
                            name: '经典案例',
                            path: '',
                        },
                    ],
                },
                {
                    name: '新闻动态',
                    path: '',
                    children: [
                        {
                            name: '行业动态',
                            path: '',
                        },
                        {
                            name: '城投新闻',
                            path: '',
                        },
                        {
                            name: '智库动态',
                            path: '',
                        },
                        {
                            name: '项目动态',
                            path: '',
                        },
                    ],
                },
                {
                    name: '关于我们',
                    path: '',
                },
            ];
            this.navList = navList;
            return {};
        },
    };
</script>

<style lang="scss" scoped>
    .project-container__wrapper {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #535353;
    }

    .basic-layout__footer {
        position: relative;
        padding-top: 20px;
        padding-bottom: 30px;
    }

    .left {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 110px;
    }

    .right {
        padding-left: 110px;
    }

    .logo {
        padding-top: 36px;
        height: 128px;
        line-height: 36px;
        text-align: center;
        font-size: 14px;
        font-weight: 500;
        color: rgba(249, 249, 249, 1);
        background: rgba(0, 0, 255, 1);
    }

    .nav {
        overflow: hidden;
        font-size: 0;

        .nav__item {
            display: inline-block;
            height: 16px;
            line-height: 16px;
            font-size: 16px;

            &:last-child {
                .nav__item__header::after {
                    display: none;
                }
            }
        }

        .nav__item__header {
            display: block; // 没有子菜单时，是a标签
            position: relative;
            padding: 0 20px;
            color: rgba(255, 255, 255, 1);

            &::after {
                content: '|';
                position: absolute;
                right: 0;
                top: 0;
                vertical-align: middle;
            }
        }

        .nav__group {
            position: relative;
        }

        .sub-nav {
            position: absolute;
            top: 20px;
            right: 0;
            left: 0;
            font-size: 12px;

            a {
                display: block;
                margin-top: 7px;
                color: #cacaca;
            }
        }
    }

    .copy-right {
        padding-top: 30px;
        line-height: 12px;
        font-size: 12px;
        font-weight: 500;
        text-indent: 20px;
        color: #cacaca;
    }
</style>
