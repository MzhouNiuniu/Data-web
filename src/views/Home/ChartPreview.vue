<template>
    <section class="chart-preview">
        <h1>
            {{$route.query.name}}
        </h1>
        <component ref="chart" :is="currentChartName" style="width:100%!important;height:100%!important;"></component>
    </section>
</template>

<script>
    import LeftChart1 from './BigData/LeftChart1';
    import LeftChart2 from './BigData/LeftChart2';
    import RightChart1 from './BigData/RightChart1';
    import RightChart2 from './BigData/RightChart2';
    import BigData from './BigData';

    export default {
        name: 'ChartPreview',
        components: {
            LeftChart1,
            LeftChart2,
            RightChart1,
            RightChart2,
        },
        provide() {
            return {
                dataStore: this.dataStore,
            };
        },
        data() {
            this.nameMapOfChart = {
                '行政级别': 'LeftChart1',
                '主体类型': 'LeftChart2',
                '评级数量': 'RightChart1',
                '主营收入': 'RightChart2',
            };
            this.currentChartName = this.nameMapOfChart[this.$route.query.name];
            return {
                dataStore: {
                    // 存储所有数据，子组件自行获取
                    /* eslint-disable */
                    /**
                     Level：对应 行政级别     （没有就没有返回 但是你要做判断）
                     mainType 对应主题类型 （没有就没有返回 但是你要做判断）
                     Title  对应中间
                      Rate 评级 数量   （没有就没有返回 但是你要做判断）
                     totalAssetS  主营业收入   （没有就没有返回 但是你要做判断）
                     Pc：省投  
                     Fi  发行债卷
                     */
                },
            };
        },
        methods: {
            loadDataStore: BigData.methods.loadDataStore,
        },
        created() {
            if (!this.currentChartName) {
                this.$destroy();
                this.$router.push('/');
                return;
            }
            this.loadDataStore();
        },
    };
</script>

<style lang="scss" scoped>
    .chart-preview {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: url("./BigData/image/bg.png") no-repeat scroll top left / cover;

        // 是否隐藏footer
        bottom: -60px;
        z-index: 99;

        h1 {
            position: absolute;
            z-index: 1;
            text-align: center;
            width: 100%;
            top: 20px;
            letter-spacing: 7px;
            color: #fff;
            font-weight: 400;
            font-size: 30px;
        }
    }

</style>
