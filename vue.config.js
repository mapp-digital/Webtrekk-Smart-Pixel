const path = require('path');

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.join(__dirname, '/packages/vue/demo/vue/src')
            }
        },
        entry: {
            app: path.join(__dirname, '/packages/vue/demo/vue/src', 'main.js')
        }
    }
};
