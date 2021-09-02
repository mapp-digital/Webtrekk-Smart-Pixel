const babel = require('rollup-plugin-babel');
const typescript = require('rollup-plugin-typescript');

const PACKAGES_PATH = './packages';

const FORMAT = {
    ESM: 'es',
    ESM2: 'esm',
    UMD: 'umd',
    AMD: 'amd',
    CJS: 'cjs',
    IIFE: 'iife',
    SYS: 'system'
};

module.exports = {
    /* @webtrekk-smart-pixel/react */
    react: [
        {
            packagePath: `${PACKAGES_PATH}/react/vanilla`,
            packageName: '@webtrekk-smart-pixel/react',
            outputPath: 'dist',
            outputName: 'smart-pixel-react',
            input: 'src/index.js',
            plugins: [
                babel({
                    exclude: 'node_modules/**'
                })
            ],
            external: [
                'react',
                'react-router-dom',
                'prop-types',
                '@webtrekk-smart-pixel/core'
            ],
            global: {
                'react': 'React',
                'react-router-dom': 'reactRouterDom',
                'prop-types': 'PropTypes',
                '@webtrekk-smart-pixel/core': 'wtSmart'
            },
            format: [FORMAT.UMD]
        }
    ],

    /* @webtrekk-smart-pixel/angular */
    angular: [
        {
            packagePath: `${PACKAGES_PATH}/angular`,
            packageName: '@webtrekk-smart-pixel/angular',
            outputPath: 'dist',
            outputName: 'smart-pixel-angular',
            input: 'src/lib/index.ts',
            plugins: [
                typescript({
                    tsconfig: `${PACKAGES_PATH}/angular/src/tsconfig.build.json`
                }),
                babel({
                    exclude: 'node_modules/**'
                })
            ],
            external: [
                '@angular/core',
                '@angular/common',
                '@angular/router',
                'rxjs/operators',
                '@webtrekk-smart-pixel/core'
            ],
            global: {
                '@angular/core': 'ng.core',
                '@angular/router': 'ng.router',
                'rxjs/operators': 'Rx.operators',
                'typescript': 'ts',
                '@webtrekk-smart-pixel/core': 'wtSmart'
            },
            format: [FORMAT.UMD]
        }
    ],

    /* @webtrekk-smart-pixel/vue */
    vue: [
        {
            packagePath: `${PACKAGES_PATH}/vue`,
            packageName: '@webtrekk-smart-pixel/vue',
            outputPath: 'dist',
            outputName: 'smart-pixel-vue',
            input: 'src/index.js',
            plugins: [
                babel({
                    exclude: 'node_modules/**'
                })
            ],
            external: [
                'vue',
                '@webtrekk-smart-pixel/core'
            ],
            global: {
                'vue': 'Vue',
                '@webtrekk-smart-pixel/core': 'wtSmart'
            },
            format: [FORMAT.UMD]
        }
    ],

    /* @webtrekk-smart-pixel/next */
    next: [
        {
            packagePath: `${PACKAGES_PATH}/react/next`,
            packageName: '@webtrekk-smart-pixel/next',
            outputPath: 'dist',
            outputName: 'smart-pixel-next',
            input: 'src/index.js',
            plugins: [
                babel({
                    exclude: 'node_modules/**'
                })
            ],
            external: [
                'react',
                // 'react-router-dom',
                'prop-types',
                '@webtrekk-smart-pixel/core'
            ],
            global: {
                'react': 'React',
                // 'react-router-dom': 'reactRouterDom',
                'prop-types': 'PropTypes',
                '@webtrekk-smart-pixel/core': 'wtSmart'
            },
            format: [FORMAT.UMD]
        }
    ]
};
