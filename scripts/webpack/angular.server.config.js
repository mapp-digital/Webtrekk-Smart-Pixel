const webpack = require('webpack');
const dir = process.cwd();

module.exports = {
    entry: {server: `${dir}/scripts/server/angular.ts`},
    resolve: {extensions: ['.js', '.ts']},
    target: 'node',
    mode: 'none',
    // this makes sure we include node_modules and other 3rd party libraries
    externals: [/node_modules/],
    output: {
        path: `${dir}/packages/angular/demo/dist`,
        filename: '[name].js'
    },
    module: {
        rules: [
            {test: /\.ts$/, loader: 'ts-loader'}
        ]
    },
    plugins: [
        // Temporary Fix for issue: https://github.com/angular/angular/issues/11580
        // for 'WARNING Critical dependency: the request of a dependency is an expression'
        new webpack.ContextReplacementPlugin(
            /(.+)?angular(\\|\/)core(.+)?/,
            `${dir}/packages/angular/demo/src`, // location of your src
            {} // a map of your routes
        ),
        new webpack.ContextReplacementPlugin(
            /(.+)?express(\\|\/)(.+)?/,
            `${dir}/packages/angular/demo/src`,
            {}
        )
    ]
};
