<template>
    <section class="option-button">
        <p ref="title" class="title" :titleStyle="titleStyle">
            {{title}}：
        </p>
        <div class="buttons" :style="rightStyle" @click="handleChange">
            <!-- 为内容、按钮都添加index -->
            <template v-if="!required">
                <Button
                        class="whole-btn"
                        v-bind="getButtonStyle(undefined)"
                        index="-1"
                >
                    <span index="-1">全部</span>
                </Button>
            </template>
            <Button
                    v-for="(item,index) in options"
                    :key="index"
                    v-bind="getButtonStyle(item.value)"
                    :index="index"
            >
                <span :index="index">{{item.label}}</span>
            </Button>
        </div>
    </section>
</template>

<script>
    export default {
        name: "OptionButton",
        props: {
            // v-model 一般用不到
            value: {
                default: undefined,
            },

            // 控制全部按钮
            required: {
                type: Boolean,
                default: false,
            },
            options: {
                type: Array,
                default: () => ([])
            },

            // title
            title: {
                type: String,
            },
            titleStyle: {
                type: Object,
            },

            // events
            // v-model
            // @change
        },
        data() {
            return {
                titleWidth: 0,
            };
        },
        computed: {
            rightStyle() {
                return {
                    paddingLeft: this.titleWidth
                };
            },
        },
        methods: {
            getButtonStyle(value) {
                // active style
                if (
                    (value === undefined && !this.value && this.value !== 0) // 是否假值
                    ||
                    (value === this.value)
                ) {
                    return {
                        type: 'primary',
                        shape: 'circle',
                        size: 'small',
                        style: {
                            color: '#fff',
                        },
                    };
                }

                return {
                    shape: 'circle',
                    type: 'text',
                };
            },
            handleChange(e) {
                let index = e.target.getAttribute('index');
                if (index === null) {
                    return;
                }
                index = Number(index);

                const value = index < 0 ? undefined : this.options[index].value;
                this.$emit('input', value);
                this.$emit('change', value);
            },
        },
        mounted() {
            if (this.titleStyle && this.titleStyle.width) {
                this.titleWidth = this.titleStyle.width;
            } else {
                this.titleWidth = this.$refs.title.offsetWidth + 'px';
            }
        },
    };
</script>

<style lang="scss" scoped>
    .option-button {
        overflow: hidden;
    }

    .title {
        float: left;
        font-size: 16px;
        font-weight: bold;
        color: rgba(0, 0, 52, 1);
    }

    .ivu-btn {
        padding: 1px 7px 1px !important;
        font-size: 14px;
        color: #586066;

        &:hover {
            color: #57a3f3;
        }

        /*&.active {*/
        /*    color: #fff;*/
        /*}*/
    }

    .ivu-btn-text {
        box-shadow: none !important;

        &:hover {
            background-color: transparent;
        }
    }

    .whole-btn {
        position: relative;
        margin-right: 16px;

        &::after {
            content: "";
            position: absolute;
            height: 26px;
            right: -16px;
            border-right: 1px solid rgb(238, 238, 238);;
        }
    }
</style>
