<template>
    <section class="project-container__wrapper">
        <div class="project-container">
            <div class="detail-top pt-20 pb-20">
                <p class="detail-top-title pl-15">{{type}}</p>
            </div>
            <section class="content-wrapper pl-20 pr-20">
                <div class="content-title pt-25 pb-15">
                    <p>{{data.title}}</p>
                    <p>{{data.releaseTime}}</p>
                </div>
                <p class="content" v-html="data.content"></p>
            </section>
        </div>
    </section>
</template>

<script>
    export default {
        name: "detail",
        data(){
            return {
                type:this.$route.query.type,
                data:[]
            }
        },
        mounted(){
            this.getDetail()
        },
        methods:{
            async getDetail(){
                let res = await this.http.get(this.api.getNewsDetails,{id: this.$route.params.id})
                this.data = res.data[0]
                console.log(res)
            }
        }
    }
</script>

<style lang="scss" scoped>
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
        .content-title{
            border-bottom: 1px solid #BFC5CA;
            & > p{
                color: #333;
                text-align: center;
            }
            & > p:first-child{
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 20px;
            }
            & > p:last-child{
                font-size: 14px;
            }
        }
        .content{
            padding: 20px 0;
            color: $list-title-color;
            font-size: 14px;
            text-indent: 2em;
            line-height: 24px;
        }
    }
</style>