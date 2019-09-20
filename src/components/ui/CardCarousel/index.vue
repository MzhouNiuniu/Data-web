<template>
    <div class="card-carousel__wrapper">
        <button ref="prev" class="prev" :class="prevBtnClassName">
            <Icon type="ios-arrow-back"/>
        </button>
        <button ref="next" class="next" :class="nextBtnClassName">
            <Icon type="ios-arrow-forward"/>
        </button>

        <section class="card-carousel" :class="className">
            <div class="swiper-wrapper">
                <slot/>
            </div>
        </section>
    </div>
</template>

<script>
    import Swiper from 'swiper'

    export default {
        name: 'CardCarousel',
        data() {
            this.className = 'card-carousel__' + this._uid
            this.prevBtnClassName = 'prev' + this._uid
            this.nextBtnClassName = 'next' + this._uid
            this.carousel = null
            return {}
        },
        mounted() {
            if (this.$slots.default) {
                this.$slots.default.forEach(({ elm }) => {
                    if (elm && elm.classList) {
                        elm.classList.add('swiper-slide')
                    }
                })
            }
            this.carousel = new Swiper(`.${this.className}`, {
                slidesPerView: 3,
                spaceBetween: 0,
                centeredSlides: true,
                loop: true,
                navigation: {
                    prevEl: `.${this.prevBtnClassName}`,
                    nextEl: `.${this.nextBtnClassName}`,
                },
            })
        },
        destroyed() {
            this.carousel.destroy()
        },
    }
</script>

<style lang="scss" scoped>
    .card-carousel__wrapper {
        position: relative;
        width: 100%;
        max-width: 1200px;
    }


    .prev, .next {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 40px;
        height: 40px;
        line-height: 30px;
        background: $primary-color;
        font-size: 30px;
        text-align: center;
        color: #fff;
        border: none;
        outline: none;
        cursor: pointer;
    }

    .prev {
        left: 0;
    }

    .next {
        right: 0;
    }


    .card-carousel {
        overflow: hidden;
        margin: auto;
        width: 100%;
        max-width: 900px;
        height: 384px;

        user-select: none;
    }
</style>
