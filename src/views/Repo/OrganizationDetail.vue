<template>
    <section class="project-container__wrapper">
        <div class="project-container">
            <p class="page-title-1 pt-24">机构信息</p>
            <div class="brief mt-20">
                <p class="title">
                    这是一个机构名称
                </p>
                <table class="prop-table" cellpadding="0" width="100%">
                    <tr>
                        <td>
                            <p class="label">
                                机构网址：
                            </p>
                        </td>
                        <td>
                            www:http//12345.com
                            <div class="hr-dashed"></div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="label">
                                所在地：
                            </p>
                        </td>
                        <td>
                            公司总部在南京，在四川、河南、武汉、江西、浙江、河北、重庆、宁夏、辽宁、吉林、海南、甘肃均设有分支机构
                            <div class="hr-dashed"></div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="label">
                                经营范围：
                            </p>
                        </td>
                        <td>
                            资产委托管理；企业重组及改制咨询；企业投资管理咨询；招商咨询及代理；政府采购招标代理；工程项目咨询；工程管理咨询；工程招标代理。
                            资产委托管理；企业重组及改制咨询；企业投资管理咨询；招商咨询及代理；政府采购招标代理；工程项目咨询；工程管理咨询；工程招标代理。
                            资产委托管理；企业重组及改制咨询；企业投资管理咨询；招商咨询及代理；政府采购招标代理；工程项目咨询；工程管理咨询；工程招标代理。
                            资产委托管理；企业重组及改制咨询；企业投资管理咨询；招商咨询及代理；政府采购招标代理；工程项目咨询；工程管理咨询；工程招标代理。
                            资产委托管理；企业重组及改制咨询；企业投资管理咨询；招商咨询及代理；政府采购招标代理；工程项目咨询；工程管理咨询；工程招标代理。
                            资产委托管理；企业重组及改制咨询；企业投资管理咨询；招商咨询及代理；政府采购招标代理；工程项目咨询；工程管理咨询；工程招标代理。
                            <div class="hr-dashed"></div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="label">
                                专业领域：
                            </p>
                        </td>
                        <td>
                            投融资领域、工程领域
                            <div class="hr-dashed"></div>
                        </td>
                    </tr>
                </table>
                <div class="hr-dashed mt-14"></div>
                <p class="introduce">
                    这是一段详细的机构简介这是一段详细的机构简介这是一段详细的机构简介这是一段详细的机构简介这是一段详细的机构简介这是一段详细的机构简介这是一段详细的机构简介这是一段详
                    细的机构简介这是一段详细的机构简介这是一段详细的机构简介这是一段详细的机构简介这是一段详细的机构简介这是一段详细的机构简介这是一段详细的机构简介这是一段详细的机构简
                    介这是一段详细的机构简介这是一段详细的机构简介这是一段详细的机构简介。
                </p>
            </div>
            <div class="hr-slide-style-1 mt-20"></div>
            <!-- 服务内容 -->
            <div class="mt-20">
                <p class="card-title_arrow">
                    服务内容/<span class="letter">Service</span>
                </p>
                <p class="mt-14 card-content">
                    公司成立之初，就明确了发展定位是“卓远铸城投、城投铸城市”，政府投融资企业（含城投）是公司三大客户群体之一，历年承接政府投融资企业项目1000余个。公司始终秉持“以客户为导
                    向，坚定推进本地化服务”服务理念，为城投公司的发展与转型提供价值自信、理论自信和技术支持。
                </p>
            </div>
            <div class="hr-dashed ml-20 mr-20 mt-14"></div>
            <!-- 合作经验 -->
            <div class="mt-14 cooperation">
                <p class="card-title_arrow">
                    合作经验/<span class="letter">Cooperation</span>
                </p>
                <ul class="mt-14 list">
                    <li v-for="(item,index) in 3" :key="index">
                        <p class="order-num">
                            {{getOrderNum(index)}}
                        </p>
                        <p class="card-content">
                            中共党员，博士研究生毕业（经济学），研究员，博士生导师。现任中国市场学会会长，第十三届全国政协委员。曾任中国社会科学院经济研究所所长、党委书记，第十二届全国政协委员，
                            著名经济学家。中共党员，博士研究生毕业（经济学），研究员，博士生导师。现任中国市场学会会长，第十三届全国政协委员。曾任中国社会科学院经济研究所所长、党委书记，第十二届
                            全国政协委员，著名经济学家。
                        </p>
                        <div class="hr-dashed"></div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "OrganizationDetail",
        data() {
            return {
                detail: {},
            };
        },
        methods: {
            getDetail() {
                this.detail = {};
            },
            getOrderNum(index) {
                if (index + 1 < 10) {
                    return '0' + String(index + 1);
                }
                return index + 1;
            },
        },
        created() {
            this.$store.commit('app/setBgColor1');
            this.getDetail();
        },
    };
</script>

<style lang="scss" scoped>
    @import "./public";

    .project-container__wrapper {
        margin-top: 30px;
        padding-bottom: 20px;
        background-color: #fff;
    }

    .brief {
        padding: 0 20px;
        background: #F6FBFF;

        .title {
            padding: 20px 0 14px 0;
            line-height: 20px;
            font-size: 20px;
            font-weight: 800;
            color: rgba(0, 0, 0, 1);

            text-align: center;
            border-bottom: 1px solid rgba(5, 103, 255, 0.5);
        }

        .prop-table {
            margin-top: 15px;

            td {
                padding: 0;
            }

            tr {

                td:nth-child(1) {
                    display: block;
                    padding-top: 15px;
                    white-space: nowrap;

                    .label {
                        padding: 7px 0 7px 10px;
                        line-height: 16px;
                        font-size: 16px;
                        font-weight: 800;
                        color: rgba(5, 103, 255, 1);
                        background: rgba(236, 241, 255, 1);
                        border-radius: 2px;
                    }
                }

                td:nth-child(2) {
                    padding-top: 20px;
                    padding-left: 15px;
                    line-height: 18px;
                    font-size: 14px;
                    font-weight: 600;
                    color: rgba(0, 0, 52, 1);
                }

                .hr-dashed {
                    margin-top: 20px;
                }

                &:last-child {
                    .hr-dashed {
                        display: none;
                    }
                }
            }
        }

        .introduce {
            // 20 - (26-14)/2
            padding: 14px 0;
            line-height: 26px;
            font-size: 14px;
            font-weight: 500;
            color: rgba(0, 0, 52, 1);
        }
    }


    .cooperation {
        .list li {
            position: relative;

            .card-content {
                padding-top: 15px;
            }

            .order-num {
                position: absolute;
                left: 0;
                top: 0;
                width: 16px;
                height: 17px;
                line-height: 15px;
                text-align: center;
                font-size: 12px;
                font-weight: 500;
                color: rgba(253, 136, 42, 1);
                background: url("./image/order-bg.png") no-repeat scroll top left / cover;
            }

            &:last-child {
                .hr-dashed {
                    display: none;
                }
            }
        }
    }
</style>
