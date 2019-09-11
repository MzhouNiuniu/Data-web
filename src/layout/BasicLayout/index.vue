<template>
    <section class="basic-layout">
        <Header/>
        <!-- footer 108px，不计算溢出的logo 20px -->
        <div>
            <router-view :key="$route.fullPath"/>

            <!-- 使用padding会有问题，参见 项目合作->详情页 底部-->
            <div class="fix-footer-logo" :style="bgStyle"></div>
        </div>
        <Footer/>
    </section>
</template>

<script>
    import Header from './Header';
    import Footer from './Footer';

    export default {
        name: "BasicLayout",
        components: {
            Header,
            Footer,
        },
        computed: {
            bgStyle() {
                return {
                    backgroundColor: this.$store.state.app.bgColor,
                };
            },
        },
    };
</script>

<style lang="scss" scoped>
    .basic-layout {
        position: relative;
        min-height: 100%;
    }

    .fix-footer-logo {
        height: 158px;
    }
</style>
