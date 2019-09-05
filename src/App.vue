<template>
    <div id="app" :style="appStyle">
        <router-view/>
    </div>
</template>


<script>
    export default {
        name: "App",
        computed: {
            appStyle() {
                return {
                    backgroundColor: this.$store.state.app.bgColor,
                };
            },
        },
    };
</script>
