<template>
    <section class="project-container__wrapper">
        <div class="project-container">
            <div class="left-wrapper">
                <div class="detail-top pt-20 pb-20">
                    <p class="detail-top-title pl-15">经典案例</p>
                </div>
                <div class="content-wrapper" @click="toDetail(1)" v-for="(item,index) in data" :key="index">
                    <img src="./img/right.png" alt="">
                    <div class="content">
                        <p>{{item.name}}</p>
                        <div >{{item.brief}}</div>
                    </div>
                </div>
            </div>
        </div>
        <section class="  project-container  pages">
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
        name: "classic",
        data(){
            return {
                pagination: this.getPagination(),
                newsType:0,
                data:[]
            }
        },
        components: {
            Pagination,
        },
        created() {
            this.getList()
        },
        methods: {
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

            async getList(size,current){
                let res = await this.http.get(this.api.companyData.getListBySearch,{limit:size,page:current})
                this.pagination.total = res.data.total
                this.data = res.data.docs
            },
            toDetail(id){
                this.$router.push({path:`/studyDetail/${id}`})
            },
        }
    }
    // export default {
    //     name: "classic",
    //     methods:{
    //         toDetail(id){
    //             this.$router.push({path:`/classicDetail/${id}`})
    //         },
    //         async getList(size,current,type){
    //             let res = await this.http.get(this.api.research.list,{limit:size,page:current,keyWords:'',type})
    //             this.pagination.total = res.data.total
    //             this.data = res.data.docs
    //         },
    //     }
    // }
</script>

<style lang="scss" scoped>
    .project-container{
        margin-top: 20px;
        display: flex;

        .left-wrapper{
            flex: 1;
            margin-right: 30px;
            min-height: 715px;
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
                    & > div:last-child{
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
    }
    .pages{
        margin-top: 5px;
        margin-bottom: 20px;
        /* text-align: center; */
        justify-content: center;
    }
</style>
