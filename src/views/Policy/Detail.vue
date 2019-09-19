<template>
    <section class="project-container mt-20">
        <p class="detail-page-caption">
            <span>{{type}}</span>
        </p>
        <div class="main">
            <div class="caption">
                <h1 class="mt-30">{{data.name}}</h1>
                <p class="info mt-20">
                    {{data.reference}}
                </p>
                <div class="hr-dashed mt-14"></div>
                <p class="date mt-14">
                    发布时间：  {{data.releaseTime}}
                </p>
            </div>
            <p class="content" v-html="data.content"></p>

        </div>
    </section>
</template>

<script>
    export default {
        name: "PolicyDetail",
        data() {
            return {
                type:this.$route.query.type,
                id: this.$route.params.id,
                detail: {},
            };
        },
        mounted(){
            this.getDetail()
        },
        methods:{
            async getDetail(){
                let res = await this.http.get(this.api.statute.detail,{id: this.$route.params.id})
                this.data = res.data[0]
                console.log(res.data[0].name)
                this.$forceUpdate();
            }
        }
    };
</script>

<style lang="scss" scoped>
    .project-container {
        background-color: #fff;
    }

    .main {
        padding: 0 20px;
        color: rgba(51, 51, 51, 1);
    }

    .caption {
        text-align: center;

        h1 {
            line-height: 32px;
            font-size: 32px;
            font-weight: 500;
        }

        .info {
            line-height: 16px;
            font-size: 16px;
            font-weight: 500;
        }

        .date {
            line-height: 14px;
            font-size: 14px;
            font-weight: 400;
        }
    }

    .content {
        padding-top: 11px;
        padding-bottom: 36px;
        line-height: 34px;
        font-size: 16px;
        font-weight: 400;
    }

</style>
