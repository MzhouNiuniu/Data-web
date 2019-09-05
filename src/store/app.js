export default {
    namespaced: true,
    // 路由切换时重置为defaultBgColor
    state: {
        defaultBgColor: '#fff',
        bgColor: '#fff',
    },
    mutations: {
        setDefaultBgColor(state) {
            state.bgColor = state.defaultBgColor;
        },
        setBgColor1(state) {
            state.bgColor = '#f6fbff';
        },
    },
    actions: {},
};
