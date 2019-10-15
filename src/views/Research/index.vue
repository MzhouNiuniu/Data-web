<template>
    <section class="project-container__wrapper">
        <div class="project-container">
            <p class="detail-page-caption">
                <span>行业研究</span>
            </p>
            <div class="title-wrap">
                <div class="title">研究报告</div>
                <span class="more-wrapper c" @click="toMore('/studyList/',0)">了解更多</span>
            </div>
            <div v-if="special[0]" class="first-list c" @click="toDetail(special[0]._id)">
                <img v-if="!special[0].cover==''" class="listImg" :src="special[0].cover"/>
                <!--<img class="listImg" :src="imgs"/>-->
                <div v-else class="listImg" :style="{backgroundImage: 'url('+require('../../../public/image/noData.png')+')'}"></div>
                <div class="listContent">
                    <p class="title">{{special[0].name}}</p>
                    <p class="man">研究人：{{special[0].human}}</p>
                    <p class="man">研究人所属机构：{{special[0].organization}}</p>
                    <p class="content">{{special[0].brief}}</p>
                    <a class="toDetail" >查看详情</a>
                </div>
            </div>
            <div v-else class="first-list c" >
                <div  class="listImg" :style="{backgroundImage: 'url('+require('../../../public/image/noData.png')+')'}"></div>
                <div class="listContent">
                    <p class="title">暂无</p>
                    <p class="man">研究人：暂无</p>
                    <p class="man">研究人所属机构：暂无</p>
                    <p class="content">暂无</p>
                    <!--<router-link class="toDetail" >查看详情</router-link>-->
                </div>
            </div>
            <!--<div class="center-list">-->
                <!--<div>-->
                    <!--<div>-->
                        <!--<span class="list-title">专题报告</span>-->
                        <!--<span class="more-wrapper c" @click="toMore('/studyList/',0)">了解更多</span>-->
                    <!--</div>-->
                    <!--<ul class="trade-list fl">-->
                        <!--<li class="c" @click="toDetail(item._id)" v-for="item in special" :key="item._id">-->
                            <!--<div class="circle "></div>-->
                            <!--<p>{{item.name}}</p>-->
                            <!--<span class="date">【{{item.releaseTime}}】</span>-->
                        <!--</li>-->
                    <!--</ul>-->
                <!--</div>-->
                <!--<div>-->
                    <!--<div>-->
                        <!--<span class="list-title">定期报告</span>-->
                        <!--<span class="more-wrapper c" @click="toMore('/studyList/',1)">了解更多</span>-->
                    <!--</div>-->
                    <!--<ul class="trade-list fl">-->
                        <!--<li class="c" @click="toDetail(item._id)" v-for="item in regular" :key="item._id">-->
                            <!--<div class="circle c"></div>-->
                            <!--<p>{{item.name}}</p>-->
                            <!--<span class="date">【{{item.releaseTime}}】</span>-->
                        <!--</li>-->
                    <!--</ul>-->
                <!--</div>-->
            <!--</div>-->
            <div class="title-wrap">
                <div class="title">经典案例</div>
                <span class="more-wrapper c" @click="toMore('/classicList')">了解更多</span>
            </div>
            <div class="last-list">
                <ul class="trade-list">
                    <li @click="toDetail(item._id,1) " class="pr-20 c" v-for="item in scriptures" :key="item._id">
                        <div class="circle"></div>
                        <p >{{item.name}}</p>
                        <span class="date">【{{item.releaseTime}}】</span>

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
            return {
                regular:[],
                scriptures:[],
                special:[],
                // imgs:require('../../../public/image/noData.png')
            };
        },
            methods:{
                async getData(){
                    const res = await this.http.get(this.api.research.index)
                    this.regular=res.data.regular
                    this.scriptures=res.data.scriptures
                    this.special=res.data.special
                },
                toDetail(id,type){
                    console.log(id)
                    if(type==1){
                        this.$router.push({path:`/classicDetail/${id}`})
                    }
                    else{
                        this.$router.push({path:`/studyDetail/${id}`})
                    }
                },
            toMore(path,index) {
                if (typeof(index) != 'undefined') {
                    this.$router.push({path: `${path}${index}`})
                } else {
                    this.$router.push({path: `${path}`})
                }
            }

        },
        created() {
            this.getData()
        },
    }
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
    .fl{
        float: left;
    }
    .trade-list{
        li{
            display: flex;
            border-bottom: 1px solid #eee;
            padding: 15px 0;
            font-size: 18px;
            align-items:center;
            width: 100%;


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
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                margin-right: 10px;
                width: 338px;
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
            border-bottom: 1px solid #BFC5CA;
            margin-top: 15px;
            .title {
                display: inline-block;
                font-size: 24px;
                color: #222222;
                font-weight: 600;
                border-bottom: 4px solid #0567FF;
                padding-bottom: 10px;
            }
        }
        .first-list{
            display: flex;
            height: 200px;
            margin-top: 20px;

            & > .listImg{
                width: 148px;
                height: 210px;
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
                height: 363px;
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
                    width: 100%;
                }

            }
            & > div:first-child{
                margin-right: 20px;
            }
            .more-wrapper{
                border: 1px solid;
                padding: 2px 10px;
            }
            .more-wrapper:hover{
                background: $sign-color;
                color: #fff;
            }
        }
    }
    .pr-20{
       padding-right: 20px !important;
    }
    .date {
        font-weight: 100 !important;
        font-size: 14px;
    }
</style>
