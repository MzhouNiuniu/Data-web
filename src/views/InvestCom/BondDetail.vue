<template>
    <section class="project-container">
        <p class="detail-page-caption">
            <span>债券信息</span>
        </p>
        <table width="100%" border="2" class="mt-30">
            <tr>
                <th>
                    债券代码
                </th>
                <td>
                    {{detail.code}}
                </td>
                <th>
                    债券简称
                </th>
                <td>
                    {{detail.abbreviation}}
                </td>
            </tr>
            <tr>
                <th>
                    发行人
                </th>
                <td colspan="3">
                    {{detail.issuer}}
                </td>
            </tr>
            <tr>
                <th>
                    债券全称
                </th>
                <td colspan="3">
                    {{detail.abbreviation}}
                </td>
            </tr>
            <tr>
                <th>
                    债券类型
                </th>
                <td colspan="3">
                    {{detail.type}}
                </td>
            </tr>
            <tr>
                <th>
                    发行规模（亿元）
                </th>
                <td colspan="3">
                    {{detail.scale}}
                </td>
            </tr>
            <tr>
                <th>
                    起息时间
                </th>
                <td>
                    {{formateDate(detail.startTime)}}
                </td>
                <th>
                    到期时间
                </th>
                <td>
                    {{ formateDate(detail.endTime)}}
                </td>
            </tr>
            <tr>

                <th>
                    还本方式
                </th>
                <td colspan="3">
                    {{detail.repaymentWay}}
                </td>

            </tr>
            <tr>
                <th>
                    付息方式
                </th>
                <td colspan="3">
                    {{detail.interestWay}}
                </td>
            </tr>
            <tr>
                <th>
                    票面利率（%）
                </th>
                <td>
                    {{detail.payValue}}
                </td>
                <th>
                    债券期限（年）
                </th>
                <td>
                    {{detail.deadlineBond}}
                </td>
            </tr>
            <tr>
                <th>
                    债券评级
                </th>
                <td>
                    {{detail.rateBond}}
                </td>
                <th>
                    主体评级
                </th>
                <td>
                    {{detail.mainType}}
                </td>
            </tr>
            <tr>
                <th>
                    主承销商
                </th>
                <td colspan="3">
                    {{detail.principalUnderwriter}}
                </td>
            </tr>
        </table>
        <div class="hr-dashed mt-20"></div>
        <UIDescription title="下载" class="mt-20">
            <AttachmentList title="" :value="allFiles"/>
        </UIDescription>

        <div class="hr-dashed"></div>
        <!-- 增信措施 -->
        <UIDescription title="备注信息" class="mt-20" :text="detail.addEnhancementWay"/>

        <div class="hr-dashed"></div>
        <UIDescription title="债券记录" class="mt-20">
            <Table class="project-ivu-table" stripe :columns="recordColumns" :data="detail.record"/>
            <!--            <Button type="info" :to="`/BondRecordList/111`">查看债券记录</Button>-->
        </UIDescription>
    </section>
</template>

<script>
    import AttachmentList from '@components/AttachmentList';
    import UIDescription from '@components/ui/Description';

    export default {
        name: 'BoundDetail',
        components: {
            AttachmentList,
            UIDescription,
        },
        data() {
            this.id = this.$route.params.id;
            this.recordColumns = [
                {
                    width: 140,
                    title: '债券简称',
                    key: 'abbreviation',
                },
                {
                    width: 140,
                    title: '成交日期',
                    key: 'makeTime',
                },
                {
                    width: 180,
                    title: '成交金额（亿元）',
                    key: 'makeMoney',
                },
                {
                    width: 120,
                    title: '剩余期限',
                    key: 'remainingTime',
                },
                {
                    width: 110,
                    title: '成交利率',
                    key: 'makeRate',
                },
                {
                    width: 140,
                    title: '偏离（BP）',
                    key: 'BP',
                },
                {
                    width: 180,
                    title: '相关文件',
                    render: (h, { row }) => <DownloadFile file={row.aboutFile}/>,
                },
                {
                    minWidth: 180,
                    title: '其他',
                    render: (h, { row }) => <DownloadFile file={row.other}/>,
                },
            ];

            return {
                detail: {},
            };
        },
        computed: {
            allFiles() {
                const { detail } = this;

                // 还未获取数据
                if (!detail.code) {
                    return;
                }

                const stack = [];
                detail.aboutFile && stack.push(... detail.aboutFile);
                detail.specification && stack.push(... detail.specification);
                detail.report && stack.push(... detail.report);
                return stack;
            },
        },
        methods: {
            formateDate(datetime) {
                function addDateZero(num) {
                    return (num < 10 ? "0" + num : num);
                }
                let d = new Date(datetime);
                let formatdatetime = d.getFullYear() + '-' + addDateZero(d.getMonth() + 1) + '-' + addDateZero(d.getDate())
                return formatdatetime;
            },

            loadDetail() {
                this.http.get(this.api.companyData.getDetails, { id: this.id }).then(detail => {

                    this.detail=detail.data[0] ;
                });
            },
        },
        created() {
            this.loadDetail();
        },
    };
</script>

<style lang="scss" scoped>
    .project-container {
        padding-bottom: 20px;
    }

    table {
        border-collapse: collapse;
        border: 2px solid #BFC5CA;
        text-align: left;
        color: rgba(51, 51, 51, 1);

        th, td {
            padding: 12px 0 12px 30px;
            line-height: 20px;

        }

        th {
            width: 200px;
            font-weight: 500;
            font-size: 20px;
            background: rgba(246, 251, 255, 1);
        }

        td {
            font-weight: 400;
            font-size: 16px;
            min-width: 300px;
            line-height: 1.5;
        }
    }
</style>
