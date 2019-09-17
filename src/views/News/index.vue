<template>
    <section class="project-container__wrapper">
        <div class="project-container">
            <div class="title-wrap">
                <div class="title">行业动态</div>
                <span class="more-wrapper" @click="toMore(0)">了解更多</span>
            </div>
            <div class="first-list">
                <div class="item" @click="toDetail(item._id)" v-for="(item,index) in ideaDynamic" :key="index" >
                    <div class="noData" :style="{backgroundImage:`url(${item.cover ? item.cover : require('../../../public/image/noData.png')})`}"></div>
                    <p class="title">{{item.title}}</p>
                    <p class="time">发布时间：{{item.releaseTime}}</p>
                    <p class="content" v-html="item.content"></p>
                </div>
            </div>
            <div class="title-wrap">
                <div class="title">城投新闻</div>
                <span class="more-wrapper" @click="toMore(1)">了解更多</span>
            </div>
            <div class="city-list">
                <div class="city-item" v-for="(item,index) in ideaNew" :key="index" @click="toDetail(item._id)" v-if="index<2">
                    <div class="noData" :style="{backgroundImage:`url(${item.cover ? item.cover : require('../../../public/image/noData.png')})`}"></div>
                    <div class="content">
                        <p class="city-title">{{item.title}}</p>
                        <p class="source">来源：{{item.source}}</p>
                        <p class="time">发布时间：{{item.releaseTime}}</p>
                        <div class="city-content" v-html="item.content"></div>
                    </div>
                </div>
            </div>
            <div class="title-wrap">
                <div class="title">智库动态</div>
                <span class="more-wrapper" @click="toMore(2)">了解更多</span>
            </div>
            <div class="smart-wrap">
                <div class="noData" :style="{backgroundImage:`url(${item.cover ? item.cover : require('../../../public/image/noData.png')})`}" v-for="(item,index) in industryDynamic" :key="index" v-if="index < 2" @click="toDetail(item._id)">
                    <p class="title">{{item.title}}</p>
                </div>
                <ul>
                    <li v-for="(item,index) in industryDynamic" :key="index" v-if="index > 1 &&index < 6" @click="toDetail(item._id)">
                        <p>{{item.title}}</p>
                    </li>
                </ul>
            </div>
            <div class="title-wrap">
                <div class="title">项目动态</div>
                <span class="more-wrapper" @click="toMore(3)">了解更多</span>
            </div>
            <div class="project-wrap">
                <ul>
                    <li v-for="(item,index) in projectDynamic" :key="index" v-if="index < 5" @click="toDetail(item._id)">
                        <p>{{item.title}}</p>
                    </li>
                </ul>
                <div v-if="projectDynamic[5]"  @click="toDetail(projectDynamic[5]._id)">
                    <div class="noData" :style="{backgroundImage:`url(${projectDynamic[5].cover ? projectDynamic[5].cover : require('../../../public/image/noData.png')})`}"></div>
                    <div>
                        <p class="title">{{projectDynamic[5].title}}</p>
                        <p class="source">来源：{{projectDynamic[5].source}}</p>
                        <p class="time">发布时间：{{projectDynamic[5].releaseTime}}</p>
                        <p class="content" v-html="projectDynamic[5].content"></p>
                    </div>
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
    .noData{
        background:no-repeat center;
        -webkit-background-size: cover;
        background-size: cover;
        position: relative;

        & > .title{
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 67px;
            background: rgba(0,0,0,.5);
            display: -webkit-box;
            word-break: break-all;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            color: #fff;
            font-size: 15px;
            line-height: 28px;
            padding: 5px 15px;
            display: none;
        }
    }
    .title-wrap {
        line-height: 45px;
        border-bottom: 1px solid #EEEEEE;
        margin: 20px 0;
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
        border-bottom: 1px solid #BFC5CA;
        padding-bottom: 20px;
        .item{
            display: inline-block;
            width: 32%;
            margin-right: 2%;

            .noData{
                width: 100%;
                height: 200px;
            }
            .title{
                font-size: 18px;
                color: #333;
                font-weight: bold;
                margin:20px 0;
                display: -webkit-box;
                word-break: break-all;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
            .time{
                font-size: 14px;
                color: #666;
                padding-bottom: 15px;
                margin: 20px 0;
                border-bottom: 1px solid #BFC5CA;
            }
            .content{
                display: -webkit-box;
                word-break: break-all;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                overflow: hidden;
                font-size: 15px;
                color: #333;
            }
        }
        .item:last-child{
            margin-right: 0;
        }
    }
    .city-list {
        & > .city-item {
            padding: 20px 0;
            display: flex;

            border-bottom: 1px dashed #BFC5CA;
            .noData {
                width: 386px;
                height: 200px;
            }
            .content {
                flex: 1;
                width: calc(100% - 400px);
                margin-left: 20px;

                & > .city-title {
                    color: #333;
                    font-size: 18px;
                    font-weight: bold;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                .source , .time{
                    color: #666;
                    font-size: 14px;
                    margin: 15px 0;
                }
                & > .city-content {
                    color: #333;
                    font-size: 15px;
                    display: -webkit-box;
                    word-break: break-all;
                    -webkit-line-clamp: 4;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    line-height: 22px;
                    margin-top: 15px;
                }
            }
        }
        .city-item:last-child {
            border-bottom-style: solid ;
        }
    }
    .smart-wrap{
        padding-bottom: 20px;
        border-bottom: 1px solid #BFC5CA;
        & > div{
            display: inline-block;
            width: 32%;
            height: 200px;
            margin-right: 20px;
        }
        & > div:hover .title{
            display: block;
        }
        & > ul{
            float: right;
            width: 31%;
            height: 200px;
            list-style-type: square;

            li{
                color: #BFC5CA;
                font-size: 20px;
                & >p{
                    font-size: 15px;
                    color: #333;
                    display: -webkit-box;
                    word-break: break-all;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

            }
        }
    }
    .project-wrap{
        overflow: hidden;
        ul {
            float: left;
            width: calc(40% - 30px);
            height: 200px;
            margin-left: 20px;
            list-style-type: square;
            li{
                color: #BFC5CA;
                font-size: 20px;
                margin-bottom: 15px;
                & >p{
                    font-size: 15px;
                    color: #333;
                    display: -webkit-box;
                    word-break: break-all;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            }
        }
        & > div{
            float: right;
            width: 60%;

            &>div{
                display: inline-block;

                .title{
                    font-size: 18px;
                    color: #333;
                    display: -webkit-box;
                    word-break: break-all;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                .source , .time{
                    color: #666;
                    font-size: 14px;
                    margin: 10px 0;
                }
                .content{
                    display: -webkit-box;
                    word-break: break-all;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    font-size: 15px;
                    color: #333;
                }
            }
            &>div:last-child{
                width: calc(100% - 400px);
                margin-left: 14px;
            }
            .noData{
                width: 386px;
                height: 200px;
            }
        }
    }
</style>