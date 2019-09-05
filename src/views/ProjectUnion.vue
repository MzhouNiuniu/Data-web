<template>
    <section>
        <SearchInput
                v-model="searchParams.projectName"
                @change="query()"
        />
        <OptionButton
                class="mt-30"
                title="项目名称"
                v-model="searchParams.projectType"
                :options="options"
                @change="query()"
        />
        <div class="hr"></div>
        <ul class="project-list mt-30">
            <li>ProjectCard</li>
        </ul>
        <Pagination
                class="mt-20"
                v-bind="pagination"
                @change="handlePageChange"
        />
    </section>
</template>

<script>
    import SearchInput from '@components/SearchInput';
    import OptionButton from '@components/OptionButton';
    import Pagination from '@components/Pagination';

    export default {
        name: "ProjectUnion",
        components: {
            SearchInput,
            OptionButton,
            Pagination,
        },
        data() {
            this.options = [
                {
                    label: '工程项目',
                    value: '工程项目',
                },
                {
                    label: '投资项目',
                    value: '投资项目',
                },
                {
                    label: '融资项目',
                    value: '融资项目',
                },
                {
                    label: '其它项目',
                    value: '其它项目',
                },
            ];
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
                    projectType: query.projectType,
                };
            },
            getPagination() {
                const { query } = this.$route;
                return {
                    current: query.current || 1,
                    size: query.size || 10,
                    total: 0,
                };
            },
            handlePageChange({ page, size }) {
                this.pagination.current = page;
                this.pagination.size = size;
                this.query({
                    current: page,
                    size,
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
        },
        mounted() {
            setTimeout(() => {
                this.pagination.total = 230;
            }, 1000);
        },
    };
</script>

<style lang="scss" scoped>
    .hr {
        margin-top: 16px;
        height: 1px;
        background: rgba(191, 197, 202, 1);
    }
</style>
