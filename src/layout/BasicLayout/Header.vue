<template>
    <section class="project-container__wrapper">
        <section class="basic-layout__header clearfix project-container">
            <div class="project-info">
                <router-link to="/" class="name">
                     <img class="logo" src="./logo.png" >
                </router-link>

            </div>
            <Nav class="nav"/>
        </section>
    </section>
</template>

<script>
    import Nav from './Nav';

    export default {
        name: "Header",
        components: {
            Nav,
        },
    };
</script>

<style lang="scss" scoped>
    .logo{
        width: 182px;
    }
    .project-container__wrapper {
        background-color: $primary-color;
    }

    .basic-layout__header {
        height: $project-nav-height;

        .project-info {
            float: left;
            height: $project-nav-height;
            line-height: $project-nav-height;

            .name {
                font-size: 24px;
                font-weight: 800;
                color: rgba(255, 255, 255, 1);
            }
        }

        .nav {
            float: right;
        }
    }
</style>
