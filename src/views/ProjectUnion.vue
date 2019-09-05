<template>
    <section>
        <UrlSearchInput name="projectName"/>
        <OptionButton
                class="mt-30"
                title="项目名称"
                v-model="searchParams.projectType"
                :options="options"
                @change="query"
        />
        <div class="hr"></div>
    </section>
</template>

<script>
    import UrlSearchInput from '@components/UrlSearchInput';
    import OptionButton from '@components/OptionButton';

    export default {
        name: "ProjectUnion",
        components: {
            UrlSearchInput,
            OptionButton,
        },
        data() {
            this.options = [
                {
                    label: '工程项目',
                    value: '工程项目',
                },
                {
                    label: '投资项目',
                    value: '投资项目',
                },
                {
                    label: '融资项目',
                    value: '融资项目',
                },
                {
                    label: '其它项目',
                    value: '其它项目',
                },
            ];
            return {
                searchParams: this.getSearchParams(),
            };
        },
        methods: {
            getSearchParams() {
                const { query } = this.$route;
                return {
                    projectName: query.inputSearch,
                    projectType: query.projectType,
                };
            },
            query() {
                this.$router.push({
                    path: this.$route.path,
                    query: this.searchParams,
                });
            },
        },
    };
</script>

<style lang="scss" scoped>
    .hr {
        margin-top: 16px;
        height: 1px;
        background: rgba(191, 197, 202, 1);
    }
</style>
