<template>
    <section class="about-container">
        <div class="about-container-top pb-30">
            <div class="about-header">
                <div>
                    <p class="about-text">关</p>
                    <span class="about-text-after">
                        <p>于我们</p>
                        <p>About us</p>
                    </span>
                </div>
            </div>
            <section v-for="(item,index) in info" :key="index">
                <UIDescription :title="item.company" class="mt-20" :text="item.content"/>
                <div class="hr-dashed mt-20" v-if="index!=info.length-1"></div>

            </section>
            <!--<UIDescription title="中国投资咨询" class="mt-20" :text="text1"/>-->
            <!--<div class="hr-dashed mt-20"></div>-->
            <!--<UIDescription title="智慧城投介绍" class="mt-20" :text="text1"/>-->
        </div>


        <footer class="about-container-bottom">
            <div class="about-header">
                <div>
                    <p class="about-text">资</p>
                    <span class="about-text-after">
                        <p>质文件</p>
                        <p>Qualificationm</p>
                    </span>
                </div>
            </div>

            <div class="about-container-bottomImgBox">
                <img :src="item" v-for="item in aptitude" class="show-img-box">

                </img>
            </div>
        </footer>
    </section>
</template>

<script>
import UIDescription from '@ui/Description';

export default {
    name: 'About',
    components:{
        UIDescription,
    },
    data() {
        return {
            info:[],
            aptitude:[]
        }
    },
    mounted() {
        this.getDetail()
    },
    methods: {
        async getDetail() {
            let res = await this.http.get(this.api.about.index)
            this.info = res.data.info
            this.aptitude=res.data.aptitude
            console.log(res)
        }
    }
};
</script>
<style lang="scss" scoped>
.about-container{
    margin: auto;
    height: 100%;
}
.about-container-top{
    margin: auto;
    max-width: $project-width;
}
.about-container-bottom{
    position: relative;
    &::after{
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        display: block;
        width: 0;
        height: 0;
        border-top: 16px solid #fff;
        border-right: 14px solid transparent;
        border-left: 14px solid transparent;
    }
}
.about-header{
    margin:22.5px auto 0 auto;
    width: 300px;
    border-bottom: 1px solid #0567FF;
    display: flex;
    justify-content: center;
    align-items: center;

    div{
        display: flex;
    }
    .about-text{
        font-size:36px;
        font-family:PingFangSC;
        font-weight:600;
        color:rgba(5,103,255,1);
        line-height: 36px;
        padding: 5px;
    }
    .about-text-after{
        padding:7px 0;
        font-size:12px;
        font-family:PingFang-SC;
        font-weight:500;
        color:rgba(88,96,102,1);
        p:first-child{
            font-size:20px;
            font-family:PingFang-SC;
            font-weight:bold;
            color:rgba(88,96,102,1);
            line-height:20px;
        }
    }
}

.about-content-box{
    width: 100%;
    height: 140px;
    margin-top: 20px;
    margin-bottom: 15px;
    .about-content-head{
        display: block;
        overflow: hidden;
        margin-bottom: 15px;
    }
    .about-content-head-text{
        background: #0567FF;
        width: 130px;
        height: 28px;
        display: inline-block;
        font-size:18px;
        font-family:PingFang-SC;
        font-weight:bold;
        color:rgba(255,255,255,1);
        line-height:28px;
        text-align: center;
        float: left;
    }
    .about-content-head-Triangle{
        display: inline-block;
        float: left;
        width: 0;
        height: 0;
        border: 14px solid transparent;
        border-left: 20px solid #0567FF;
    }
    .about-content-text{
        height: 96px;
        background: #F6FBFF;
        padding: 15px;
        font-size:14px;
        font-family:PingFang-SC;
        font-weight:500;
        color:rgba(88,96,102,1);
        line-height: 24px;
    }
}

.about-container-bottom{
    /*background:#F6FBFF;*/
    overflow: hidden;
}
.about-container-bottomImgBox{

    margin: auto;
    display: flex;
    justify-content: center;
    margin-top: 70px;
    width: 1200px;
    flex-wrap: wrap;
    .show-img-box{
        height: 300px;
        margin-right: 40px;
        position: relative;
        background-size: 100% 100%;
        /*background-image: url('/image/noPic.png');*/
        margin-bottom: 25px;
    }
}

</style>
