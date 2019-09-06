<template>
    <section class="project-container__wrapper">
        <div class="project-container">
            <p class="page-title-1 pt-24">专家信息</p>
            <div class="hr-slide-style-2 mt-20"></div>
            <div class="brief mt-30 clearfix">
                <div class="left">
                    <div class="avatar">
                        <img
                                src="https://lanhuapp.com/web/static/favicon_beta.png"
                                alt="expert-avatar"
                        >
                    </div>
                </div>
                <div class="right">
                    <!-- expert-info -->
                    <p class="name">
                        李毅
                    </p>
                    <p class="text-tag-group mt-20">
                        <span class="text-tag tiny sex">
                            男
                        </span>
                        <span class="text-tag info small">
                            社会学
                        </span>
                    </p>
                    <p class="introduce mt-10">
                        中共党员，博士研究生毕业（经济学），研究员，博士生导师。现任中国市场学会会长，第十三届全国政协委员。曾任中国社会科学院经济研究所所长、
                        党委书记，第十二届全国政协委员，著名经济学家。中共党员，博士研究生毕业（经济学），研究员，博士生导师。现任中国市场学会会长，第十三届
                        全国政协委员。曾任中国社会科学院经济研究所所长、党委书记，第十二届全国政协委员，著名经济学家。
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
                    中共党员，博士研究生毕业（经济学），研究员，博士生导师。现任中国市场学会会长，第十三届全国政协委员。曾任中国社会科学院经济研究所所长、党委书记，第十二届全国政协委员，
                    著名经济学家。中共党员，博士研究生毕业（经济学），研究员，博士生导师。现任中国市场学会会长，第十三届全国政协委员。曾任中国社会科学院经济研究所所长、党委书记，第十二届 全国政协委员，著名经济学家。
                </p>
            </div>
            <div class="hr-dashed ml-20 mr-20 mt-14"></div>
            <!-- 研究方向 -->
            <div class="mt-14">
                <p class="card-title_arrow">
                    研究方向/<span class="letter">Research</span>
                </p>
                <p class="mt-14 card-content">
                    中共党员，博士研究生毕业（经济学），研究员，博士生导师。现任中国市场学会会长，第十三届全国政协委员。曾任中国社会科学院经济研究所所长、党委书记，第十二届全国政协委员，
                    著名经济学家。中共党员，博士研究生毕业（经济学），研究员，博士生导师。现任中国市场学会会长，第十三届全国政协委员。曾任中国社会科学院经济研究所所长、党委书记，第十二届
                    全国政协委员，著名经济学家。 </p>
            </div>
            <div class="hr-dashed ml-20 mr-20 mt-14"></div>
            <!-- 研究成果 -->
            <div class="mt-14">
                <p class="card-title_arrow">
                    研究成果/<span class="letter">Result</span>
                </p>
                <p class="mt-14 card-content">
                    中共党员，博士研究生毕业（经济学），研究员，博士生导师。现任中国市场学会会长，第十三届全国政协委员。曾任中国社会科学院经济研究所所长、党委书记，第十二届全国政协委员，
                    著名经济学家。中共党员，博士研究生毕业（经济学），研究员，博士生导师。现任中国市场学会会长，第十三届全国政协委员。曾任中国社会科学院经济研究所所长、党委书记，第十二届 全国政协委员，著名经济学家。
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
