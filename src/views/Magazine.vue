<template>
    <section class="project-container mt-14 mb-20">
        <p class="detail-page-caption">
            <span>城投杂志</span>
        </p>
        <div style="width: 785px;margin: auto;">
            <div class="magazine">
                <img :src="item.photos" alt="" v-for="(item,index) in data" :key="index">
            </div>
        </div>
        <div>
            <a class="href" href="http://www.ctllh.com">
                详情请跳转至《中国城投》杂志 》》
            </a>
        </div>


    </section>
</template>

<script>


    export default {
        name: 'Magazine',

        data() {
            return {
                data: []
            }
        },
        mounted() {
            this.getDetail()
        },
        methods: {
            async getDetail() {
                let res = await this.http.get(this.api.magazine.index)
                this.data = res.data
            }
        }
    }
</script>
<style lang="scss" scoped>
    .magazine {
        margin-right: -40px;
        padding-top: 4px;
        min-height: 690px;

        img {
            display: inline-block;
            width: 220px;
            height: 290px;
            margin-right: 40px;
            margin-top: 26px;
            cursor: pointer;
        }
    }

    .href {
        font-size: 18px;
        color: #333;
        text-align: right;
        float: right;
    }
    .href:hover{
        color: #2d8cf0;
    }

</style>
