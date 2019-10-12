const baseUrl = 'http://192.168.9.105:3000';

export default {
    //新闻
    getNewsIndex: `${baseUrl}/news/getIndex`,//新闻首页
    getNewsList: `${baseUrl}/news/getListByWeb`,//新闻列表
    getNewsDetails: `${baseUrl}/news/getDetails`,//新闻详情
    /* 首页 */
    home: {
        banner: `${baseUrl}/indexConfig/getDetails`,
        news:`${baseUrl}/indexConfig/getIndex`,
    },
    /* 项目合作 */
    projectUnion: {
        list: `${baseUrl}/collaborate/getListByWeb`,
        detail: `${baseUrl}/collaborate/getDetails`,
    },
    /* 智库平台 */
    repo: {
        // 机构库
        organization: {
            list: `${baseUrl}/organization/getListByWeb`,
            detail: `${baseUrl}/organization/getDetails`,
        },
        // 专家库
        expert: {
            list: `${baseUrl}/expert/getListByName`,
            detail: `${baseUrl}/expert/getDetails`,
        },


    },
    //行业报告
    research: {
        index: `${baseUrl}/researchReport/getIndex`,
        list: `${baseUrl}/researchReport/getListByWeb`,
        detail: `${baseUrl}/researchReport/getDetails`,
    },
    //经典案例
    researchScriptures: {
        list: `${baseUrl}/researchScriptures/getListByWeb`,
        detail: `${baseUrl}/researchScriptures/getDetails`,
    },
    //关于我们
    about: {
        index: `${baseUrl}/about/getIndex`
    },
    //政策法规
    statute: {
        list: `${baseUrl}/statute/getListByWeb`,
        detail: `${baseUrl}/statute/getDetails`,
        index: `${baseUrl}/statute/getIndex`,
    },
    magazine: {
        index: `${baseUrl}/magazine/getIndex`
    },
    //城投公司
    companyData: {
        getListBySearch: `${baseUrl}/companyData/getListBySearch`,
        comListByYear: `${baseUrl}/companyData/getListByYear`,

        detail: `${baseUrl}/companyData/getDetails`,
        govInfo: `${baseUrl}/basicData/getListByWeb`,
    }


};
