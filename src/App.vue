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
        mounted () {
            const script = document.createElement('script')
            script.src = 'https://v1.cnzz.com/z_stat.php?id=1278255991&web_id=1278255991'
            script.language = 'JavaScript'
            document.body.appendChild(script)
        },
        watch: {
            '$route' () {
                if (window._czc) {
                    let location = window.location
                    let contentUrl = location.pathname + location.hash
                    let refererUrl = '/'
                    window._czc.push(['_trackPageview', contentUrl, refererUrl])
                }
            }
        }

    };
</script>
