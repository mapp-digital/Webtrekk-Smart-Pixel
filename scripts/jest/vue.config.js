const rootDir = `${process.cwd()}/packages/vue`;

module.exports = {
    rootDir: rootDir,

    preset: 'rollup-jest',
    moduleFileExtensions: ['js', 'vue'],
    testEnvironment: 'jsdom',
    transform: {
        '.*\\.(vue)$': 'vue-jest',
        '^.+\\.js$': `${process.cwd()}/node_modules/babel-jest`
    },

    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/src/**/*.js'
    ],
    coverageDirectory: `<rootDir>/reports/coverage/${process.env.VUE_VERSION}`,
    coverageThreshold: {
        'global': {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100
        },
        [`${rootDir}/src/lib/WebtrekkSmartPixelVue.js`]: {
            branches: 90
        }
    }
};
