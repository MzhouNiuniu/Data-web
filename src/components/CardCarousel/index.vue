<template>
    <section class="component__card-carousel">
        <Item style="background: #5affd3">
            1111
        </Item>
        <Item style="background: #68caff">
            222
        </Item>
        <Item style="background: #9f59ff">
            333
        </Item>
    </section>
</template>

<script>
    import Item from './CardCarouselItem'

    export default {
        name: 'CardCarousel',
        components: {
            Item,
        },
        data() {
            this.items = []
            this.layout = {
                width: 0,
                height: 0,
            }
            return {
                activeIndex: 0,
            }
        },
        methods: {
            getItems() {
                const itemName = this.$options.name + 'Item'
                return this.$children.filter(item => item.$options.name === itemName)
            },
        },
        mounted() {
            this.layout.width = this.$el.offsetWidth
            this.layout.height = this.$el.offsetHeight

            this.items = this.getItems()

            console.log(this)
            //
            setInterval(() => {
                if (this.activeIndex < this.items.length - 1) {
                    this.activeIndex++
                } else {
                    this.activeIndex = 0
                }
            }, 5000)
        },
    }
</script>

<!--scoped-->
<style lang="scss">
    .component__card-carousel {
        overflow-x: hidden;
        position: relative;

        // test
        height: 385px;
    }
</style>
