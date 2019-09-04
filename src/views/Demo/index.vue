<template>
    <section style="padding-top: 20px;">
        <Card shadow class="card">
            <p slot="title">本项目用到的所有组件</p>
            <div class="demo-list">
                <div>
                    <UrlSearchInput/>
                </div>
                <div>
                    <Pagination/>
                </div>
                <Alert type="error" show-icon>
                    无用组件（未完成）
                    <template slot="desc">
                        <RangeNumber v-model="m1"/>
                    </template>
                </Alert>
                <div>
                </div>
            </div>
        </Card>
    </section>
</template>

<script>
    import UrlSearchInput from '@components/UrlSearchInput';
    import Pagination from '@components/Pagination';
    import RangeNumber from '@components/RangeNumber';

    /**
     * 问题组件：日期选择器、年份选择器
     * */
    export default {
        name: "Demo",
        components: {
            UrlSearchInput,
            Pagination,
            RangeNumber,
        },
        data() {
            return {
                m1: [],
            };
        },
        mounted() {
            setTimeout(() => {
                this.m1 = [1, 2];
            }, 1000);
        },
    };
</script>

<style lang="scss" scoped>
    .demo-list {
        & > div {
            margin-top: 20px;
        }
    }
</style>
