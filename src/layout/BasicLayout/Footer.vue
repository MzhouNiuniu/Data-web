<template>
    <section class="basic-layout__footer ">
        <ul class="nav">
            <li v-for="(item,index) in navList" :key="index" class="nav__item">
                <router-link :to="item.path" class="nav__item__header">
                    {{item.name}}
                </router-link>
            </li>
        </ul>
        <h6 class="copy-right">
            智慧城投（南京）信息科技有限公司 版权所有 苏ICP备19060746号
        </h6>
        <div style="width:300px;margin:0 auto; padding:8px 0; text-align: center;">
            <a  href="http://www.beian.miit.gov.cn" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;text-align: center">
                <img src="../../../public/icon/jc.png" style="float:left;"/><p
                        style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">苏公网安备
                    32011302320840号</p></a>
        </div>
    </section>
</template>

<script>

    import navList from '@/router/nav'

    export default {
        name: "Footer",
        data() {
            this.navList = navList
            return {}
        },
    }
</script>

<style lang="scss" scoped>
    .basic-layout__footer {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #535353;
        padding-top: 15px;
        padding-bottom: 8px;
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
        text-align: center;

        .nav__item {
            display: inline-block;
            height: 13px;
            line-height: 13px;
            font-size: 13px;

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
    }

    .copy-right {
        padding-top: 13px;
        line-height: 12px;
        font-size: 12px;
        font-weight: 500;
        text-indent: 20px;
        color: #cacaca;
        text-align: center;
    }
</style>
