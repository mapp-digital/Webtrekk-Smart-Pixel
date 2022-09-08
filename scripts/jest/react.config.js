const rootDir = `${process.cwd()}/packages/react`;
const reactVersion = process.env.REACT_VERSION;

const coverageThreshold = {
    'global': {
        branches: 90,
        functions: 90,
        lines: 90,
        statements: 90
    },
    [`${rootDir}/vanilla/src/components/withRouter.js`]: {
        branches: 0,
        functions: 0,
        lines: 0,
        statements: 0
    },
    [`${rootDir}/shared/src/polyfillCreateRef.js`]: {
        branches: 0,
        functions: 0,
        lines: 0,
        statements: 0
    }
};

if (parseInt(reactVersion) <= 15) {
    coverageThreshold[`${rootDir}/shared/src/webtrekkReducer.js`] = {
        branches: 0,
        functions: 0,
        lines: 0,
        statements: 0
    };
}

module.exports = {
    rootDir: rootDir,
    testPathIgnorePatterns: [
        '<rootDir>/next/'
    ],
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/vanilla/src/**/*.js',
        '<rootDir>/shared/src/**/*.js'
    ],
    coverageDirectory: `<rootDir>/vanilla/reports/coverage/${reactVersion}`,
    coverageThreshold: coverageThreshold
};
