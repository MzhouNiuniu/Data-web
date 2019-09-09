<template>
    <section class="project-container__wrapper">
        <div class="project-container">
            <p class="page-title-1 pt-24">专家信息</p>
            <div class="hr-slide-style-2 mt-20"></div>
            <div class="brief mt-30 clearfix">
                <div class="left">
                    <div class="avatar">
                        <img :src="detail.photos" alt="expert-avatar">
                    </div>
                </div>
                <div class="right">
                    <!-- expert-info -->
                    <p class="name">
                        {{detail.name}}
                    </p>
                    <p class="text-tag-group mt-20">
                        <span class="text-tag tiny sex">
                           {{detail.sex}}
                        </span>
                        <!--                        <span class="text-tag info small">-->
                        <!--                            {{detail.direction}}-->
                        <!--                        </span>-->
                    </p>
                    <p class="introduce mt-10">
                        {{detail.current}}
                    </p>
                </div>
            </div>
            <div class="hr-dashed ml-20 mr-20 mt-14"></div>
            <!-- 个人经历 -->
            <div class="mt-20">
                <p class="card-title_arrow">
                    个人经历/<span class="letter">Personal</span>
                </p>
                <p class="mt-14 card-content">
                    {{detail.experience}}
                </p>
            </div>
            <div class="hr-dashed ml-20 mr-20 mt-14"></div>
            <!-- 研究方向 -->
            <div class="mt-14">
                <p class="card-title_arrow">
                    研究方向/<span class="letter">Research</span>
                </p>
                <p class="mt-14 card-content">
                    {{detail.direction}}
                </p>
            </div>
            <div class="hr-dashed ml-20 mr-20 mt-14"></div>
            <!-- 研究成果 -->
            <div class="mt-14">
                <p class="card-title_arrow">
                    研究成果/<span class="letter">Result</span>
                </p>
                <p class="mt-14 card-content">
                    {{detail.achievement}}
                </p>
            </div>
            <div class="hr-dashed ml-20 mr-20 mt-14"></div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "ExpertDetail",
        data() {
            return {
                id: this.$route.params.id,
                detail: {},
            };
        },
        methods: {
            loadDetail() {
                this.http.get(this.api.repo.expert.detail, {
                    id: this.id,
                }).then(res => {
                    const formData = res.data && res.data[0];
                    if (!formData) {
                        this.$router.replace('/expertRepo');
                        alert('数据不存在');
                        return;
                    }

                    formData.achievement && formData.achievement[0] && (formData.achievement = formData.achievement[0]); // test

                    this.detail = formData;

                    // xss 攻击
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
        .left {
            float: left;
            width: 19%;


            .avatar {
                position: relative;
                padding-bottom: 84.21%;

                img {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                }
            }
        }

        .right {
            margin-left: 20px;
            padding-left: 19%;
        }

        // expert-info
        .name {
            line-height: 18px;
            font-size: 18px;
            font-weight: bold;
            color: rgba(0, 0, 52, 1);
        }

        .sex {
            color: rgba(255, 255, 255, 1);
            background: #358BFE;
            border-color: #358BFE;
        }

        .introduce {
            line-height: 26px;
            font-size: 14px;
            font-weight: 600;
            color: rgba(88, 96, 102, 1);
        }
    }
</style>
