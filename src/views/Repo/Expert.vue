<template>
    <section class="project-container__wrapper">
        <div class="project-container pt-30">
            <div class="tab">
                <ul class="tab-header">
                    <li class="active">
                        专家库
                    </li>
                    <router-link tag="li" to="organizationRepo">
                        机构库
                    </router-link>
                </ul>
                <ul class="tab-body">
                    <SearchInput
                            placeholder="请输入专家姓名"
                            v-model="searchParams.expertName"
                            @change="query()"
                    />
                </ul>
            </div>
            <div class="text-right pt-14">
                <p class="text-tag">
                    默认首字母排序
                </p>
            </div>
            <ul class="expert-list">
                <li v-for="item in 10" :key="item">
                    <div class="main">

                        <div class="avatar" @click="$router.push('/ExpertDetail/111')">
                            <router-link to="/ExpertDetail/111">
                                <img
                                        src="https://lanhuapp.com/web/static/favicon_beta.png"
                                        alt="expert-avatar"
                                >
                            </router-link>
                        </div>
                        <div class="detail">
                            <div class="info">
                                <span class="name">
                                    李毅
                                </span>
                                <span class="text-tag tiny sex">
                                    男
                                </span>
                            </div>
                            <div class="hr-dashed mt-10"></div>
                            <p class="brief">
                                这是一段个人介绍这是一段个人 介绍这是一段个人介绍…
                            </p>
                        </div>
                    </div>
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
        name: "Expert",
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
                    expertName: query.expertName,
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

    .expert-list {
        font-size: 0;
        margin-top: -3px;
        margin-right: -15px;

        li {
            display: inline-block;
            width: 20%;
            margin-top: 15px;
            padding-right: 15px;

            $padding-left: 15px;
            $padding-right: 19px;

            .main {
                &:hover {
                    box-shadow: 0 4px 16px rgba(163, 163, 208, 0.62);
                }
            }


            /* 以下都是detail */
            .detail {
                overflow: hidden;
                padding: 15px 19px 8px 15px;
                background-color: #F6FBFF;
            }

            .avatar {
                position: relative;
                padding-bottom: 84.21%;

                img {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                }
            }

            .info {
                .name {
                    font-size: 18px;
                    font-weight: bold;
                    color: #000034;
                }

                .sex {
                    margin-left: 30px;
                    color: rgba(255, 255, 255, 1);
                    background: rgba(53, 139, 254, 1);
                    border-color: rgba(53, 139, 254, 1);
                    vertical-align: 1px;
                }
            }

            .brief {
                padding-top: 5px;
                line-height: 26px;
                font-size: 14px;
                font-weight: 500;
                color: rgba(88, 96, 102, 1);
            }
        }
    }

    @media screen and (max-width: 1000px) {
        .expert-list {
            li {
                width: 25%;
            }
        }
    }

    @media screen and (max-width: 820px) {
        .expert-list {
            li {
                width: 33.333%;
            }
        }
    }

    @media screen and (max-width: 500px) {
        .expert-list {
            li {
                width: 50%;
            }
        }
    }
</style>
