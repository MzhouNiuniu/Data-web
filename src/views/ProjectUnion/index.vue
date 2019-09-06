<template>
    <section class="project-container__wrapper">
        <div class="project-container pt-24">
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
            <div class="hr-slide-style-1 mt-16"></div>
            <ul class="project-list mt-10">
                <li v-for="item in 30" :key="item">
                    <div class="main">
                        <router-link tag="p" class="title" to="/projectUnionDetail/111">
                            这是一个项目标题这是 一个项目标题
                        </router-link>
                        <p class="timestamp">
                            <img src="~@public/icon/clock.png" alt="" class="icon">
                            2019-9-03 14:23
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
        created() {
            setTimeout(() => {
                this.pagination.total = 230;
            }, 1000);
        },
    };
</script>

<style lang="scss" scoped>
    .project-list {
        font-size: 0;
        margin-right: -20px;

        li {
            display: inline-block;
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

            &.gcxm {
                background-image: url("./image/gcxm.png");
            }

            &.rzxm {
                background-image: url("./image/rzxm.png");
            }

            &.tzxm {
                background-image: url("./image/tzxm.png");
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
