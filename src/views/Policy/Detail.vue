<template>
    <section class="project-container mt-40">
        <p class="detail-page-caption">
            <span>政策法规</span>
        </p>
        <div class="main">
            <div class="caption">
                <h1 class="mt-30">这是一个经典案例标题这是一个经典案例标题这是一个经典案例标题</h1>
                <p class="info mt-20">
                    财预[2017]35号
                </p>
                <div class="hr-dashed mt-14"></div>
                <p class="date mt-14">
                    发布时间：2019-09-11
                </p>
            </div>
            <p class="content">
                各省、自治区、直辖市、计划单列市财政厅（局）：<br/> 为规范新增地方政府债务限额管理，我们制定了《新增地方政府债务限额分配管理暂行办法》，现予印发。 <br/>附件：新增地方政府债务限额分配管理暂行办法
                <br/>财政部<br/>
                2017年3月23日 <br/>附件： <br/>新增地方政府债务限额分配管理暂行办法 <br/>第一章 总则 <br/>第一条
                为健全地方政府债务限额管理机制，规范新增地方政府债务限额分配管理，发挥地方政府债务促进经济社会发展的积极作用，防范财政金融风险，根据
                《中华人民共和国预算法》、《国务院关于加强地方政府性债务管理的意见》（国发〔2014〕43号）、《财政部关于对地方政府债务实行限额管理的通知》（财预 〔2015〕225号）等规定，制定本办法。 第二条
                新增地方政府一般债务限额、新增地方政府专项债务限额（以下均简称新增限额）分别按照一般公共预算、政府性基金预算管理方式不同，单独测算。 第三条
                新增限额分配管理应当遵循立足财力水平、防范债务风险、保障融资需求、注重资金效益、公平公开透明的原则。 <br/>第二章 管理权限和程序 第四条
                各省、自治区、直辖市、计划单列市新增限额由财政部在全国人大或其常委会批准的地方政府债务规模内测算，报国务院批准后下达地方。 第五条
                省本级及市县新增限额由省级财政部门在财政部下达的本地区新增限额内测算，报经省级政府批准后，按照财政管理级次向省本级及市县级财政部门下达。 <br/>第三章 新增限额分配 第六条
                新增限额分配选取影响政府债务规模的客观因素，根据各地区债务风险、财力状况等，并统筹考虑中央确定的重大项目支出、地方融资需求等情况，采用
                因素法测算。各客观因素数据来源于统计年鉴、地方财政预决算及相关部门提供的资料。
            </p>
        </div>
    </section>
</template>

<script>
    export default {
        name: "PolicyDetail",
        data() {
            return {
                id: this.$route.params.id,
                detail: {},
            };
        },
        methods: {
            loadDetail() {
                this.http.get(this.api.projectUnion.detail, {
                    id: this.id,
                }).then(res => {
                    const formData = res.data && res.data[0];
                    if (!formData) {
                        this.$router.replace('/policy');
                        alert('数据不存在');
                        return;
                    }

                    this.detail = formData;
                });
            },
        },
        created() {
            this.$store.commit('app/setBgColor1');
            // this.loadDetail();
        },
    };
</script>

<style lang="scss" scoped>
    .project-container {
        background-color: #fff;
    }

    .main {
        padding: 0 20px;
        color: rgba(51, 51, 51, 1);
    }

    .caption {
        text-align: center;

        h1 {
            line-height: 32px;
            font-size: 32px;
            font-weight: 500;
        }

        .info {
            line-height: 16px;
            font-size: 16px;
            font-weight: 500;
        }

        .date {
            line-height: 14px;
            font-size: 14px;
            font-weight: 400;
        }
    }

    .content {
        padding-top: 11px;
        padding-bottom: 36px;
        line-height: 34px;
        font-size: 16px;
        font-weight: 400;
    }

</style>
