<template>
    <ul class="list">
        <ul class="header">
            <li v-for="(item,index) in columns" :key="index">
                {{item.name}}
            </li>
        </ul>
        <div class="row-container" :style="{height:`${showItemNumber * realItemHeight}px`}" ref="rowContainer">
            <ul
                    ref="rows"
                    class="row"
                    v-for="(item,index) in data" :key="index"
                    :style="{backgroundColor:index % 2 === 0 ? 'unset':'rgba(255, 255, 255, 0.08)'}"
            >
                <li v-for="(headerItem,headerIndex) in columns" :key="headerIndex">
                    {{item[headerItem.field] || '-'}}
                </li>
            </ul>
        </div>
    </ul>
</template>

<script>
    export default {
        name: 'Table',
        props: {
            // 参考饿了么
            columns: {
                type: Array,
                required: true,
            },
            data: {
                type: Array,
                default: () => [],
            },
            // todo 组件完成
            itemHeight: {
                type: Number,
                default: 38, // 3 条
            },
            showItemNumber: {
                type: Number,
                default: 3, // 3 条
            },

            // 动画时长
            duration: {
                type: Number,
                default: 1.5,
            },
            speed: {
                type: Number,
                default: 4,
            },


            // events
            // @scroll(currentIndex,data)
        },
        data() {
            this.index = 0;  // 省去操作ref数组时间
            return {
                animTimer: null,
                realItemHeight: this.getRealItemHeight(),
            };
        },
        watch: {
            data() {
                this.init();
            },
        },
        methods: {
            init() {
                // 动画开始之前，默认触发一次滚动
                this.handlePostScroll();
                this.anim();
            },
            handlePostScroll() {
                this.$emit('scroll', this.data, this.index);
            },
            getRealItemHeight() {
                return this.itemHeight * (window.__1px__ || 1);
            },
            cleanAnim() {
                this.index = 0;
                clearInterval(this.animTimer);
            },
            anim() {
                this.cleanAnim();
                if (this.data.length < this.showItemNumber) {
                    return;
                }
                this.$nextTick(() => {
                    // 手动实现，否则需要拷贝一份数据
                    const { rows, rowContainer } = this.$refs;
                    this.animTimer = setInterval(() => {
                        const firstNode = rows[this.index];
                        firstNode.style.marginTop = -1 * this.realItemHeight + 'px';

                        // handle next loop
                        this.index++;
                        if (this.index >= this.data.length) {
                            this.index = 0;
                        }
                        this.handlePostScroll();

                        // anim
                        setTimeout(() => {
                            firstNode.style.marginTop = 0;
                            rowContainer.appendChild(firstNode);
                        }, this.duration * 1000); // 动画时长1s
                    }, this.speed * 1000); // 切换速度
                });
            },

            handleResize() {
                this.realItemHeight = this.getRealItemHeight();
            },
        },
        mounted() {
            window.addEventListener('resize', this.handleResize);
            this.init();
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.handleResize);
            this.cleanAnim();
        },
    };
</script>

<style lang="scss" scoped>
    ul.list {
        text-align: center;

        // ul.header、ul.body
        .header, .row {
            display: flex;
            flex-wrap: nowrap;
            padding: 10px 0;
            line-height: 1;
            font-size: 18px;

            & > * {
                flex: 1;
            }
        }

        .header {
            background: rgba(18, 12, 254, 1);
        }

    }

    .row-container {
        will-change: transform;
        overflow-y: hidden;

        .row {
            transition: margin-top 1s;

            /*&:nth-child(odd) {*/
            /*    background: rgba(255, 255, 255, 0.08);*/
            /*}*/
        }
    }
</style>
