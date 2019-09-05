<template>
    <section class="basic-layout">
        <Header/>
        <!-- footer 228px -->
        <div style="padding-bottom: 228px;">
            <router-view :key="$route.fullPath"/>
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
    };
</script>

<style lang="scss" scoped>
    .basic-layout {
        position: relative;
        min-height: 100%;
    }
</style>
