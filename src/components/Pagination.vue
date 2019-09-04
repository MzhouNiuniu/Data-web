<template>
    <Page class="pagination" :total="100" show-sizer show-elevator size="small" v-bind="$attrs"/>
</template>

<script>
    export default {
        name: "Pagination",
    };
</script>

<style lang="scss" scoped>
    .pagination {
        ::v-deep {
            .ivu-page-item, .ivu-page-prev, .ivu-page-next {
                border-radius: 2px;
                border: 1px solid rgba(191, 197, 202, 1);
            }

            .ivu-page-options-elevator input {
                width: 30px;
                text-align: center;
            }
        }
    }
</style>
