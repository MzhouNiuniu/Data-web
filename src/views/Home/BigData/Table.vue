<template>
    <ul class="list">
        <ul class="header">
            <li>
                城市
            </li>
            <li>
                发行人
            </li>
            <li>
                债券简称
            </li>
            <li>
                债券规模
            </li>
        </ul>
        <div class="body-container" :style="{height}">
            <ul class="body" v-for="item in 9" :key="item">
                <li>
                    南京
                </li>
                <li>
                    李毅
                </li>
                <li>
                    新区城投
                </li>
                <li>
                    其他
                </li>
            </ul>
        </div>
    </ul>
</template>

<script>
    export default {
        name: 'Table',

        props: {
            // 参考饿了么
            columns: {
                type: Array,
                required: true,
            },
            data: {
                type: Array,
                default: () => [],
            },
            // todo 组件完成
            height: {
                type: String,
                default: '72px',
            },
        },
    };
</script>

<style lang="scss" scoped>
    ul.list {
        text-align: center;

        // ul.header、ul.body
        .header, .body {
            display: flex;
            flex-wrap: nowrap;
            padding: 10px 0;
            line-height: 1;
            font-size: 18px;

            & > * {
                flex: 1;
            }
        }

        .header {
            background: rgba(18, 12, 254, 1);
        }

        .body {
            &:nth-child(odd) {
                background: rgba(255, 255, 255, 0.08);
            }
        }
    }

    .body-container {
        overflow-y: hidden;
    }
</style>
