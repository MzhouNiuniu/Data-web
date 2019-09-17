<template>
    <section class="component__text-ellipsis">
        <p ref="content" class="content">
            {{value}}
        </p>
    </section>
</template>

<script>
    /**
     * 字符串长度算法比较麻烦，只支持webkit
     * */
    export default {
        name: "TextEllipsis",
        props: {
            value: String,
            rows: Number,
            fill: Boolean, // 字段名待修改
        },
        methods: {
            updateView() {
                if (this.rows === undefined) {
                    return;
                }
                const elContent = this.$refs.content;
                let { lineHeight } = window.getComputedStyle(elContent);
                lineHeight = parseFloat(lineHeight);
                if (this.fill) {
                    elContent.style.height = lineHeight * this.rows + 'px';
                } else {
                    elContent.style.maxHeight = lineHeight * this.rows + 'px';
                }
                elContent.style['-webkit-line-clamp'] = this.rows;
            },
        },
        watch: {
            value() {
                this.$nextTick(this.updateView);
            },
        },
        mounted() {
            this.updateView();
        },
    };
</script>

<style lang="scss" scoped>
    .component__text-ellipsis {
        .content {
            overflow: hidden;
            display: -webkit-box;
            /*-webkit-line-clamp: 3;*/
            -webkit-box-orient: vertical;
        }
    }
</style>
