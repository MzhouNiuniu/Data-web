const path = require('path');
const PROJECT_ROOT = process.cwd();
module.exports = {
    resolve: {
        alias: {
            '@': path.resolve(PROJECT_ROOT, './src'),
            '@ui': path.resolve(PROJECT_ROOT, './src/components/ui'),
            '@constant': path.resolve(PROJECT_ROOT, './src/constant'),
            '@public': path.resolve(PROJECT_ROOT, './public'),
            '@components': path.resolve(PROJECT_ROOT, './src/components'),
            '@views': path.resolve(PROJECT_ROOT, './src/views'),
            '@utils': path.resolve(PROJECT_ROOT, './src/utils'),
        },
    },
};

/**
 * idea使用说明
 * setting->搜索webpack->选择此文件
 * */
