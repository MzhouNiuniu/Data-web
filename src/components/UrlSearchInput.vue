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
    export default {
        name: "UrlSearchInput",
        props: {
            placeholder: {
                type: String,
                default: '请输入搜索内容',
            },
            name: {
                type: String,
                default() {
                    return 'inputSearch_' + this._uid;
                },
            },
        },
        methods: {
            handleClear() {
                this.search(undefined);
            },
            search(val) {
                const fieldName = this.name;
                if (this.$route.query[fieldName] === val) {
                    return;
                }
                this.$router.push({
                    path: this.$route.path,
                    query: {
                        ...this.$route.query,
                        [fieldName]: val,
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
                width: 10px; // 减少触发范围
                right: 90px;
                top: 4px;
            }
        }
    }
</style>
