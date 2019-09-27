<template>
    <section class="project-container">
        <p class="detail-page-caption">
            <span>债券记录</span>
        </p>
        <Table class="project-ivu-table mt-30" stripe :columns="columns" :data="list"/>
        <Pagination
                class="mt-30"
                v-bind="pagination"
                @change="handlePageChange"
        />
    </section>
</template>

<script>
    import Pagination from '@components/Pagination';
    export default {
        name: "BondRecordList",
        components: {
            Pagination,
        },
        data() {
            this.columns = [
                {
                    title: '债券简称',
                    key: 'name',
                },
                {
                    title: '成交日期',
                    key: 'name',
                },
                {
                    width: 180,
                    title: '成交金额（亿元）',
                    key: 'name',
                },
                {
                    title: '剩余期限',
                    key: 'name',
                },
                {
                    title: '成交利率',
                    key: 'name',
                },
                {
                    width: 140,
                    title: '偏离（BP）',
                    key: 'name',
                },
                {
                    width: 200,
                    title: '相关文件',
                    key: 'name',
                    render() {
                        return (
                            <div>
                                这是一个相关文件名称
                            </div>
                        );
                    },
                },
                {
                    title: '其他',
                    key: 'name',
                },
            ];
            this.list = [];
            return {
                searchParams: this.getSearchParams(),
                pagination: this.getPagination(),
            };
        },
        methods: {
            getSearchParams() {
                const { query } = this.$route;
                return {
                    projectName: query.projectName,
                };
            },
            getPagination() {
                const { query } = this.$route;
                return {
                    page: query.page || 1,
                    limit: query.limit || 20,
                    total: 0,
                };
            },
            handlePageChange({ page, limit }) {
                this.pagination.page = page;
                this.pagination.limit = limit;
                this.query({
                    page: page,
                    limit,
                });
            },
            query(otherParams) {
                this.$router.push({
                    path: this.$route.path,
                    query: {
                        ...this.searchParams,
                        ...otherParams,
                    },
                });
            },
            loadList() {
                this.pagination.total = 100;
                this.list = Array(10).fill({ 'name': Math.random().toString(32).substring(2, 9) });
            },
        },
        created() {
            this.loadList();
        },
    };
</script>

<style lang="scss" scoped>
</style>
