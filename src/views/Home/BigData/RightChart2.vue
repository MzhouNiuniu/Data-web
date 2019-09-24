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

            const data = [311, 578, 421, 512, 624, 548, 912, 324, 545]

            console.log(data.map((item, index) => [
                {
                    coord: [index, 0],
                },
                {
                    coord: [index, item],
                }
            ]))
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
                        data,
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
                                align:'left',
                                color: '#fff',
                            },
                            data: data.map((item, index) => [
                                {
                                    coord: [index, 0],
                                },
                                {
                                    coord: [index, item],
                                    value: item,
                                }
                            ]),
                        },
                    },
                ]
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
