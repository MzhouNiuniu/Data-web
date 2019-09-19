<template>
    <section class="project-container mt-14 mb-20">
        <p class="detail-page-caption">
            <span>城投杂志</span>
        </p>
        <div class="magazine">
            <div >
                <img :src="item.photos" alt=""  class="imgs"  v-for="item in data">
            </div>
        </div>
        <div class="href">
            详情请跳转至《中国城投》杂志  》》
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
    };
</script>
<style lang="scss" scoped>
    .magazine {
        text-align: center;
        margin-top: 30px;
        & > div {
            width: 800px;
            margin: auto;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            &>.imgs {
                width: 218px;
                height: 300px;
                margin-right: 20px;
                margin-bottom: 20px;
            }
        }
    }
    .href{
        font-size:18px;
        color: #333;
        text-align: right;
    }

</style>
