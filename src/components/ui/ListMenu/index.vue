<template>
    <section :style="{width}">
        <div class="header">
            <slot name="header"/>
        </div>
        <ul class="menu">
            <li v-for="(item,key) in menu" :key="key" class="item" :class="getItemClassName(item)"
                @click="handleItemClick(item)">
                {{item.name}}<span class="icon"></span>
                <div class="hr-dashed"></div>
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
        name: "ListMenu",
        props: {
            value: {
                type: String,
                default: '',
            },
            width: {
                type: String,
                default: '200px',
            },
            menu: {
                type: Array,
                default: () => [
                    {
                        name: '智库动态',
                        key: '11',
                    },
                    {
                        name: '虚拟新闻',
                        key: '22',
                    },
                    {
                        name: '行业动态',
                        key: '33',
                    },
                ]
                /**
                 * name:'xxx'
                 * key:'xxx'
                 * */
            },

            // events
            // @change
        },
        data() {
            return {
                activeKey: this.value
            };
        },
        methods: {
            getItemClassName(item) {
                if (item.key === this.activeKey) {
                    return 'active';
                }
                return '';
            },
            handleItemClick(item) {
                this.activeKey = item.key;
                this.$emit('change', {
                    name: item.name,
                    key: item.key,
                });
            },
        },
    };
</script>

<style lang="scss" scoped>
    .menu {
        .item {
            position: relative;
            height: 60px;
            line-height: 60px;
            font-size: 16px;
            text-align: center;
            cursor: pointer;

            &::after {
                content: '';
                position: absolute;
                right: 0;
                top: 20px;
                border-style: solid;
                border-width: 10px 20px;
                border-color: transparent #fff transparent transparent;
            }

            .icon {
                display: inline-block;
                vertical-align: middle;
                margin-left: 15px;
                width: 16px;
                height: 16px;
                background: url("./unActive.png") no-repeat scroll top left / cover;
            }

            &:last-child {
                .hr-dashed {
                    display: none;
                }
            }

            &.active {
                background: $primary-color;
                color: #fff;

                .icon {
                    background-image: url("./active.png");
                }

                .hr-dashed {
                    visibility: hidden;
                }
            }
        }


    }
</style>
