<template>
    <Chart ref="chart" :option="option" class="chart"></Chart>
</template>

<script>
    import Chart from '@components/Chart'

    export default {
        name: 'LeftChart1',
        components: {
            Chart,
        },
        data() {
            this.chart = null
            this.option = {
                legend: {
                    padding: 0,
                    bottom: Chart.getSize(20),
                    itemWidth: Chart.getSize(12),
                    itemHeight: Chart.getSize(12),
                    icon: 'rect',
                    textStyle: {
                        color: '#fff',
                        fontSize: Chart.getSize(16),
                        lineHeight: Chart.getSize(16),
                    },
                    data: ['省级', '市级', '县级']
                },
                series: [
                    {
                        name: 'border',
                        type: 'pie',
                        silent: true,
                        radius: ['61%', '62%'],
                        center: ['49.5%', '50%'],
                        hoverAnimation: false,
                        color: "rgba(0,180,253,0.5)",
                        // animation:false,    //charts3 no
                        label: {
                            normal: {
                                show: false
                            },
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: [1]
                    },
                    {
                        zlevel: 1,
                        name: '行政级别',
                        type: 'pie',
                        radius: ['30%', '50.5%'],
                        center: ['50%', '50%'],
                        roseType: 'radius',
                        data: [
                            {
                                value: 60,
                                name: '省级',
                                itemStyle: {
                                    color: '#FFF428'
                                },
                            },
                            {
                                value: 95,
                                name: '市级',
                                itemStyle: {
                                    color: '#00E8FF'
                                },
                            },
                            {
                                value: 120,
                                name: '县级',
                                itemStyle: {
                                    color: '#0000FC'
                                },
                            },
                        ],
                        label: {
                            color: '#fff',
                            fontSize: Chart.getSize(18),
                            lineHeight: Chart.getSize(28),
                            formatter: '{b}\n{c}'
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
        height: 317px !important;
    }
</style>
