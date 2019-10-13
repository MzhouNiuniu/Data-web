<template>
    <section style="margin-bottom: -10px;">
        <Banner/>
        <NewsPost/>
        <BigData/>
        <About/>
    </section>
</template>

<script>
    import Banner from './Banner';
    import NewsPost from './NewsPost';
    import BigData from './BigData';
    import About from './About';

    export default {
        name: 'Home',
        components: {
            Banner,
            NewsPost,
            BigData,
            About,
        },
        data() {
            return {};
        },
        created() {
            this.$store.commit('app/setBgColor1');
        },

    };
</script>
<style lang="scss" scoped>

</style>
