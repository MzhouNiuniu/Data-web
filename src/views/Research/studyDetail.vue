<template>
    <section class="project-container__wrapper">
        <div class="project-container">
            <p class="detail-page-caption">
                <span>研究报告</span>
            </p>

            <div class="title-wrapper">
                <p class="title">{{data.name}}</p>

                <div class="sign">
                    <span>研究人:{{data.human}}</span>
                    <span>研究人所属机构:{{data.organization}}</span>
                </div>
                <p class="time">上传时间：{{data.releaseTime}}</p>
            </div>
            <div class="content" v-html="data.content">

            </div>
            <div class="pl-6 pr-6">
                <AttachmentList class="mt-30" :value="data.accessory"/>
            </div>
        </div>
    </section>
</template>

<script>
    import AttachmentList from '@components/AttachmentList';
    export default {
        name: "study-detail",
        components: {
            AttachmentList,
        },
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
                let res = await this.http.get(this.api.research.detail, {id: this.$route.params.id})
                console.log( res.data[0].accessory)
                res.data[0].accessory=[{
                    name:'附件',
                    flie: res.data[0].accessory
                }]
                console.log( res.data[0].accessory)
                this.data = res.data[0]

                console.log(res)
            }
        }
    }
</script>

<style lang="scss" scoped>

    .detail-top {
        border-bottom: 1px solid $sign-color;

        & > .detail-top-title {
            border-left: 5px solid $primary-color;
            font-size: 24px;
            color: $sign-color;
            height: 24px;
            line-height: 24px;
            font-weight: bold;
        }
    }

    .title-wrapper {
        & > p {
            text-align: center;
        }
        .title {
            color: #000;
            font-size: 18px;
            font-weight: bold;
            margin: 20px;
        }
        .time {
            margin: 0 20px;
            padding: 15px;
            font-size: 12px;
            color: #A8ACAF;
        }
        .sign {
            text-align: center;

            padding-bottom: 15px;
            border-bottom: 1px solid #BFC5CA;

            & > span {
                font-size: 16px;
                color: #333;
                padding: 2px 20px;
                margin-right: 20px;
            }
        }
    }

    .content {
        /*background: #F6FBFF;*/
        font-size: 16px;
        padding: 20px 15px;
        color: #000;
    }

    .download {
        margin-top: 20px;

        img {
            width: 84px;
            margin-left: 30px;
        }
        .downloadList {
            display: flex;
            align-items: center;

            .circle {
                width: 12px;
                height: 12px;
                -webkit-border-radius: 6px;
                -moz-border-radius: 6px;
                border-radius: 6px;
                background: #358BFE;
                border: 3px solid #9AC5FE;
            }
            & > p {
                flex: 1;
                font-size: 14px;
                color: #A8ACAF;
                border-bottom: 1px dashed #BFC5CA;
                margin: 0 15px;
                padding: 15px 0;
            }
            .button {
                width: 72px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                background: #ECF1FF;
                color: $sign-color;
                -webkit-border-radius: 5px;
                -moz-border-radius: 5px;
                border-radius: 5px;
            }
            .button:hover {
                background: $sign-color;
                color: #fff;
            }
        }
    }
</style>
