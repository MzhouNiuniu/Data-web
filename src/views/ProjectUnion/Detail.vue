<template>
    <section class="project-container__wrapper">
        <div class="project-container">
            <p class="page-title-1 pt-20">项目合作 </p>
            <div class="hr-slide-style-2 mt-28"></div>
            <div class="caption">
                <h1>{{detail.name}}</h1>
                <div class="info">
                    <p class="text-tag yellow">
                        {{detail.releaseTime}}
                    </p>
                </div>
            </div>
            <div class="main">
                <div class="hr-dashed"></div>
                <p class="content" v-html="detail.content">
                </p>
                <div class="hr-dashed mt-12"></div>
                <div class="pl-6 pr-6">
                    <AttachmentList class="mt-18" :value="detail.accessory"/>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="qr-code">
                <img :src="detail.Tphotos" alt="推广码">
            </div>
            <p class="com-name">
                {{detail.Tcompany}}
            </p>
            <p class="tel">
                <img src="~@public/icon/tel.png" alt="" class="icon">
                <span class="line"></span>{{detail.Tcontact}}
            </p>
        </div>
    </section>
</template>

<script>
    import AttachmentList from '@components/AttachmentList';

    export default {
        name: "ProjectUnionDetail",
        components: {
            AttachmentList,
        },
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
                        this.$router.replace('/projectUnion');
                        alert('数据不存在');
                        return;
                    }

                    this.detail = formData;
                    // this.detail = {
                    //     name: '这是一个城投新闻标题这是一个城投新闻标题这是一个城投新闻标题',
                    //     releaseTime: '2019-9-03 14:23',
                    //     content: `<p>6) 地下室单层建${'<img src=\'x\' onerror=\'console.error(\"xss attack\")\'>'}筑面积3.1万㎡，长316M、宽121M，外墙总长度约851m，设计为无缝结构，属超长宽结构。 深圳华润中心一期工程于2004年12月9日投入使用以来获得业主的好评，于2005年荣获广东省优良样板工程奖和于2008年荣获香港优质建筑大奖。 </p><p></p><p>1) 月牙形中庭屋面、发光屋顶、米兰大道、正锥幕墙、倒锥幕墙、中庭栏杆等异型玻璃加工安装量大。 </p><p></p><p>2) 结构设计复杂，使用了1500吨预应力、钢管芯柱、钢砼组合结构、钢屋架、主体钢结构、钢桁架约5500吨，主体施工技术难度大。 3) 高支模部位</p>`,
                    //     accessory: 'https://www.w3school.com.cn/i/eg_tulip.jpg,https://www.w3school.com.cn/i/eg_tulip.jpg',
                    //     Tcompany: '这是一个公司名称这是一个公司名称',
                    //     Tcontact: '025-8346255',
                    //     Tphotos: 'https://www.w3school.com.cn/i/eg_tulip.jpg',
                    // };
                });
            },
        },
        created() {
            this.$store.commit('app/setBgColor1');

            this.loadDetail();
        },
    };
</script>

<style lang="scss" scoped>
    .project-container__wrapper {
        margin-top: 30px;
        background-color: #fff;
    }

    .project-container {
        padding-bottom: 16px;
    }

    .caption {
        padding-top: 20px;

        h1 {
            line-height: 18px;
            font-size: 18px;
            font-weight: bold;
            text-align: center;
            color: rgba(0, 0, 52, 1);
        }

        .info {
            margin-top: 15px;
            text-align: right;
        }
    }

    .main {
        margin-top: 15px;
        padding: 0 20px 0;
        line-height: 28px;
        font-size: 14px;
        color: #586066;

        .content {
            padding-top: 13px; // 20 - (28 - 14) / 2
        }
    }

    .footer {
        $bg: #f6fbff;

        box-sizing: content-box;
        padding-top: 20px;
        background-color: $bg;
        font-family: PingFang-TC;

        .qr-code {
            overflow: hidden;
            position: relative;
            z-index: 0;
            margin-left: auto;
            margin-right: auto;
            width: 110px;
            height: 110px;
            padding: 10px;

            img {
                position: relative;
                z-index: 2;
                width: 100%;
                height: 100%;
            }

            &::before {
                content: '';
                position: absolute;
                z-index: 0;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                border: 2px solid $sign-color;
            }

            &::after {
                content: '';
                display: block;
                position: absolute;
                z-index: 1;
                top: -10px;
                right: -10px;
                bottom: -10px;
                left: -10px;
                background: $bg;
                transform: rotate(45deg);
            }
        }

        .com-name {
            margin-top: 15px;
            line-height: 18px;
            font-size: 18px;
            font-weight: 500;
            text-align: center;
            color: rgba(88, 96, 102, 1);
        }

        .tel {
            margin-top: 15px;
            line-height: 24px;
            font-size: 24px;
            font-weight: 600;
            text-align: center;
            color: rgba(5, 103, 255, 1);

            .icon {
                width: 20px;
                vertical-align: 0;
            }

            .line {
                display: inline-block;
                margin: 0 9px;
                width: 1px;
                height: 19px;
                background: $sign-color;
                vertical-align: -1px;
            }
        }
    }
</style>
