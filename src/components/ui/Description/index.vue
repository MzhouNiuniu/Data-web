<template>
    <section class="ui-description">
        <p class="title">
            {{title}}
        </p>
        <p v-if="text" class="text">
            {{text || '暂无内容'}}
        </p>
        <div v-else class="main">
            <slot>

            </slot>
        </div>
    </section>
</template>

<script>
    /**
     * text、slot 2选1
     * */
    export default {
        name: "Description",
        props: {
            title: {
                // required: true,
                type: String,
            },
            text: {
                type: String,
            },
        },
    };
</script>

<style lang="scss" scoped>
    .title {
        $left-line-width: 6px;
        position: relative;
        padding-left: 15px + $left-line-width;
        line-height: 1;
        font-size: 18px;
        color: rgba(51, 51, 51, 1);

        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;

            width: $left-line-width;
            height: 18px;
            background: rgba(5, 103, 255, 1);
        }
    }

    .main {
        padding: 20px 0;
    }

    .text {
        margin-top: 20px;
        padding: 20px;
        background: rgba(246, 251, 255, 1);
        font-size: 16px;
    }
</style>
