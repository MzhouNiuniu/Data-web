<template>
    <section class="about-us-container">
        <div class="top project-container">
            <p class="part-title">
                <span>关于我们</span>
                <span>about us</span>
            </p>
            <div class="mt-30 content">
                深圳华润中心一期工程占地3.7万平方米，总建筑面积23万平方米，包括深圳万象城购物中心和华润大厦建筑群，其中，写字楼建筑面积7.6万平方米，地下3层、地上29
                层，万象城购物中心，建筑面积15.3万平方米，地下2层，地上5层。桩基以上工程于2003年5月28日开工，2004年12月8日完工。华润中心一期工程具有以 下特点： 1)
                月牙形中庭屋面、发光屋顶、米兰大道、正锥幕墙、倒锥幕墙、中庭栏杆等异型玻璃加工安装量大。 2)
                结构设计复杂，使用了1500吨预应力、钢管芯柱、钢砼组合结构、钢屋架、主体钢结构、钢桁架约5500吨，主体施工技术难度大。 3)
                高支模部位多，大于4.5M的建筑面积约有7万㎡，其中最高部位层高12.1M。
                4) 土建主体工程量大，使用了超过2.6万吨钢筋(其中三级钢1.8万吨)、15万立方砼。 5)
                作为商业建筑机电工程量巨大，共2.5亿元，其中电梯92部、变配电量31082KVA、空调制冷量8000RT。
                6) 地下室单层建筑面积3.1万㎡，长316M、宽121M，外墙总长度约851m，设计为无缝结构，属超长宽结构。
            </div>
        </div>
        <div class="bottom">
            <CardCarousel class="project-container" v-if="aptitude.length">
                <div v-for="(item,index) in aptitude" :key="index">
                    <img :src="item" alt="">
                </div>
            </CardCarousel>
        </div>
    </section>
</template>

<script>
    import CardCarousel from '@ui/CardCarousel'

    export default {
        name: 'About',
        components: {
            CardCarousel,
        },
        data() {
            return {
                aptitude: []
            }
        },
        created() {
            this.http.get(this.api.about.index).then(res => {
                try {
                    this.aptitude = res.data.aptitude
                } catch (e) {
                    this.aptitude = []
                }
            })
        },
    }
</script>

<style lang="scss" scoped>
    .part-title {
        text-align: center;
        color: rgba(51, 51, 51, 1);

        &::after {
            content: '';
            display: block;
            margin: 13px auto 0;
            width: 60px;
            height: 4px;
            background: $sign-color;
        }

        span:first-child {
            line-height: 24px;
            font-size: 24px;
            font-weight: 600;
        }

        span:last-child {
            display: block;
            margin-top: 6px;
            line-height: 18px;
            font-size: 18px;
            font-weight: 500;
        }
    }

    .about-us-container {
        .top {
            padding-top: 40px;
            padding-bottom: 22px;

            .content {
                line-height: 32px;
                font-size: 16px;
                font-weight: 500;
                color: rgba(51, 51, 51, 1);
            }
        }

        .bottom {
            position: relative;
            padding-top: 50px;
            padding-bottom: 45px;
            background: rgba(237, 242, 246, 1);

            &::after {
                content: '';
                position: absolute;
                top: 0;
                left: 50%;
                transform: translateX(-50%);
                display: block;
                width: 0;
                height: 0;
                border-top: 29px solid #fff;
                border-right: 14px solid transparent;
                border-left: 14px solid transparent;
            }
        }

    }

    ::v-deep {
        .swiper-slide {
            position: relative; // 默认好像就有

            img {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 250px;
            }
        }

        .swiper-slide-active, .swiper-slide-duplicate-active {
            img {
                width: 270px;
            }
        }
    }
</style>
