<template>
    <Chart ref="chart" :option="option" class="chart"></Chart>
</template>

<script>
    import Chart from '@components/Chart'

    export default {
        name: 'PieChart',
        components: {
            Chart,
        },
        data() {
            this.chart = null

            // 暂时补齐4个字
            function fixLegendName(name) {
                const SBCCaseSpace = '　'
                if (name.length < 4) {
                    for (let i = name.length; i < 4; i++) {
                        name += SBCCaseSpace // 全角空格
                    }
                }

                return name + SBCCaseSpace + SBCCaseSpace + SBCCaseSpace
            }

            this.option = {
                legend: {
                    padding: 0,
                    // 差不多可以居中
                    left: Chart.getSize(98),
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
                        radius: ['20%', '40%'],
                        center: ['50%', '42%'],
                        roseType: 'radius',
                        data: [
                            {
                                value: 60,
                                name: '城投',
                                itemStyle: {
                                    color: '#FC9B33'
                                },
                            },
                            {
                                value: 95,
                                name: '水投',
                                itemStyle: {
                                    color: '#3DB177'
                                },
                            },
                            {
                                value: 120,
                                name: '农投',
                                itemStyle: {
                                    color: '#00B4FD'
                                },
                            },
                            {
                                value: 60,
                                name: '新区城投',
                                itemStyle: {
                                    color: '#DFAC3D'
                                },
                            },
                            {
                                value: 95,
                                name: '文旅投',
                                itemStyle: {
                                    color: '#0A66E9'
                                },
                            },
                            {
                                value: 120,
                                name: '地铁',
                                itemStyle: {
                                    color: '#B34BFC'
                                },
                            },
                            {
                                value: 60,
                                name: '交投',
                                itemStyle: {
                                    color: '#F1E762'
                                },
                            },
                            {
                                value: 95,
                                name: '工投',
                                itemStyle: {
                                    color: '#0486EE'
                                },
                            },
                            {
                                value: 120,
                                name: '其他',
                                itemStyle: {
                                    color: '#DE4443'
                                },
                            },
                        ],
                        label: {
                            color: '#fff',
                            fontSize: Chart.getSize(18),
                            formatter: '{c} 项'
                        },
                        labelLine: {
                            normal: {
                                lineStyle: {
                                    color: '#fff'
                                },
                                length: Chart.getSize(10),
                                length2: Chart.getSize(60)
                            }
                        },

                        hoverAnimation: true,
                        animationType: 'scale',
                        animationEasing: 'elasticOut',
                    }
                ],
            }
            return {}
        },
        mounted() {
            this.chart = this.$refs.chart.getChart()
        },
    }
</script>

<style lang="scss" scoped>
    .chart {
        margin: auto;
        width: 535px !important;
        height: 373px !important;
    }
</style>
