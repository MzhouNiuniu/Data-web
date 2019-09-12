<template>
    <section>
        <ul class="nav">
            <li v-for="(item,index) in navList" :key="index" class="nav__item">
                <router-link v-if="!item.children" :to="item.path" class="nav__item__header">
                    {{item.name}}
                </router-link>
                <div v-else class="nav__group">
                    <router-link v-if="item.path" :to="item.path" class="nav__item__header" :class="item.className">
                        {{item.name}}
                        <Icon type="ios-arrow-down" class="nav__item__header__arrow"/>
                    </router-link>
                    <p v-else class="nav__item__header" :class="item.className">
                        {{item.name}}
                        <Icon type="ios-arrow-down" class="nav__item__header__arrow"/>
                    </p>
                    <ul class="hide-nav">
                        <li v-for="(item,index) in item.children" :key="index" class="hide-nav__item">
                            <router-link :to="item.path">{{item.name}}</router-link>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
    import navList from '@/router/nav';

    // 仅支持2层
    export default {
        name: "Nav",
        data() {
            this.navList = navList;
            return {};
        },
    };
</script>

<style lang="scss" scoped>
    .nav {
        position: relative; // fix will-change
        z-index: 999; // fix will-change
        will-change: transform;
        font-size: 0;
    }

    .nav__item {
        position: relative;
        display: inline-block;
        height: $project-nav-height;
        line-height: $project-nav-height;
        font-size: 16px;
        color: #fff;
        cursor: pointer;

        &:last-child .nav__item__header::after {
            display: none;
        }
    }


    .nav__group {
        position: relative;
    }


    .hide-nav {
        overflow: hidden;
        position: absolute;
        top: $project-nav-height;
        left: 0;
        right: 0;
        max-height: 0;
        background-color: rgba(0, 0, 0, 0.3);
        text-align: center;
    }

    .hide-nav__item {
        margin: 0 12px;
        height: 32px;
        line-height: 32px;
        white-space: nowrap;
        font-size: 12px;
        border-bottom: 1px dashed rgba(255, 255, 255, 0.5);

        &:last-child {
            border-bottom: none;
        }

        a {
            color: #fff;

            &:hover, &.active {
                color: $primary-color;
            }
        }
    }


    .nav__item__header {
        display: block; // 没有子菜单时，是a标签
        padding: 0 11px 0 13px;
        color: #fff;

        &::after {
            content: '';
            position: absolute;
            right: -3px;
            top: 22px; // (60 / 2 - 16 / 2)
            height: 16px;
            border-right: 1px solid #fff;
            vertical-align: middle;
        }

        &.long {
            padding: 0 16px 0 22px;
        }
    }

    .nav__item__header__arrow {
        transition: transform .5s;
    }

    .nav__group {
        &:hover {
            background-color: #050DFF;

            .nav__item__header__arrow {
                transform: rotate(180deg);
            }

            // 数字越精确，效果越好，这里假设菜单不超过400px
            .hide-nav {
                transition: max-height 1.2s;
                max-height: 400px;
                padding-bottom: 12px;
            }

            .nav__item__header::after {
                display: none;
            }
        }
    }

</style>
