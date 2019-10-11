<template>
    <section class="project-container mt-14 mb-10">
        <p class="detail-page-caption">
            <span>政策法规</span>
        </p>
        <Row :gutter="29" class="mt-20">
            <Col span="12">
            <UICard title="政策法规" title-type="fill" >
                <template slot="header-action">
                    <LinkMore to="/policyMore/0" style="font-size: 14px;"/>
                </template>
                <ul class="list small" style="height: 160px;">
                    <li v-for="(item,index) in policies" :key="item._id">
                        <router-link class="title ue-link text-ellipsis" :to="'/PolicyDetail/'+item._id">
                           {{item.name}}
                        </router-link>
                        <p class="date">
                            【{{item.releaseTime}}】
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
                <ul class="list small"  style="height: 160px;">
                    <li v-for="item in guide"  :key="item._id">
                        <router-link class="title ue-link text-ellipsis" :to="'/PolicyDetail/'+item._id">
                            {{item.name}}
                        </router-link>
                        <p class="date">
                            【{{item.releaseTime}}】
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
                <li v-for="item in council" :key="item._id">
                    <router-link class="title ue-link text-ellipsis" :to="'/PolicyDetail/'+item._id">
                        {{item.name}}
                    </router-link>
                    <p class="date">
                        【{{item.releaseTime}}】
                    </p>
                </li>
            </ul>
        </UICard>
        <UICard title="地方性规范性文件" title-type="fill" class="mt-20">
            <template slot="header-action">
                <LinkMore to="/policyMore/3" style="font-size: 14px;"/>
            </template>
            <ul class="list">
                <li v-for="item in endemicity" :key="item._id">
                    <router-link class="title ue-link text-ellipsis" :to="'/PolicyDetail/'+item._id">
                        {{item.name}}
                    </router-link>
                    <p class="date">
                        【{{item.releaseTime}}】
                    </p>
                </li>
            </ul>
        </UICard>
        <UICard title="部门规范性文件" title-type="fill" class="mt-20">
            <template slot="header-action">
                <LinkMore to="/policyMore/4" style="font-size: 14px;"/>
            </template>
            <ul class="list">
                <li v-for="item in department" :key="item._id">
                    <router-link class="title ue-link text-ellipsis" :to="'/PolicyDetail/'+item._id">
                        {{item.name}}
                    </router-link>
                    <p class="date">
                        【{{item.releaseTime}}】
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
        data(){
            return {
                policies:[],
                guide:[],
                council:[],
                endemicity:[],
                department:[]
            }
        },
        mounted() {
            this.getData()
        },
        methods: {
            async getData() {
                const res = await this.http.get(this.api.statute.index)
                console.log(res)
                this.policies = res.data.policies
                this.guide = res.data.guide
                this.council = res.data.council
                this.endemicity = res.data.endemicity
                this.department = res.data.department
            },
        }
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
