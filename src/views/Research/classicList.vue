<template>
    <section class="project-container__wrapper">
        <div class="project-container">
            <div class="left-wrapper">
                <div class="detail-top pt-20 pb-20">
                    <p class="detail-top-title pl-15">经典案例</p>
                </div>
                <div class="content-wrapper" @click="toDetail(1)">
                    <img src="./img/right.png" alt="">
                    <div class="content">
                        <p>这是一个定期报告标题这是一个定期报告标题这是一个定期报告标题</p>
                        <div >这是一段报告主要内容这是一段报告主要内容这是一段报告主要内容这是一段报告主要内容这是一段报告主要内容这是一段报告主要内容这是一段报告主 要内容这是一段报告主要内容这是一段报告主要内容这是一段报告主要内容这是一段报告主要内容这是一段报告主要内容这是一段报告主要内容这是一</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "classic",
        methods:{
            toDetail(id){
                this.$router.push({path:`/classicDetail/${id}`})
            },
        }
    }
</script>

<style lang="scss" scoped>
    .project-container{
        margin-top: 20px;
        display: flex;

        .left-wrapper{
            flex: 1;
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
                    & > div:last-child{
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
    }
</style>