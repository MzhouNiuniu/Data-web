<template>
    <section>
        <div class="project-container">
            <div class="search-bar clearfix">
                <SearchInput class="search-input" placeholder="请输入地区/发行人"/>
                <router-link  class="mode-btn" to="/InvestCom">
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
                <DatePicker size="large" type="year" style="width: 185px"/>
            </div>
        </div>
        <div class="project-container__wrapper map-container__wrapper">
            <div class="project-container">
                <div class="map-container">
                    <div class="left">
                        <ChinaMap ref="map" class="map" @change="handleMapChange"/>
                    </div>
                    <ul class="right detail">
                        <p class="caption">
                            北京市
                        </p>
                        <li class="item">
                            <p class="label">
                                行政级别：
                            </p>
                            <p class="value">
                                省级
                            </p>
                            <div class="hr-dashed"></div>
                        </li>
                        <li class="item">
                            <p class="label">
                                省城投个数（个）：
                            </p>
                            <p class="value">
                                500
                            </p>
                            <div class="hr-dashed"></div>
                        </li>
                        <li class="item">
                            <p class="label">
                                GDP（亿元）：
                            </p>
                            <p class="value">
                                1400.00
                            </p>
                            <div class="hr-dashed"></div>
                        </li>
                        <li class="item">
                            <p class="label">
                                一般公共预算（亿元）：
                            </p>
                            <p class="value">
                                500.00
                            </p>
                            <div class="hr-dashed"></div>
                        </li>
                        <li class="item">
                            <p class="label">
                                人口（千万）：
                            </p>
                            <p class="value">
                                30.12
                            </p>
                            <div class="hr-dashed"></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="project-container mt-30">
            <Table class="project-ivu-table" stripe :columns="columns" :data="list"/>

            <Pagination
                    class="mt-30 text-right"
                    v-bind="pagination"
                    @change="handlePageChange"
            />
        </div>
    </section>
</template>

<script>
    import SearchInput from '@components/SearchInput';
    import ChinaMap from '@components/ChinaMap';
    import Pagination from '@components/Pagination';


    export default {
        name: "InvestMapList",
        components: {
            SearchInput,
            ChinaMap,
            Pagination,
        },
        data() {
            this.map = null;
            this.columns = [
                {
                    title: '序号',
                    key: 'name',
                },
                {
                    title: '企业名称',
                    key: 'name',
                },
                {
                    title: '总资产规模（亿元）',
                    key: 'name',
                },
                {
                    title: '评级数据',
                    key: 'name',
                },
                {
                    title: '主体类型',
                    key: 'name',
                },
            ];

            this.list = [];
            return {
                // 因为不是列表，所以不放在路由了，不然每次都要重新渲染地图~
                pagination: {
                    page: 1,
                    limit: 10,
                    total: 0,
                },
            };
        },
        methods: {
            handleMapChange(currentBlock) {
                console.log(currentBlock);
            },
            handlePageChange({ page, limit }) {
                this.pagination.page = page;
                this.pagination.limit = limit;
                this.loadList();
            },
            loadList() {
                this.pagination.total = 100;
                this.list = Array(10).fill({ 'name': Math.random().toString(32).substring(2, 9) });
            },
            loadMapData() {
                setTimeout(() => {
                    const data = [
                        {
                            // value: [8920,123,456],//如果有更多数据可以这样存放，然后用params.data.value[i]获取
                            value: 8920,
                            name: "江苏",
                        },
                        {
                            value: 8588,
                            name: "浙江"
                        },
                        {
                            value: 8215,
                            name: "四川"
                        },
                        {
                            value: 7586,
                            name: "广东"
                        },
                        {
                            value: 6324,
                            name: "山东"
                        },
                        {
                            value: 6112,
                            name: "福建"
                        },
                        {
                            value: 5989,
                            name: "湖南"
                        },
                        {
                            value: 5448,
                            name: "广西"
                        },
                        {
                            value: 4994,
                            name: "辽宁"
                        },
                        {
                            value: 4528,
                            name: "江西"
                        },
                        {
                            value: 4767,
                            name: "安徽"
                        },
                        {
                            value: 4573,
                            name: "贵州"
                        },
                        {
                            value: 4544,
                            name: "湖北"
                        },
                        {
                            value: 3903,
                            name: "山西"
                        },
                        {
                            value: 3747,
                            name: "吉林"
                        },
                        {
                            value: 3342,
                            name: "黑龙江"
                        },
                        {
                            value: 3345,
                            name: "河南"
                        },

                        {
                            value: 2887,
                            name: "甘肃"
                        },
                        {
                            value: 2837,
                            name: "台湾"
                        },
                        {
                            value: 2673,
                            name: "内蒙古"
                        },
                        {
                            value: 2177,
                            name: "海南"
                        },
                        {
                            value: 2074,
                            name: "新疆"
                        },
                        {
                            value: 2783,
                            name: "河北"
                        },
                        {
                            value: 2354,
                            name: "上海"
                        },
                        {
                            value: 2093,
                            name: "北京"
                        },
                        {
                            value: 2034,
                            name: "重庆",
                        },
                        {
                            value: 1932,
                            name: "天津"
                        },

                        {
                            value: 1872,
                            name: "云南"
                        },
                        {
                            value: 1838,
                            name: "青海"
                        },
                        {
                            value: 1626,
                            name: "西藏"
                        },
                        {
                            value: 1563,
                            name: "陕西"
                        },
                        {
                            value: 1172,
                            name: "宁夏"
                        },
                        {
                            value: 677,
                            name: "香港"
                        },
                        {
                            value: 443,
                            name: "澳门"
                        },
                    ];
                    this.map.setOption(option => {
                        option.series[0].data = data;
                    });
                }, 500);
            },
            setMapTooltip() {
                this.map.setOption(option => {
                    option.tooltip = {
                        formatter(params) {
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
                                省级
                            </p>
                        </li>
                        <li class="item">
                            <p class="label">
                                省城投个数（个）：
                            </p>
                            <p class="value">
                                500
                            </p>
                        </li>
                        <li class="item">
                            <p class="label">
                                GDP（亿元）：
                            </p>
                            <p class="value">
                                1400.00
                            </p>
                        </li>
                        <li class="item">
                            <p class="label">
                                一般公共预算（亿元）：
                            </p>
                            <p class="value">
                                500.00
                            </p>
                        </li>
                        <li class="item">
                            <p class="label">
                                人口（千万）：
                            </p>
                            <p class="value">
                                30.12
                            </p>
                        </li>
                    </ul>
                            `;
                        },
                    };
                });
            },
        },
        created() {
            this.loadList();
        },
        mounted() {
            this.map = this.$refs.map;

            console.log(this.map.getCurrentBlockCode());
            console.log(this.map.getCurrentBlockName());
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
        $left-width: 950px;


        overflow: hidden;

        .left .map {
            float: left;
            width: $left-width;
            height: 725px;
            background-color: #fff;
        }

        .right.detail {
            overflow: hidden;
            margin-left: $left-width + 28px;
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
<style lang="scss">
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
</style>
