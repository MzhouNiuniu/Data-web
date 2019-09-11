<template>
    <section class="china-map">
        <div class="back" @click="back" v-if="!isRoot">
            <img src="~@public/icon/arrow-left.png" alt="" class="icon">
            <span class="text">返回上一级</span>
        </div>
        <p class="caption">
            {{currentName}}
        </p>
        <Chart ref="chart" :option="option"/>
    </section>
</template>

<script>
    import axios from 'axios';
    import echarts from 'echarts';
    import Chart from './Chart';

    const CN_CODE = 'china'; // 100000 -> 'china'，兼容老数据
    const CN_NAME = '中华人民共和国';
    export default {
        name: "ChinaMap",
        components: {
            Chart,
        },
        props: {
            // event
            // @change
        },
        data() {
            this.chart = null;
            // 只需要动态修改mapType，然后使用原生setOption
            this.option = {
                // title: {
                //     text: '标题文本',
                //     textAlign: 'center',
                //     textStyle: {
                //         width: '100%',
                //         //文字颜色
                //         color: '#999999',
                //         //字体风格,'normal','italic','oblique'
                //         fontStyle: 'normal',
                //         //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                //         fontWeight: 'bold',
                //         //字体系列
                //         fontFamily: 'PingFang-SC',
                //         //字体大小
                //         fontSize: 24,
                //     },
                // },
                tooltip: {
                    trigger: 'item',
                },
                // dataRange: {
                //     // orient: 'horizontal',
                //     min: 0,
                //     max: 55000,
                //     text: ['高', '低'], // 文本，默认为数值文本
                //     calculable: true, // 是否可拖动计算
                //     // selectedMode: true,
                //     color: ['#2d70d6', '#80b5e9', '#e6feff'],
                // },
                geo: {
                    map: CN_CODE,
                    label: {
                        show: true,
                        emphasis: {
                            color: 'white',
                        }
                    },
                    // zoom: 1.28,
                    itemStyle: {
                        normal: {
                            borderWidth: 1,
                            borderColor: '#fff',
                            areaColor: '#358BFE'
                        },
                        emphasis: {
                            areaColor: 'rgba(56,141,255,0.78)'
                        }
                    },
                    tooltip: {
                        show: false
                    },
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                },
                series: [
                    {
                        name: 'map',
                        type: 'map',
                        // mapType:'',
                        mapLocation: {
                            x: 'left',
                        },
                        // selectedMode: 'multiple',
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    color: '#358BFE',
                                },
                                borderWidth: 0,
                            },
                            // emphasis: { label: { show: true } },
                            // borderWidth: 0,
                            // borderColor: '#eee',
                        },
                        data: [],
                    },
                ],
                animation: true,
            };
            return {
                nameStack: [CN_NAME],
                codeStack: [CN_CODE],
            };
        },
        computed: {
            isRoot() {
                return this.codeStack.length <= 1;
            },
            currentCode() {
                return this.codeStack[this.codeStack.length - 1];
            },
            currentName() {
                return this.nameStack[this.nameStack.length - 1];
            },
        },
        methods: {
            back() {
                if (this.isRoot) {
                    return;
                }
                this.nameStack.pop();
                this.codeStack.pop();
                this.loadGeoData(this.currentCode);
            },
            getGeoData(code) {
                return axios.get('/geo-json/' + code + '_full.json').then(res => res.data);
            },
            loadGeoData(code) {
                const set = () => {
                    if (!this.isRoot) {
                        this.option.geo.top = this.option.geo.right = this.option.geo.bottom = this.option.geo.left = 'auto';
                    } else {
                        this.option.geo.top = this.option.geo.right = this.option.geo.bottom = this.option.geo.left = 0;
                    }
                    this.option.geo.map = code;
                    this.chart.setOption(this.option);
                };

                if (echarts.getMap(code)) {
                    this.$nextTick(() => {
                        set();
                    });
                    return;
                }

                this.getGeoData(code).then(data => {
                    echarts.registerMap(code, data);
                    set();
                });
            },
            handleChartClick(params) {
                if (params.componentType !== 'geo') {
                    return;
                }

                // 获取地图
                const currentBlockData = echarts.getMap(this.currentCode).geoJson;
                const targetBlock = currentBlockData.features.find(item => item.properties.name === params.name);
                if (!targetBlock) {
                    return;
                }

                this.$emit('change', targetBlock);

                // childNum、id 兼容老数据

                if (targetBlock.properties.childrenNum === 0 || targetBlock.properties.childNum === 0) {
                    return;
                }

                this.nameStack.push(targetBlock.properties.name);

                console.log(targetBlock);
                const targetCode = targetBlock.properties.adcode || targetBlock.id;
                this.codeStack.push(targetCode);
                this.loadGeoData(targetCode);

            },
        },
        created() {
            this.loadGeoData(this.currentCode);
        },
        mounted() {
            this.chart = this.$refs.chart.getChart();
            this.chart.on('click', this.handleChartClick);
        },
    };
</script>

<style lang="scss" scoped>
    .china-map {
        position: relative;
    }

    .back {
        position: absolute;
        z-index: 2;
        top: 4px;
        left: 0;
        line-height: 20px;
        cursor: pointer;

        .icon {
            height: 16px;
            vertical-align: -3px;
        }

        .text {
            padding-left: 16px;
            font-size: 14px;
            color: rgba(88, 96, 102, 1);
        }
    }

    .caption {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100%;
        text-align: center;
        font-size: 24px;
        font-weight: 600;
        color: rgba(153, 153, 153, 1);
    }
</style>
