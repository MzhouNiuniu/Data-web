<template>
    <section style="padding-top: 20px;">
        <Card shadow class="card">
            <p slot="title">本项目用到的所有组件</p>
            <div class="demo-list">
                <div>
                    <ListMenu/>
                </div>
                <div>
                    <UICard title="专题报告">
                        <template slot="header-action">
                            <LinkMore to="/demo" style="font-size: 14px;"/>
                        </template>
                    </UICard>
                </div>
                <div>
                    <UICard title="国务院规范性文件" title-type="fill">
                        <template slot="header-action">
                            <LinkMore to="/demo" style="font-size: 14px;"/>
                        </template>
                    </UICard>
                </div>
                <div>
                    <LinkMore to="/demo"/>
                    <br/>
                    <LinkMore to="/demo" style="font-size: 14px;"/>
                    <br/>
                    <LinkMore to="/demo" style="font-size: 14px;color:red;"/>
                </div>
                <div style="width: 288px">
                    <textarea v-model="m3" id="" cols="30" rows="10"></textarea>
                    <TextEllipsis
                            :rows="3"
                            :value="m3"
                    />
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
    import SearchInput from '@components/SearchInput'
    import Pagination from '@components/Pagination'
    import RangeNumber from '@components/RangeNumber'
    import OptionButton from '@components/OptionButton'
    import ChinaMap from '@components/ChinaMap'
    import TextEllipsis from '@components/TextEllipsis'
    import LinkMore from '@ui/LinkMore'
    import UICard from '@ui/Card'
    import ListMenu from '@ui/ListMenu'

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
            LinkMore,
            UICard,
            ListMenu,
        },
        data() {
            this.options1 = [
                {
                    label: 'AAA',
                    value: 'AAA',
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
            ]
            return {
                m1: [],
                m2: '',
                m3: '这是一段企业概<input/>况这是一asdakasjdkajsljjjlk段企业概况这是一段企业概这\n' +
                    '                            131545465464645555555555555555555555555555555555555555555',
            }
        },
        methods: {
            handleMapChange(geoInfo) {
                // console.log(geoInfo)
            },
        },
        created() {
            setTimeout(() => {
                this.m1 = [1, 2]
            }, 1000)
        },
    }
</script>

<style lang="scss" scoped>
    .demo-list {
        & > div {
            margin-top: 20px;
        }
    }
</style>
