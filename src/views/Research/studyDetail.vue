<template>
    <section class="project-container__wrapper">
        <div class="project-container">
            <div class="detail-top pt-20 pb-20">
                <p class="detail-top-title pl-15">研究报告</p>
            </div>
            <div class="title-wrapper">
                <p class="title">这是一个研究报告标题这是一个研究报告标题这是一个研究报告标题</p>
                <p class="time">上传时间：2019年9月4日</p>
                <div class="sign">
                    <span>类型</span>
                    <span>姓名</span>
                    <span>所属机构</span>
                </div>
            </div>
            <div class="content"> 深圳华润中心一期工程占地3.7万平方米，总建筑面积23万平方米，包括深圳万象城购物中心和华润大厦建筑群，其中，写字楼建筑面积7.6万平方米，地下3层、地上29层，万象城购物中 心，建筑面积15.3万平方米，地下2层，地上5层。桩基以上工程于2003年5月28日开工，2004年12月8日完工。华润中心一期工程具有以下特点： 1) 月牙形中庭屋面、发光屋顶、米兰大道、正锥幕墙、倒锥幕墙、中庭栏杆等异型玻璃加工安装量大。 2) 结构设计复杂，使用了1500吨预应力、钢管芯柱、钢砼组合结构、钢屋架、主体钢结构、钢桁架约5500吨，主体施工技术难度大。 3) 高支模部位多，大于4.5M的建筑面积约有7万㎡，其中最高部位层高12.1M。 4) 土建主体工程量大，使用了超过2.6万吨钢筋(其中三级钢1.8万吨)、15万立方砼。 5) 作为商业建筑机电工程量巨大，共2.5亿元，其中电梯92部、变配电量31082KVA、空调制冷量8000RT。深圳华润中心一期工程占地3.7万平方米，总建筑面积23万平方米，包括深圳万象 城购物中心和华润大厦建筑群，其中，写字楼建筑面积7.6万平方米，地下3层、地上29层，万象城购物中 心，建筑面积15.3万平方米，地下2层，地上5层。桩基以上工程于2003年5月28日开工，2004年12月8日完工。华润中心一期工程具有以下特点： 1) 月牙形中庭屋面、发光屋顶、米兰大道、正锥幕墙、倒锥幕墙、中庭栏杆等异型玻璃加工安装量大。 2) 结构设计复杂，使用了1500吨预应力、钢管芯柱、钢砼组合结构、钢屋架、主体钢结构、钢桁架约5500吨，主体施工技术难度大。 3) 高支模部位多，大于4.5M的建筑面积约有7万㎡，其中最高部位层高12.1M。 4) 土建主体工程量大，使用了超过2.6万吨钢筋(其中三级钢1.8万吨)、15万立方砼。</div>
            <div class="download">
                <img src="./img/download.png" alt="">
                <div class="downloadList">
                    <div class="circle"></div>
                    <p>这是一个可下载附件这是一个可下载附件</p>
                    <div class="button">下载</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "study-detail"
    }
</script>

<style lang="scss" scoped>
    .detail-top{
        border-bottom: 1px solid $sign-color;

        & > .detail-top-title{
            border-left: 5px solid $primary-color;
            font-size: 24px;
            color: $sign-color;
            height: 24px;
            line-height: 24px;
            font-weight: bold;
        }
    }
    .title-wrapper{
        & > p{
            text-align: center;
        }
        .title{
            color: #000;
            font-size: 18px;
            font-weight: bold;
            margin: 20px;
        }
        .time{
            margin: 0 20px;
            padding-bottom: 15px;
            font-size: 12px;
            color: #A8ACAF;
            border-bottom: 1px solid #BFC5CA;
        }
        .sign{
            text-align: center;
            padding: 15px;

            & > span {
                background: #ECF1FF;
                color: $sign-color;
                padding: 2px 20px;
                margin-right: 20px;
            }
        }
    }
    .content{
        background: #F6FBFF;
        padding: 20px 15px;
    }
    .download{
        margin-top: 20px;

        img{
            width: 84px;
            margin-left: 30px;
        }
        .downloadList{
            display: flex;
            align-items: center;

            .circle{
                width: 12px;
                height: 12px;
                -webkit-border-radius: 6px;
                -moz-border-radius: 6px;
                border-radius: 6px;
                background: #358BFE;
                border: 3px solid #9AC5FE;
            }
            & > p{
                flex: 1;
                font-size: 14px;
                color: #A8ACAF;
                border-bottom: 1px dashed #BFC5CA;
                margin: 0 15px;
                padding: 15px 0;
            }
            .button{
                width: 72px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                background: #ECF1FF;
                color: $sign-color;
                -webkit-border-radius: 5px;
                -moz-border-radius: 5px;
                border-radius: 5px;
            }
            .button:hover{
                background: $sign-color;
                color: #fff;
            }
        }
    }
</style>