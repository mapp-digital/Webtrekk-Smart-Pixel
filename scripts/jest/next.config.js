const rootDir = `${process.cwd()}/packages/next`;

module.exports = {
    rootDir: rootDir,
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/src/**/*.js'
    ],
    coverageDirectory: `<rootDir>/reports/coverage/${process.env.NEXT_VERSION}`,
    coverageThreshold: {
        'global': {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100
        }
    }
};
