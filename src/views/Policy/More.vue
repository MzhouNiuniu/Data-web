<template>
    <section class="project-container">
        <div class="search-bar mt-24 clearfix">
            <SearchInput class="search-input" placeholder="请输入企业名称"/>
            <router-link  class="mode-btn" to="/CityInvest/Map">
                <img src="~@public/icon/china.png" alt="" class="icon">
                <p class="text">
                    地图模式
                </p>
            </router-link>
        </div>
        {{list}}
        <Pagination
                class="mt-20"
                v-bind="pagination"
                @change="handlePageChange"
        />
    </section>
</template>

<script>
    import SearchInput from '@components/SearchInput';
    import Pagination from '@components/Pagination';

    export default {
        name: "PolicyMore",
        components: {
            SearchInput,
            Pagination,
        },
        data() {
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
                this.list = Array(10).fill({ 'name': Math.random() });
            },
        },
        created() {
            this.loadList();
        },
    };
</script>

<style lang="scss" scoped>
    .search-bar {
        .search-input {
            float: left;
            padding-right: 240px;
        }

        .mode-btn {
            position: relative;
            z-index: 1;
            float: left;
            margin-left: -210px;
            padding-top: 4px;
            padding-bottom: 2px;
            width: 76px;
            background: rgba(236, 241, 255, 1);
            text-align: center;
            font-size: 12px;
            font-weight: 600;
            color: rgba(5, 103, 255, 1);
            border-radius: 5px;
            cursor: pointer;
            user-select: none;

            .icon {
                width: 20px;
            }

            .text {
                margin-top: 2px;
            }
        }
    }
</style>
