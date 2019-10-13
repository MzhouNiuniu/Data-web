<template>
    <section class="about-us-container">
        <div class="top project-container">
            <p class="part-title">
                <span>关于我们</span>
                <span>about us</span>
            </p>
            <div class="mt-30 content" v-for="items in info">
                <p  class="info-title">{{items.company}}</p>
               <div class="info-content">
                   {{items.content}}
               </div>
            </div>
        </div>
        <div class="bottom">
            <CardCarousel class="project-container" v-if="aptitude.length">
                <div v-for="(item,index) in aptitude" :key="index">
                    <img :src="item" alt="">
                </div>
            </CardCarousel>
        </div>
    </section>
</template>

<script>
    import CardCarousel from '@ui/CardCarousel'

    export default {
        name: 'About',
        components: {
            CardCarousel,
        },
        data() {
            return {
                aptitude: [],
                info:[]
            }
        },
        created() {
            this.http.get(this.api.about.index).then(res => {
                try {
                    this.aptitude = res.data.aptitude
                    this.info=res.data.info
                } catch (e) {
                    this.aptitude = []
                }
            })
        },
    }
</script>

<style lang="scss" scoped>
    .info-title{
        font-weight: 600;
    }
    .info-content{
        font-size: 15px;
    }
    .part-title {
        text-align: center;
        color: rgba(51, 51, 51, 1);

        &::after {
            content: '';
            display: block;
            margin: 13px auto 0;
            width: 60px;
            height: 4px;
            background: $sign-color;
        }

        span:first-child {
            line-height: 24px;
            font-size: 24px;
            font-weight: 600;
        }

        span:last-child {
            display: block;
            margin-top: 6px;
            line-height: 18px;
            font-size: 18px;
            font-weight: 500;
        }
    }

    .about-us-container {
        .top {
            padding-top: 40px;
            padding-bottom: 22px;

            .content {
                line-height: 32px;
                font-size: 16px;
                font-weight: 500;
                color: rgba(51, 51, 51, 1);
            }
        }

        .bottom {
            position: relative;
            padding-top: 50px;
            padding-bottom: 45px;
            background: rgba(237, 242, 246, 1);

            &::after {
                content: '';
                position: absolute;
                top: 0;
                left: 50%;
                transform: translateX(-50%);
                display: block;
                width: 0;
                height: 0;
                border-top: 29px solid #fff;
                border-right: 14px solid transparent;
                border-left: 14px solid transparent;
            }
        }

    }

    ::v-deep {
        .swiper-slide {
            position: relative; // 默认好像就有

            img {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 250px;
            }
        }

        .swiper-slide-active, .swiper-slide-duplicate-active {
            img {
                width: 270px;
            }
        }
    }
</style>
