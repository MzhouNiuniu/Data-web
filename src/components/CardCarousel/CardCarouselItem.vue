<template>
    <div class="card-carousel-item" :style="style">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: 'CardCarouselItem',
        data() {
            this.index = 0
            return {}
        },
        computed: {
            // add a watcher，$parent.activeIndex
            style() {
                const { activeIndex, layout } = this.$parent
                console.log(this.index, layout.width * (this.index - activeIndex))
                return {
                    transform: 'translateX(' + layout.width * (this.index - activeIndex) + 'px)',
                    transition: 'transform .4s ease-in-out',
                }
            },
        },
        methods: {
            getIndex() {
                return this.$parent.items.findIndex(item => item === this)
            },
        },
        mounted() {
            this.$nextTick(() => {
                this.index = this.getIndex()
            })
        },
    }
</script>

<style lang="scss" scoped>
    .card-carousel-item {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        // test
    }
</style>
