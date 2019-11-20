<template>
    <section class="home-banner">
        <Carousel  autoplay autoplay-speed="10000" loop :height="498">
            <CarouselItem v-for="(item,index) in imgList" :key="index">
                <a class="trigger" href="#" :style="{backgroundImage:`url('${item}')`}"></a>
            </CarouselItem>
        </Carousel>
    </section>
</template>

<script>
    export default {
        name: 'Banner',
        data() {
            return {
                imgList: [],
                time:6000
            }
        },
        created() {
            this.http.get(this.api.home.banner).then(res => {
                try {
                    this.imgList = res.data.banner
                } catch (e) {
                    this.imgList = []
                }
            })
        },
    }
</script>

<style lang="scss" scoped>
    .home-banner {
        height: 498px; // 防止位置抖动
    }

    ::v-deep {

        // fix 小屏幕样式问题
        overflow: hidden;
        max-width: 100%;

        .trigger {
            display: block;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
        }

        .ivu-carousel-dots {
            bottom: 13px;

            button {
                width: 35px;
                height: 12px;
                background: rgb(60, 236, 252);
                border-radius: 6px;
                opacity: 0.2;
            }

            li {
                padding: 0;
                margin: 0 7px;
            }

            .ivu-carousel-active button {
                width: 12px;
                height: 12px;
                background: rgba(2, 166, 82);
                opacity: 1;
            }
        }

        .ivu-carousel-arrow {
            width: 50px;
            height: 50px;

            & > * {
                display: none;
            }

            // 此处支持现代浏览器
            &.left {
                left: calc((100% - 1200px) / 2);
                background: url("~@public/icon/circle-arrow-left.png") no-repeat scroll top left / cover;
            }

            &.right {
                right: calc((100% - 1200px) / 2);
                background: url("~@public/icon/circle-arrow-right.png") no-repeat scroll top left / cover;
            }
        }
    }
</style>
