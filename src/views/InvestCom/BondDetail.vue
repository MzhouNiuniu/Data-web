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
                    020315
                </td>
                <th>
                    债券简称
                </th>
                <td>
                    债券名称
                </td>
            </tr>
            <tr>
                <th>
                    发行人
                </th>
                <td colspan="3">
                    成都建设投资有限公司
                </td>
            </tr>
            <tr>
                <th>
                    债券全称
                </th>
                <td colspan="3">
                    2019成都建设投资有限公司债券
                </td>
            </tr>
            <tr>
                <th>
                    债券类型
                </th>
                <td colspan="3">
                    企业债券
                </td>
            </tr>
            <tr>
                <th>
                    发行规模（亿元）
                </th>
                <td colspan="3">
                    800,00
                </td>
            </tr>
            <tr>
                <th>
                    起息时间
                </th>
                <td>
                    2019-9-11
                </td>
                <th>
                    到期时间
                </th>
                <td>
                    2026-9-11
                </td>
            </tr>
            <tr>
                <th>
                    还本方式
                </th>
                <td>
                    每月等额
                </td>
                <th>
                    付息方式
                </th>
                <td>
                    按年付息
                </td>
            </tr>
            <tr>
                <th>
                    票面利率（%）
                </th>
                <td>
                    6.8
                </td>
                <th>
                    债券期限（年）
                </th>
                <td>
                    7
                </td>
            </tr>
            <tr>
                <th>
                    债券评级
                </th>
                <td>
                    AAA
                </td>
                <th>
                    主体评级
                </th>
                <td>
                    AA
                </td>
            </tr>
            <tr>
                <th>
                    主承销商
                </th>
                <td colspan="3">
                    南京建设投资有限公司
                </td>
            </tr>
        </table>
        <div class="hr-dashed mt-30"></div>
        <AttachmentList class="mt-20" :value="[1,2,3]"/>
        <div class="hr-dashed mt-4"></div>
        <UIDescription title="备注信息" class="mt-20" text="啊杀杀杀杀杀杀杀杀杀杀杀杀杀杀杀杀杀杀"/>
    </section>
</template>

<script>
    import AttachmentList from '@components/AttachmentList'
    import UIDescription from '@ui/Description'

    export default {
        name: 'BoundDetail',
        components: {
            AttachmentList,
            UIDescription,
        },
    }
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
            width: 300px;
            font-weight: 500;
            font-size: 20px;
            background: rgba(246, 251, 255, 1);
        }

        td {
            font-weight: 400;
            font-size: 16px;
        }
    }
</style>
