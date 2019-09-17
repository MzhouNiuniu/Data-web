<template>
    <Page
            class="pagination"
            show-sizer
            show-elevator
            size="small"
            @on-change="handlePageChange"
            @on-page-size-change="handlePageSizeChange"
            v-bind="$attrs"
    />
</template>

<script>
    export default {
        name: "Pagination",
        props: {
            // events
            // @change
        },
        methods: {
            handlePageChange(page) {
                this.$emit('change', {
                    page,
                    size: this.$attrs.size,
                });
            },
            handlePageSizeChange(size) {
                this.$emit('change', {
                    size,
                    page: this.$attrs.page,
                });
            },
        },
    };
</script>

<style lang="scss" scoped>
    .pagination {
        text-align:center;
        ::v-deep {
            .ivu-page-item, .ivu-page-prev, .ivu-page-next {
                border-radius: 2px;
                border: 1px solid rgba(191, 197, 202, 1);

                a {
                    line-height: 14px;
                }
            }


            .ivu-select-selection, .ivu-page-options-elevator input {
                border-radius: 2px;
                border-color: rgba(191, 197, 202, 1);
            }

            .ivu-page-item-active {
                background: rgba(53, 139, 254, 1);

                a {
                    color: #fff;
                }
            }

            .ivu-page-options-elevator input {
                width: 30px;
                text-align: center;
            }
        }
    }
</style>
