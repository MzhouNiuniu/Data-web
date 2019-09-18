<template>
    <section class="project-container__wrapper">
        <div class="project-container pt-24">
            <div class="tab">
                <ul class="tab-header">
                    <router-link tag="li" to="expertRepo">
                        专家库
                    </router-link>
                    <li class="active">
                        机构库
                    </li>
                </ul>
                <ul class="tab-body">
                    <SearchInput
                            placeholder="请输入机构库名称"
                            v-model="searchParams.organizationName"
                            @change="query()"
                    />
                </ul>
            </div>

            <div class="organization-list__wrapper">
                <div class="hr-dashed"></div>
                <ul class="organization-list">
                    <li v-for="(item,key) in list" :key="key">
                        <div class="header">
                            <router-link
                                    class="title ue-link text-ellipsis"
                                    :to="`/OrganizationDetail/${item._id}`"
                            >
                                {{item.name}}
                            </router-link>
                            <p class="info text-ellipsis">
                                所在城市：成都市
                                <span class="ml-30">
                                   【2019-09-09 09:12:55】
                               </span>
                            </p>
                        </div>
                        <p class="content">
                            {{item.intro}}
                        </p>
                        <div class="hr-dashed"></div>
                    </li>
                </ul>

            </div>
            <Pagination
                    class="  mt-b text-right"
                    v-bind="pagination"
                    @change="handlePageChange"
            />

        </div>
    </section>
</template>

<script>
    import SearchInput from '@components/SearchInput';
    import Pagination from '@components/Pagination';

    export default {
        name: "Organization",
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
                    organizationName: query.organizationName,
                };
            },
            getPagination() {
                const { query } = this.$route;
                return {
                    page: query.page || 1,
                    limit: query.limit || 5,
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
                this.http.get(this.api.repo.organization.list, {
                    ...this.searchParams,
                    ...this.pagination,
                }).then(res => {
                    if (res.status !== 200) {
                        return [];
                    }

                    const { pagination } = this;
                    const data = res.data;
                    this.list = data.docs;

                    pagination.total = data.total; // this.$forceUpdate
                });
            },
        },
        created() {
            this.loadList();
        },
    };
</script>

<style lang="scss" scoped>
    @import "./public";
    .mt-b{
        margin-top: 2%;
    }
    .organization-list__wrapper {
        padding: 0 20px 10px;
        background: #F6FBFF;
        min-height:591px;
    }

    .organization-list {
        margin-top: 12px;

        li {
            position: relative;

            &:last-child {
                margin-bottom: 0;
            }


            .header {
                margin-top: 18px;
                line-height: 20px;
                font-size: 0;

                .title, .info {
                    display: inline-block;
                    vertical-align: middle;
                }

                .title {
                    width: 60%;
                    font-size: 20px;
                    font-weight: 500;
                    color: rgba(51, 51, 51, 1);
                }

                .info {
                    width: 40%;
                    line-height: 14px;
                    text-align: right;
                    font-size: 14px;
                    font-weight: 400;
                    color: rgba(102, 102, 102, 1);
                }
            }


            .content {
                margin-top: 11px;
                line-height: 26px;
                font-size: 14px;
                word-break: break-all;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                font-weight: 400;
                color: rgba(51, 51, 51, 1);
                height: 52px;
            }

            .hr-dashed {
                margin-top: 14px;
            }
        }
    }
</style>
