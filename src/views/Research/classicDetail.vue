<template>
    <section class="project-container__wrapper">
        <div class="project-container">
                <p class="detail-page-caption">
                    <span>经典案例</span>
                </p>
            <div class="title-wrapper">
                <p class="title">{{data.name}}</p>
                <p class="time">上传时间：{{data.releaseTime}}</p>
            </div>
            <div class="content" v-html="data.content">
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "classic-detail",

        data() {
            return {
                data: {}
            }
        },
        mounted() {
            this.getDetail()
        },
        methods: {
            async getDetail() {
                let res = await this.http.get(this.api.researchScriptures.detail, {id: this.$route.params.id})
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
    .title-wrapper{
        & > p{
            text-align: center;
        }
        .title{
            color: #000;
            font-size: 18px;
            font-weight: bold;
            margin: 20px;
        }
        .time{
            margin: 0 20px;
            padding-bottom: 15px;
            font-size: 12px;
            color: #A8ACAF;
        }
        .sign{
            text-align: center;
            padding: 15px;

            & > span {
                background: #ECF1FF;
                color: $sign-color;
                padding: 2px 20px;
                margin-right: 20px;
            }
        }
    }
    .content{
        background: #F6FBFF;
        padding: 20px 15px;
    }
</style>
