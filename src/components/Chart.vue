<template>
    <div style="width: 100%;height: 100%;"></div>
</template>

<script>
    import echarts from 'echarts';

    const chartInstanceMap = {};

    let resizeTimer = null;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            for (let k in chartInstanceMap) {
                chartInstanceMap[k].resize();
            }
        }, 100);
    });
    export default {
        props: {
            option: {
                required: true,
            },
        },
        data() {
            this.chart = null;
            return {};
        },
        methods: {
            getChart() {
                return this.chart;
            },
            init() {
                this.chart = chartInstanceMap[this._uid] = echarts.init(this.$el);
                this.chart.setOption(this.option);
            },
        },
        watch: {
            option: {
                deep: true,
                handler(option) {
                    this.chart.setOption(option);
                },
            },
        },
        mounted() {
            if (this.option) {
                this.init();
            } else {
                const unWatcher = this.$watch('option', function () {
                    unWatcher();
                    this.init();
                });
            }
        },
        beforeDestroy() {
            if (chartInstanceMap[this._uid]) {
                chartInstanceMap[this._uid].dispose();
                delete chartInstanceMap[this._uid];
            }
        },
    };
</script>

<style scoped>

</style>
