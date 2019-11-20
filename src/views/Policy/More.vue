<template>
    <section class="project-container__wrapper">
        <section class="project-container">
            <div class="left-wrapper">
                <p class="detail-page-caption">
                    <span>{{title}}</span>
                </p>
                <div class="content-wrapper c" v-for="(item,index) in data" :key="index" @click="toDetail(item._id,title)">
                    <img src="./img/right.png" alt="">
                    <div class="content">
                        <p class="fl">{{item.name}}</p>
                        <span class="fr">【{{item.releaseTime}}】</span>
                    </div>
                </div>


            </div>
            <div class="right-wrapper">
                <img src="./img/bgs.png" alt="">
                <ul>
                    <li v-for="(item,index) in navTitle" :key="index" :class="item.class" class="c"  @click="setActiveAttr(index)">
                        <span>{{item.name}}</span>
                        <div class="square"></div>
                    </li>
                </ul>
            </div>
        </section>
        <section class="project-container pages">
            <Pagination
                    class="mt-20"
                    v-bind="pagination"
                    :total="total"
                    :pageSize="pageSize"
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
                    name:'政策法规',
                    class:'unActive'
                },{
                    name:'指南标准',
                    class:'unActive'
                },{
                    name:'国务院规范性文件',
                    class:'unActive'
                },{
                    name:'地方性规范性文件',
                    class:'unActive'
                },{
                    name:'部门规范性文件',
                    class:'unActive'
                }
                ],
                title:'政策法规',
                pagination: this.getPagination(),
                newsType:0,
                data:[],
                total:0,
                pageSize:8,
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
                    size: query.size ||8,
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
                this.getList(10,1,index)
            },
            async getList(size,current,type){
                console.log(this.api.statute.getList)
                let res = await this.http.get(this.api.statute.list,{limit:size,page:current,type})
                this.pagination.total = res.data.total
                this.total = res.data.total
                this.data = res.data.docs
            },
            toDetail(id,type){
                this.$router.push({path:`/PolicyDetail/${id}?type=${type}`})
            } ,


        }
    }
</script>

<style lang="scss" scoped>
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
                    margin-top: 6px;
                }
                .content{
                    flex: 1;
                    margin-left: 15px;
                    border-bottom: 1px solid #BFC5CA;

                    & > p:first-child{
                        width: 766px;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                        color: $list-title-color;
                        font-size: 20px;
                        font-weight: bold;
                        margin-bottom: 12px;
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
            height: 373px;
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
