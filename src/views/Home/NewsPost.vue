<template>
    <section class="news-container clearfix">
        <div class="project-container">
            <p class="part-title">
                <span>新闻动态</span>
                <span>news</span>
            </p>
            <div class="mt-32 content">

                <div class="left">
                    <div class="cover" :style="{backgroundImage:(list[0].cover==null?`url('/image/noPic.png')`:`url(${list[0].cover})`)}">
                        <router-link class="title text-ellipsis" to="/">
                           {{list[0].title}}
                        </router-link>
                    </div>
                    <p class="date mt-20">
                        发布时间：{{list[0].releaseTime}}
                    </p>
                    <p class="intro mt-16">
                        <TextEllipsis
                                fill
                                :rows="3"
                                :value="list[0].content"
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
                        <li v-for="item in list" :key="item._id">
                            <router-link class="look-detail" :to="`/newsDetail/${item._id}?type=行业动态`">
                                了解详情
                            </router-link>
                            <div class="header">
                                <router-link class="title ue-link text-ellipsis" :to="`/newsDetail/${item._id}?type=行业动态`">
                                    {{item.title}}
                                </router-link>
                                <p class="date">
                                    [{{item.releaseTime}}]
                                </p>
                            </div>
                            <p class="content">
                                <TextEllipsis
                                        fill
                                        :rows="2"
                                        :value="item.content"
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
                news: {},
                list:[{
                    title:'',
                    cover:'',
                    content:''
                }]
            }
        },
        watch: {
            activeMenuIndex(value) {
                if(value==0){
                  this.list=this.news.industryDynamic
                }
                if(value==1){
                    this.list=this.news.ideaNew
                }
                if(value==2){
                    this.list=this.news.ideaDynamic
                }
                if(value==3){
                    this.list=this.news.projectDynamic
                }
                console.log(value)
            },
        },
        created() {
            this.http.get(this.api.home.news).then(res => {

                    this.news = res.data.news
                    this.list=this.news.industryDynamic

            })
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
            margin-right: 10px;
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
                    margin-right: 10px;
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
