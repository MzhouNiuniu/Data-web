<template>
    <section>
        <div class="project-container">
            <div class="search-bar clearfix">
                <SearchInput class="search-input" placeholder="请输入地区/发行人"/>
                <router-link tag="div" class="mode-btn" to="/InvestCom">
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
                        <ChinaMap class="map" @change="handleMapChange"/>
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
        name: "MapList",
        components: {
            SearchInput,
            ChinaMap,
            Pagination,
        },
        data() {
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
            handleMapChange() {
                console.log(arguments);
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
        },
        created() {
            this.loadList();
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
