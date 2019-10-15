<template>
    <section style="margin-bottom: -10px;">
        <Banner/>
        <NewsPost/>
        <div class="big-data-container">
            <BigData/>
            <router-link to="/BigData" class="full-screen-btn">
                <Icon type="ios-expand"/>
            </router-link>
        </div>
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
    .big-data-container {
        position: relative;

        .full-screen-btn {
            position: absolute;
            z-index: 9;
            top: -2px;
            right: 8px;
            font-size: 28px;
            color: #fff;
            opacity: 0.8;

            &:hover {
                opacity: 1;
            }
        }
    }
</style>
