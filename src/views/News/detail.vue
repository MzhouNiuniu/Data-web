<template>
    <section class="project-container__wrapper">
        <div class="project-container">
            <div class="detail-top pt-20 pb-20">
                <p class="detail-top-title pl-15">城投新闻</p>
            </div>
            <section class="content-wrapper pl-20 pr-20">
                <div class="content-title pt-25 pb-15">
                    <p>这是一个城投新闻标题这是一个城投新闻标题</p>
                    <div>
                        <span>城投</span>
                        <span>央视网</span>
                        <span>2019-09-04 12:43</span>
                    </div>
                </div>
                <p class="content"> 3月3日，中国人民政治协商会议第十三届全国委员会第二次会议在北京人民大会堂开幕。这是习近平、李克强、栗战书、王沪宁、赵乐际、韩正、王岐山在主席台就座。 凝聚共识谱写时代华章，共商国是同绘复兴宏图。中国人民政治协商会议第十三届全国委员会第二次会议3日下午在人民大会堂开幕。今后10天里，2000多名全国政协委员将认真履行职责， 广泛凝心聚力，强化使命担当，为决胜全面建成小康社会、夺取新时代中国特色社会主义伟大胜利作出新的更大贡献。 3月的北京，春和景明。人民大会堂大礼堂内穹顶群灯璀璨，会场气氛庄重热烈。中国人民政治协商会议会徽悬挂在主席台正中，十面鲜艳的红旗分列两侧。全国政协主席汪洋，全国政协 副主席张庆黎、刘奇葆、帕巴拉·格列朗杰、董建华、万钢、何厚铧、卢展工、王正伟、马飚、陈晓光、梁振英、夏宝龙、杨传堂、李斌、巴特尔、汪永清、何立峰、苏辉、郑建邦、辜胜阻、 刘新成、何维、邵鸿、高云龙在主席台前排就座。 党和国家领导人习近平、李克强、栗战书、王沪宁、赵乐际、韩正、王岐山等在主席台就座，祝贺大会召开。全国政协十三届二次会议应出席委员2157人，实到2133人，符合规定人数。 党和国家领导人习近平、李克强、栗战书、王沪宁、赵乐际、韩正、王岐山等在主席台就座，祝贺大会召开。全国政协十三届二次会议应出席委员2157人，实到2133人，符合规定人数。</p>
            </section>
        </div>
    </section>
</template>

<script>
    export default {
        name: "detail"
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
    .content-wrapper{
        .content-title{
            border-bottom: 1px solid #BFC5CA;
            & > p{
                color: $list-title-color;
                font-size: 18px;
                font-weight: bold;
                text-align: center;
                margin-bottom: 25px;
            }
            & > div{
                text-align: right;
                
                & > span{
                    display: inline-block;
                    border: 1px solid;
                    font-size: 12px;
                    padding: 0 20px;
                    margin-left: 20px;
                    -webkit-border-radius: 2px;
                    -moz-border-radius: 2px;
                    border-radius: 2px;
                }
                & > span:first-child{
                    color: $sign-color;
                    border-color: $sign-color;
                }
                & > span:nth-of-type(2){
                    color: #FD882A;
                    border-color: #FD882A;
                }
                & > span:last-child{
                    color: #FEC400;
                    border-color: #FEC400;
                }
            }
        }
        .content{
            padding: 20px 0;
            color: $list-title-color;
            font-size: 14px;
            text-indent: 2em;
            line-height: 24px;
        }
    }
</style>