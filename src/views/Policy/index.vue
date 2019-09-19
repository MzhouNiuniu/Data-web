<template>
    <section class="project-container mt-14 mb-20">
        <p class="detail-page-caption">
            <span>政策法规</span>
        </p>
        <Row :gutter="29" class="mt-20">
            <Col span="12">
                <UICard title="政策法规" title-type="fill">
                    <template slot="header-action">
                        <LinkMore to="/policyMore/0" style="font-size: 14px;"/>
                    </template>
                    <ul class="list small">
                        <li v-for="item in 4" :key="item">
                            <router-link class="title ue-link text-ellipsis" to="/PolicyDetail/111">
                                这是一个政策法规标题这是一个政策法规
                                这是一个政策法规标题这是一个政策法规
                            </router-link>
                            <p class="date">
                                【2019-09-09 09:12:55】
                            </p>
                        </li>
                    </ul>
                </UICard>
            </Col>
            <Col span="12">
                <UICard title="指南标准" title-type="fill">
                    <template slot="header-action">
                        <LinkMore to="/policyMore/1" style="font-size: 14px;"/>
                    </template>
                    <ul class="list small">
                        <li v-for="item in 4" :key="item">
                            <router-link class="title ue-link text-ellipsis" to="/PolicyDetail/111">
                                这是一个指南标准标题这是一个指南标准
                                这是一个指南标准标题这是一个指南标准
                            </router-link>
                            <p class="date">
                                【2019-09-09 09:12:55】
                            </p>
                        </li>
                    </ul>
                </UICard>
            </Col>
        </Row>
        <UICard title="国务院规范性文件" title-type="fill" class="mt-20">
            <template slot="header-action">
                <LinkMore to="/policyMore/2" style="font-size: 14px;"/>
            </template>
            <ul class="list">
                <li v-for="item in 5" :key="item">
                    <router-link class="title ue-link text-ellipsis" to="/PolicyDetail/111">
                        这是一个国务院规范性文件标题这是一个国务院规范性文件标题这是一个国务院规范性文件标题
                        这是一个国务院规范性文件标题这是一个国务院规范性文件标题这是一个国务院规范性文件标题
                    </router-link>
                    <p class="date">
                        【2019-09-09 09:12:55】
                    </p>
                </li>
            </ul>
        </UICard>
        <UICard title="地方性规范性文件" title-type="fill" class="mt-20">
            <template slot="header-action">
                <LinkMore to="/policyMore/3" style="font-size: 14px;"/>
            </template>
            <ul class="list">
                <li v-for="item in 5" :key="item">
                    <router-link class="title ue-link text-ellipsis" to="/PolicyDetail/111">
                        这是一个地方性规范性文件标题这是一个地方性规范性文件标题这是一个地方性规范性文件标题
                        这是一个地方性规范性文件标题这是一个地方性规范性文件标题这是一个地方性规范性文件标题
                    </router-link>
                    <p class="date">
                        【2019-09-09 09:12:55】
                    </p>
                </li>
            </ul>
        </UICard>
        <UICard title="部门规范性文件" title-type="fill" class="mt-20">
            <template slot="header-action">
                <LinkMore to="/policyMore/4" style="font-size: 14px;"/>
            </template>
            <ul class="list">
                <li v-for="item in 5" :key="item">
                    <router-link class="title ue-link text-ellipsis" to="/PolicyDetail/111">
                        这是一个部门规范性文件标题这是一个部门规范性文件标题这是一个部门规范性文件标题
                        这是一个部门规范性文件标题这是一个部门规范性文件标题这是一个部门规范性文件标题
                    </router-link>
                    <p class="date">
                        【2019-09-09 09:12:55】
                    </p>
                </li>
            </ul>
        </UICard>
    </section>
</template>

<script>
    import LinkMore from '@ui/LinkMore';
    import UICard from '@ui/Card';

    export default {
        name: "Policy",
        components: {
            LinkMore,
            UICard,
        },
    };
</script>

<style lang="scss" scoped>
    .list {
        line-height: 44px;

        &.small {
            line-height: 40px;
        }

        & > li {
            position: relative;
            font-size: 0;

            &::after {
                content: '';
                position: absolute;
                left: -4px;
                top: 49%;
                transform: translateY(-50%);
                width: 8px;
                height: 8px;
                background: rgba(191, 197, 202, 1);
            }
        }

        .title, .date {
            display: inline-block;
            vertical-align: middle;
            color: rgba(51, 51, 51, 1);
        }

        .title {
            padding-left: 15px;
            width: 70%;
            font-size: 18px;

        }

        .date {
            width: 30%;
            white-space: nowrap;
            text-align: end;
            font-size: 14px;
        }
    }
</style>
