<template>
    <section class="project-container">
        <div class="search-bar clearfix">
            <SearchInput v-model="searchParams.keyWords" @change="query()"
                         class="search-input" placeholder="请输入企业名称"/>
            <router-link class="mode-btn" to="/InvestCom/Map">
                <img src="~@public/icon/china.png" alt="" class="icon">
                <p class="text">
                    地图模式
                </p>
            </router-link>
        </div>
        <div class="search-panel mt-10">
            <!-- label宽度说明：前三行一样、后三行一样。 -->
            <div class="item">
                <OptionButton
                        title="省级行政区域"
                        v-model="buttonParams.province"
                        :options="searchOptions.province"
                        @change="query()"
                />
                <div class="border-bottom hr-dashed"></div>
            </div>
            <div class="item">
                <OptionButton
                        title="主体类型"
                        v-model="buttonParams.mainType"
                        :options="searchOptions.mainType"
                        @change="query()"
                />
                <div class="border-bottom hr-dashed"></div>
            </div>
            <div class="item">
                <OptionButton
                        title="营业收入（亿元）"
                        v-model="buttonParams.income"
                        :options="searchOptions.income"
                        @change="query()"
                />
                <div class="border-bottom hr-dashed"></div>
            </div>
            <div class="item">
                <OptionButton
                        title="评级"
                        v-model="buttonParams.rateMain"
                        :options="searchOptions.rateMain"
                        @change="query()"
                />
                <div class="border-bottom hr-dashed"></div>
            </div>
            <div class="item">
                <span class="title">
                    成立时间：
                </span>
                <DatePicker
                        type="daterange"
                        style="width: 350px"
                        v-model="searchParams.createTime"
                />
                <button class="confirm-button ml-20" @click="query()">确定</button>
                <div class="border-bottom hr-dashed"></div>
            </div>
            <div class="item totalAsset">
                <OptionButton
                        title="总资产规模（亿元）"
                        v-model="buttonParams.scale"
                        :options="searchOptions.scale"
                        @change="searchParams.min = searchParams.max = null;query()"
                >
                    <div class="slot">
                        <span class="title">
                            总资产区间（亿元）
                        </span>
                        <InputNumber v-model="searchParams.min"/>
                        -
                        <InputNumber v-model="searchParams.max"/>
                        <button class="confirm-button ml-20" @click="buttonParams.scale = undefined;query()">确定
                        </button>
                    </div>
                </OptionButton>
                <div class="border-bottom hr-slide-style-1"></div>
            </div>
        </div>
        <div class="sort-bar">
            <ul>
                <li>
                    筛选排序
                </li>
                <li
                        v-for="(item,index) in sortOptionList"
                        :key="index"
                        :class="{active:item.value === searchParams.sortField}"
                        @click="searchParams.sortField=item.value;query()"
                >
                    {{item.label}}
                </li>
            </ul>
            <ul>
                <li
                        :class="{active:1 === searchParams.sortFieldValue}"
                        @click="searchParams.sortFieldValue = 1;query()"
                >
                    升序
                </li>
                <li
                        :class="{active:-1 === searchParams.sortFieldValue}"
                        @click="searchParams.sortFieldValue = -1;query()"
                >
                    降序
                </li>
            </ul>
        </div>
        <Row :gutter="30" class="com-list">
            <Col span="8" v-for="(item,index) in list" :key="index">
                <div class="item">
                    <p class="com-type">
                    <p class="com-type">
                        {{item.mainType}}
                    </p>
                    <router-link class="com-name ue-link" :to="`/InvestComDetail/${item._id}`">
                        {{item.name}}
                    </router-link>
                    <p class="location">
                        所在城市：{{item.province}}
                    </p>
                    <div class="tag-group mt-15">
                        <p class="item">
                            评级类型：{{item.rateMain?item.rateMain:'暂无'}}
                        </p>
                        <p class="item">
                            总资产规模（亿元）：{{item.totalAsset?item.totalAsset:'暂无'}}
                        </p>
                    </div>
                    <p class="intro mt-10">
                        <TextEllipsis
                                fill
                                :rows="2"
                                :value="item.businessScope"
                        />
                    </p>
                </div>
            </Col>
        </Row>
        <Pagination
                class="mt-30"
                v-bind="pagination"
                @change="handlePageChange"
        />
    </section>
</template>

<script>
    import SearchInput from '@components/SearchInput';
    import Pagination from '@components/Pagination';
    import OptionButton from '@components/OptionButton';
    import TextEllipsis from '@components/TextEllipsis';


    let provinceList = null;

    export default {
        name: "Invest",
        components: {
            SearchInput,
            Pagination,
            OptionButton,
            TextEllipsis,
        },
        data() {
            // 1正序  -1  倒叙
            this.sortOptionList = [
                {
                    label: '总资产',
                    value: 'totalAsset',
                },
                {
                    label: '成立时间',
                    value: 'creationTime',
                },
                {
                    label: '主营收入',
                    value: 'businessCount',
                },
            ];
            this.searchOptions = {
                province: [],
                mainType: [
                    {
                        label: '城投',
                        value: '城投',
                    },
                    {
                        label: '新区城投',
                        value: '新区城投',
                    },
                    {
                        label: '交投',
                        value: '交投',
                    },
                    {
                        label: '水投',
                        value: '水投',
                    },
                    {
                        label: '文旅投',
                        value: '文旅投',
                    },
                    {
                        label: '工投',
                        value: '工投',
                    },
                    {
                        label: '农投',
                        value: '农投',
                    },
                    {
                        label: '地铁',
                        value: '地铁',
                    },
                    {
                        label: '其他',
                        value: '其他',
                    },
                ],
                rateMain: [
                    {
                        label: 'AAA+',
                        value: 'AAA+',
                    },
                    {
                        label: 'AAA',
                        value: 'AAA',
                    },
                    {
                        label: 'AA+',
                        value: 'AA+',
                    },
                    {
                        label: 'AA',
                        value: 'AA',
                    },
                    {
                        label: '其它',
                        value: '其它',
                    },
                ],
                income: [
                    {
                        label: '10以下',
                        value: '1',
                    },
                    {
                        label: '10-50',
                        value: '2',
                    },
                    {
                        label: '50-100',
                        value: '3',
                    },
                    {
                        label: '100-200',
                        value: '4',
                    },
                    {
                        label: '200以上',
                        value: '5',
                    },
                ],
                scale: [
                    {
                        label: '100以下',
                        value: '1',
                    },
                    {
                        label: '100-500',
                        value: '2',
                    },
                    {
                        label: '500-1000',
                        value: '3',
                    },
                    {
                        label: '1000-2000',
                        value: '4',
                    },
                    {
                        label: '2000以上',
                        value: '5',
                    },
                ],
            };
            this.list = [];

            return {
                searchParams: {
                    keyWords: '',
                    min: null,
                    max: null,
                    createTime: [],

                    sortField: 'totalAsset', // 默认按照总资产排序
                    sortFieldValue: 1, // 默认正序
                },
                buttonParams: {
                    province: null,
                    mainType: null,
                    rateMain: null,
                    income: null,
                    scale: null,
                },
                pagination: {
                    page: 1,
                    limit: 9,
                    total: 0,
                },
            };
        },
        methods: {
            search(value) {
                console.log(value);
            },
            getProvinceList() {
                return this.http.base.get('/geo-json/100000_full.json').then(res => {
                    if (res.status !== 200) {
                        return [];
                    }
                    return res.data.features.map(item => ({
                        label: item.properties.name,
                        value: item.properties.name,
                    }));
                });

            },
            handlePageChange({ page, limit }) {
                this.query(page, limit);
            },

            // 根据本地存储的参数，计算出服务端需要的参数
            getParams() {
                // todo 字段之间的关联处理，将函数简化到了内联js，需要重新抽离。。

                const result = { ...this.buttonParams, ...this.searchParams };

                // 时间范围选择器
                console.log(result.createTime)
                if (result.createTime && result.createTime[0] && result.createTime[1]) {
                    result.startCreateTime = result.createTime[0];
                    result.endCreateTime = result.createTime[1];
                } else {
                    result.startCreateTime = result.endCreateTime = undefined; // 清除url参数
                }
                delete result.createTime;

                // 筛选排序
                result.sort = JSON.stringify({ [result.sortField]: result.sortFieldValue, stick: -1 });
                delete result.sortField;
                delete result.sortFieldValue;

                return result;
            },
            async query(page = 1, limit = 9) {
                // 一般参数变化之后需要重置分页，通过默认值进行判断是否重置
                this.pagination.page = page;
                this.pagination.limit = limit;

                let res = await this.http.get(this.api.companyData.getListBySearch, {
                    page,
                    limit,
                    ...this.getParams(),
                });
                this.list = res.data.docs;

                this.pagination.total = res.data.total;
                this.$forceUpdate();
            },
        },
        created() {
            this.query();
            if (provinceList) {
                this.searchOptions.province = provinceList;
            } else {
                this.getProvinceList().then(list => {
                    provinceList = this.searchOptions.province = list;
                    this.$forceUpdate();
                });
            }
        },
    };
</script>

<style lang="scss" scoped>
    @import "./search-bar";

    .search-panel {
        ::v-deep {
            .ivu-input {
                height: 30px;
            }

            .option-button {
                .title {
                    padding-right: 8px;
                }
            }
        }

        .confirm-button {
            width: 52px;
            height: 30px;
            line-height: 30px;
            background: rgba(5, 103, 255, 1);
            border-radius: 2px;
            font-size: 14px;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            border: none;
            outline: none;
            cursor: pointer;

            &:hover {
                background: rgba(5, 103, 255, 0.69);
            }
        }

        .item {
            padding-top: 15px;

            .border-bottom {
                margin-top: 14px;
            }

            .title {
                width: 171px;
                display: inline-block;
                margin-right: 8px;
                line-height: 35px;
                font-size: 16px;
                font-weight: 600;
                color: #000034;
            }
        }

        /* 字段相关的自定义样式 */
        // 总资产
        .totalAsset {
            ::v-deep {
                .option-button {
                    .buttons {
                        padding-right: 36px;
                    }
                }
            }

            .slot {
                display: inline-block;

                .title {
                    line-height: 30px;
                    font-size: 14px;
                    font-weight: 600;
                    color: rgba(49, 54, 58, 1);
                }
            }
        }
    }

    .sort-bar {
        display: flex;
        justify-content: space-between;
        height: 60px;
        line-height: 60px;
        background: rgba(191, 197, 202, 0.2);
        border: 1px solid rgba(191, 197, 202, 1);
        color: #666666;

        li {
            font-size: 16px;
            font-weight: 500;
            cursor: pointer;
        }

        & > ul {
            display: flex;

            // 左
            &:first-child {
                .base-active {
                    color: rgba(5, 103, 255, 1);
                    background: #fff;
                }

                li {
                    padding: 0 25px;


                    &:first-child {
                        padding: 0 58px;
                        @extend .base-active;
                    }

                    &.active {
                        @extend .base-active;
                        border: solid rgba(191, 197, 202, 1);
                        border-width: 0 1px 0;
                    }
                }

            }

            // 右
            &:last-child {
                li {
                    padding: 0 15px;

                    &.active {
                        background-color: $sign-color;
                        color: #fff;
                    }
                }
            }
        }
    }

    .com-list {
        .ivu-col > .item {
            position: relative;
            margin-top: 15px;
            padding: 20px 16px 11px 20px;
            border: 1px solid #BFC5CA;
            color: #666666;

            .com-type {
                position: absolute;
                top: 15px;
                right: 15px;
                width: 62px;
                line-height: 25px;
                text-align: center;
                font-size: 14px;
                background: $sign-color;
                color: rgba(255, 255, 255, 1);
            }

            .com-name {
                width: 343px;
                display: inline-block;
                line-height: 18px;
                height: 18px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                font-size: 18px;
                font-weight: bold;
                color: rgba(0, 0, 52, 1);
            }

            .location {
                margin-top: 15px;
                line-height: 14px;
                font-size: 14px;
                font-weight: 500;
            }

            .tag-group {
                margin-top: 15px;
                line-height: 14px;
                font-size: 14px;
                font-weight: 500;

                .item {
                    display: inline-block;

                    &:not(:last-child ) {
                        position: relative;
                        padding-right: 30px;

                        &::after {
                            position: absolute;
                            content: '';
                            right: 15px;
                            width: 1px;
                            height: 14px;
                            background: #BFC5CA;
                        }
                    }
                }
            }

            .intro {
                line-height: 30px;
                font-size: 14px;
                color: #333;
            }
        }
    }
</style>
