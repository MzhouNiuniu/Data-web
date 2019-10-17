<template>
    <a target="_blank" :href="url" title="下载文件" @click="$Message.info('文件下载中')">
        <slot>
                <span v-if="name">
                    {{name}}
                </span>
            <img v-else-if="url" src="./fj.png" style="width: 30px" alt="">
        </slot>
    </a>
</template>

<script>
    export default {
        name: 'DownloadFile',
        props: {
            file: {
                required: true,
                type: Object,
            },
        },
        data() {
            return {};
        },
        computed: {
            name() {
                return this.file.name;
            },
            url() {
                return `${this.api.downloadFileByUrl}?name=${this.name}&url=${this.file.url}`;
            },
        },
    };
</script>

<style lang="scss" scoped>

</style>
