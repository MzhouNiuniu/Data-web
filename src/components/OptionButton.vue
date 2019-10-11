<template>
    <section class="option-button">
        <p ref="title" class="title" :titleStyle="titleStyle">
            {{title}}：
        </p>
        <div class="right" :style="rightStyle" @click="handleChange">
            <div class="buttons">
                <!-- 为内容、按钮都添加index -->
                <template v-if="wholeBtn">
                    <p
                            class="whole-btn"
                            :class="getActiveClass(undefined)"
                            index="-1"
                    >
                        <span index="-1">全部</span>
                    </p>
                </template>
                <p
                        v-for="(item,index) in options"
                        :key="index"
                        :class="getActiveClass(item.value)"
                        :index="index"
                >
                    <span :index="index">{{item.label}}</span>
                </p>

            </div>
            <!-- slot -->
            <slot/>
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
            wholeBtn: {
                type: Boolean,
                default: true,
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
                    marginLeft: this.titleWidth
                };
            },
        },
        methods: {
            getActiveClass(value) {
                // active style
                if (
                    (value === undefined && !this.value && this.value !== 0) // 是否假值
                    ||
                    (value === this.value)
                ) {
                    return 'active';
                }

                return '';
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
    $line-height: 35px;
    .option-button {
        overflow: hidden;
        font-size: 14px;
    }

    .title {
        float: left;
        line-height: $line-height;
        font-size: 16px;
        font-weight: bold;
        width: 180px;
        color: rgba(0, 0, 52, 1);
    }

    .whole-btn {
        position: relative;
        margin-right: 23px;

        &::after {
            content: "";
            position: absolute;
            margin-top: -2px;
            height: 26px;
            right: -16px;
            border-right: 1px solid #BFC5CA;
        }
    }

    .buttons {
        display: inline-block;
        line-height: $line-height;

        p {
            display: inline-block;
            padding: 0 10px;
            height: 26px;
            line-height: 26px;
            border-radius: 2px;
            border: 1px solid transparent;
            cursor: pointer;

            &:hover, &.active {
                font-weight: 600;
                color: $sign-color;
                border-color: $sign-color;
            }
        }
    }
</style>
