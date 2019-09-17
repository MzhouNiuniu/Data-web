<template>
    <router-link  :to="to" class="ui-link-more">
        <span class="text">
            {{text}}
        </span>

        <!-- default-symbol -->
        <span v-if="!$slots.symbol" class="symbol default-symbol">+</span>
        <!--slot 暂未实现-->
        <slot v-else name="symbol"/>
    </router-link>
</template>

<script>
    export default {
        name: "LinkMore",
        props: {
            text: {
                type: String,
                default: '了解更多',
            },
            to: {
                required: true,
                type: [String, Object],
            },
        },
    };
</script>

<style lang="scss" scoped>
    .ui-link-more, .text, .symbol {
        display: inline-block;
        font-size: 16px;
        line-height: 1;
        vertical-align: middle;
    }

    .ui-link-more {
        line-height: 0;
        font-weight: 600;
    }

    .text {
        height: 1em;
        font-weight: 600;
        font-size: 1em;
    }

    .symbol {

    }

    .default-symbol {
        position: relative;
        top: -0.6em;
        padding-left: 10px;
        height: 0;
        font-size: 1.55em;
    }
</style>
