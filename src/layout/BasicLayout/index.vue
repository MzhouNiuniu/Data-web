<template>
    <section class="basic-layout">
        <Header/>
        <section class="project-container__wrapper">
            <router-view class="project-container router-view" :key="$route.fullPath"/>
        </section>
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
    };
</script>

<style lang="scss" scoped>
    .basic-layout {
        position: relative;
        min-height: 100%;
    }

    .router-view {
        padding-top: 25px;
    }
</style>
