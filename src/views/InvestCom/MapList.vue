<template>
    <section class="project-container">
        <div class="search-bar mt-30 clearfix">
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
        <div class="hr-slide-style-3 mt-20"></div>
        <div class="map-container">
            <div class="left">
                <ChinaMap class="map" @change="handleMapChange"/>
            </div>
            <div class="right">
                <ul class="info-list">
                    <div class="caption">
                        <p class="left">
                            <img src="~@public/icon/location3.png" alt="" class="icon">
                            当前数据地
                        </p>
                        <p class="right">
                            北京市
                        </p>
                    </div>
                    <div class="pl-30 pr-30">
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
                                人口（亿人）：
                            </p>
                            <p class="value">
                                30
                            </p>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
    import SearchInput from '@components/SearchInput';
    import ChinaMap from '@components/ChinaMap';

    export default {
        name: "MapList",
        components: {
            SearchInput,
            ChinaMap,
        },
        methods: {
            handleMapChange() {
                console.log(arguments);
            },
        },
    };
</script>

<style lang="scss" scoped>
    .search-bar {
        .search-input {
            float: left;
            padding-right: 240px;
        }

        .mode-btn {
            position: relative;
            z-index: 1;
            float: left;
            margin-left: -210px;
            padding-top: 4px;
            padding-bottom: 2px;
            width: 76px;
            background: rgba(236, 241, 255, 1);
            text-align: center;
            font-size: 12px;
            font-weight: 600;
            color: rgba(5, 103, 255, 1);
            border-radius: 5px;
            cursor: pointer;
            user-select: none;

            .icon {
                width: 20px;
            }

            .text {
                margin-top: 2px;
            }
        }
    }


    .year-select {
        margin-top: 30px;

        .label {
            line-height: 16px;
            font-size: 16px;
            font-weight: bold;
            color: rgba(0, 0, 52, 1);
        }
    }

    .map-container {
        $left-width: 704px;


        overflow: hidden;
        margin-top: 28px;

        & > .left {
            float: left;
            width: $left-width;

            .map {
                height: 585px;
            }
        }

        & > .right {
            margin-top: 6px;
            margin-left: $left-width + 42px;

            .info-list {
                border: 1px solid rgba(238, 238, 238, 1);

                .caption {
                    line-height: 60px;
                    color: #fff;
                    box-shadow: 0px 4px 10px 0px rgba(0, 0, 255, 0.08);

                    .left, .right {
                        display: inline-block;
                        width: 50%;
                        vertical-align: middle;
                    }

                    .left {
                        padding-left: 30px;
                        background: rgba(0, 0, 255, 0.76);
                        font-size: 20px;


                        .icon {
                            height: 24px;
                            margin-right: 12px;
                            vertical-align: sub;
                        }
                    }

                    .right {
                        $bg: #358BFE;
                        position: relative;
                        background-color: $bg;

                        text-align: center;
                        font-size: 30px;

                        &::after {
                            content: '';
                            position: absolute;
                            top: 0;
                            left: -30px;

                            width: 0;
                            height: 0;
                            border-bottom: 60px solid $bg;
                            border-left: 30px solid transparent;
                        }
                    }
                }

                .item {
                    overflow: hidden;
                    padding: 40px 0;
                    line-height: 24px;

                    &:not(:last-child) {
                        border-bottom: 1px solid #EEEEEE;
                    }

                    &:last-child {
                        padding-top: 39px;
                        padding-bottom: 30px;
                    }

                    .label {
                        float: left;

                        font-size: 20px;
                        color: rgba(88, 96, 102, 1);
                    }

                    .value {
                        text-align: right;
                        font-size: 24px;
                        font-weight: 800;
                        color: rgba(0, 0, 0, 1);
                    }
                }

            }
        }
    }
</style>
