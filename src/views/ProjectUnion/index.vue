<template>
    <section class="project-container__wrapper">
        <div class="project-container pt-24">
            <SearchInput
                    v-model="searchParams.keyWords"
                    @change="query()"
            />
            <div class="hr-slide-style-1 mt-22"></div>
            <ul class="project-list mt-10">
                <li v-for="(item,key) in list" :key="key">
                    <div class="main">
                        <router-link class="title" :to="`/projectUnionDetail/${item._id}`">
                            <TextEllipsis
                                    style="height: 50px;-webkit-line-clamp: 2;line-height: 1.5;"
                                    fill
                                    :rows="2"
                                    :value="item.name"
                            />
                        </router-link>
                        <div class="info">
                            {{item.type}}
                            <span class="ml-40">
                                发布时间：{{item.releaseTime}}
                            </span>
                        </div>
                        <TextEllipsis
                                class="content"
                                fill
                                :rows="3"
                                :value="item.content"
                        />
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
    import SearchInput from '@components/SearchInput'
    import Pagination from '@components/Pagination'
    import TextEllipsis from '@components/TextEllipsis'

    export default {
        name: "ProjectUnion",
        components: {
            SearchInput,
            Pagination,
            TextEllipsis,
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
            ]
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
                    limit: query.limit || 9,
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
                this.http.get(this.api.projectUnion.list, {
                    ...this.searchParams,
                    ...this.pagination,
                }).then(res => {
                    if (res.status !== 200) {
                        return []
                    }

                    const { pagination } = this

                    this.list = res.data.docs
                    pagination.total = res.data.total // this.$forceUpdate
                })
            },
        },
        created() {
            this.loadList()
        },
    }
</script>

<style lang="scss" scoped>
    .project-list {
        font-size: 0;
        margin-right: -20px;
        min-height: 639px;

        li {
            display: inline-block;
            width: 33.3333%;
            margin-top: 20px;
            padding-right: 20px;
            vertical-align: top;
        }

        .main {
            overflow: hidden;
            padding: 15px 22px 10px 15px;
            background: #F6FBFF;
            border-radius: 5px;
            transition: box-shadow .2s;

            &:hover {
                box-shadow: 0 3px 10px 0 #e0e3e6;
            }

        }

        .title {
            line-height: 18px;
            font-weight: 500;
            font-size: 18px;
            color: #333333;
            cursor: pointer;
        }


        .info {
            margin-top: 16px;
            line-height: 14px;
            font-size: 14px;
            font-weight: 500;
            color: #666666;
        }

        .content {
            margin-top: 12px;
            line-height: 30px;
            font-size: 14px;
            font-weight: 500;
            color: rgba(51, 51, 51, 1);
        }

    }
</style>
