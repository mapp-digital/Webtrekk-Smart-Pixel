const rootDir = `${process.cwd()}/packages/angular`;

module.exports = {
    rootDir: rootDir,
    globals: {
        'ts-jest': {
            tsConfig: '<rootDir>/src/tsconfig.spec.json'
        }
    },
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/src/lib/**/*.ts'
    ],
    coverageDirectory: `<rootDir>/reports/coverage/${process.env.ANGULAR_VERSION}`,
    coverageThreshold: {
        'global': {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100
        },
        [`${rootDir}/src/lib/WebtrekkSmartPixelAngular.ts`]: {
            branches: 85
        }
    }
};
