const baseUrl = 'http://192.168.9.105:3000'

export default {
    //新闻
    getNewsIndex:`${baseUrl}/news/getIndex`,//新闻首页
    getNewsList:`${baseUrl}/news/getList`,//新闻列表
    getNewsDetails:`${baseUrl}/news/getDetails`,//新闻详情

    /* 项目合作 */
    projectUnion:{
        list:`${baseUrl}/collaborate/getList`,
        detail:`${baseUrl}/collaborate/getDetails`,
    },
    /* 智库平台 */
    repo:{
        // 机构库
        organization:{
            list:`${baseUrl}/organization/getList`,
            detail:`${baseUrl}/organization/getDetails`,
        },
        // 专家库
        expert:{
            list:`${baseUrl}/expert/getList`,
            detail:`${baseUrl}/expert/getDetails`,
        },
    },
}
