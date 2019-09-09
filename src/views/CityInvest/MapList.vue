<template>
    <section class="project-container">
        <div class="search-bar mt-24 clearfix">
            <SearchInput class="search-input" placeholder="请输入地区/发行人"/>
            <router-link tag="div" class="mode-btn" to="/CityInvest">
                <img src="~@public/icon/list.png" alt="" class="icon">
                <p class="text">
                    列表模式
                </p>
            </router-link>
        </div>
    </section>
</template>

<script>
    import SearchInput from '@components/SearchInput';

    export default {
        name: "MapList",
        components: {
            SearchInput,
        },
    };
</script>

<style lang="scss" scoped>
    .search-bar {
        .search-input {
            float: left;
            padding-right: 240px;
        }

        .mode-btn {
            position: relative;
            z-index: 1;
            float: left;
            margin-left: -210px;
            padding-top: 4px;
            padding-bottom: 2px;
            width: 76px;
            background: rgba(236, 241, 255, 1);
            text-align: center;
            font-size: 12px;
            font-weight: 600;
            color: rgba(5, 103, 255, 1);
            border-radius: 5px;
            cursor: pointer;

            .icon {
                width: 20px;
            }

            .text {
                margin-top: 2px;
            }
        }
    }
</style>
