module.exports = {
    'angular': {
        '4': {
            '@angular/core': '^4', '@angular/router': '^4', '@angular/common': '^4',
            '@angular/cli': '^6', '@angular/platform-browser': '^4', '@angular/compiler': '^4',
            '@angular/compiler-cli': '^4', '@angular/platform-browser-dynamic': '^4',
            '@angular-builders/jest': '^7', '@angular-devkit/build-angular': '^0.10',
            'typescript': '~3.1.0'
        },
        '5': {
            '@angular/core': '^5', '@angular/router': '^5', '@angular/common': '^5',
            '@angular/cli': '^6', '@angular/platform-browser': '^5', '@angular/compiler': '^5',
            '@angular/compiler-cli': '^5', '@angular/platform-browser-dynamic': '^5',
            '@angular-builders/jest': '^7', '@angular-devkit/build-angular': '^0.10',
            'typescript': '~3.1.0'
        },
        '6': {
            '@angular/core': '^6', '@angular/router': '^6', '@angular/common': '^6',
            '@angular/cli': '^6', '@angular/platform-browser': '^6', '@angular/compiler': '^6',
            '@angular/compiler-cli': '^6', '@angular/platform-browser-dynamic': '^6',
            '@angular-builders/jest': '^7', '@angular-devkit/build-angular': 'v6-lts',
            'typescript': '~3.1.0'
        },
        '7': {
            '@angular/core': '^7', '@angular/router': '^7', '@angular/common': '^7',
            '@angular/cli': '^7', '@angular/platform-browser': '^7', '@angular/compiler': '^7',
            '@angular/compiler-cli': '^7', '@angular/platform-browser-dynamic': '^7',
            '@angular-builders/jest': '^7', '@angular-devkit/build-angular': 'v7-lts',
            'typescript': '~3.1.0'
        },
        '8': {
            '@angular/core': '^8', '@angular/router': '^8', '@angular/common': '^8',
            '@angular/cli': '^8', '@angular/platform-browser': '^8', '@angular/compiler': '^8',
            '@angular/compiler-cli': '^8', '@angular/platform-browser-dynamic': '^8',
            '@angular-builders/jest': '^8', '@angular-devkit/build-angular': 'v8-lts',
            'typescript': '~3.5.0', '@angular/platform-server': '^8', '@angular/animations': '^8',
            '@nguniversal/express-engine': '^8', '@nguniversal/module-map-ngfactory-loader': '^8'
        },
        '9': {
            '@angular/core': '^9', '@angular/router': '^9', '@angular/common': '^9',
            '@angular/cli': '^9', '@angular/platform-browser': '^9', '@angular/compiler': '^9',
            '@angular/compiler-cli': '^9', '@angular/platform-browser-dynamic': '^9',
            '@angular-builders/jest': '^9', '@angular-devkit/build-angular': 'v9-lts',
            'typescript': '^4', '@angular/platform-server': '^9', '@angular/animations': '^9',
            '@nguniversal/express-engine': '^9', 'jest': '^26'
        },
        '10': {
            '@angular/core': '^10', '@angular/router': '^10', '@angular/common': '^10',
            '@angular/cli': '^10', '@angular/platform-browser': '^10', '@angular/compiler': '^10',
            '@angular/compiler-cli': '^10', '@angular/platform-browser-dynamic': '^10',
            '@angular-builders/jest': '^10', '@angular-devkit/build-angular': 'v10-lts',
            'typescript': '^4', '@angular/platform-server': '^10', '@angular/animations': '^10',
            '@nguniversal/express-engine': '^10', 'jest': '^26'
        },
        'latest': {
            '@angular/core': 'latest', '@angular/router': 'latest', '@angular/common': 'latest',
            '@angular/cli': 'latest', '@angular/platform-browser': 'latest', '@angular/compiler': 'latest',
            '@angular/compiler-cli': 'latest', '@angular/platform-browser-dynamic': 'latest',
            '@angular-builders/jest': 'latest', '@angular-devkit/build-angular': 'latest',
            'typescript': '~3.5.0', '@angular/platform-server': 'latest', '@angular/animations': 'latest',
            '@nguniversal/express-engine': 'latest', 'jest': '^26'
        },
        'next': {
            '@angular/core': 'next', '@angular/router': 'next', '@angular/common': 'next',
            '@angular/cli': 'next', '@angular/platform-browser': 'next', '@angular/compiler': 'next',
            '@angular/compiler-cli': 'next', '@angular/platform-browser-dynamic': 'next',
            '@angular-builders/jest': 'next', '@angular-devkit/build-angular': 'next',
            'typescript': '~3.5.0', '@angular/platform-server': 'next', '@angular/animations': 'next',
            '@nguniversal/express-engine': 'next', 'jest': '^26'
        }
    },
    'react/vanilla': {
        '14': {
            'react': '^0.14', 'react-dom': '^0.14', 'react-router-dom': '^5',
            'react-addons-test-utils': '^0.14', 'react-test-renderer': '^1',
            'enzyme-adapter-react-14': 'latest'
        },
        '15': {
            'react': '^15', 'react-dom': '^15', 'react-router-dom': '^5',
            'react-addons-test-utils': '^15', 'react-test-renderer': '^15',
            'enzyme-adapter-react-15': 'latest'
        },
        '16': {
            'react': '^16', 'react-dom': '^16', 'react-router-dom': '^5',
            'react-test-renderer': '^16', 'enzyme-adapter-react-16': 'latest'
        },
        '17': {
            'react': '^17', 'react-dom': '^17', 'react-router-dom': '^5',
            'react-test-renderer': '^17', '@wojtekmaj/enzyme-adapter-react-17': 'latest'
        },
        'latest': {
            'react': 'latest', 'react-dom': 'latest', 'react-router-dom': '^5',
            'react-test-renderer': 'latest', '@wojtekmaj/enzyme-adapter-react-17': 'latest'
        },
        'next': {
            'react': 'next', 'react-dom': 'next', 'react-router-dom': '^5',
            'react-test-renderer': 'next', '@wojtekmaj/enzyme-adapter-react-17': 'latest'
        }
    },
    'react/next': {
        '7': {'next': '^7'},
        '8': {'next': '^8'},
        '9': {'next': '^9'},
        '10': {'next': '^10'},
        'latest': {'next': 'latest'},
        'canary': {'next': 'canary'}
    },
    'nuxt': {
        '1': {'nuxt': '^1', 'axios': 'latest'},
        '2': {'nuxt': '^2', 'axios': 'latest'}
    },
    'vue': {
        '2.2': {'vue': '~2.2', 'vue-template-compiler': '~2.2'},
        '2.3': {'vue': '~2.3', 'vue-template-compiler': '~2.3'},
        '2.4': {'vue': '~2.4', 'vue-template-compiler': '~2.4'},
        '2.5': {'vue': '~2.5', 'vue-template-compiler': '~2.5'},
        '2.6': {'vue': '~2.6', 'vue-template-compiler': '~2.6'},
        'latest': {'vue': 'latest', 'vue-template-compiler': 'latest'},
        'next': {'vue': 'next', 'vue-template-compiler': 'latest'},
        'beta': {'vue': 'beta', 'vue-template-compiler': 'beta'}
    }
};
