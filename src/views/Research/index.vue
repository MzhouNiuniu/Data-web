<template>
    <section class="project-container__wrapper">
        <div class="project-container">
            <div class="title-wrap">
                <div class="title">研究报告</div>
            </div>
            <div class="first-list">
                <div class="listImg" :style="{backgroundImage: 'url('+require('../../../public/image/noData.png')+')'}"></div>
                <div class="listContent">
                    <p class="title">这是一个研究报告标题这是一个研究报告标题这是一个研究报告标题</p>
                    <p class="man">研究人：mm</p>
                    <p class="man">研究人所属机构：城投研究所</p>
                    <p class="content">这是一段报告主要内容这是一段报告主要内容这是一段报告主要内容这是一段新闻主要内容这是一段新闻主要内容这是一段新闻主要内容这是一段报告主 要内容这是一段报告主要内容这是一段报告主要内容这是一段新闻主要内容这是一段新闻主要内容这是一段新闻主要内容这是一段报告主要内容段报告主 要内容段报告主要内容段报告主要内这是一段报告主要内容这是一段报告主要内容这是一段报告主要内容这是一段新闻主要内容这是一段新闻主要内容这是一段新闻主要内容这是一段报告主 要内容这是一段报告主要内容这是一段报告主要内容这是一段新闻主要内容这是一段新闻主要内容这是一段新闻主要内容这是一段报告主要内容段报告主 要内容段报告主要内容段报告主要内</p>
                    <router-link class="toDetail" to="/research">查看详情</router-link>
                </div>
            </div>
            <div class="center-list">
                <div>
                    <div>
                        <span class="list-title">专题报告</span>
                        <span class="more-wrapper" @click="toMore('/studyList/',0)">了解更多</span>
                    </div>
                    <ul class="trade-list">
                        <li @click="toDetail()">
                            <div class="circle"></div>
                            <p>这是一个专题报告标题这是一个专题报告标题这是一个专题报告标题这是一个专题报告标题</p>
                            <span>2019年9月6日</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <div>
                        <span class="list-title">定期报告</span>
                        <span class="more-wrapper" @click="toMore('/studyList/',1)">了解更多</span>
                    </div>
                    <ul class="trade-list">
                        <li @click="toDetail()" >
                            <div class="circle"></div>
                            <p>这是一个专题报告标题这是一个专题报告标题</p>
                            <span>2019年9月6日</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="title-wrap">
                <div class="title">经典案例</div>
                <span class="more-wrapper">了解更多</span>
            </div>
            <div class="last-list">
                <ul class="trade-list">
                    <li @click="toDetail()">
                        <div class="circle"></div>
                        <p>这是一个专题报告标题这是一个专题报告标题这是一个专题报告标题这是一个专题报告标题</p>
                        <span>2019年9月6日</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>


    export default {
        name: "Research",

        data() {
            return {};
        },
        methods: {
            toMore(path,index){
                console.log(`${path}${index}`)
                this.$router.push({path:`${path}${index}`})
            }
        },
        created() {

        },
    };
</script>

<style lang="scss" scoped>
    .more-wrapper {
        color: $sign-color;
        font-size: 14px;
        font-weight: bold;
        float: right;
    }
    .more-wrapper:after{
        content:'+';
        font-size: 18px;
        margin-left: 10px;
    }
    .trade-list{
        li{
            display: flex;
            border-bottom: 1px solid #eee;
            padding: 15px 0;
            font-size: 18px;
            align-items:center;

            & > .circle{
                width: 10px;
                height: 10px;
                background: #D8D8D8;
                -webkit-border-radius: 10px;
                -moz-border-radius: 10px;
                border-radius: 10px;
                margin-right: 15px;
            }
            & >p{
                flex: 1;
                color: $list-title-color;
                font-weight: bold;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                margin-right: 10px;
            }
            & > span{
                color: #586066;
                font-size: 14px;
                font-weight: bold;
            }
        }
    }
    .project-container {
        margin-top: 10px;
        .title-wrap {
            line-height: 45px;
            border-bottom: 1px solid #EEEEEE;
            .title {
                display: inline-block;
                font-size: 24px;
                color: $sign-color;
                font-weight: 600;
                border-bottom: 4px solid $primary-color;
                padding-bottom: 10px;
            }
        }
        .first-list{
            display: flex;
            height: 200px;
            margin-top: 20px;

            & > .listImg{
                width: 220px;
                height: 200px;
                background:center no-repeat;
                -webkit-background-size: cover;
                background-size: cover;
            }
            & > .listContent{
                position: relative;
                flex: 1;
                padding: 15px;
                background: #F6FBFF;

                & > p{
                    margin-bottom: 5px;
                }
                .title{
                    color: #000;
                    font-weight: bold;
                    font-size: 20px;
                }
                .man{
                    color: #A8ACAF;
                    font-size: 12px;
                }
                .content{
                    font-size: 12px;
                    color: $list-title-color;
                    display: -webkit-box;
                    word-break: break-all;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    line-height: 22px;
                }
                .toDetail{
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    display: inline-block;
                    background: #358BFE;
                    color: #fff;
                    padding: 5px 20px;
                }
            }
        }
        .center-list{
            margin: 20px 0;

            & > div{
                display: inline-block;
                width: calc(50% - 10px);
                border: 1px solid #BFC5CA;

                & > div{
                    border-bottom: 1px solid #BFC5CA;
                    padding: 20px 0px;
                    padding-right: 15px;

                    .list-title{
                        color: #000;
                        font-size: 20px;
                        font-weight: bold;
                        border-left: 4px solid $sign-color;
                        padding-left: 15px;
                    }
                }
                .trade-list{
                    padding: 0 20px;
                }

            }
            & > div:first-child{
                margin-right: 20px;
            }
            .more-wrapper{
                border: 1px solid;
                padding: 2px 10px;
            }
        }
    }
</style>
