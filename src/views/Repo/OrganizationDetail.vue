<template>
    <section class="project-container__wrapper">
        <div class="project-container">
            <p class="page-title-1 pt-24">机构信息</p>
            <div class="brief mt-20">
                <p class="title">
                    {{detail.name}}
                </p>
                <table class="prop-table" cellpadding="0" width="100%">
                    <tr>
                        <td>
                            <p class="label">
                                机构网址：
                            </p>
                        </td>
                        <td>
                            {{detail.website}}
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
                            {{detail.province}}{{detail.city}}{{detail.district}} ，{{detail.address}}
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
                            {{detail.scope}}
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
                    {{detail.intro}}
                </p>
            </div>
            <div class="hr-slide-style-1 mt-20"></div>
            <!-- 服务内容 -->
            <div class="mt-20">
                <p class="card-title_arrow">
                    服务内容/<span class="letter">Service</span>
                </p>
                <p class="mt-14 card-content">
                    {{detail.service}}
                </p>
            </div>
            <div class="hr-dashed ml-20 mr-20 mt-14"></div>
            <!-- 合作经验 -->
            <div class="mt-14 cooperation">
                <p class="card-title_arrow">
                    合作经验/<span class="letter">Cooperation</span>
                </p>
                <ul class="mt-14 list">
                    <li v-for="(item,index) in detail.experience" :key="index">
                        <p class="order-num">
                            {{getOrderNum(index)}}
                        </p>
                        <p class="card-content">
                            {{item.name}}
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
                id: this.$route.params.id,
                detail: {},
            };
        },
        methods: {
            loadDetail() {
                this.http.get(this.api.repo.organization.detail, {
                    id: this.id,
                }).then(res => {
                    const formData = res.data && res.data[0];
                    if (!formData) {
                        this.$router.replace('/organizationRepo');
                        alert('数据不存在');
                        return;
                    }

                    this.detail = formData;
                    // this.detail = {
                    //     name: '这是一个城投新闻标题这是一个城投新闻标题这是一个城投新闻标题',
                    //     releaseTime: '2019-9-03 14:23',
                    //     content: `<p>6) 地下室单层建${'<img src=\'x\' onerror=\'console.error(\"xss attack\")\'>'}筑面积3.1万㎡，长316M、宽121M，外墙总长度约851m，设计为无缝结构，属超长宽结构。 深圳华润中心一期工程于2004年12月9日投入使用以来获得业主的好评，于2005年荣获广东省优良样板工程奖和于2008年荣获香港优质建筑大奖。 </p><p></p><p>1) 月牙形中庭屋面、发光屋顶、米兰大道、正锥幕墙、倒锥幕墙、中庭栏杆等异型玻璃加工安装量大。 </p><p></p><p>2) 结构设计复杂，使用了1500吨预应力、钢管芯柱、钢砼组合结构、钢屋架、主体钢结构、钢桁架约5500吨，主体施工技术难度大。 3) 高支模部位</p>`,
                    //     accessory: 'https://www.w3school.com.cn/i/eg_tulip.jpg,https://www.w3school.com.cn/i/eg_tulip.jpg',
                    //     Tcompany: '这是一个公司名称这是一个公司名称',
                    //     Tcontact: '025-8346255',
                    //     Tphotos: 'https://www.w3school.com.cn/i/eg_tulip.jpg',
                    // };
                });
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
            this.loadDetail();
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
                    min-height: 100%; // 让table自动处理溢出内容
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
