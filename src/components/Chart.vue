<template>
    <div style="width: 100%;height: 100%;"></div>
</template>

<script>
    import echarts from 'echarts'
    const chartInstanceMap = {}

    let resizeTimer = null
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimer)
        resizeTimer = setTimeout(function () {
            let chart = null
            for (let k in chartInstanceMap) {
                chart = chartInstanceMap[k].getChart()
                chart.setOption(chartInstanceMap[k].option)
                chart.resize()
            }
        }, 100)
    })

    const Chart = {
        props: {
            option: {
                type: [Object, Function],
                required: true,
            },
        },
        data() {
            this.chart = null
            return {}
        },
        methods: {
            getChart() {
                return this.chart
            },
            init() {
                this.chart = echarts.init(this.$el)
                this.chart.setOption(this.option)
                chartInstanceMap[this._uid] = this
            },
        },
        watch: {
            option: {
                deep: true,
                handler(option) {
                    this.chart.setOption(option)
                },
            },
        },
        mounted() {
            if (this.option) {
                this.init()
            } else {
                const unWatcher = this.$watch('option', function () {
                    unWatcher()
                    this.init()
                })
            }
        },
        beforeDestroy() {
            if (chartInstanceMap[this._uid]) {
                chartInstanceMap[this._uid].getChart().dispose()
                delete chartInstanceMap[this._uid]
            }
        },
    }

    if (window && window.__1px__) {
        Chart.getSize = function (size) {
            return {
                valueOf() {
                    return size * (window.__1px__ || 1)
                },
            }
        }
    } else {
        Chart.getSize = function (size) {
            return size
        }
    }


    export default Chart
</script>

<style scoped>

</style>
