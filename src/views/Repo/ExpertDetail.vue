<template>
    <section class="project-container__wrapper">
        <div class="project-container">
            <p class="detail-page-caption">
                <span>智库平台</span>
            </p>
            <div class="brief mt-30 clearfix">
                <div class="left avatar">
                    <img :src="detail.photos" alt="expert-avatar">
                </div>
                <div class="right">
                    <!-- expert-info -->
                    <p class="name text-ellipsis">
                        {{detail.name}}
                    </p>

                    <p class="introduce mt-20 project-scroll">
                        {{detail.current}}

                    </p>
                </div>
            </div>
            <div class="hr-dashed mt-30"></div>
            <UIDescription title="个人经历" class="mt-20" :text="detail.experience"/>
            <div class="hr-dashed mt-20"></div>
            <UIDescription title="研究方向" class="mt-20" :text="detail.direction"/>
            <div class="hr-dashed mt-20"></div>
            <UIDescription title="研究成果" class="mt-20" :text="detail.achievement"/>
            <div class="hr-dashed mt-20"></div>
        </div>
    </section>
</template>

<script>
    import UIDescription from '@ui/Description';

    export default {
        name: "ExpertDetail",
        components: {
            UIDescription,
        },
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
                    //     current: '这是一个公司名称这是一个公司名称这是一个公司名称这是一个公司名称这是一个公司名称这是一个公司名称这是一个公司名称这是一个公司名称这是一个公司名称这是一个公司名称这是一个公司名称这是一个公司名称这是一个公司名称这是一个公司名称这是一个公司名称这是一个公司名称这是一个公司名称这是一个公司名称这是一个公司名称这是一个公司名称这是一个公司名称这是一个公司名称这是一个公司名称这是一个公司名称这是一个公司名称这是一个公司名称',
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
        padding-bottom: 32px;
        background-color: #fff;
    }

    .brief {
        .left {
            float: left;
            width: 216px;
            height: 164px;

            img {
                width: 100%;
                height: 100%;
            }

        }

        .right {
            margin-left: 20px;
            padding-left: 216px;
        }

        // expert-info
        .name {
            line-height: 24px;
            font-size: 24px;
            font-weight: 600;
            color: rgba(34, 34, 34, 1);
        }

        .introduce {
            line-height: 26px;
            font-size: 14px;
            font-weight: 600;
            color: #586066;
            height: 120px;
            padding: 15px;
            border: 1px solid #BFC5CA;
            overflow-y: auto;
            padding: 14px 15px;
            height: 120px;
            line-height: 32px;
            font-size: 16px;
            color: #333;
            border: 1px solid rgba(191, 197, 202, 1);


        }
    }
</style>
