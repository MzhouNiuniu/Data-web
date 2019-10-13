<template>
    <section class="project-container__wrapper">
        <div class="project-container">
            <p class="detail-page-caption">
                <span>项目合作</span>
            </p>
            <div class="main">
                <div class="caption">
                    <h1 class="mt-30">{{detail.name}}</h1>
                    <p class="date mt-20">
                        发布时间：{{detail.releaseTime}}
                    </p>
                    <div class="hr-dashed mt-20"></div>
                </div>
                <p class="content" v-html="detail.content">
                </p>
                <div class="hr-dashed mt-12"></div>
                <div class="pl-6 pr-6">
                    <AttachmentList class="mt-30" :value="detail.accessory"/>
                </div>
            </div>
        </div>
        <div class="footer">
            <img :src="detail.Tphotos" alt="推广码" class="qr-code" v-if="detail.Tphotos">
            <img src="./tg.png" alt="推广码" class="qr-code" v-else>
            <p class="com-name">
                {{detail.Tcompany?detail.Tcompany:'智慧城投信息科技股份有限公司'}}
            </p>
            <p class="tel">
                {{detail.Tcontact?detail.Tcontact:'13457688910'}}
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

                    res.data[0].accessory.map((item,index)=>{
                      // console.log(item)
                        res.data[0].accessory[index]={
                            name:'附件',
                            url: item
                        }
                    })

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
    }

    .project-container {
        padding-bottom: 16px;
        background-color: #fff;
    }

    .caption {
        text-align: center;
        color: rgba(51, 51, 51, 1);

        h1 {
            line-height: 32px;
            font-size: 32px;
            font-weight: 500;
        }

        .date {
            line-height: 14px;
            font-size: 14px;
            font-weight: 500;
        }
    }

    .main {
        padding: 0 20px;
        line-height: 28px;
        font-size: 14px;
        color: #586066;

        .content {
            padding-top: 13px; // 20 - (28 - 14) / 2
            min-height: 250px
        }
    }

    .footer {
        $bg: #f6fbff;
        padding-top: 30px;
        background-color: $bg;
        text-align: center;
        padding-bottom: 20px;
        .qr-code {
            /*display: block;*/
            /*margin: auto;*/
            width: 100px;
            height: 100px;
        }

        .com-name {
            margin-top: 20px;
            line-height: 14px;
            font-size: 14px;
            color: #333333;
        }

        .tel {
            margin-top: 15px;
            line-height: 14px;
            height: 14px;
            font-size: 14px;
            color: #333333;
        }
    }
</style>
