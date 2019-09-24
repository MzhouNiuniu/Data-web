<template>
    <Chart ref="chart" :option="option" class="chart"></Chart>
</template>

<script>
    import echarts from 'echarts'
    import Chart from '@components/Chart'

    export default {
        name: 'LeftChart1',
        components: {
            Chart,
        },
        data() {

            this.chart = null
            this.option = {
                textStyle: {
                    fontFamily: 'PingFang-SC',
                },
                grid: {
                    top: '24%',
                    left: '17%',
                    right: '22%',
                    bottom: '18%',
                },
                xAxis: [{
                    type: 'category',
                    name: '评级类型',
                    nameGap: Chart.getSize(26),
                    nameTextStyle: {
                        color: '#fff',
                        fontSize: Chart.getSize(14), // y轴单位，大小
                        rich: {},
                        height: Chart.getSize(14),
                    },
                    data: ['AAA', 'AA+', 'AA', '其它'],
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        color: '#fff',
                        margin: Chart.getSize(16), //- x轴文字，文字与x轴间距（文字被裁剪需要调整grid属性）
                        textStyle: {
                            fontSize: Chart.getSize(16), //- x轴文字，大小
                        },
                    },
                }],
                yAxis: [{
                    // max:800,
                    name: '数目（项）',
                    nameGap: Chart.getSize(26),
                    nameTextStyle: {
                        color: '#fff',
                        fontSize: Chart.getSize(14), // y轴单位，大小
                        rich: {},
                        height: Chart.getSize(14),
                    },
                    axisLabel: {
                        color: '#fff',
                        margin: Chart.getSize(16), //- y轴文字，文字与y轴间距（文字被裁剪需要调整grid属性）
                        textStyle: {
                            fontSize: Chart.getSize(16), //- y轴文字，大小
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
                series: [{
                    type: 'bar',
                    barWidth: Chart.getSize(19),
                    data: [300, 412, 602, 321],
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: '#3C95FC'
                                },
                                {
                                    offset: 0.99,
                                    color: 'rgba(0,0,252,0.7)',
                                },
                                {
                                    offset: 1,
                                    color: '#fff',
                                },
                            ], false),
                        }
                    },
                    label: {
                        show: true,
                        position: 'top',
                        color: '#fff',
                        fontSize: Chart.getSize(14),
                    },
                }]
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
        height: 317px !important;
    }
</style>
