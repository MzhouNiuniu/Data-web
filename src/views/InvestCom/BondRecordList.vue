<template>
    <section class="project-container">
        <p class="detail-page-caption">
            <span>城投数据</span>
        </p>
        <Table class="project-ivu-table mt-30 cool-scroll" stripe :columns="columns" :data="list"/>
        <Pagination
                class="mt-30"
                v-bind="pagination"
                @change="handlePageChange"
        />

        <h1>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            此处为公共样式部分
        </h1>
    </section>
</template>

<script>
    import Pagination from '@components/Pagination';

    export default {
        name: "List",
        components: {
            Pagination,
        },
        data() {
            this.columns = [
                {
                    width: 140,
                    title: '债券代码',
                    key: 'name',
                },
                {
                    width: 140,
                    title: '债券全称',
                    key: 'name',
                },
                {
                    width: 140,
                    title: '债券简称',
                    key: 'name',
                },
                {
                    width: 140,
                    title: '债券类型',
                    key: 'name',
                },

                {
                    width: 140,
                    title: '发行人',
                    key: 'name',
                },
                {
                    width: 140,
                    title: '发行时间',
                    key: 'name',
                },
                {
                    width: 140,
                    title: '发行方式',
                    key: 'name',
                },
                {
                    width: 140,
                    title: '发行规模',
                    key: 'name',
                },

                {
                    width: 140,
                    title: '主承销商',
                    key: 'name',
                },
                {
                    width: 140,
                    title: '债券期限',
                    key: 'name',
                },
                {
                    width: 140,
                    title: '票面利率',
                    key: 'name',
                },
                {
                    width: 140,
                    title: '债券评级',
                    key: 'name',
                },
                {
                    width: 140,
                    title: '主体评级',
                    key: 'name',
                },
                {
                    width: 140,
                    title: '还本方式',
                    key: 'name',
                },
                {
                    width: 140,
                    title: '付息方式',
                    key: 'name',
                },
                {
                    width: 140,
                    title: '增信措施',
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
