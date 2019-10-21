<template>
    <section class="project-container__wrapper mt-24">
        <div class="project-container">
            <p class="detail-page-caption">
                <span>城投公司</span>
            </p>
            <h1 class="com-name mt-30">
                {{detail.name}}
            </h1>
            <div class="intro mt-30">
                <ul class="left base-info">
                    <li>基本信息</li>
                    <li>
                                <span class="label">
                                    实际控制人：
                                </span>
                        <span class="value">
                                    {{detail.controllerMan}}
                                </span>
                    </li>
                    <li>
                                <span class="label">
                                    所属政府：
                                </span>
                        <span class="value">
                                {{detail.province}}
                                {{detail.city}}
                                {{detail.district}}
                                </span>
                    </li>
                    <li>
                                <span class="label">
                                    行政级别：
                                </span>
                        <span class="value">
                                    {{detail.level}}
                                </span>
                    </li>
                    <li>
                                <span class="label">
                                    成立日期：
                                </span>
                        <span class="value">
                                    {{detail.creationTime}}
                                </span>
                    </li>
                    <li>
                                <span class="label">
                                    主体类型：
                                </span>
                        <span class="value">
                                    {{detail.mainType}}
                                </span>
                    </li>
                </ul>
                <div class="right">
                    <p class="caption">
                        企业概况
                    </p>
                    <p class="content project-scroll">
                        {{detail.info}}
                    </p>
                </div>
            </div>

            <div class="hr-dashed mt-24"></div>
            <UIDescription title="财务信息" class="mt-20">
                <Table class="project-ivu-table" :max-height="222" stripe :columns="financialColumns"
                       :data="detail.financial"/>
            </UIDescription>

            <div class="hr-dashed"></div>
            <UIDescription title="评级信息" class="mt-20">
                <Table class="project-ivu-table" :max-height="222" stripe :columns="rateColumns" :data="detail.rate"/>
            </UIDescription>

            <div v-if="incomeColumns">
                <div class="hr-dashed"></div>
                <UIDescription title="2016-2018年公司营业收入及利润情况（单位：亿元、%）" class="mt-20">
                    <Table class="project-ivu-table" :max-height="222" stripe border :columns="incomeColumns"
                           :data="detail.incomeInfo"/>
                </UIDescription>
            </div>

            <div class="hr-dashed"></div>
            <UIDescription title="融资信息" class="mt-20">
                <Table class="project-ivu-table" :max-height="222" stripe :columns="financingColumns"
                       :data="detail.financing"/>
            </UIDescription>

            <div class="hr-dashed"></div>
            <UIDescription title="公司新闻" class="mt-20" v-if="detail.news&&detail.news.length>0">
                <div class="last-list">
                    <ul class="trade-list">
                        <li @click="toDetail(item._id,1) " class="pr-20 c" v-for=" item in detail.news" :key="item._id">
                            <div class="circle"></div>
                            <p>{{item.title}}</p>
                            <span class="date">【{{item.releaseTime}}】</span>

                        </li>
                    </ul>
                </div>
            </UIDescription>
            <UIDescription title="其他信息" class="mt-20">

                <AttachmentList title="" :value="detail.other"/>
            </UIDescription>

        </div>
    </section>
</template>

<script>
    import AttachmentList from '@components/AttachmentList';
    import UIDescription from '@ui/Description';

    function primaryHeaderRender(h, leftName, rightName) {
        return (
            <div class="primary-header" style="font-size: 18px;font-weight: 500;">
                年份
            </div>
        );
    }

    export default {
        name: "InvestDetail",
        components: {
            AttachmentList,
            UIDescription,
        },
        data() {
            this.id = this.$route.params.id;


            this.financialColumns = [
                {
                    className: 'primary-column',
                    fixed: 'left',
                    width: 185,
                    key: 'year',
                    renderHeader(h) {
                        return primaryHeaderRender(h, '财务信息', '汇总年份');
                    },
                },
                {
                    width: 180,
                    title: '总资产（亿元）',
                    key: 'totalAsset',
                },
                {
                    width: 180,
                    title: '净资产（亿元）',
                    key: 'netAsset',
                },
                {
                    width: 180,
                    title: '负债率（%）',
                    key: 'liabilities',
                },
                {
                    width: 220,
                    title: '营业收入额（亿元）',
                    key: 'business',
                },
                {
                    width: 252,
                    title: '主营业务收入（亿元）',
                    key: 'mainBusiness',
                },
                // {
                //     width: 180,
                //     title: '净利润（亿元）',
                //     key: 'netProfit',
                // },
                // {
                //     width: 200,
                //     title: '利润总额（亿元）',
                //     key: 'totalProfit',
                // },

            ];
            this.rateColumns = [
                {
                    className: 'primary-column',
                    width: 185,
                    key: 'year',
                    renderHeader(h) {
                        return primaryHeaderRender(h, '评级信息', '汇总年份');
                    },
                },
                {
                    title: '主体评级',
                    key: 'main',
                },
                {
                    title: '评级展望',
                    key: 'wish',
                },
                {
                    title: '评级机构',
                    key: 'organization',
                },
                {
                    title: '评级时间',
                    key: 'year',
                    tooltip: true,
                },
            ];


            financingRender.id = this.id;

            function financingRender(h, { column, index, row }) {
                const info = row[column.key];
                if (!info) {
                    return <span>/</span>;
                }

                // 只能将id传递下去，详情组件再次获取数据
                let imgs = require('./zq.png');
                return (
                    <router-link to={`/BondDetail/${financingRender.id}/${column.key}/${index}`}><img style="width:30px"
                                                                                                      src={require('./zq.png')}/>
                    </router-link>
                );
            }

            this.financingColumns = [
                {
                    className: 'primary-column',
                    fixed: 'left',
                    width: 185,
                    key: 'year',
                    renderHeader(h) {
                        return primaryHeaderRender(h, '债券类型', '汇总年份');
                    },
                },
                {
                    title: '企业债券',
                    width: 200,
                    key: 'enterpriseBond',
                    render: financingRender,
                },
                {
                    title: '公司债券',
                    width: 200,
                    key: 'companyBond',
                    render: financingRender,
                },
                {
                    title: '中小企业私募债券',
                    width: 200,
                    key: 'middleBond',
                    render: financingRender,
                },
                {
                    title: '非公开发行债券',
                    width: 200,
                    key: 'unpublicBond',
                    render: financingRender,
                },
                {
                    title: '企业资产支持证券',
                    width: 200,
                    key: 'enterpriseAssetBond',
                    render: financingRender,
                },
                {
                    title: '信贷资产支持证券',
                    width: 200,
                    key: 'credit',
                    render: financingRender,
                },
                {
                    title: '超短期融资券（SCP）',
                    width: 280,
                    key: 'SCP',
                    render: financingRender,
                },
                {
                    title: '短期融资券（CP）',
                    width: 200,
                    key: 'CP',
                    render: financingRender,
                },
                {
                    title: '中期票据（MTN）',
                    width: 200,
                    key: 'MTN',
                    render: financingRender,
                },
                {
                    title: '定向工具（PPN）',
                    width: 240,
                    key: 'PPN',
                    render: financingRender,
                },
                {
                    title: '资产支持票据（ABN）',
                    width: 240,
                    key: 'ABN',
                    render: financingRender,
                },
                {
                    title: '项目收益票据（PRN）',
                    width: 240,
                    key: 'PRN',
                    render: financingRender,
                },
                {
                    title: '债务融资工具（DFI）',
                    width: 240,
                    key: 'DFI',
                    render: financingRender,
                },
                {
                    title: '绿色债务融资工具（GN）',
                    width: 280,
                    key: 'GN',
                    render: financingRender,
                },
            ];

            this.list = Array(10).fill({
                name: '省级城投机构',
            },);
            return {
                detail: {},
                incomeColumns: null,
            };
        },
        methods: {
            loadDetail() {
                return this.http.get(this.api.companyData.detail, { id: this.id }).then(res => {
                    this.detail = res.data[0];
                });
            },
            toDetail(id) {
                this.$router.push({ path: `/newsDetail/${id}`, query: { type: '新闻' } });
            },
            initIncomeColumns() {
                if (!Array.isArray(this.detail.incomeInfo)) {
                    return;
                }

                const incomeColumns = [
                    {
                        className: 'primary-column',
                        width: 185,
                        key: 'year',
                        renderHeader(h) {
                            return primaryHeaderRender(h, '项目类型', '汇总年份');
                        },
                    },
                ];

                // format innerData to map && pick colName
                const allColNameMap = {};
                this.detail.incomeInfo.forEach(item => {
                    if (!item.data) {
                        return;
                    }
                    item.data = item.data.reduce((acc, item) => {
                        if (!allColNameMap[item.name]) {
                            incomeColumns.push(renderIncomeSubHeader(item.name));
                        }
                        allColNameMap[item.name] = 1;

                        acc[item.name] = item;
                        return acc;
                    }, {});
                });
                this.incomeColumns = incomeColumns;
                return;

                function renderIncomeSubHeader(fieldName) {
                    return {
                        title: fieldName,
                        key: fieldName,
                        children: [
                            {
                                minWidth: 80,
                                renderHeader(h) {
                                    return <span style="font-size:16px">金额</span>;
                                },
                                render(h, { row }) {
                                    return <span>{row.data[fieldName] && row.data[fieldName].amount || '/'}</span>;
                                },
                            },
                            {
                                minWidth: 80,
                                renderHeader(h) {
                                    return <span style="font-size:16px">占比</span>;
                                },
                                render(h, { row }) {
                                    return <span>{row.data[fieldName] && row.data[fieldName].per || '/'}</span>;
                                },
                            },
                        ],
                    };
                }
            },
        },
        created() {
            this.$store.commit('app/setBgColor1');
            this.loadDetail().then(() => {
                //
                this.initIncomeColumns();
            });
        },
    };
</script>

<style lang="scss" scoped>
    @function getBorder() {
        @return 1px solid #D8D8D8
    }

    .project-container__wrapper {
        background-color: #fff;
    }

    .com-name {
        text-align: center;
        line-height: 18px;
        font-size: 18px;
        font-weight: 600;
        color: rgba(0, 0, 0, 1);
    }

    .intro {
        $row-height: 39px;
        $left-width: 386px;
        $main-height: $row-height * 6 + 1 + 1; // 上下边框


        overflow: hidden;

        .left.base-info {
            position: relative;
            z-index: 1;
            float: left;
            width: $left-width;
            border-top: getBorder();
            border-left: getBorder();
            height: $main-height;

            li {
                padding-left: 20px;
                height: $row-height;
                line-height: $row-height;
                border-right: getBorder();
                border-bottom: getBorder();

                &:first-child {
                    text-align: center;
                    font-size: 18px;
                    color: #fff;
                    background: #4166F5;
                }

                span {
                    display: inline-block;
                    vertical-align: middle;
                }

                .label {
                    width: 84px; // 选最长的
                    font-size: 14px;
                    color: rgba(88, 96, 102, 1);
                }

                .value {
                    padding-left: 30px;
                    font-size: 14px;
                    color: rgba(0, 0, 52, 1);
                }
            }
        }

        .right {
            margin-left: $left-width + 20px;
            border: getBorder();
            height: $main-height;

            .caption {
                line-height: $row-height;
                text-align: center;
                font-size: 18px;
                background: #4166F5;
                color: rgba(255, 255, 255, 1);
            }

            .content {
                overflow-y: auto;
                padding: 14px 4px 14px 15px;
                height: $row-height * 5;


                font-size: 14px;
                color: rgba(88, 96, 102, 1);
                line-height: 30px;

                &::-webkit-scrollbar-thumb {
                    background: #4166F5;
                }
            }
        }
    }


    ::v-deep {
        .ivu-table-header, .ivu-table-fixed-header {
            th {
                height: 38px;
                /*border: none;*/
                background-color: #ebf7ff !important;
            }
        }


        .primary-column {
        }

        .primary-header {
            margin: 0 -18px;

            .left, .right {
                position: relative;
                display: inline-block;
                padding-top: 12px;
                padding-bottom: 12px;
                line-height: 14px;
                font-size: 14px;
                vertical-align: middle;
                color: rgba(255, 255, 255, 1);
            }

            .left {
                margin-right: 16px + 1px;
                padding-left: 20px;
                padding-right: 10px;
                background-color: #4166F5;

                &::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: -16px;

                    width: 0;
                    height: 0;
                    border-top: 38px solid #4166F5;
                    border-right: 16px solid transparent;
                }
            }

            .right {
                padding-right: 16px;
                padding-left: 10px;
                background-color: #358BFE;

                &::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -16px;

                    width: 0;
                    height: 0;
                    border-bottom: 38px solid #358BFE;
                    border-left: 16px solid transparent;
                }
            }
        }
    }

    .trade-list {
        li {
            display: flex;
            border-bottom: 1px solid #eee;
            padding: 15px 0;
            font-size: 18px;
            align-items: center;
            width: 100%;


            & > .circle {
                width: 10px;
                height: 10px;
                background: #D8D8D8;
                -webkit-border-radius: 10px;
                -moz-border-radius: 10px;
                border-radius: 10px;
                margin-right: 15px;
            }

            & > p {
                flex: 1;
                font-size: 15px;

                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                margin-right: 10px;
                width: 338px;
            }

            & > span {
                font-size: 14px;
            }
        }
    }

</style>
