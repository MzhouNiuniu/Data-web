<template>
    <Chart ref="chart" :option="option" class="chart"></Chart>
</template>

<script>
    import Chart from '@components/Chart';

    export default {
        name: 'PieChart',
        components: {
            Chart,
        },
        inject: ['dataStore'],
        data() {
            this.chart = null;

            // 暂时补齐4个字
            function fixLegendName(name) {
                const SBCCaseSpace = '　';
                if (name.length < 4) {
                    for (let i = name.length; i < 4; i++) {
                        name += SBCCaseSpace; // 全角空格
                    }
                }

                return name + SBCCaseSpace + SBCCaseSpace + SBCCaseSpace;
            }

            this.option = {
                textStyle: {
                    fontFamily: 'PingFang-SC',
                },
                legend: {
                    padding: 0,
                    // 差不多可以居中
                    left: Chart.getSize(102), // 实际为98
                    right: Chart.getSize(108),
                    bottom: Chart.getSize(20),
                    itemWidth: Chart.getSize(12),
                    itemHeight: Chart.getSize(12),
                    itemGap: Chart.getSize(20),
                    icon: 'rect',
                    textStyle: {
                        color: '#fff',
                        fontSize: Chart.getSize(14),
                        lineHeight: Chart.getSize(14),
                    },
                    formatter: fixLegendName,
                },
                series: [
                    {
                        zlevel: 1,
                        name: '主题类型',
                        type: 'pie',
                        radius: ['22%', '42%'],
                        center: ['50%', '46%'],
                        roseType: 'radius',
                        data: [
                            {
                                value: 0,
                                name: '城投',
                                itemStyle: {
                                    color: '#FC9B33'
                                },
                            },
                            {
                                value: 0,
                                name: '水投',
                                itemStyle: {
                                    color: '#3DB177'
                                },
                            },
                            {
                                value: 0,
                                name: '农投',
                                itemStyle: {
                                    color: '#00B4FD'
                                },
                            },
                            {
                                value: 0,
                                name: '新区城投',
                                itemStyle: {
                                    color: '#DFAC3D'
                                },
                            },
                            {
                                value: 0,
                                name: '文旅投',
                                itemStyle: {
                                    color: '#0A66E9'
                                },
                            },
                            {
                                value: 0,
                                name: '地铁',
                                itemStyle: {
                                    color: '#B34BFC'
                                },
                            },
                            {
                                value: 0,
                                name: '交投',
                                itemStyle: {
                                    color: '#F1E762'
                                },
                            },
                            {
                                value: 0,
                                name: '工投',
                                itemStyle: {
                                    color: '#0486EE'
                                },
                            },
                            {
                                value: 0,
                                name: '其他',
                                itemStyle: {
                                    color: '#DE4443'
                                },
                            },
                        ],
                        label: {
                            color: '#fff',
                            fontSize: Chart.getSize(18),
                            formatter: '{c} 个'
                        },
                        labelLine: {
                            normal: {
                                lineStyle: {
                                    color: '#fff'
                                },
                                length: Chart.getSize(6),
                                // length2: Chart.getSize(60)
                            }
                        },

                        hoverAnimation: true,
                        animationType: 'scale',
                        animationEasing: 'elasticOut',
                    }
                ],
            };
            return {};
        },
        mounted() {
            this.chart = this.$refs.chart.getChart();
            this.$watch('dataStore.mainType', data => {
                const targetSeries = this.option.series[0].data;
                const indexMapOfSeriesItem = targetSeries.reduce((acc, item, index) => (acc[item.name] = index, acc), {});
                data.forEach(item => {
                    indexMapOfSeriesItem.hasOwnProperty(item._id) && (targetSeries[indexMapOfSeriesItem[item._id]].value = item.count);
                });
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
