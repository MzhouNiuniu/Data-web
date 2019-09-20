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
                            345.00
                        </div>
                    </div>
                    <div class="card">
                        <p class="title">
                            总数目(项）
                        </p>
                        <div class="content">
                            345
                        </div>
                    </div>
                </div>
                <div class="map">

                </div>
            </div>
            <div class="right">
                <div class="card title-right">
                    <p class="title">
                        评级数量
                    </p>
                    <div class="content">
                        <RightChart1/>
                    </div>
                </div>
                <div class="card title-right mt-50">
                    <p class="title">
                        主营收入
                    </p>
                    <div class="content">
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-container flex-container mt-50">
            <div class="left">
                <div class="card">
                    <p class="title">
                        省级城投
                    </p>
                    <div class="content">
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="card title-right">
                    <p class="title">
                        发行债券
                    </p>
                    <div class="content">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import LeftChart1 from './LeftChart1'
    import LeftChart2 from './LeftChart2'
    import RightChart1 from './RightChart1'

    export default {
        name: 'BigData',
        components: {
            LeftChart1,
            LeftChart2,
            RightChart1,
        },
    }
</script>

<style lang="scss" scoped>
    .mt-50 {
        margin-top: 50px;
    }

    .card {
        position: relative;
        color: #fff;

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
        }

        .content {
            border: 1px solid rgba(11, 145, 245, 0.7);
        }

        &.title-right {
            .title {
                left: auto;
                right: 30px;
            }
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
        padding: 68px 30px 20px;
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
        .center {
            flex-grow: 1.38;
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
                    line-height: 96px;
                    text-align: center;
                    font-size: 50px;
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
                width: 740px;
                height: 614px;
                background: #18C2E3;
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
    }

</style>
