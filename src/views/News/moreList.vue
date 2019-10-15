<template>
    <section class="project-container__wrapper">
        <section class="project-container">
            <div class="left-wrapper">
                <p class="detail-page-caption">
                    <span>新闻动态</span>
                </p>


                <div class="content-wrapper c" v-for="(item,index) in data" :key="index" @click="toDetail(item._id,title)">
                    <img src="./img/right.png" alt="">
                    <div class="content">
                        <p>{{item.title}}</p>
                        <div>{{filterHTMLTag(item.content)}}</div>
                    </div>
                </div>

            </div>
            <div class="right-wrapper">
                <img src="./img/news-bg.png" alt="">
                <ul>
                    <li v-for="(item,index) in navTitle" :key="index" :class="item.class" class="c"  @click="setActiveAttr(index)">
                        <span>{{item.name}}</span>
                        <img :src="require(`./img/${item.class}.png`)" alt="">
                        <div class="square"></div>
                    </li>
                </ul>
                <div class="newList" >
                    <div class="title">
                        最新新闻
                    </div>
                    <div class="img" v-if="data[0]"  :style="{backgroundImage:`url(${data[0].cover ?data[0].cover : require('../../../public/image/noData.png')})`}"  @click="toDetail(data[0]._id,'最新新闻')">
                           <div class="titles"> {{data[0].title}}</div>
                    </div>
                    <div class="img" v-if="data[1]" :style="{backgroundImage:`url(${data[1].cover ?data[1].cover : require('../../../public/image/noData.png')})`}" @click="toDetail(data[1]._id,'最新新闻')">
                        <div class="titles"> {{data[1].title}}</div>
                    </div>
                    <div class="img" v-if="data[2]" :style="{backgroundImage:`url(${data[2].cover ?data[2].cover : require('../../../public/image/noData.png')})`}" @click="toDetail(data[2]._id,'最新新闻')">
                        <div class="titles"> {{data[2].title}}</div>
                    </div>

                </div>
            </div>

        </section>
        <section class="project-container pages">
            <Pagination
                    class="mt-20"
                    v-bind="pagination"
                    @change="handlePageChange"
            />
        </section>

    </section>
</template>

<script>
    import Pagination from '@components/Pagination';

    export default {
        name: "more-list",
        data(){
            return {
                navTitle:[{
                    name:'行业动态',
                    class:'unActive'
                },{
                    name:'城投新闻',
                    class:'unActive'
                },{
                    name:'智库动态',
                    class:'unActive'
                },{
                    name:'项目动态',
                    class:'unActive'
                },],
                title:'行业动态',
                pagination: this.getPagination(),
                newsType:0,
                data:[]
            }
        },
        components: {
            Pagination,
        },
        created() {
            this.setActiveAttr(this.$route.params.index)
        },
        mounted(){

        },
        methods:{

            getPagination() {
                const { query } = this.$route;
                return {
                    page: query.page || 1,
                    size: query.size || 6,
                    total: 0,
                };
            },
            handlePageChange({ page, limit }) {
                this.pagination.page = page;
                this.pagination.size = limit;
                this.getList(this.pagination.size,this.pagination.page ,this.newsType)
            },
            setActiveAttr(index){
                this.navTitle.forEach((item)=>{
                    this.$set(item,'class','unActive')
                })
                this.$set(this.navTitle[index],'class','active')
                this.title = this.navTitle[index].name
                this.newsType = index
                this.getList(6,1,index)
            },
            async getList(size,current,type){
                let res = await this.http.get(this.api.getNewsList,{limit:size,page:current,keyWords:'',type})
                this.pagination.total = res.data.total
                this.data = res.data.docs
            },
            toDetail(id,type){
                this.$router.push({path:`/newsDetail/${id}`,query:{type}})
            } ,


        }
    }
</script>

<style lang="scss" scoped>
    .newList{
        margin-top: 15px;
        .title{
            text-align: center;
            font-size: 19px;
            background: #0567FF;
            color: #fff;
            padding: 10px 0;
        }
        .img{
            margin-top: 5px;
            width: 100%;
            height: 110px;
            background-size: cover;
            background-position: center;
            position: relative;
            cursor: pointer;
            .titles{
                position: absolute;
                bottom: 0;
                height: 20px;
                text-align: center;
                background: rgba(0, 0, 0, 0.5);
                width: 100%;
                font-size: 14px;
                width: 198px;
                display:-moz-box;
                display: box;
                display: -webkit-box;
                word-break: break-all;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                overflow: hidden;
                color: #fff;
            }
        }
    }
    .project-container{
        margin-top: 20px;
        display: flex;

        .left-wrapper{
            flex: 1;
            min-height: 715px;
            background: #F6FBFF;
            margin-right: 30px;

            .detail-top{
                border-bottom: 1px solid $sign-color;

                & > .detail-top-title{
                    border-left: 5px solid $primary-color;
                    font-size: 24px;
                    color: $sign-color;
                    height: 24px;
                    line-height: 24px;
                    font-weight: bold;
                }
            }
            .content-wrapper{
                margin: 20px 10px;
                display: flex;

                & > img{
                    width: 16px;
                    height: 16px;
                    margin-top: 5px;
                }
                .content{
                    flex: 1;
                    margin-left: 15px;
                    border-bottom: 1px solid #BFC5CA;

                    & > p:first-child{
                        color: $list-title-color;
                        font-size: 18px;
                        font-weight: bold;
                        margin-bottom: 10px;
                    }
                    & > div{
                        margin-bottom: 5px;
                        color: #586066;
                        font-size: 14px;
                        display: -webkit-box;
                        word-break: break-all;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                        height: 42px;
                    }
                }
            }
        }
        .right-wrapper{
            flex: 0 1 200px;
            width: 200px;
            height: 311px;
            -webkit-border-radius: 10px;
            -moz-border-radius: 10px;
            border-radius: 10px;
            border: 1px solid #eee;
            background: $sign-color;

            & > img {
                width: 100%;
                height: 65px;
            }
            & > ul > li{
                position: relative;
                height: 60px;
                line-height: 60px;
                color: #586066;
                font-size:16px;
                background: #fff;
                text-align: center;
                border-bottom: 1px dashed #BFC5CA;

                & > img{
                    width: 16px;
                    height: 16px;
                    margin-left: 15px;
                }
                .square{
                    position: absolute;
                    right: 0;
                    top: calc(50% - 10px);
                    border:10px solid #fff;
                    border-top-color: transparent;
                    border-bottom-color: transparent;
                    border-left-color: transparent;
                }
            }
            & > ul > li:last-child{
                border: none;
            }
            & > ul > li.active{
                background: $primary-color;
                color: #fff;
            }
            & > ul > li.unActive{
                background: #fff;
                color:#586066
            }
        }
    }
    .pages{
        margin-top: 5px;
        margin-bottom: 20px;
        /* text-align: center; */
        justify-content: center;
    }



</style>
