<template>
    <section class="big-data">
        <div class="top-container flex-container">
            <div class="left">
                <div class="card">
                    <p class="title">
                        行政级别
                    </p>
                    <div class="content">
                        <LeftChart1/>
                    </div>
                </div>
                <div class="card mt-50">
                    <p class="title">
                        主体类型
                    </p>
                    <div class="content">
                        <LeftChart2/>
                    </div>
                </div>
            </div>
            <div class="center">
                <h1 class="big-data-title">
                    中国城投数据
                </h1>
                <div class="report flex-container">
                    <div class="card">
                        <p class="title">
                            总资产(亿元）
                        </p>
                        <div class="content">
                            {{ dataStore.title && dataStore.title.allNum || 0 }}
                        </div>
                    </div>
                    <div class="card">
                        <p class="title right">
                            总数目(项）
                        </p>
                        <div class="content">
                            {{ dataStore.title && dataStore.title.totalAsset && dataStore.title.totalAsset.length &&
                            dataStore.title.totalAsset[0].totalAsset || 0 }}
                        </div>
                    </div>
                </div>
                <div class="map">
                    <Map/>
                </div>
            </div>
            <div class="right">
                <div class="card">
                    <p class="title right">
                        评级数量
                    </p>
                    <div class="content">
                        <RightChart1/>
                    </div>
                </div>
                <div class="card mt-50">
                    <p class="title right">
                        主营收入
                    </p>
                    <div class="content">
                        <RightChart2/>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-container flex-container">
            <div class="left">
                <div class="card">
                    <p class="title">
                        省级城投一览
                    </p>
                    <div class="content">
                        <ul class="list">
                            <ul class="header">
                                <li>
                                    序号
                                </li>
                                <li>
                                    省份
                                </li>
                                <li>
                                    城投
                                </li>
                                <li>
                                    新区城投
                                </li>
                                <li>
                                    其他
                                </li>
                            </ul>
                            <ul class="item" v-for="item in 3" :key="item">
                                <li>
                                    1
                                </li>
                                <li>
                                    南京
                                </li>
                                <li>
                                    城投
                                </li>
                                <li>
                                    新区城投
                                </li>
                                <li>
                                    其他
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="card">
                    <p class="title right">
                        发行债券
                    </p>
                    <div class="content">
                        <Table :columns="[]"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import LeftChart1 from './LeftChart1';
    import LeftChart2 from './LeftChart2';
    import Map from './Map';
    import RightChart1 from './RightChart1';
    import RightChart2 from './RightChart2';

    import Table from './Table';

    export default {
        name: 'BigData',
        components: {
            LeftChart1,
            LeftChart2,
            Map,
            RightChart1,
            RightChart2,
            Table,
        },
        provide() {
            return {
                dataStore: this.dataStore,
            };
        },
        data() {
            return {
                dataStore: {
                    // 存储所有数据，子组件自行获取
                    /* eslint-disable */
                    /**
                     Level：对应 行政级别     （没有就没有返回 但是你要做判断）
                     mainType 对应主题类型 （没有就没有返回 但是你要做判断）
                     Title  对应中间
                      Rate 评级 数量   （没有就没有返回 但是你要做判断）
                     totalAssetS  主营业收入   （没有就没有返回 但是你要做判断）
                     Pc：省投  
                     Fi  发行债卷
                     */
                },
            };
        },
        created() {
            this.http.get(this.api.home.bigData).then(res => {
                if (res.status !== 200) {
                    return;
                }
                res = res.data;
                console.log(res);

                for (let k in res) {
                    res[k] && this.$set(this.dataStore, k, res[k]);
                }
            });
        },
    };
</script>

<style lang="scss" scoped>
    .mt-50 {
        margin-top: 50px;
    }

    .card {
        position: relative;
        color: #fff;
        background: linear-gradient(180deg, rgba(0, 0, 255, 0) 0%, rgba(24, 47, 255, 0.6) 100%);

        /*&::before {*/
        /*    content: '';*/
        /*    display: block;*/
        /*    height: 20px;*/
        /*}*/

        .title {
            position: absolute;
            top: -20px;
            left: 30px;
            width: 180px;
            height: 40px;
            line-height: 40px;

            background: rgba(5, 165, 255, 1);
            text-align: center;

            font-size: 22px;
            font-weight: 500;

            &.right {
                left: auto;
                right: 30px;
            }
        }

        .content {
            border: 2px solid rgba(11, 145, 245, 0.7);
        }
    }

    .flex-container {
        display: flex;
        width: 100%;

        & > * {
            flex: 1;
        }
    }

    .big-data {
        position: relative;
        padding: 68px 0 20px;
        background: url("./image/title-bg.png") no-repeat scroll top left / 100% auto;

        &::after {
            content: '';
            position: absolute;
            z-index: -1;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: url("./image/bg.png") no-repeat scroll top left / cover;
        }
    }

    .top-container {
        margin: auto;
        width: 1860px;

        .center {
            min-width: 770px; // 减去20px滚动条
            padding: 0 25px;

            .big-data-title {
                margin-top: -34px;
                line-height: 44px;
                font-size: 44px;
                font-weight: 800;
                color: rgba(255, 255, 255, 1);
                text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
                text-align: center;
            }

            .report {
                margin-top: 68px;
                display: flex;
                width: 100%;

                .title {
                    background: rgba(0, 0, 252, 1);
                }

                .content {
                    padding: 28px 0 17px; // 97 - 52 = 45
                    line-height: 1;
                    font-size: 50px;
                    text-align: center;
                    font-family: Krungthep;
                    color: rgba(255, 237, 0, 1);
                }

                & > * {
                    margin-right: 26px;

                    &:last-child {
                        margin-right: 0;
                    }
                }
            }

            .map {
                width: 100%;
                padding: 2px 0;
                height: 614px;
            }
        }
    }

    .bottom-container {
        & > * {
            margin-right: 30px;

            &:last-child {
                margin-right: 0;
            }
        }

        .card .content {
            padding: 40px 20px 6px; // 凑够200px
        }
    }

    ul.list {
        text-align: center;

        // ul.header、ul.body
        .header, .item {
            display: flex;
            flex-wrap: nowrap;
            padding: 10px 0;
            line-height: 1;
            font-size: 18px;

            & > * {
                flex: 1;
            }
        }

        .header {
            background: rgba(18, 12, 254, 1);
        }

        .item {
            &:nth-child(odd) {
                background: rgba(255, 255, 255, 0.08);
            }
        }
    }

</style>
