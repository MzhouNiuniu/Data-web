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
                <div>
                    <RangeNumber/>
                </div>
            </div>
        </Card>
    </section>
</template>

<script>
    import UrlSearchInput from '@components/UrlSearchInput';
    import Pagination from '@components/Pagination';
    import RangeNumber from '@components/RangeNumber';

    export default {
        name: "Demo",
        components: {
            UrlSearchInput,
            Pagination,
            RangeNumber,
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
