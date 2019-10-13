<template>
    <div class="download-file">
        <a target="_blank" :href="url" title="下载文件" :download="url">
            <span v-if="name">
                {{name}}
            </span>
            <img src="./fj.png" style="width: 30px" alt="" v-else>
        </a>
    </div>
</template>

<script>
    export default {
        name: 'DownloadFile',
        props: {
            name: String,
            url: String,
        },
        data() {
            return {};
        },
    };
</script>

<style lang="scss" scoped>
    .download-file {
        position: relative;
    }
</style>
