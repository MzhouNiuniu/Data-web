<template>
    <Input
            :value="value"
            class="url-search-input"
            clearable
            size="large"
            search enter-button="搜索"
            :placeholder="placeholder"
            @on-search="search"
            @on-clear="handleClear"
    />
</template>

<script>
    export default {
        name: "SearchInput",
        props: {
            value: String,

            placeholder: {
                type: String,
                default: '请输入搜索内容',
            },

            // events
            // v-model
            // @change
        },
        methods: {
            handleClear() {
                this.search(undefined);
            },
            search(val) {
                this.$emit('input', val);
                this.$emit('change', val);
            },
        },
    };
</script>

<style lang="scss" scoped>
    .url-search-input {
        ::v-deep {
            input {
                padding-left: 20px;
                line-height: 44px;
                height: 44px;
                font-size: 14px;
            }


            .ivu-input-search {
                padding-left: 19px !important;
                padding-right: 20px !important;
                background-color: $primary-color !important;
                border-color: $primary-color !important;
                font-size: 18px;

                &:hover {
                    background-color: $primary-color-light !important;
                }
            }

            .ivu-input-icon-clear {
                width: 10px; // 减少触发范围
                right: 90px;
                top: 4px;
            }
        }
    }
</style>
