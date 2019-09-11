<template>
    <section class="project-container">
        <div class="search-bar mt-24 clearfix">
            <SearchInput class="search-input" placeholder="请输入企业名称"/>
            <router-link tag="div" class="mode-btn" to="/InvestCom/Map">
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
                        @change="handleOptionButtonChange('province')"
                />
                <div class="border-bottom hr-dashed"></div>
            </div>
            <div class="item">
                <OptionButton
                        title="主体类型"
                        v-model="buttonParams.mainType"
                        :options="searchOptions.mainType"
                        @change="handleOptionButtonChange('mainType')"
                />
                <div class="border-bottom hr-dashed"></div>
            </div>
            <div class="item">
                <OptionButton
                        :whole-btn="false"
                        title="营业收入（亿元）"
                        v-model="buttonParams.income"
                        :options="searchOptions.income"
                        @change="handleOptionButtonChange('income')"
                />
                <div class="border-bottom hr-dashed"></div>
            </div>
            <div class="item">
                <OptionButton
                        :whole-btn="false"
                        title="评级"
                        v-model="buttonParams.rate"
                        :options="searchOptions.rate"
                        @change="handleOptionButtonChange('rate')"
                />
                <div class="border-bottom hr-dashed"></div>
            </div>
            <div class="item">
                <span class="title">
                    成立时间：
                </span>
                <DatePicker v-model="searchParams.createTime" type="date" style="width: 200px"/>
                <button class="confirm-button ml-20" @click="handleSearchParamsChange('createTime')">确定</button>
                <div class="border-bottom hr-dashed"></div>
            </div>
            <div class="item totalAsset">
                <OptionButton
                        :whole-btn="false"
                        title="总资产规模（亿元）"
                        v-model="buttonParams.scale"
                        :options="searchOptions.scale"
                        @change="handleOptionButtonChange('scale')"
                >
                    <div class="slot">
                        <span class="title">
                            总资产区间（亿元）
                        </span>
                        <InputNumber v-model="searchParams.min"/>
                        -
                        <InputNumber v-model="searchParams.max"/>
                        <button class="confirm-button ml-20" @click="handleSearchParamsChange('totalAssetRange')">确定
                        </button>
                    </div>
                </OptionButton>
                <div class="border-bottom hr-slide-style-1"></div>
            </div>
        </div>
        <Row :gutter="30" class="com-list">
            <Col span="8" v-for="item in 9" :key="item">
                <div class="item">
                    <p class="com-type">
                        城投
                    </p>
                    <router-link tag="p" class="com-name ue-link" :to="`/InvestComDetail/1111`">
                        成都投资建设有限公司
                    </router-link>
                    <p class="location">
                        所在城市：成都市
                    </p>
                    <div class="tag-group mt-15">
                        <p class="item">
                            评级类型：AAA
                        </p>
                        <p class="item">
                            总资产规模（亿元）：2000.00
                        </p>
                    </div>
                    <p class="intro mt-10">
                        这是一段企业概况这是一段企业概况这是一段企业概这 是一段企业概况这是一段企业概况…
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

    let provinceList = null;

    export default {
        name: "List",
        components: {
            SearchInput,
            Pagination,
            OptionButton,
        },
        data() {
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
                rate: [
                    {
                        label: 'AAA+',
                        value: 'AAA+',
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
                searchParams: this.getSearchParams(),
                buttonParams: this.getButtonParams(),
                pagination: this.getPagination(),
            };
        },
        methods: {
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
            getSearchParams() {
                const { query } = this.$route;
                return {
                    projectName: query.projectName,
                    createTime: query.createTime,

                    min: query.min ? Number(query.min) : null,
                    max: query.max ? Number(query.min) : null,
                };
            },
            getButtonParams() {
                const { query } = this.$route;
                return {
                    province: query.province,
                    mainType: query.mainType,
                    rate: query.rate,
                    income: query.income,
                    scale: query.scale,
                };
            },
            getPagination() {
                const { query } = this.$route;
                return {
                    page: query.page || 1,
                    limit: query.limit || 9,
                    total: 0,
                };
            },
            handlePageChange({ page, limit }) {
                this.pagination.page = page;
                this.pagination.limit = limit;
                this.query({
                    page: page,
                    limit,
                });
            },
            handleOptionButtonChange(fieldName) {
                const otherParams = {};
                if (fieldName === 'scale') {
                    otherParams.min = otherParams.max = undefined;
                }
                this.query(otherParams);
            },
            handleSearchParamsChange(fieldName) {
                if (fieldName === 'totalAssetRange') {
                    this.buttonParams.scale = undefined;
                }

                const searchParams = { ...this.searchParams };
                if (searchParams.createTime) {
                    searchParams.createTime = searchParams.createTime.toLocaleDateString();
                }
                this.query(searchParams);
            },
            query(otherParams) {
                const query = { ...this.$route.query };
                this.$router.push({
                    path: this.$route.path,
                    query: Object.assign(query, this.buttonParams, otherParams),
                });
            },
            loadList() {
                console.log(this.$route.query);
                this.pagination.total = 100;
                this.list = Array(10).fill({ 'name': Math.random() });
            },
        },
        created() {
            this.loadList();
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
                line-height: 18px;
                height: 18px;
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
                color: rgba(51, 51, 51, 1);
            }
        }
    }
</style>
