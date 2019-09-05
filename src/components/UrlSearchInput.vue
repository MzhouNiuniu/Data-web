<template>
    <Input
            class="url-search-input"
            clearable
            size="large"
            search enter-button="搜索"
            :placeholder="placeholder"
            @on-search="search"
            @on-clear="handleClear"
    />
</template>

<script>
    /**
     * 此组件使用之后，想当前url加入一个query参数，名为inputSearch
     * */
    export default {
        name: "UrlSearchInput",
        props: {
            placeholder: {
                type: String,
                default: '请输入搜索内容',
            },
        },
        methods: {
            handleClear() {
                this.search(undefined);
            },
            search(val) {
                if (this.$route.query.inputSearch === val) {
                    return;
                }
                this.$router.push({
                    path: this.$route.path,
                    query: {
                        ...this.$route.query,
                        inputSearch: val,
                    },
                }).catch(e => {
                    console.log(e);
                });
            },
        },
    };
</script>

<style lang="scss" scoped>
    .url-search-input {
        ::v-deep {
            input {
                padding-left: 20px;
                line-height: 44px;
                height: 44px;
                font-size: 14px;
            }


            .ivu-input-search {
                padding-left: 19px !important;
                padding-right: 20px !important;
                background-color: $primary-color !important;
                border-color: $primary-color !important;
                font-size: 18px;

                &:hover {
                    background-color: $primary-color-light !important;
                }
            }

            .ivu-input-icon-clear {
                right: 76px;
                top: 4px;
            }
        }
    }
</style>
