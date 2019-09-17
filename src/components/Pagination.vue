<template>
    <Page
            class="pagination"
            show-sizer
            show-elevator
            size="small"
            :page-size-opts="[3,6,9,10,20,30]"
            @on-change="handlePageChange"
            @on-page-size-change="handlePageSizeChange"
            v-bind="composeAttrs"
    />
</template>

<script>
    export default {
        name: "Pagination",
        props: {
            pageKey: {
                type: String,
                default: 'page',
            },
            sizeKey: {
                type: String,
                default: 'limit',
            },

            // events
            // @change
        },
        data() {
            this.pageSize = Number(this.$attrs[this.sizeKey] || 10); // fix 页码改变也会触发分页变化事件
            return {};
        },
        computed: {
            composeAttrs() {
                const attrs = { ...this.$attrs };
                if (this.pageKey !== 'current') {
                    attrs.current = Number(attrs[this.pageKey] || 1);
                    delete attrs[this.pageKey];
                }
                if (this.sizeKey !== 'pageSize') {
                    attrs.pageSize = this.pageSize;
                    delete attrs[this.sizeKey];
                }

                return attrs;
            },
        },
        methods: {
            handlePageChange(page) {
                this.$emit('change', {
                    [this.pageKey]: page,
                    [this.sizeKey]: this.pageSize,
                });
            },
            handlePageSizeChange(pageSize) {
                this.pageSize = pageSize;
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
