<template>
    <section class="news-container clearfix">
        <div class="project-container">
            <p class="part-title">
                <span>新闻动态</span>
                <span>news</span>
            </p>
            <div class="mt-32 content">
                <div class="left">
                    <div class="cover" :style="{backgroundImage: `url('/image/noPic.png')`}">
                        <router-link class="title text-ellipsis" to="/">
                            湖南省住房和城乡建设厅解读《关于推进城乡…
                        </router-link>
                    </div>
                    <p class="date mt-20">
                        发布时间：2019-09-13 14:23
                    </p>
                    <p class="intro mt-16">
                        <TextEllipsis
                                fill
                                :rows="3"
                                value="这是一段新闻摘要这是一段新闻摘要这是一段新闻摘要这是一 摘要
                            这是一段新闻摘要这是一段新闻摘要这是一段新闻摘要这 是一段新
                            闻摘要这是一段新闻摘要这是一段新闻摘要这是…"
                        />
                    </p>
                </div>
                <div class="right clearfix">
                    <ul class="menu">
                        <li v-for="(item,index) in menuList" :key="index" :class="{active:index === activeMenuIndex}"
                            @click="activeMenuIndex = index">
                            {{item}}
                        </li>
                    </ul>
                    <ul class="menu-content">
                        <li v-for="item in 3" :key="item">
                            <router-link class="look-detail" to="/">
                                了解更多
                            </router-link>
                            <div class="header">
                                <router-link class="title ue-link text-ellipsis" to="/">
                                    这是一个新闻标题这是一个新闻标题
                                </router-link>
                                <p class="date">
                                    [2019-09-12]
                                </p>
                            </div>
                            <p class="content">
                                <TextEllipsis
                                        fill
                                        :rows="2"
                                        value="这是一段新闻摘要这是一段新闻摘要这是一段新闻摘要这是一 摘要
                            这是一段新闻摘要这是一段新闻摘要这是一段新闻摘要这 是一段新
                            闻摘要这是一段新闻摘要这是一段新闻摘要这是…"
                                />
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import TextEllipsis from '@components/TextEllipsis'

    export default {
        name: 'NewsPost',
        components: {
            TextEllipsis,
        },
        data() {
            return {
                menuList: [
                    '行业动态',
                    '城投新闻',
                    '智库动态',
                    '项目动态',
                ],
                activeMenuIndex: 0,
            }
        },
        watch: {
            activeMenuIndex(value) {
                console.log(value)
            },
        },
    }
</script>

<style lang="scss" scoped>
    .news-container {
        padding-top: 40px;
        padding-bottom: 40px;
        background: #fff;
    }

    .part-title {
        text-align: center;
        color: rgba(51, 51, 51, 1);

        &::after {
            content: '';
            display: block;
            margin: 13px auto 0;
            width: 60px;
            height: 4px;
            background: $sign-color;
        }

        span:first-child {
            line-height: 24px;
            font-size: 24px;
            font-weight: 600;
        }

        span:last-child {
            display: block;
            margin-top: 6px;
            line-height: 18px;
            font-size: 18px;
            font-weight: 500;
        }
    }

    .left {
        float: left;
        margin-bottom: -8px;
        width: 386px;

        .cover {
            position: relative;
            height: 200px;
            background-size: cover;
            background-position: center;

            .title {
                position: absolute;
                left: 0;
                bottom: 0;
                padding: 0 25px;
                width: 100%;
                line-height: 46px;
                background: rgba(0, 0, 0, 0.5);
                font-size: 16px;
                font-weight: bold;
                color: rgba(255, 255, 255, 1);
            }
        }

        .date {
            line-height: 14px;
            font-size: 14px;
            font-weight: 500;
            color: rgba(102, 102, 102, 1);
        }

        .intro {
            padding-top: 10px;
            border-top: 1px solid rgba(237, 242, 246, 1);
            line-height: 30px;
            font-size: 14px;
            font-weight: 500;
            color: rgba(51, 51, 51, 1);
        }
    }

    .right {
        margin-left: 401px;

        .menu {
            position: relative;
            float: left;
            width: 100px;
            // 106px

            background: rgba(237, 242, 246, 1);


            &::before {
                content: '';
                position: absolute;
                display: block;
                width: 6px;
                top: 6px;
                right: -6px;
                bottom: 6px;
                background: rgba(237, 242, 246, 0.5);
            }

            li {
                padding-left: 15px;
                line-height: 86px;
                font-size: 14px;
                font-weight: 500;
                color: rgba(51, 51, 51, 1);
                cursor: pointer;

                &:hover {
                    color: $sign-color;
                }

                &.active {
                    position: relative;
                    color: $sign-color;

                    &::after {
                        content: '';
                        position: absolute;
                        display: block;
                        right: 15px;
                        top: 50%;
                        transform: translateY(-50%);
                        width: 0;
                        height: 0;
                        border-left: 10px solid $sign-color;
                        border-top: 5px solid transparent;
                        border-bottom: 5px solid transparent;
                    }
                }
            }
        }

        .menu-content {
            margin-left: 131px;

            li {
                position: relative;
                margin-bottom: 20px;
                padding: 13px 0 6px 20px;
                border: 1px solid rgba(191, 197, 202, 1);

                &:last-child {
                    margin-bottom: 0;
                }
            }

            .look-detail {
                position: absolute;
                right: 0;
                bottom: 0;
                width: 94px;
                line-height: 24px;
                font-size: 14px;
                font-weight: 500;
                text-align: center;
                background: rgba(5, 103, 255, 1);
                color: rgba(255, 255, 255, 1);
            }

            .header {
                overflow: hidden;

                .title {
                    width: 70%;
                    line-height: 16px;
                    font-size: 16px;
                    font-weight: 500;
                    color: rgba(51, 51, 51, 1);
                }

                .date {
                    float: right;
                    line-height: 14px;
                    font-size: 14px;
                    font-weight: 400;
                    color: rgba(51, 51, 51, 1);
                }
            }


            .content {
                margin-top: 6px;
                line-height: 28px;
                font-size: 14px;
                font-weight: 400;
                color: rgba(51, 51, 51, 1);
            }
        }
    }
</style>
