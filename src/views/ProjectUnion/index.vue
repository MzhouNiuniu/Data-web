<template>
    <section class="project-container__wrapper">
        <div class="project-container pt-24">
            <SearchInput
                    v-model="searchParams.projectName"
                    @change="query()"
            />
            <div class="hr-slide-style-1 mt-30"></div>
            <ul class="project-list pt-10">
                <li v-for="(item,key) in list" :key="key">
                    <div class="main" :class="getItemClassName(item)">
                        <router-link tag="p" class="title" :to="`/projectUnionDetail/${item._id}`">
                            {{item.name}}
                        </router-link>
                        <p class="timestamp">
                            <img src="~@public/icon/clock.png" alt="" class="icon">
                            {{item.releaseTime}}
                        </p>
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
        name: "ProjectUnion",
        components: {
            SearchInput,
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
            this.list = [];
            this.projectTypeMap = {
                // '工程项目': {
                //     className:'',
                // },
                '工程项目': 'gcxm',
                '投资项目': 'tzxm',
                '融资项目': 'rzxm',
            };
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
                this.http.get(this.api.projectUnion.list, {
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
            getItemClassName(item) {
                return `${this.projectTypeMap[item.type] || ''}`;
            },
        },
        created() {
            this.loadList();
        },
    };
</script>

<style lang="scss" scoped>
    .project-list {
        font-size: 0;
        margin-right: -20px;

        li {
            display: inline-block;
            vertical-align: top;
            margin-top: 20px;
            padding-right: 20px;
            width: 20%;
        }

        .main {
            position: relative;
            overflow: hidden;
            /*display: inline-block;*/
            border-radius: 5px;
            background: no-repeat scroll top left / cover;

            // 默认使用其他项目
            background-image: url("./image/qtxm.png");

            transition: box-shadow .2s;
            @function getBoxShadow($color) {
                @return 0 3px 10px 0 $color;
            }

            &:hover {
                box-shadow: getBoxShadow(#FF7C59);
            }


            &.gcxm {
                background-image: url("./image/gcxm.png");

                &:hover {
                    box-shadow: getBoxShadow(#4A38FF);
                }
            }

            &.rzxm {
                background-image: url("./image/rzxm.png");

                &:hover {
                    box-shadow: getBoxShadow(#40DCC6);
                }
            }

            &.tzxm {
                background-image: url("./image/tzxm.png");

                &:hover {
                    box-shadow: getBoxShadow(#FFCE56);
                }
            }
        }

        .title {
            margin: 20% 22px 33.6%;
            height: 18px;
            font-size: 18px;
            color: #fff;
            cursor: pointer;
        }

        .timestamp {
            position: absolute;
            right: 8px;
            bottom: 10px;
            font-size: 12px;
            color: #fff;

            .icon {
                margin-right: 8px;
                width: 14px;
                vertical-align: -2px;
            }
        }
    }

    @media screen and (max-width: 1100px) {
        .project-list {
            li {
                width: 25%;
            }
        }
    }

    @media screen and (max-width: 900px) {
        .project-list {
            li {
                width: 33.333%;
            }
        }
    }

    @media screen and (max-width: 650px) {
        .project-list {
            li {
                width: 50%;
            }
        }
    }


    @media screen and (max-width: 440px) {
        .project-list {
            li {
                display: block;
                margin-left: auto;
                margin-right: auto;
                width: 70%;
            }
        }
    }


    @media screen and (max-width: 320px) {
        .project-list {
            li {
                width: 100%;
            }
        }
    }
</style>
