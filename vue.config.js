const chainWebpack = require('./webpack.chain');
const configureWebpack = require('./webpack.config');
module.exports = {
    chainWebpack,
    configureWebpack,
    css: {
        loaderOptions: {
            sass: {
                data: `@import "~@/global.scss";`,
            },
        },
    },
};
