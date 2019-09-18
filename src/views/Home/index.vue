<template>
    <section style="margin-bottom: -22px;">
        <Carousel loop :height="500" class="banner">
            <CarouselItem v-for="(item,index) in imgSrcList" :key="index">
                <a class="trigger" href="#" :style="{backgroundImage:`url('${item}')`}"></a>
            </CarouselItem>
        </Carousel>
        <div class="news-container clearfix">
            <div class="project-container">
                <p class="part-title">
                    <span>新闻动态</span>
                    <span>news</span>
                </p>
                <div class="mt-32 content">
                    <div class="left">
                        <div class="cover" :style="{backgroundImage: `url('/image/noPic.png')`}">
                            <p class="title text-ellipsis">
                                湖南省住房和城乡建设厅解读《关于推进城乡…
                            </p>
                        </div>
                        <p class="date mt-20">
                            发布时间：2019-09-13 14:23
                        </p>
                        <p class="intro mt-16">
                            <TextEllipsis
                                    fill
                                    :rows="3"
                                    value="这是一段新闻摘要这是一段新闻摘要这是一段新闻摘要这是一 摘要
                            这是一段新闻摘要这是一段新闻摘要这是一段新闻摘要这 是一段新
                            闻摘要这是一段新闻摘要这是一段新闻摘要这是…"
                            />
                        </p>
                    </div>
                    <div class="right clearfix">
                        <ul class="menu">
                            <li>行业动态</li>
                            <li>城投新闻</li>
                            <li class="active">智库动态</li>
                            <li>项目动态</li>
                        </ul>
                        <ul class="menu-content">
                            <li v-for="item in 3" :key="item">
                                <router-link class="look-detail" to="/">
                                    了解更多
                                </router-link>
                                <div class="header">
                                    <router-link class="title ue-link text-ellipsis" to="/">
                                        这是一个新闻标题这是一个新闻标题
                                    </router-link>
                                    <p class="date">
                                        [2019-09-12]
                                    </p>
                                </div>
                                <p class="content">
                                    <TextEllipsis
                                            fill
                                            :rows="2"
                                            value="这是一段新闻摘要这是一段新闻摘要这是一段新闻摘要这是一 摘要
                            这是一段新闻摘要这是一段新闻摘要这是一段新闻摘要这 是一段新
                            闻摘要这是一段新闻摘要这是一段新闻摘要这是…"
                                    />
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <BigData/>
        <div class="about-us-container">
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
                <div class="project-container">
                    <h1>
                        此处一个 - 层叠式轮播图
                    </h1>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import TextEllipsis from '@components/TextEllipsis'
    import BigData from './BigData'


    export default {
        name: 'Home',
        components: {
            BigData,
            TextEllipsis,
        },
        data() {
            this.imgSrcList = [
                '/image/banner/1.png',
                '/image/banner/2.png',
                '/image/banner/3.png',
            ]
            return {}
        },
        created() {
            this.$store.commit('app/setBgColor1')
        },
    }
</script>
<style lang="scss" scoped>
    ::v-deep {
        .banner {
            .trigger {
                display: block;
                width: 100%;
                height: 100%;
                background-size: cover;
                background-position: center;
            }

            .ivu-carousel-dots {
                bottom: 13px;

                button {
                    width: 35px;
                    height: 12px;
                    background: rgb(60, 236, 252);
                    border-radius: 6px;
                    opacity: 0.2;
                }

                li {
                    padding: 0;
                    margin: 0 8px;
                }

                .ivu-carousel-active button {
                    width: 12px;
                    height: 12px;
                    background: rgba(2, 166, 82);
                    opacity: 1;
                }
            }

            .ivu-carousel-arrow {
                width: 50px;
                height: 50px;

                & > * {
                    display: none;
                }

                // 此处支持现代浏览器
                &.left {
                    left: calc((100% - 1200px) / 2);
                    background: url("~@public/icon/circle-arrow-left.png") no-repeat scroll top left / cover;
                }

                &.right {
                    right: calc((100% - 1200px) / 2);
                    background: url("~@public/icon/circle-arrow-right.png") no-repeat scroll top left / cover;
                }
            }
        }
    }

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

    .news-container {
        padding-top: 40px;
        padding-bottom: 40px;
        background: #fff;

        .left {
            float: left;
            margin-bottom: -8px;
            width: 386px;

            .cover {
                position: relative;
                height: 200px;
                background-size: cover;
                background-position: center;

                .title {
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    padding: 0 25px;
                    width: 100%;
                    line-height: 46px;
                    background: rgba(0, 0, 0, 0.5);
                    font-size: 16px;
                    font-weight: bold;
                    color: rgba(255, 255, 255, 1);
                }
            }

            .date {
                line-height: 14px;
                font-size: 14px;
                font-weight: 500;
                color: rgba(102, 102, 102, 1);
            }

            .intro {
                padding-top: 10px;
                border-top: 1px solid rgba(237, 242, 246, 1);
                line-height: 30px;
                font-size: 14px;
                font-weight: 500;
                color: rgba(51, 51, 51, 1);
            }
        }

        .right {
            margin-left: 401px;

            .menu {
                position: relative;
                float: left;
                width: 100px;
                // 106px

                background: rgba(237, 242, 246, 1);


                &::before {
                    content: '';
                    position: absolute;
                    display: block;
                    width: 6px;
                    top: 6px;
                    right: -6px;
                    bottom: 6px;
                    background: rgba(237, 242, 246, 0.5);
                }

                li {
                    padding-left: 15px;
                    line-height: 86px;
                    font-size: 14px;
                    font-weight: 500;
                    color: rgba(51, 51, 51, 1);
                    cursor: pointer;

                    &:hover {
                        color: $sign-color;
                    }

                    &.active {
                        position: relative;
                        color: $sign-color;

                        &::after {
                            content: '';
                            position: absolute;
                            display: block;
                            right: 15px;
                            top: 50%;
                            transform: translateY(-50%);
                            width: 0;
                            height: 0;
                            border-left: 10px solid $sign-color;
                            border-top: 5px solid transparent;
                            border-bottom: 5px solid transparent;
                        }
                    }
                }
            }

            .menu-content {
                margin-left: 131px;

                li {
                    position: relative;
                    margin-bottom: 20px;
                    padding: 13px 0 6px 20px;
                    border: 1px solid rgba(191, 197, 202, 1);

                    &:last-child {
                        margin-bottom: 0;
                    }
                }

                .look-detail {
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    width: 94px;
                    line-height: 24px;
                    font-size: 14px;
                    font-weight: 500;
                    text-align: center;
                    background: rgba(5, 103, 255, 1);
                    color: rgba(255, 255, 255, 1);
                }

                .header {
                    overflow: hidden;

                    .title {
                        width: 70%;
                        line-height: 16px;
                        font-size: 16px;
                        font-weight: 500;
                        color: rgba(51, 51, 51, 1);
                    }

                    .date {
                        float: right;
                        line-height: 14px;
                        font-size: 14px;
                        font-weight: 400;
                        color: rgba(51, 51, 51, 1);
                    }
                }


                .content {
                    margin-top: 6px;
                    line-height: 28px;
                    font-size: 14px;
                    font-weight: 400;
                    color: rgba(51, 51, 51, 1);
                }
            }
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
</style>
