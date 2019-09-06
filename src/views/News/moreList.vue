<template>
    <section class="project-container__wrapper">
        <section class="project-container">
            <div class="left-wrapper">
                <div class="detail-top pt-20 pb-20">
                    <p class="detail-top-title pl-15">{{title}}</p>
                </div>
                <!--<router-view :key="$route.fullPath"/>-->
                <div class="content-wrapper">
                    <img src="./img/right.png" alt="">
                    <div class="content">
                        <p>这是一个城投新闻标题这是一个城投新闻标题</p>
                        <div>
                            <div>
                                <img src="./img/classify.png" alt="">
                                <span>城投</span>
                            </div>
                            <div>
                                <img src="./img/come.png" alt="">
                                <span>央视网</span>
                            </div>
                            <div>
                                <img src="./img/time.png" alt="">
                                <span>2019-09-04 12:43</span>
                            </div>
                        </div>
                        <p>这是一段新闻主要内容这是一段新闻主要内容这是一段新闻主要内容这是一段新闻主要内容这是一段新闻主要内容这是一段新闻主要内容这是一段新 闻主要内容这是一段新闻主要内容这是一段新闻主要内容这是一段新闻主要内容这是一段新闻主要内容这是一段新闻主要内容这是一段新闻主要内容这是一段新闻主要内容这是一段新 闻主要内容这是一段新闻主要内容这是一段新闻主要内容这是一段新闻主要内容这是一段新闻主要内容这是一段新闻主要内容这是一段新闻主要内容这是一段新闻主要内容这是一段新 闻主要内容这是一段新闻主要内容这是一段新闻主要内容这是一段新闻主要内容这是一段新闻主要内容这是一段新闻主要内容这是一段新闻主要内容这是一段新闻主要内容这是一段新 闻主要内容这是一段新闻主要内容</p>
                    </div>
                </div>
            </div>
            <div class="right-wrapper">
                <img src="./img/news-bg.png" alt="">
                <ul>
                    <li v-for="(item,index) in navTitle" :key="index" :class="item.class"  @click="setActiveAttr(index)">
                        <span>{{item.name}}</span>
                        <img :src="require(`./img/${item.class}.png`)" alt="">
                        <div class="square"></div>
                    </li>
                </ul>
            </div>
        </section>
        <section class="project-container">
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
                    // navigate:'/newsMoreList/trade',
                    class:'unActive'
                },{
                    name:'城投新闻',
                    // navigate:'/newsMoreList/city',
                    class:'unActive'
                },{
                    name:'智库动态',
                    // navigate:'/newsMoreList/intelligence',
                    class:'unActive'
                },{
                    name:'项目动态',
                    // navigate:'/newsMoreList/project',
                    class:'unActive'
                },],
                title:'行业动态',
                pagination: this.getPagination(),
            }
        },
        components: {
            Pagination,
        },
        created() {
            setTimeout(() => {
                this.pagination.total = 230;
            }, 1000);
        },
        mounted(){
            this.setActiveAttr(this.$route.params.index)
        },
        methods:{
            getPagination() {
                const { query } = this.$route;
                return {
                    current: query.current || 1,
                    size: query.size || 10,
                    total: 0,
                };
            },
            handlePageChange({ page, size }) {
                this.pagination.current = page;
                this.pagination.size = size;
                this.query({
                    current: page,
                    size,
                });
            },
            setActiveAttr(index){
                this.navTitle.forEach((item)=>{
                    this.$set(item,'class','unActive')
                })
                this.$set(this.navTitle[index],'class','active')
                this.title = this.navTitle[index].name
            }
        }
    }
</script>

<style lang="scss" scoped>
    .project-container{
        margin-top: 20px;
        display: flex;

        .left-wrapper{
            flex: 1;
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
                    padding-bottom: 15px;

                    & > p:first-child{
                        color: $list-title-color;
                        font-size: 18px;
                        font-weight: bold;
                        margin-bottom: 10px;
                    }
                    & > div{
                        margin-bottom: 20px;

                        & >div{
                            display: inline-block;
                            margin-right: 20px;

                            &>img{
                                width: 16px;
                                height: 16px;
                                margin-right: 10px;
                            }
                            &>span{
                                color: #A8ACAF;
                                font-size: 12px;
                            }
                        }
                    }
                    & > p:last-child{
                        color: #586066;
                        font-size: 14px;
                        display: -webkit-box;
                        word-break: break-all;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
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

</style>