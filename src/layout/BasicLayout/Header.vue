<template>
    <section class="project-container__wrapper">
        <section class="basic-layout__header clearfix project-container">
            <div class="project-info">
                <router-link to="/" class="name">
                    <img class="logo" src="./logo.png">
                </router-link>
                <div style="float: right;position: relative"  @mouseenter="mouseOver" @mouseleave="mouseLeave"><img
                                               style="width: 41px; margin-left: 20px;cursor: pointer"
                                               src="../../../public/image/wx.png">
                    <div class="" v-show="show">
                        <img src="../../../public/image/wxgg.jpg" alt=""style="width: 115px; position: absolute;z-index: 106;top: 60px;left: -8px;">
                    </div>
                </div>
            </div>
            <Nav class="nav"/>

        </section>
    </section>
</template>

<script>
    import Nav from './Nav';

    export default {
        name: "Header",
        components: {
            Nav,
        },
        data() {
            return {
                show: false
            }
        },
        methods: {
            mouseLeave() {
                this.show = false
            },
            mouseOver() {
                this.show = true

            }
        }
    };
</script>

<style lang="scss" scoped>
    .logo {
        margin-top: -2px;
        width: 152px;
    }

    .project-container__wrapper {
        background-color: $sign-color;
    }

    .basic-layout__header {
        height: $project-nav-height;

        .project-info {
            float: left;
            height: $project-nav-height;
            line-height: $project-nav-height;

            .name {
                font-size: 24px;
                font-weight: 800;
                color: rgba(255, 255, 255, 1);
            }
        }

        .nav {
            float: right;
        }
    }
</style>
