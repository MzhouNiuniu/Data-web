<template>
    <section style="padding-top: 20px;">
        <Card shadow class="card">
            <p slot="title">本项目用到的所有组件</p>
            <div class="demo-list">
                <div style="width: 288px">
                    <TextEllipsis value="这是一段企业概况这是一asdakasjdkajsljjjlk段企业概况这是一段企业概这 131545465464645555555555555555555555555555555555555555555" :rows="3"/>
                </div>
                <div>
                    <SearchInput/>
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
                    <OptionButton v-model="m2" title="主体类型" :options="options1"/>
                    {{m2}}
                </div>
                <div>
                    <ChinaMap style="width: 704px;height: 585px;" @change="handleMapChange"/>
                </div>
            </div>
        </Card>
    </section>
</template>

<script>
    import SearchInput from '@components/SearchInput';
    import Pagination from '@components/Pagination';
    import RangeNumber from '@components/RangeNumber';
    import OptionButton from '@components/OptionButton';
    import ChinaMap from '@components/ChinaMap';
    import TextEllipsis from '@components/TextEllipsis';

    /**
     * 问题组件：日期选择器、年份选择器
     * */
    export default {
        name: "Demo",
        components: {
            SearchInput,
            Pagination,
            RangeNumber,
            OptionButton,
            ChinaMap,
            TextEllipsis,
        },
        data() {
            this.options1 = [
                {
                    label: 'AAA+',
                    value: 'AAA+',
                },
                {
                    label: 'AA+',
                    value: 'AA+',
                },
                {
                    label: 'AA',
                    value: 'AA',
                },
                {
                    label: '其它',
                    value: '其它',
                },
            ];
            return {
                m1: [],
                m2: '',
            };
        },
        methods: {
            handleMapChange(geoInfo) {
                console.log(geoInfo);
            },
        },
        created() {
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
