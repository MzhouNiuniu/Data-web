<template>
    <section class="project-container__wrapper">
        <div class="project-container pt-24">
            <div class="tab">
                <ul class="tab-header">
                    <li class="active">
                        专家库
                    </li>
                    <li>
                        <router-link to="organizationRepo">
                            机构库
                        </router-link>
                    </li>
                </ul>
                <ul class="tab-body">
                    <SearchInput
                            placeholder="请输入专家姓名"
                            v-model="searchParams.keyWords"
                            @change="query()"
                    />
                </ul>
            </div>

            <!--<ul class="expert-list">-->
            <!--<li v-for="item in 10" :key="item">-->
            <!--<div class="main">-->

            <!--<div class="avatar" @click="$router.push('/ExpertDetail/111')">-->
            <!--<router-link to="/ExpertDetail/111">-->
            <!--<img-->
            <!--src="https://lanhuapp.com/web/static/favicon_beta.png"-->
            <!--alt="expert-avatar"-->
            <!--&gt;-->
            <!--</router-link>-->
            <!--</div>-->
            <!--<div class="detail">-->
            <!--<div class="info">-->
            <!--<span class="name">-->
            <!--李毅-->
            <!--</span>-->

            <!--=======-->
            <div class="expert-list__wrapper">
                <div class="hr-dashed"></div>
                <ul class="expert-list">
                    <li v-for="(item,index) in list" :key="index">
                        <div class="main">
                            <div class="avatar">
                                <img :src="item.photos" alt="expert-avatar">
                            </div>
                            <div class="detail">
                                <router-link class="name text-ellipsis" :to="`/ExpertDetail/${item._id}`">
                                    {{item.name}}
                                </router-link>
                                <div class="hr-dashed mt-10"></div>
                                <p class="brief">
                                    <TextEllipsis
                                            fill
                                            :rows="2"
                                            :value="item.current"
                                    />
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
        <Pagination
                class="mt-20"
                v-bind="pagination"
                @change="handlePageChange"
        />
    </section>
</template>

<script>
    import SearchInput from '@components/SearchInput'
    import Pagination from '@components/Pagination'
    import TextEllipsis from '@components/TextEllipsis'


    export default {
        name: "Expert",
        components: {
            SearchInput,
            Pagination,
            TextEllipsis,
        },
        data() {
            this.list = []
            return {
                searchParams: this.getSearchParams(),
                pagination: this.getPagination(),
            }
        },
        methods: {
            getSearchParams() {
                const { query } = this.$route
                return {
                    keyWords: query.keyWords,
                }
            },
            getPagination() {
                const { query } = this.$route
                return {
                    page: query.page || 1,
                    limit: query.limit || 10,
                    total: 0,
                }
            },
            handlePageChange({ page, limit }) {
                this.pagination.page = page
                this.pagination.limit = limit
                this.query({
                    page: page,
                    limit,
                })
            },
            query(otherParams) {
                this.$router.push({
                    path: this.$route.path,
                    query: {
                        ...this.searchParams,
                        ...otherParams,
                    },
                })
            },
            loadList() {
                this.http.get(this.api.repo.expert.list, {
                    ...this.searchParams,
                    ...this.pagination,
                }).then(res => {
                    if (res.status !== 200) {
                        return []
                    }

                    const { pagination } = this
                    const data = res.data
                    this.list = data.docs

                    pagination.total = data.total // this.$forceUpdate
                })
            },
        },
        created() {
            this.loadList()
        },
    }
</script>

<style lang="scss" scoped>
    @import "./public";

    .expert-list__wrapper {
        padding: 0 20px 10px;
        background: #F6FBFF;
        min-height: 595px;
    }

    .expert-list {
        font-size: 0;
        margin-right: -15px;

        li {
            display: inline-block;
            vertical-align: top;
            width: 20%;
            margin-top: 12px;
            padding-right: 15px;
            background-color: #fff;

            $padding-left: 15px;
            $padding-right: 19px;

            .main {
                transition: box-shadow .2s;

                &:hover {
                    box-shadow: 0 4px 16px rgba(163, 163, 208, 0.62);
                }
            }


            /* 以下都是detail */
            .detail {
                overflow: hidden;
                padding: 15px 19px 8px 15px;
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

            .name {
                font-size: 18px;
                font-weight: bold;
                color: #000034;
                text-align: center;
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
