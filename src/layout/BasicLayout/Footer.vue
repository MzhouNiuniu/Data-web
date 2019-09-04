<template>
    <section class="project-container__wrapper">
        <section class="basic-layout__footer project-container">
            <img src="~@public/image/footer.png" width="100%"/>
        </section>
    </section>
</template>

<script>
    export default {
        name: "Footer"
    };
</script>

<style lang="scss" scoped>
    .project-container__wrapper {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 208px;
        background-color: #535353;
    }

    .basic-layout__footer {
    }
</style>
