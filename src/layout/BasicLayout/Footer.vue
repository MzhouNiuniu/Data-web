<template>
    <section class="project-container__wrapper">
        <section class="project-container">
            <ul class="nav">
                <li v-for="(item,index) in navList" :key="index">
                    <router-link :to="item.path" class="link">
                        {{item.name}}
                    </router-link>
                </li>
            </ul>
            <h6 class="copy-right mt-14">
                南京橙红科技股份有限公司版权所有@（2016-2018） 苏ICP备10229471号
            </h6>
        </section>
    </section>
</template>

<script>
    import navList from '@/router/nav';

    export default {
        name: "Footer",
        data() {
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
        padding: 15px 0;
        background: rgba(179, 179, 179, 1);
    }

    .project-container {
        text-align: center;
    }

    .nav {
        display: inline-block;
        font-size: 0;
        padding-bottom: 15px;
        border-bottom: 1px solid rgba(153, 153, 153, 1);

        li {
            display: inline-block;
            height: 16px;
            line-height: 16px;
            font-size: 16px;

            .link {
                display: block;
                position: relative;
                padding: 0 20px;
                font-weight: 400;
                color: rgba(51, 51, 51, 1);

                &::after {
                    content: '';
                    position: absolute;
                    right: 0;
                    top: 0;
                    height: 16px;
                    border-right: 1px solid #999;
                    vertical-align: middle;
                }
            }

            &:first-child {
                .link {
                    padding-left: 0;
                }
            }

            &:last-child {
                .link {
                    padding-right: 0;
                }

                .link::after {
                    display: none;
                }
            }
        }


    }

    .copy-right {
        line-height: 14px;
        font-size: 14px;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
    }
</style>
