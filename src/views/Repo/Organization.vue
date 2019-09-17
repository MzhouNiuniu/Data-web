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

            <ul class="organization-list ">
                <li v-for="item in 5" :key="item">

                    <p class="date">
                        <span class="left">所在城市：   成都</span>
                        <span class="right">【2019-09-11】</span>
                        <!--<span class="left">发布时间</span>-->
                        <!--<span class="right">2019-08-12 14:22</span>-->
                    </p>
                    <router-link tag="p" class="title" to="/OrganizationDetail/111">
                        这是一个机构名称这是一个机构名称这是一个机构名称
                    </router-link>


                    <p class="content mt-10">
                        这是一段机构简介这是一段机构简介这是一段机构简介这是一段机构简介这是一段机构简介这是一段机构简介这是一段机构简介这是一段机构简介这是一段机构简介这是一段机构简介这是一
                        段机构简介这是一段机构简介这是一段机构简介这是一段机构简介这是一段机构简介这是一段机构简介这是一段机构简介这是一段机构简介这是一段机构简介这是一段机构简介这是一段机…
                    </p>
                    <div class="hr-dashed mt-10"></div>
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
        created() {
            setTimeout(() => {
                this.pagination.total = 230;
            }, 1000);
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
                width: 246px;
                .left {
                    float: left;
                }

                .right {
                    float: right;
                 }
            }

            .title {
                line-height: 16px;
                font-size: 20px;
                color: #333;
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
