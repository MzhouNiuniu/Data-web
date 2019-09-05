<template>
    <section class="basic-layout">
        <Header/>
        <!-- footer 108px，不计算溢出的logo 20px -->
        <div style="padding-bottom: 108px;">
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
