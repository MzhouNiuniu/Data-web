<template>
    <section class="project-container__wrapper">
        <div class="project-container">
            <div class="title-wrap">
                <div class="column">
                    <span class="title">研究报告</span>
                    <div style="width: 100px;height: 4px;background:red;"></div>
                    <span class="more-wrapper">了解更多</span>
                </div>

                <!--<div  @click="toMore(1)"></div>-->
            </div>
        </div>
    </section>
</template>

<script>


    export default {
        name: "Research",

        data() {

            return {};
        },
        methods: {},
        created() {
            setTimeout(() => {
                this.pagination.total = 230;
            }, 1000);
        },
    };
</script>

<style lang="scss" scoped>
    .project-container {
        margin-top: 10px;
        .column{

        }
        .title-wrap {
            height: 45px;
            line-height: 45px;
            border-bottom: 1px solid #EEEEEE;
            .title {
                font-size: 24px;
                color: $sign-color;
                font-weight: 600;
            }
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
        }
    }
</style>
