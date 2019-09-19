<template>
    <section>
        <!--<p class="tip">-->
            <!--下载列表-->
        <!--</p>-->
        <div class="down">下载</div>
        <ul class="list">
            <li v-if="!list">
                暂无文件
            </li>
            <li v-else v-for="(item,index) in list" :key="index">
                <span class="prefix"></span>
                {{item.name}}
                <button class="download-btn" @click="download(item.url)">下载</button>
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
        name: "AttachmentList",
        props: {
            /**
             * 数据结构
             * 1、[{name:'xxx.ext',url:'文件路径'}]
             * 2、'文件路径','文件路径'
             * */
            value: {
                default: '',
            },
        },
        data() {
            return {
                list: this.getList(),
            };
        },
        methods: {
            // 根据value生成
            getList() {
                let { value } = this;
                if (!value) {
                    return undefined;
                }
                if (Array.isArray(value)) {
                    if (!value[0]) {
                        return undefined;
                    }
                    if (Object.prototype.toString.call(value[0]) === '[object Object]') {
                        return value;
                    }
                } else {
                    value = value.split(',');
                }

                return value.map(item => ({
                    name: item,
                    url: item,
                }));
            },
            download(url) {
                alert(url);
            },
        },
        mounted() {
            if (!this.value) {
                const unwatch = this.$watch('value', () => {
                    unwatch();
                    this.list = this.getList();
                });
            }
        },
    };
</script>

<style lang="scss" scoped>
    .tip {
        margin-bottom: 10px; // 小三角的空间
        width: 84px;
        height: 26px;
        line-height: 26px;
        font-size: 16px;
        font-weight: 600;
        text-align: center;
        background: $sign-color;
        color: rgba(255, 255, 255, 1);
        border-radius: 5px 5px 5px 0px;

        &::before {
            content: '';

        }

        &::after {
            content: '';
            display: block;
            width: 0;
            height: 0;
            border-top: 10px solid $sign-color;
            border-right: 10px solid transparent;
        }
    }

    .list {
        li {
            margin-right: 102px;
            padding: 11px 0;
            font-size: 14px;
            font-weight: 400;
            color: rgba(168, 172, 175, 1);
            border-bottom: 1px dashed #BFC5CA;
            margin-left: 30px;
            .prefix {
                position: relative;
                display: inline-block;
                margin-right: 10px;
                margin-left: -26px;
                width: 12px;
                height: 12px;
                background: rgba(53, 139, 254, 0.5);
                border-radius: 50%;
                vertical-align: -1px;

                &::before {
                    content: '';
                    position: absolute;
                    display: block;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 6px;
                    height: 6px;
                    background: rgba(53, 139, 254, 1);
                    border-radius: 50%;
                }
            }

            .download-btn {
                float: right;
                margin-top: -7px;
                margin-right: -102px;
                width: 72px;
                height: 30px;
                line-height: 30px;
                background: rgba(236, 241, 255, 1);
                border-radius: 5px;
                font-weight: 800;
                color: rgba(5, 103, 255, 1);
                outline: none;
                border: none;
                cursor: pointer;

                &:hover {
                    color: #fff;
                    background-color: $sign-color;
                }
            }

            &:last-child {
                border: none;
            }
        }
    }
</style>
