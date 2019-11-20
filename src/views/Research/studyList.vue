<template>
    <section class="project-container__wrapper">
        <div class="project-container">
            <div class="left-wrapper">
                <p class="detail-page-caption">
                    <span>{{title}}</span>
                </p>

                <div class="content-wrapper c" v-for="(item,index) in data" :key="index"
                     @click="toDetail(item._id,title)">
                    <div class="content">
                        <div>
                            <img :src="item.cover" alt="">
                        </div>
                        <div class="character">
                            <p>{{item.name}}</p>
                            <div class="man">研究人：{{item.human}}</div>
                            <div class="man">研究人：{{item.organization}}</div>
                            <div class="brief">{{item.brief}}</div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="right-wrapper">
                <img src="./img/news-bg.png" alt="">
                <ul>
                    <li v-for="(item,index) in navTitle" :key="index" :class="item.class" @click="setActiveAttr(index)">
                        <span>{{item.name}}</span>
                        <img :src="require(`./img/${item.class}.png`)" alt="">
                        <div class="square"></div>
                    </li>
                </ul>
            </div>

        </div>
        <section class=" pages">
            <Pagination
                    class="mt-20"
                    :pageSize="pageSize"
                    :total="total"
                    v-bind="pagination"
                    @change="handlePageChange"
            />
        </section>
    </section>
</template>

<script>
    import Pagination from '@components/Pagination';

    export default {
        name: "study",
        data() {
            return {
                navTitle: [{
                    name: '专题报告',
                    class: 'unActive'
                }, {
                    name: '定期报告',
                    class: 'unActive'
                }],
                title: '专题报告',
                pagination: this.getPagination(),
                newsType: 0,
                data: [],
                pageSize:3,
                total:0
            }
        },
        components: {
            Pagination,
        },
        created() {
            this.setActiveAttr(this.$route.params.index)
        },
        methods: {
            getPagination() {
                const {query} = this.$route;
                return {
                    page: query.page || 1,
                    size: query.size || 6,
                    total: 0,
                };
            },
            handlePageChange({page, limit}) {
                this.pagination.page = page;
                this.pagination.size = limit;
                this.getList(3, this.pagination.page, this.newsType)
            },
            setActiveAttr(index) {
                this.navTitle.forEach((item) => {
                    this.$set(item, 'class', 'unActive')
                })
                this.$set(this.navTitle[index], 'class', 'active')
                this.title = this.navTitle[index].name
                this.newsType = index
                this.getList(6, 1, index)
            },
            async getList(size, current, type) {
                let res = await this.http.get(this.api.research.list, {limit: size, page: current, keyWords: '', type})
                this.pagination.total = res.data.total
                this.total = res.data.total
                this.data = res.data.docs
            },
            toDetail(id) {
                this.$router.push({path: `/studyDetail/${id}`})
            },
        }
    }
</script>

<style lang="scss" scoped>
    .project-container {
        margin-top: 20px;
        display: flex;
        min-height: 715px;
        .left-wrapper {
            flex: 1;
            margin-right: 30px;

            .detail-top {
                border-bottom: 1px solid $sign-color;

                & > .detail-top-title {
                    border-left: 5px solid $primary-color;
                    font-size: 24px;
                    color: $sign-color;
                    height: 24px;
                    line-height: 24px;
                    font-weight: bold;
                }
            }
            .content-wrapper {
                margin: 20px 10px;
                display: flex;

                & > img {
                    width: 16px;
                    height: 16px;
                    margin-top: 5px;
                }
                .content {
                    display: flex;
                    margin-left: 15px;
                    border-bottom: 1px solid #BFC5CA;
                    img {
                        width: 130px;
                        height: 184px;
                        display: block;
                        margin-bottom: 8px;
                    }
                    .character {
                        margin-left: 20px;
                        p {
                            font-size: 18px;
                            color: #000;
                            padding-bottom: 10px;

                        }
                        .man{
                            font-size: 13px;
                            padding-bottom: 10px;
                        }
                        .brief{
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 4;
                            font-size: 13px;
                            overflow: hidden;
                            line-height: 1.6;
                        }
                    }

                }
            }
        }
        .right-wrapper {
            flex: 0 1 200px;
            width: 200px;
            height: 194px;
            -webkit-border-radius: 10px;
            -moz-border-radius: 10px;
            border-radius: 10px;
            border: 1px solid #eee;
            background: $sign-color;

            & > img {
                width: 100%;
                height: 65px;
            }
            & > ul > li {
                position: relative;
                height: 60px;
                line-height: 60px;
                color: #586066;
                font-size: 16px;
                background: #fff;
                text-align: center;
                border-bottom: 1px dashed #BFC5CA;

                & > img {
                    width: 16px;
                    height: 16px;
                    margin-left: 15px;
                }
                .square {
                    position: absolute;
                    right: 0;
                    top: calc(50% - 10px);
                    border: 10px solid #fff;
                    border-top-color: transparent;
                    border-bottom-color: transparent;
                    border-left-color: transparent;
                }
            }
            & > ul > li:last-child {
                border: none;
            }
            & > ul > li.active {
                background: $primary-color;
                color: #fff;
            }
            & > ul > li.unActive {
                background: #fff;
                color: #586066
            }
        }
    }

    .pages {
        margin-top: 5px;
        margin-bottom: 20px;
        /* text-align: center; */
        justify-content: center;
    }
</style>
