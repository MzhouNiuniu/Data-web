<template>
    <section>
        <div class="project-container">
            <div class="search-bar clearfix">
                <div class="search-input">
                    <Select
                            placeholder="请输入地区"
                            clearable
                            filterable
                            remote
                            v-model="currentSearchWords"
                            :loading="isLoadSearchOption"
                            :remote-method="loadSearchOption"
                            @on-query-change="fixOnSearchChange"
                    >
                        <Option
                                v-for="(option, index) in searchOptionList" :value="option.name" :key="index"
                        ><!--fix-br-->{{option.name}}<!--fix-br--></Option>
                    </Select>
                    <button @click="handleSearch">
                        搜索
                    </button>
                </div>
                <router-link class="mode-btn" to="/InvestCom">
                    <img src="~@public/icon/list.png" alt="" class="icon">
                    <p class="text">
                        列表模式
                    </p>
                </router-link>
            </div>
            <div class="year-select">
                <span class="label">
                    年份：
                </span>
                <DatePicker size="large" type="year" :editable="false" :clearable="false" style="width: 185px"
                            v-model="currentYear" @on-change="loadMapData"/>
            </div>
        </div>
        <div class="project-container__wrapper map-container__wrapper">
            <div class="project-container">
                <div class="map-container">
                    <ChinaMap ref="map" class="map" @change="handleMapChange" @back="handleMapChange"/>
                    <ul class="detail">
                        <p class="caption">
                            <!-- 默认展示北京市 -->
                            {{currentGovName || '北京市'}}
                        </p>
                        <li class="item">
                            <p class="label">
                                行政级别：
                            </p>
                            <p class="value">
                                {{currentGovDetail.directly || '/'}}
                            </p>
                            <div class="hr-dashed"></div>
                        </li>
                        <li class="item">
                            <p class="label">
                                区域城投个数（个）：
                            </p>
                            <p class="value">
                                {{currentGovDetail.count || '/'}}
                            </p>
                            <div class="hr-dashed"></div>
                        </li>
                        <li class="item">
                            <p class="label">
                                GDP（亿元）：
                            </p>
                            <p class="value">
                                {{currentGovDetail.GDP || '/'}}
                            </p>
                            <div class="hr-dashed"></div>
                        </li>
                        <li class="item">
                            <p class="label">
                                公共财政收入（亿元）：
                            </p>
                            <p class="value">
                                {{currentGovDetail.budget || '/'}}
                            </p>
                            <div class="hr-dashed"></div>
                        </li>
                        <li class="item">
                            <p class="label">
                                人口（百万）：
                            </p>
                            <p class="value">
                                {{currentGovDetail.man || '/'}}
                            </p>
                            <div class="hr-dashed"></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="project-container mt-30">
            <Table @on-row-click="handleTab" class="project-ivu-table" stripe :columns="columns" :data="comList"/>

            <Pagination
                    class="mt-30 text-right"
                    v-bind="pagination"
                    @change="handlePageChange"
            />
        </div>
    </section>
</template>

<script>
    import ChinaMap from '@components/ChinaMap';
    import Pagination from '@components/Pagination';


    // todo 对数据流进行说明
    export default {
        name: "InvestMapList",
        components: {
            ChinaMap,
            Pagination,
        },
        data() {
            this.map = null;
            this.columns = [
                {
                    width: '120px',
                    title: '序号',
                    key: 'index',
                },
                {
                    title: '企业名称',
                    key: 'name',
                },
                {
                    title: '总资产规模（亿元）',
                    key: 'totalAsset',
                },
                {
                    title: '评级数据',
                    key: 'rateMain',
                },
                {
                    title: '主体类型',
                    key: 'mainType',
                },
            ];

            this.defaultCurrentGovName = '北京市'; // 默认北京
            this.defaultCurrentGovLevel = ''; // 默认为空，代表首页
            this.govNameStack = []; // 参考地图
            return {
                // 因为不是列表，所以不放在路由了，不然每次都要重新渲染地图~
                pagination: {
                    page: 1,
                    limit: 10,
                    total: 0,
                },

                currentYear: new Date((new Date().getFullYear() - 1).toString()),

                // 搜索
                searchDebounceTimer: null,
                searchOptionList: [],
                isLoadSearchOption: false,
                currentSearchWords: '',


                // 底部列表
                comList: [],

                // 地图
                currentGovName: this.defaultCurrentGovName,
                currentGovLevel: this.defaultCurrentGovLevel,
                currentGovDetail: {},
            };
        },
        methods: {
            // 底部表格
            handleTab(val) {
                console.log(val);
                this.$router.push({ path: `/InvestComDetail/${val._id}` });
            },
            handlePageChange({ page, limit }) {
                this.pagination.page = page;
                this.pagination.limit = limit;
                this.loadList();
            },
            loadList() {
                const page = this.pagination.page, size = this.pagination.limit;
                const { currentGovLevel, govNameStack } = this;

                this.http.get(this.api.companyData.comListByYear, {
                    year: this.currentYear.getFullYear(),
                    directly: currentGovLevel, // 获取当前级别的所有数据
                    province: govNameStack[1] || '',
                    city: govNameStack[2] || '',
                    district: govNameStack[3] || '',
                    page,
                    limit: size,
                }).then(res => {
                    if (res.status !== 200) {
                        return;
                    }

                    res = res.data;
                    this.pagination.total = res.total;
                    res.docs.forEach((item, index) => {
                        item.index = (page - 1) * size + index + 1;
                    });
                    this.comList = res.docs;
                });

            },

            // 搜索相关
            loadSearchOption(keyWords = '') {
                if (this.currentSearchWords && this.currentSearchWords === keyWords) { // 点击option时不需要处理
                    return;
                }

                this.isLoadSearchOption = true;
                clearTimeout(this.searchDebounceTimer);
                this.searchDebounceTimer = setTimeout(() => {
                    this.http.get(this.api.companyData.searchOptionList, { keyWords }).then(res => {
                        if (res.status !== 200) {
                            this.searchOptionList = [];
                            return;
                        }
                        this.searchOptionList = res.data.docs;

                        this.isLoadSearchOption = false;
                    });
                }, 300);
            },
            fixOnSearchChange(v) {
                if (v === this.currentSearchWords) {
                    return;
                }
                if (v === '') {
                    this.loadSearchOption();
                }
            },
            handleSearch() {
                if (this.currentSearchWords === undefined) {
                    this.$refs.map.reset();
                    return;
                }
                const option = this.searchOptionList.find(item => item.name === this.currentSearchWords); // 此变量可忽略
                if (!option) {
                    return;
                }

                // 获取当前选择的山区
                const blockStack = [option.province, option.city, option.district];
                this.$refs.map.jumpTo(blockStack.slice(0, ({ '省': 1, '市': 2, '区': 3 })[option.level])); // todo
            },

            // 地图相关
            setMapTooltip() {
                this.map.setOption(option => {
                    // add tooltip，由于echarts问题，多次触发
                    option.tooltip = {
                        trigger: "item",
                        enterable: true,
                        formatter(params) {
                            const detail = params.data;
                            if (!detail) {
                                return `
                            <ul class="invest-com__map-list__map-tooltip">
                                <p class="caption">
                                    ${params.name}
                                </p>
                                <li class="item">
                                    <p class="label">
                                        /
                                    </p>
                                </li>
                            </ul>
                            `;
                            }

                            return `
                            <ul class="invest-com__map-list__map-tooltip">
                        <p class="caption">
                            ${params.name}
                        </p>
                        <li class="item">
                            <p class="label">
                                行政级别：
                            </p>
                            <p class="value">
                                ${detail.directly}
                            </p>
                        </li>
                        <li class="item">
                            <p class="label">
                                区域城投个数（个）：
                            </p>
                            <p class="value">
                                ${detail.count}
                            </p>
                        </li>
                        <li class="item">
                            <p class="label">
                                GDP（亿元）：
                            </p>
                            <p class="value">
                                ${detail.GDP}
                            </p>
                        </li>
                        <li class="item">
                            <p class="label">
                                公共财政收入（亿元）：
                            </p>
                            <p class="value">
                                ${detail.budget}
                            </p>
                        </li>
                        <li class="item">
                            <p class="label">
                                人口（百万）：
                            </p>
                            <p class="value">
                                ${detail.man}
                            </p>
                        </li>
                    </ul>
                            `;
                        },
                    };

                    // add dataRange（后改用visualMap）
                    option.visualMap = {
                        type: "continuous",
                        min: 0,
                        // max: 100,
                        left: "right",
                        top: "bottom",
                        text: ['高', '低'],
                        seriesIndex: [0],
                        inRange: {
                            color: ["#e0ffff", "#006edd"]
                        },
                        calculable: true,
                    };

                    // ser areaStyle
                    option.series[0].itemStyle.normal.areaColor = '#e3e3e3';
                });
            },
            loadMapData() {
                const { currentYear, currentGovLevel, govNameStack } = this;
                const params = {
                    year: currentYear.getFullYear(),
                    directly: currentGovLevel, // 获取当前级别的所有数据

                    province: govNameStack[1] || '',
                    city: govNameStack[2] || '',
                    district: govNameStack[3] || '',
                };

                this.http.get(this.api.companyData.govInfo, params).then(res => {
                    if (res.status !== 200) {
                        // 清除侧栏信息
                        this.currentGovDetail = {};

                        this.map.setOption(option => {
                            option.series[0].data = [];
                            option.visualMap.max = 1;
                        });
                        return;
                    }

                    this.currentGovDetail = res.data.base || {};

                    let maxDataRange = 1;
                    res.data.list.forEach(item => {
                        item.name = item.district || item.city || item.province;
                        item.value = item.count;

                        if (item.value > maxDataRange) {
                            maxDataRange = item.value;
                        }
                    });
                    this.map.setOption(option => {
                        option.series[0].data = res.data.list;
                        option.visualMap.max = maxDataRange;
                    });
                });
            },
            handleMapChange({ nameStack, levelStack }) {
                this.govNameStack = nameStack;
                this.currentGovName = nameStack.length === 1 ? this.defaultCurrentGovName : nameStack[nameStack.length - 1];
                this.currentGovLevel = ({
                    'province': '省级',
                    'city': '市级',
                    'district': '区级',
                })[levelStack[levelStack.length - 1]] || this.defaultCurrentGovLevel; // todo
                this.loadMapData();
                this.loadList();
            },
        },
        created() {
            this.loadSearchOption();
            this.loadList();
        },
        mounted() {
            this.map = this.$refs.map;

            this.setMapTooltip();
            this.loadMapData();
        },
    };
</script>

<style lang="scss" scoped>
    @import "./search-bar";

    .year-select {
        margin-top: 30px;

        .label {
            line-height: 16px;
            font-size: 16px;
            color: rgba(0, 0, 52, 1);
        }
    }

    .map-container__wrapper {
        margin-top: 30px;
        padding-top: 30px;
        padding-bottom: 30px;
        background-color: #f6fbff;
    }

    .map-container {
        $right-width: 222px;


        overflow: hidden;

        .map {
            float: left;
            width: 100%;
            padding-right: $right-width + 10px;
            height: 725px;
            background-color: #fff;
        }

        .detail {
            overflow: hidden;
            float: left;
            width: $right-width;
            margin-left: -1 * $right-width;
            background-color: #fff;
            text-align: center;
            border-radius: 5px;

            .caption {
                line-height: 60px;
                font-size: 24px;
                color: rgba(51, 51, 51, 1);
                background: rgba(191, 197, 202, 1);
                border-radius: 5px 5px 0 0;
            }

            .item {
                padding-top: 36px;

                .label {
                    line-height: 1;
                    font-size: 16px;
                    color: rgba(51, 51, 51, 1);
                }

                .value {
                    margin-top: 20px;
                    line-height: 1;
                    font-size: 24px;
                    font-weight: 600;
                    color: $sign-color;
                }

                .hr-dashed {
                    margin-top: 36px;
                }

                &:last-child {
                    .hr-dashed {
                        opacity: 0;
                    }
                }
            }
        }
    }
</style>
<!--global style-->
<style lang="scss" scoped>
    .invest-com__map-list__map-tooltip {
        margin: -5px;
        padding: 15px;
        border-radius: 2px;
        font-size: 16px;
        color: #fff;
        /*background: rgba(0, 0, 0, 0.5);*/

        .caption {
            line-height: 16px;
            font-size: 16px;
            font-weight: 500;
        }

        .item {
            margin-top: 10px;
            line-height: 16px;

            .label, .value {
                display: inline-block;
            }

            .label {
                font-size: 14px;
            }

            .value {

            }
        }
    }

    .search-input {
        $height: 44px;
        display: flex;
        width: 100%;

        ::v-deep {
            .ivu-select-selection {
                height: $height;
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
            }

            .ivu-select-input {
                line-height: $height;
                height: $height;
                padding-left: 20px;
                font-size: 14px;
            }
        }

        button {
            min-width: 76px;
            height: $height;
            line-height: 1;
            color: #fff;
            border: none;
            font-size: 18px;
            cursor: pointer;
            border-radius: 0 4px 4px 0;
            background-color: $primary-color !important;


            &:hover {
                background-color: $primary-color-light !important;
            }
        }
    }
</style>
