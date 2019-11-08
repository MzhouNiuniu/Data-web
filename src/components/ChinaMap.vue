<template>
    <section class="china-map-wrapper">
        <div class="china-map">
            <div class="back" @click="back(false)" v-if="!isRoot">
                <img src="~@public/icon/arrow-left.png" alt="" class="icon">
                <span class="text">返回上一级</span>
            </div>
            <p class="caption">
                {{currentName}}
            </p>
            <Chart ref="chart" :option="option"/>
        </div>
    </section>
</template>

<script>
    import axios from 'axios';
    import echarts from 'echarts';
    import Chart from './Chart';

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
            const CN_CODE = '100000'; // 100000
            const CN_NAME = '中华人民共和国';
            const CN_LEVEL = 'country';

            this.chart = null;
            // 只需要动态修改mapType，然后使用原生setOption
            this.option = {
                animation: true,
                series: [
                    {
                        selectedMode: 'single',
                        top: 20,
                        bottom: 0,
                        // roam: true,
                        name: 'map',
                        type: 'map',
                        // zoom: 1, //当前视角的缩放比例
                        // roam: true, //是否开启平游或缩放
                        // scaleLimit: { //滚轮缩放的极限控制
                        //     min: 1,
                        //     max: 10
                        // },
                        mapType: CN_CODE,
                        label: {
                            show: true,
                            emphasis: {
                                color: 'white',
                            }
                        },
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
                        data: [],
                    },
                ],
                isLastLevel: false, // @param {boolean} isLastLevel - 如果是最后一级，就不使用_full的数据了
            };
            return {
                nameStack: [CN_NAME],
                codeStack: [CN_CODE],
                levelStack: [CN_LEVEL], // 当前地图上展示的是什么级别，['province', 'city', 'district']，默认从省开始
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
            // 工具
            getChart() {
                return this.chart;
            },
            setOption(handler) {
                // 需要传入一个函数，或者引入一个merge库。。
                // handler 可以有返回值，推荐直接更改原对象
                if (typeof handler !== 'function') {
                    return;
                }

                const newOption = handler(this.option);
                if (newOption) {
                    this.option = newOption;
                }

                this.chart.setOption(this.option);
                // this.$forceUpdate(); // option 非响应式数据
            },
            getGeoData(code) {
                return axios.get('/geo-json/' + code + (this.levelStack.length > 3 ? '.json' : '_full.json')).then(res => res.data).catch(err => {
                    this.back(true);
                });
            },

            // 装载地图，并且将当前地图的数据返回
            loadGeoData(code) {
                const set = () => {
                    this.option.series[0].mapType = code;
                    this.chart.setOption(this.option);
                };

                if (echarts.getMap(code)) {
                    return Promise.resolve().then(() => {
                        set();
                        return echarts.getMap(code).geoJson;
                    });
                }

                return this.getGeoData(code).then(data => {
                    echarts.registerMap(code, data);
                    set();
                    return data;
                });
            },

            // 切换地图的时候，需要保持地区名字、地区code的历史记录
            // 维护 名字、code、等级的栈
            popStack() {
                this.nameStack.pop();
                this.codeStack.pop();

                const { levelStack } = this;
                if (levelStack.length <= 1) {
                    return;
                }
                levelStack.pop();
            },
            pushStack(name, code) {
                this.nameStack.push(name);
                this.codeStack.push(code);

                const { levelStack } = this;
                if (levelStack.length === 1) {
                    levelStack.push('province');
                } else if (levelStack.length === 2) {
                    levelStack.push('city');
                } else {
                    levelStack.push('district');
                }
            },
            cleanStack() {
                // 重置到中国
                this.nameStack.length = 1;
                this.codeStack.length = 1;
                this.levelStack.length = 1;

                this.nameStack.push(1), this.nameStack.pop(); // 触发computed更新 + $forceUpdate()
            },
            handleChange() {
                this.$emit('change', {
                    nameStack: this.nameStack,
                    codeStack: this.codeStack,
                    levelStack: this.levelStack,
                });
            },

            handleMapSelectChange(params) {
                if (this.isLastLevel) {
                    return;
                }

                const triggerBlock = params.batch[0];

                // 获取地图
                const currentBlockData = echarts.getMap(this.currentCode).geoJson;
                const targetBlock = currentBlockData.features.find(item => item.properties.name === triggerBlock.name);
                if (!targetBlock) {
                    return;
                }

                if (targetBlock.properties.childrenNum === 0) {
                    this.isLastLevel = true;
                    // return;
                } else {
                    this.isLastLevel = false;
                }

                this.pushStack(targetBlock.properties.name, targetBlock.properties.adcode);
                this.handleChange();

                this.loadGeoData(targetBlock.properties.adcode);
            },

            // 接口
            back(isSilent = false) {
                this.isLastLevel = false;

                // isSilent:：是否静默回退
                if (this.isRoot) {
                    return;
                }
                this.popStack();
                this.loadGeoData(this.currentCode);


                isSilent || this.handleChange();
            },

            async jumpTo(nameStack) {
                this.cleanStack();

                // nameStack：['河南省','郑州市'] // 第一个元素，只能是中国下的地区
                let target = echarts.getMap(100000).geoJson; // 内置了100000地图
                for (let i = 0; i < nameStack.length; i++) {
                    let nextBlockCode = target.features.find(item => item.properties.name === nameStack[i]);
                    if (!nextBlockCode) {
                        return;
                    }

                    nextBlockCode = nextBlockCode.properties.adcode;
                    this.pushStack(nameStack[i], nextBlockCode);
                    if (i === nameStack.length - 1) {
                        this.handleChange();
                    }

                    target = await this.loadGeoData(nextBlockCode);
                }
            },
            reset() {
                this.cleanStack();
                this.handleChange();
                this.loadGeoData(this.currentCode);
            },
        },
        created() {
            this.loadGeoData(this.currentCode);
        },
        mounted() {
            this.chart = this.$refs.chart.getChart();
            this.chart.on('mapselectchanged', this.handleMapSelectChange);

            // 模拟回显
            // this.jumpTo(['河南省', '郑州市']);
        },
    };
</script>

<style lang="scss" scoped>
    .china-map-wrapper {
        width: 100%;
        height: 100%;
    }

    .china-map {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .back {
        position: absolute;
        z-index: 2;
        top: 30px;
        right: 30px;
        line-height: 20px;
        cursor: pointer;

        .icon {
            height: 16px;
            vertical-align: -3px;
        }

        .text {
            padding-left: 16px;
            font-size: 16px;
            color: rgba(51, 51, 51, 1);
        }
    }

    .caption {
        position: absolute;
        z-index: 1;
        top: 30px;
        left: 0;
        width: 100%;
        text-align: center;
        font-size: 20px;
        font-weight: 600;
        color: rgba(153, 153, 153, 1);
    }
</style>
