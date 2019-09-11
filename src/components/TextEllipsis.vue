<template>
    <p ref="container" :style="containerStyle" class="container">
        {{value}}
    </p>
</template>

<script>
    // 未完成
    export default {
        name: "TextEllipsis",
        props: {
            value: {
                type: String,
                default: '',
            },
            rows: {
                type: Number,
                default: 2,
            },
        },
        data() {
            return {
                showValue: '',
                containerHeight: 'auto',
            };
        },
        computed: {
            containerStyle() {
                return {
                    height: this.containerHeight,
                };
            },
        },
        methods: {
            getShowValue() {
                // ssr
                if (!window) {
                    return this.value;
                }
                const elContainer = this.$refs.container;
                const currentStyle = window.getComputedStyle(elContainer);
                console.log(elContainer.style.lineHeight);
                console.log(currentStyle.lineHeight);
                return this.value;
            },
        },
        mounted() {
            const elContainer = this.$refs.container;
            const currentStyle = window.getComputedStyle(elContainer);
            let { lineHeight, height, width, fontSize } = currentStyle;
            lineHeight = parseFloat(currentStyle.lineHeight);
            height = parseFloat(currentStyle.height);
            const currentRow = ~~(height / lineHeight);
            if (currentRow <= this.rows) {
                return;
            }

            width = parseFloat(width);
            fontSize = parseFloat(fontSize);

            // 向下取整，会少1 - 2个字
            const newLength = ~~(width / fontSize) * this.rows;

            console.log(this.value.slice(0, newLength));
            // this.containerHeight = lineHeight * this.rows + 'px';
        },
    };
</script>

<style lang="scss" scoped>
    .container {
        overflow: hidden;
    }
</style>
