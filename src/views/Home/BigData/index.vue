<template>
    <section class="big-data">
        <div class="top-container flex-container">
            <div class="left">
                <div class="card">
                    <p class="title">
                        行政级别
                    </p>
                    <div class="content">
                    </div>
                </div>
                <div class="card mt-50">
                    <p class="title">
                        主体类型
                    </p>
                    <div class="content">
                    </div>
                </div>
            </div>
            <div class="center">
                <div class="report flex-container">
                    <div class="card">
                        <p class="title">
                            主体类型
                        </p>
                        <div class="content">
                        </div>
                    </div>
                    <div class="card">
                        <p class="title">
                            主体类型
                        </p>
                        <div class="content">
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
    export default {
        name: 'BigData'
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
            padding: 40px 20px;
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
        padding: 48px 30px 20px;
        background: yellow;
    }

    .top-container {
        .center {
            flex-grow: 1.38;
            padding: 0 25px;

            .report {
                display: flex;
                width: 100%;

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
