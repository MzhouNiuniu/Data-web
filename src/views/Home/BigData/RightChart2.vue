<template>
    <Chart ref="chart" :option="option" class="chart"></Chart>
</template>

<script>
    import echarts from 'echarts';
    import Chart from '@components/Chart';

    export default {
        name: 'LeftChart1',
        components: {
            Chart,
        },
        inject: ['dataStore'],
        data() {

            this.chart = null;

            this.option = {
                textStyle: {
                    fontFamily: 'PingFang-SC',
                },
                grid: {
                    top: '24%',
                    left: '15%',
                    right: '5%',
                    bottom: '18%',
                },
                xAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    data: ['城投', '新区城投', '交投', '水投', '文旅投', '工投', '农投', '地铁', '其它'],
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    axisTick: {
                        inside: true,
                        length: 6,
                    },
                    axisLabel: {
                        color: '#fff',
                        interval: 0,
                        margin: Chart.getSize(16), //- x轴文字，文字与x轴间距（文字被裁剪需要调整grid属性）
                        textStyle: {
                            fontSize: Chart.getSize(16), //- x轴文字，大小
                        },
                    },

                }],
                yAxis: [{
                    name: '总资产（亿元）',
                    nameGap: Chart.getSize(26),
                    nameTextStyle: {
                        color: '#fff',
                        fontSize: Chart.getSize(14), // y轴单位，大小
                        rich: {},
                        height: Chart.getSize(14),
                    },
                    axisLabel: {
                        color: '#fff',
                        margin: Chart.getSize(14), //- y轴文字，文字与y轴间距（文字被裁剪需要调整grid属性）
                        textStyle: {
                            fontSize: Chart.getSize(14), //- y轴文字，大小
                        },
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    axisTick: {
                        inside: true,
                        length: 6,
                    },
                    splitLine: {
                        show: false,
                    },
                }],
                series: [
                    {
                        zlevel: 1,
                        type: 'line',
                        symbol: "none",
                        data: [
                            {
                                value: 0,
                                name: '城投',
                            },
                            {
                                value: 0,
                                name: '新区城投',
                            },
                            {
                                value: 0,
                                name: '交投',
                            },
                            {
                                value: 0,
                                name: '水投',
                            },
                            {
                                value: 0,
                                name: '文旅投',
                            },
                            {
                                value: 0,
                                name: '工投',
                            },
                            {
                                value: 0,
                                name: '农投',
                            },
                            {
                                value: 0,
                                name: '地铁',
                            },
                            {
                                value: 0,
                                name: '其它',
                            },
                        ],
                        lineStyle: {
                            width: 0,
                        },
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0.35,
                                    color: '#F1E762'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(101,99,192,0.3)',
                                }
                            ], false),
                        },
                        markLine: {
                            silent: true,
                            name: '虚线',
                            symbol: 'none',
                            lineStyle: {
                                type: 'dashed',
                                width: 1.5,
                                color: 'rgba(255,255,255,0.4)',
                            },
                            label: {
                                show: true,
                                position: 'end',
                                align: 'left',
                                color: '#fff',
                            },
                            data: [],
                        },
                    },
                ]
            };

            this.updateMarkLine();
            return {};
        },
        methods: {
            updateMarkLine() {
                const targetSeries = this.option.series[0];
                targetSeries.markLine.data = targetSeries.data.map((item, index) => [
                    {
                        coord: [index, 0],
                    },
                    {
                        coord: [index, item.value],
                        value: item.value,
                    }
                ]);
            },
        },
        mounted() {
            this.chart = this.$refs.chart.getChart();
            this.$watch('dataStore.totalAssetS', data => {
                const targetSeries = this.option.series[0].data;
                const indexMapOfSeriesItem = targetSeries.reduce((acc, item, index) => (acc[item.name] = index, acc), {});
                data.forEach(item => {
                    // 不存在的话，就认为是其它（以最后一条数据为准）
                    if (!item._id) {
                        item._id = '其它';
                    }
                    // item.totalAsset = 200 // 测试，看效果

                    indexMapOfSeriesItem.hasOwnProperty(item._id) && (targetSeries[indexMapOfSeriesItem[item._id]].value =    Math.floor(item.totalAsset));
                });

                this.updateMarkLine();
                this.chart.setOption(this.option);
            });
        },
    };
</script>

<style lang="scss" scoped>
    .chart {
        margin: auto;
        width: 535px !important;
        height: 373px !important;
    }
</style>
