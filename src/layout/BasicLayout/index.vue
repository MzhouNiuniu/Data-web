<template>
    <section class="basic-layout-container">
        <div class="basic-layout">
            <Header class="header"/>
            <div class="main">
                <router-view :key="$route.fullPath"/>
            </div>
            <Footer class="footer"/>
        </div>
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
    .basic-layout-container {
        width: 100%;
        height: 100%;
        padding-top: $layout-header-height;
        padding-bottom: $layout-footer-height;
        border-top: 1px solid transparent;
    }

    .basic-layout {
        position: relative;
        min-height: 100%;
    }

    .fix-footer-logo {
        height: 90px + 38px; // 20px 底部留空
    }

    .header {
        position: relative;
        top: -1* $layout-header-height;
    }

    .main {
        // padding-bottom: $layout-footer-height;
        padding-bottom: 10px;
    }

    .footer {
        // 已有 absolute 定位
        bottom: -1* $layout-footer-height;
    }
</style>
