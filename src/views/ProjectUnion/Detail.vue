<template>
    <section class="project-container__wrapper mt-30">
        <div class="project-container">
            <p class="page-title-1 pt-20">项目合作 </p>
            <div class="hr-slide-style-2 mt-28"></div>
            <div class="caption">
                <h1>{{detail.name}}</h1>
                <div class="info">
                    <p class="date">
                        {{detail.releaseTime}}
                    </p>
                </div>
            </div>
            <div class="main">
                <div class="hr-dashed"></div>
                <p class="content">
                    {{detail.content}}
                </p>
                <div class="hr-dashed mt-12"></div>
            </div>
        </div>
        <div class="footer">
            <h1>
                saasasdas
            </h1>
        </div>
    </section>
</template>

<script>
    export default {
        name: "ProjectUnionDetail",
        data() {
            return {
                id: this.$route.params.id,
                detail: {},
            };
        },
        methods: {
            getDetail() {
                this.detail = {
                    name: '这是一个城投新闻标题这是一个城投新闻标题这是一个城投新闻标题',
                    releaseTime: '2019-9-03 14:23',
                    content: ` 深圳华润中心一期工程占地3.7万平方米，总建筑面积23万平方米，包括深圳万象城购物中心和华润大厦建筑群，其中，写字楼建筑面积7.6万平方米，地下3层、地上29层，万象城购物中 心，建筑面积15.3万平方米，地下2层，地上5层。桩基以上工程于2003年5月28日开工，2004年12月8日完工。华润中心一期工程具有以下特点： 1) 月牙形中庭屋面、发光屋顶、米兰大道、正锥幕墙、倒锥幕墙、中庭栏杆等异型玻璃加工安装量大。 2) 结构设计复杂，使用了1500吨预应力、钢管芯柱、钢砼组合结构、钢屋架、主体钢结构、钢桁架约5500吨，主体施工技术难度大。 3) 高支模部位多，大于4.5M的建筑面积约有7万㎡，其中最高部位层高12.1M。 4) 土建主体工程量大，使用了超过2.6万吨钢筋(其中三级钢1.8万吨)、15万立方砼。 5) 作为商业建筑机电工程量巨大，共2.5亿元，其中电梯92部、变配电量31082KVA、空调制冷量8000RT。 6) 地下室单层建筑面积3.1万㎡，长316M、宽121M，外墙总长度约851m，设计为无缝结构，属超长宽结构。 深圳华润中心一期工程于2004年12月9日投入使用以来获得业主的好评，于2005年荣获广东省优良样板工程奖和于2008年荣获香港优质建筑大奖。 1) 月牙形中庭屋面、发光屋顶、米兰大道、正锥幕墙、倒锥幕墙、中庭栏杆等异型玻璃加工安装量大。 2) 结构设计复杂，使用了1500吨预应力、钢管芯柱、钢砼组合结构、钢屋架、主体钢结构、钢桁架约5500吨，主体施工技术难度大。 3) 高支模部位多，大于4.5M的建筑面积约有7万㎡，其中最高部位层高12.1M。 4) 土建主体工程量大，使用了超过2.6万吨钢筋(其中三级钢1.8万吨)、15万立方砼。 5) 作为商业建筑机电工程量巨大，共2.5亿元，其中电梯92部、变配电量31082KVA、空调制冷量8000RT。 6) 地下室单层建筑面积3.1万㎡，长316M、宽121M，外墙总长度约851m，设计为无缝结构，属超长宽结构。`,
                    accessory: 'https://www.w3school.com.cn/i/eg_tulip.jpg,https://www.w3school.com.cn/i/eg_tulip.jpg',
                    Tcompany: '这是一个公司名称这是一个公司名称',
                    Tcontact: '025-8346255',
                    Tphotos: 'https://www.w3school.com.cn/i/eg_tulip.jpg',
                };
            },
        },
        created() {
            this.$store.commit('app/setBgColor1');

            this.getDetail();
        },
    };
</script>

<style lang="scss" scoped>
    .project-container__wrapper {
        background-color: #fff;
    }

    .caption {
        padding-top: 20px;

        h1 {
            line-height: 18px;
            font-size: 18px;
            font-weight: bold;
            text-align: center;
            color: rgba(0, 0, 52, 1);
        }

        .info {
            margin-top: 15px;
            text-align: right;

            .date {
                display: inline-block;
                padding: 4px 10px;
                line-height: 12px;
                font-size: 12px;
                font-weight: 600;
                color: #FED754;
                border: 1px solid #FED754;
            }
        }
    }

    .main {
        margin-top: 15px;
        padding: 0 20px 0;
        line-height: 28px;
        font-size: 14px;
        color: #586066;

        .content {
            padding-top: 13px; // 20 - (28 - 14) / 2
        }
    }

    .footer {
        height: 200px;
        background-color: #f6fbff;
    }
</style>
