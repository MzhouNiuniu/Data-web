<template>
    <section class="project-container__wrapper">
        <div class="project-container">
            <p class="detail-page-caption">
                <span>机构信息</span>
            </p>
            <div class="brief">
                <h1 class="title">
                    {{detail.name}}
                </h1>
                <ul class="info-list">
                    <li>
                        <p class="label">
                            机构网址：
                        </p>
                        <p class="value">
                            {{detail.website}}
                        </p>
                        <div class="hr-dashed"></div>
                    </li>
                    <li>
                        <p class="label">
                            所在地：
                        </p>
                        <p class="value">
                            {{detail.province}}{{detail.city}}{{detail.district}} ，{{detail.address}}
                        </p>
                        <div class="hr-dashed"></div>
                    </li>
                    <li>
                        <p class="label">
                            经营范围：
                        </p>
                        <p class="value">
                            {{detail.scope}}
                        </p>
                        <div class="hr-dashed"></div>
                    </li>
                    <li>
                        <p class="label">
                            专业领域：
                        </p>
                        <p class="value">
                            投融资领域、工程领域
                        </p>
                    </li>
                </ul>
                <div class="hr-slide-style-1 ml-20 mr-20" style="margin-top: 15px;"></div>
                <p class="introduce">
                    {{detail.intro}}
                </p>
            </div>
            <div class="hr-dashed ml-20 mr-20" style="margin-top: 23px;"></div>
            <UIDescription title="服务内容" class="mt-20" :text="detail.service"/>
            <div class="hr-dashed ml-20 mr-20 mt-30"></div>
            <UIDescription title="合作经验" class="mt-20">
                <ul class="cooperation-list">
                    <li v-for="(item,index) in detail.experience" :key="index">
                        <p class="order-num">
                            {{getOrderNum(index)}}
                        </p>
                        <p class="card-content">
                            项目名称：{{item.name}}
                        </p>
                        <p class="card-content">
                            项目类型：{{item.type}}
                        </p>
                        <p class="card-content">
                            合作城投公司名称：{{item.companyName}}
                        </p>
                        <div class="hr-dashed"></div>
                    </li>
                </ul>
            </UIDescription>
            <div class="hr-slide-style-1 mt-20"></div>
        </div>
    </section>
</template>

<script>
    import UIDescription from '@ui/Description'

    export default {
        name: "OrganizationDetail",
        components: {
            UIDescription,
        },
        data() {
            return {
                id: this.$route.params.id,
                detail: {},
            }
        },
        methods: {
            loadDetail() {
                this.http.get(this.api.repo.organization.detail, {
                    id: this.id,
                }).then(res => {
                    const formData = res.data && res.data[0]
                    if (!formData) {
                        this.$router.replace('/organizationRepo')
                        alert('数据不存在')
                        return
                    }

                    this.detail = formData
                    // this.detail = {
                    //     name: '这是一个城投新闻标题这是一个城投新闻标题这是一个城投新闻标题',
                    //     releaseTime: '2019-9-03 14:23',
                    //     content: `<p>6) 地下室单层建${'<img src=\'x\' onerror=\'console.error(\"xss attack\")\'>'}筑面积3.1万㎡，长316M、宽121M，外墙总长度约851m，设计为无缝结构，属超长宽结构。 深圳华润中心一期工程于2004年12月9日投入使用以来获得业主的好评，于2005年荣获广东省优良样板工程奖和于2008年荣获香港优质建筑大奖。 </p><p></p><p>1) 月牙形中庭屋面、发光屋顶、米兰大道、正锥幕墙、倒锥幕墙、中庭栏杆等异型玻璃加工安装量大。 </p><p></p><p>2) 结构设计复杂，使用了1500吨预应力、钢管芯柱、钢砼组合结构、钢屋架、主体钢结构、钢桁架约5500吨，主体施工技术难度大。 3) 高支模部位</p>`,
                    //     accessory: 'https://www.w3school.com.cn/i/eg_tulip.jpg,https://www.w3school.com.cn/i/eg_tulip.jpg',
                    //     Tcompany: '这是一个公司名称这是一个公司名称',
                    //     Tcontact: '025-8346255',
                    //     Tphotos: 'https://www.w3school.com.cn/i/eg_tulip.jpg',
                    // };
                })
            },
            getOrderNum(index) {
                if (index + 1 < 10) {
                    return '0' + String(index + 1)
                }
                return index + 1
            },
        },
        created() {
            this.$store.commit('app/setBgColor1')
            this.loadDetail()
        },
    }
</script>

<style lang="scss" scoped>
    @import "./public";

    .project-container__wrapper {
        margin-top: 30px;
        padding-bottom: 20px;
        background-color: #fff;
    }

    .brief {
        margin-top: 30px;

        .title {
            line-height: 24px;
            text-align: center;
            font-size: 24px;
            font-weight: 500;
            color: rgba(34, 34, 34, 1);
        }

        .info-list {
            $label-width: 90px;
            margin-top: 10px;
            line-height: 26px;

            li {
                padding-top: 15px;
            }

            .hr-dashed {
                margin-left: $label-width;
                margin-top: 15px;
            }

            .label {
                float: left;
                padding-top: 5px;
                width: $label-width;
                line-height: 18px;
                font-size: 18px;
                color: #666666;
            }

            .value {
                margin-left: $label-width;
                font-size: 16px;
                color: #333333;
            }
        }

        .introduce {
            margin-top: 23px;
            line-height: 30px;
            font-size: 16px;
            color: rgba(51, 51, 51, 1);
        }
    }


    .cooperation-list {
        li {
            position: relative;

            .card-content {
                padding: 20px;
            }

            // 目前只支持2位数
            .order-num {
                position: absolute;
                left: 0;
                top: 0;
                width: 16px;
                height: 17px;
                line-height: 15px;
                text-align: center;
                letter-spacing: -1px;
                font-size: 12px;
                color: #fff;
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
