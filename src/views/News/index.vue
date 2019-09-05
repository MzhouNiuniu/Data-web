<template>
    <div>
        <div class="sign-wrapper">
            <div></div>
            <div>
                <span>行业</span>
                <span>动态</span>
            </div>
            <div class="more-wrapper">了解更多</div>
        </div>
        <ul class="trade-list">
            <li>
                <div class="circle"></div>
                <p>这是一个行业动态标题这是一个行业动态标题这是一个行业动态标题这是一个行业动态标题这是一个行业动态标题这是一个行业动态标题这是一个行业动态标题这是一个行业动态标题</p>
                <div>
                    <img src="./img/time.png"/>
                    <span>2019-09-04 12:43</span>
                </div>
            </li>
            <li>
                <div class="circle"></div>
                <p>这是一个行业动态标题这是一个行业动态标题这是一个行业动态标题这是一个行业动态标题这是一个行业动态标题这是一个行业动态标题这是一个行业动态标题这是一个行业动态标题</p>
                <div>
                    <img src="./img/time.png"/>
                    <span>2019-09-04 12:43</span>
                </div>
            </li>
            <li>
                <div class="circle"></div>
                <p>这是一个行业动态标题这是一个行业动态标题这是一个行业动态标题这是一个行业动态标题这是一个行业动态标题这是一个行业动态标题这是一个行业动态标题这是一个行业动态标题</p>
                <div>
                    <img src="./img/time.png"/>
                    <span>2019-09-04 12:43</span>
                </div>
            </li>
            <li>
                <div class="circle"></div>
                <p>这是一个行业动态标题这是一个行业动态标题这是一个行业动态标题这是一个行业动态标题这是一个行业动态标题这是一个行业动态标题这是一个行业动态标题这是一个行业动态标题</p>
                <div>
                    <img src="./img/time.png"/>
                    <span>2019-09-04 12:43</span>
                </div>
            </li>
            <li>
                <div class="circle"></div>
                <p>这是一个行业动态标题这是一个行业动态标题这是一个行业动态标题这是一个行业动态标题这是一个行业动态标题这是一个行业动态标题这是一个行业动态标题这是一个行业动态标题</p>
                <div>
                    <img src="./img/time.png"/>
                    <span>2019-09-04 12:43</span>
                </div>
            </li>
        </ul>
        <div class="sign-wrapper">
            <div></div>
            <div>
                <span>城投</span>
                <span>新闻</span>
            </div>
            <div class="more-wrapper">了解更多</div>
        </div>
        <div class="city-list">
            <div class="city-item">
                <img src="" alt="">
                <div>
                    <p class="city-title">这是一个城投新闻标题这是一个城投新闻标题</p>
                    <div class="city-sign">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style lang="scss" scoped>
    .sign-wrapper{
        margin-top: 25px;
        margin-bottom: 30px;
        display: flex;

        & > div {
            flex: 1;
            height:64px;
        }
        & > div:first-child {
            border-top: 2px solid #eee;
        }
        & > div:nth-of-type(2) {
            flex: 0 1 auto;
            width: 197px;
            height:64px;
            background: url("./img/sign.png") no-repeat center;
            background-size:cover;
            display: flex;
            padding: 0 20px;

            & > span {
                flex:1;
                text-align: center;
                font-size: 24px;
                color:#fff;
                line-height: 75px;
            }
            & > span:first-child{
                color: #3D95FE;
            }
        }
        .more-wrapper {
            border-bottom: 2px solid #eee;
            text-align: right;
            line-height: 80px;
            color: $sign-color;
            font-size: 14px;
            font-weight: bold;
        }
        .more-wrapper:after{
            content:'+';
            margin-left: 10px;
        }
    }
    .trade-list{
        & >li{
            display: flex;
            border-bottom: 1px solid #eee;
            padding: 20px 0;
            font-size: 18px;
            align-items:center;

            & > .circle{
                width: 10px;
                height: 10px;
                background: $sign-color;
                -webkit-border-radius: 10px;
                -moz-border-radius: 10px;
                border-radius: 10px;
                margin-right: 15px;
            }
            & >p{
                flex: 1;
                color: #000034;
                font-weight: bold;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                margin-right: 10px;
            }
            & > div{
                & > img {
                    width: 16px;
                    height: 16px;
                    margin-right: 10px;
                }
                & > span {
                    color: #586066;
                    font-size: 14px;
                    font-weight: bold;
                }
            }
        }
    }
    .city-list{
        & > .city-item{
            display: flex;
            background: #F6FBFF;
            padding: 15px 20px;

            & > img{
                width: 300px;
                hieght: 140px;
            }
            & > div {
                margin-left: 20px;

                & > .city-sign{
                    margin-top: 15px;

                    & > div{
                        display: inline-block;
                    }
                }
            }
        }
    }
</style>