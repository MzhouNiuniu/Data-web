<template>
    <section class="ui-card" :class="titleType === 'fill' ? 'fill-mode': 'side-line-mode'">
        <div class="header">
            <p v-if="titleType === 'side-line'" class="title_side-line">
                {{title}}
            </p>
            <p v-else class="title_fill">
                {{title}}
            </p>
            <div class="header-action">
                <slot name="header-action"/>
            </div>
        </div>
        <div class="content">
            <slot>
                暂无内容
            </slot>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Card",
        props: {
            title: String,
            titleType: {
                type: String,
                default: 'side-line', // ['fill', 'side-line']
            },
        },
    };
</script>

<style lang="scss" scoped>
    .ui-card {
        border: 1px solid rgba(191, 197, 202, 1);

        .header {
            position: relative;

            .header-action {
                position: absolute;
                top: 50%;
                right: 16px;
                transform: translateY(-50%);
            }
        }
    }


    .content {
        padding: 16px 15px;
    }


    //
    .side-line-mode {
        .header {
            padding: 25px 16px 16px 0;
            border-bottom: 1px solid rgba(191, 197, 202, 1);
        }


        .title_side-line {
            $left-line-width: 4px;
            position: relative;
            padding-left: 15px + $left-line-width;
            line-height: 1;
            font-size: 20px;
            color: rgba(51, 51, 51, 1);

            &::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;

                width: $left-line-width;
                height: 20px;
                background: rgba(5, 103, 255, 1);
            }
        }
    }

    //
    .fill-mode {
        .header {
            border-bottom: 1px solid #358BFE;
        }

        .title_fill {
            display: inline-block;
            margin: -1px; // fix border
            padding: 15px 20px;
            line-height: 20px;
            font-size: 20px;
            font-weight: 600;
            color: rgba(255, 255, 255, 1);
            background: $sign-color;
        }
    }
</style>
