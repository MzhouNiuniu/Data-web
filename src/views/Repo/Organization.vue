<template>
    <section class="project-container__wrapper">
        <div class="project-container pt-30">
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
            <div class="text-right pt-14">
                <p class="text-tag">
                    默认发布时间排序
                </p>
            </div>
            <ul class="organization-list mt-12">
                <li v-for="(item,key) in list" :key="key">
                    <p class="date">
                        <span class="left">发布时间</span>
                        <span class="right">{{item.releaseTime}}</span>
                    </p>
                    <router-link tag="p" class="title" :to="`/OrganizationDetail/${item._id}`">
                        {{item.name}}
                    </router-link>
                    <p class="location mt-16">
                        <img src="~@public/icon/location.png" alt="" class="icon">
                        {{item.province}}
                    </p>
                    <div class="hr-dashed mt-10"></div>
                    <p class="content mt-10">
                        {{item.intro}}
                    </p>
                </li>
            </ul>
            <Pagination
                    class="mt-20"
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
                    limit: query.limit || 10,
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

    .organization-list {
        width: 1200px;
        background: #F6FBFF;

        li {
            position: relative;
            padding: 16px 18px 14px 20px;
            margin-bottom: 14px;

            &:last-child {
                margin-bottom: 0;
            }

            .date {
                position: absolute;
                top: 12px;
                right: 12px;
                width: 215px; // 原205px，因为时间单位精确到秒，所以加了10px
                background-color: #358BFE;

                .left, .right {
                    line-height: 26px;
                    height: 26px;
                    font-size: 12px;
                    font-weight: 500;
                    color: rgba(255, 255, 255, 1);
                }


                .left {
                    float: left;
                    padding-left: 10px;

                }

                .right {
                    $bg: rgba(149, 195, 254, 1);
                    position: relative;
                    float: right;
                    padding-right: 10px;
                    background: $bg;

                    &::before {
                        content: '';
                        position: absolute;
                        left: -20px;
                        bottom: 0;
                        width: 0;
                        height: 0;
                        border-bottom: 26px solid $bg;
                        border-left: 20px solid transparent;
                    }
                }

                &::after {
                    content: '';
                    display: block;
                    clear: both;
                }
            }

            .title {
                line-height: 16px;
                font-size: 16px;
                font-weight: bold;
                color: rgba(0, 0, 52, 1);
                cursor: pointer;
            }

            .location {
                line-height: 12px;
                font-size: 12px;
                font-weight: 500;
                color: rgba(168, 172, 175, 1);

                .icon {
                    margin-right: 10px;
                    height: 18px;
                }
            }

            .content {
                line-height: 26px;
                font-size: 14px;
                font-weight: 500;
                color: rgba(88, 96, 102, 1);
            }
        }
    }
</style>
