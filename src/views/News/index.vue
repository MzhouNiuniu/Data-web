<template>
    <section class="project-container__wrapper">
        <div class="project-container sign-wrapper ">
            <div></div>
            <div>
                <span>行业</span>
                <span>动态</span>
            </div>
            <div class="more-wrapper" @click="toMore(0)">了解更多</div>
        </div>
        <ul class="trade-list project-container">
            <li @click="toDetail(item._id,'行业')" v-for="(item,index) in ideaDynamic" :key="index">
                <div class="circle"></div>
                <p>{{item.title}}</p>
                <div>
                    <img src="./img/time.png"/>
                    <span>{{item.releaseTime}}</span>
                </div>
            </li>
        </ul>
        <div class="sign-wrapper project-container">
            <div></div>
            <div>
                <span>城投</span>
                <span>新闻</span>
            </div>
            <div class="more-wrapper" @click="toMore(1)">了解更多</div>
        </div>
        <div class="city-list project-container">
            <div class="city-item" v-for="(item,index) in ideaNew" :key="index" @click="toDetail(item._id,'城投')">
                <img :src="item.cover?item.cover:require('../../../public/image/noData.png')" alt="">
                <div>
                    <p class="city-title">{{item.title}}</p>
                    <div class="city-sign">
                        <div>城投</div>
                        <div>{{item.source}}</div>
                        <div>{{item.releaseTime}}</div>
                    </div>
                    <p class="city-content" v-html="item.content"></p>
                </div>
            </div>
        </div>
        <div class="sign-wrapper project-container">
            <div></div>
            <div>
                <span>智库</span>
                <span>动态</span>
            </div>
            <div class="more-wrapper" @click="toMore(2)">了解更多</div>
        </div>
        <ul class="trade-list project-container">
            <li @click="toDetail(item._id,'智库')" v-for="(item,index) in industryDynamic" :key="index">
                <div class="circle"></div>
                <p>{{item.title}}</p>
                <div>
                    <img src="./img/time.png"/>
                    <span>{{item.releaseTime}}</span>
                </div>
            </li>
        </ul>
        <div class="sign-wrapper project-container">
            <div></div>
            <div>
                <span>项目</span>
                <span>动态</span>
            </div>
            <div class="more-wrapper" @click="toMore(3)">了解更多</div>
        </div>
        <div class="city-list project-container">
            <div class="city-item" v-for="(item,index) in projectDynamic" :key="index" @click="toDetail(item._id,'项目')">
                <img :src="item.cover?item.cover:require('../../../public/image/noData.png')" alt="">
                <div>
                    <p class="city-title">{{item.title}}</p>
                    <div class="city-sign">
                        <div>项目</div>
                        <div>{{item.source}}</div>
                        <div>{{item.releaseTime}}</div>
                    </div>
                    <p class="city-content" v-html="item.content"></p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "index",
        data(){
            return {
                ideaDynamic:[],
                ideaNew:[],
                industryDynamic:[],
                projectDynamic:[]
            }
        },
        mounted(){
            this.getData()
        },
        methods:{
            async getData(){
                const res = await this.http.get(this.api.getNewsIndex)
                console.log(res)
                this.ideaDynamic = res.data.ideaDynamic
                this.ideaNew = res.data.ideaNew
                this.industryDynamic = res.data.industryDynamic
                this.projectDynamic = res.data.projectDynamic
            },
            toDetail(id,type){
                console.log(id)
                this.$router.push({path:`/newsDetail/${id}`,query:{type}})
            },
            toMore(index){
                this.$router.push({path:`/newsMoreList/${index}`})
            }
        }
    }
</script>

<style lang="scss" scoped>
    .sign-wrapper{
        margin-top: 25px;
        margin-bottom: 30px;
        display: flex;

        & > div {
            flex: 1;
            height:64px;
        }
        & > div:first-child {
            border-top: 2px solid #eee;
        }
        & > div:nth-of-type(2) {
            flex: 0 1 auto;
            width: 197px;
            height:64px;
            background: url("./img/sign.png") no-repeat center;
            background-size:cover;
            display: flex;
            padding: 0 20px;

            & > span {
                flex:1;
                text-align: center;
                font-size: 24px;
                color:#fff;
                line-height: 75px;
            }
            & > span:first-child{
                color: #3D95FE;
            }
        }
        .more-wrapper {
            border-bottom: 2px solid #eee;
            text-align: right;
            line-height: 80px;
            color: $sign-color;
            font-size: 14px;
            font-weight: bold;
        }
        .more-wrapper:after{
            content:'+';
            font-size: 18px;
            margin-left: 10px;
        }
    }
    .trade-list{
        & >li{
            display: flex;
            border-bottom: 1px solid #eee;
            padding: 20px 0;
            font-size: 18px;
            align-items:center;

            & > .circle{
                width: 10px;
                height: 10px;
                background: $sign-color;
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
            & > div{
                & > img {
                    width: 16px;
                    height: 16px;
                    margin-right: 10px;
                }
                & > span {
                    color: #586066;
                    font-size: 14px;
                    font-weight: bold;
                }
            }
        }
    }
    .city-list{
        & > .city-item{
            background: #F6FBFF;
            padding: 15px 20px;
            display: flex;
            margin-bottom: 15px;
            & > img{
                width: 300px;
                height: 140px;
            }
            & > div {
                flex: 1;
                width: calc(100% - 360px );
                margin-left: 20px;

                & > .city-title{
                    color: $list-title-color;
                    font-size: 18px;
                    font-weight: bold;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                & > .city-sign{
                    margin-top: 15px;

                    & > div{
                        display: inline-block;
                        font-size: 12px;
                        height: 20px;
                        line-height: 20px;
                        padding: 0 20px;
                        -webkit-border-radius: 20px;
                        -moz-border-radius: 20px;
                        border-radius: 20px;
                        margin-right: 20px;
                    }
                    & > div:first-child{
                        background: rgba(5,103,255,.2);
                        color: $sign-color;
                    }
                    & > div:nth-of-type(2){
                        background: rgba(253,136,42,.2);
                        color: #FD882A;
                    }
                    & > div:last-child{
                        background: rgba(254,209,74,.1);
                        color: #DCAF00;
                    }
                }
                & > .city-content{
                    color: #586066;
                    font-size: 14px;
                    display: -webkit-box;
                    word-break: break-all;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    line-height: 22px;
                    margin-top: 15px;

                    & img{
                        width: 100%;
                    }
                }
            }
        }
    }
</style>