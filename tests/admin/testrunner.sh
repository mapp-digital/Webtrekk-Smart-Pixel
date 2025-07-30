
#!/bin/bash

function test_vue2 {
    echo "Providing Code Coverage plugin for Cypress"
    [ ! -d "/E2E/node_modules" ] && ln -s /coverage-plugin/node_modules/ /E2E/node_modules
    echo "Providing source files for Code Coverage report"
    mkdir -p /apps/vue2/node_modules/@webtrekk-smart-pixel/vue/dist/
    cp /E2E/sources-for-coverage/vue2/dist/smart-pixel-vue.umd.js /apps/vue2/node_modules/@webtrekk-smart-pixel/vue/dist/smart-pixel-vue.umd.js
    cp /E2E/sources-for-coverage/vue2/index.js /apps/vue2/node_modules/@webtrekk-smart-pixel/vue/index.js
    echo "Starting tests"
    cd /E2E && cypress run --spec "/E2E/cypress/e2e/vue2/**/*" --browser chrome
}

function test_vue3 {
    echo "Providing Code Coverage plugin for Cypress"
    [ ! -d "/E2E/node_modules" ] && ln -s /coverage-plugin/node_modules/ /E2E/node_modules
    echo "Providing source files for Code Coverage report"
    mkdir -p /apps/vue3/node_modules/@webtrekk-smart-pixel/vue/dist/
    cp /E2E/sources-for-coverage/vue3/dist/smart-pixel-vue.umd.js /apps/vue3/node_modules/@webtrekk-smart-pixel/vue/dist/smart-pixel-vue.umd.js
    cp /E2E/sources-for-coverage/vue3/index.js /apps/vue3/node_modules/@webtrekk-smart-pixel/vue/index.js
    echo "Starting tests"
    cd /E2E && cypress run --spec "/E2E/cypress/e2e/vue3/**/*" --browser chrome
}

function test_react-ts {
    echo "Providing Code Coverage plugin for Cypress"
    [ ! -d "/E2E/node_modules" ] && ln -s /coverage-plugin/node_modules/ /E2E/node_modules
    echo "Providing source files for Code Coverage report"
    mkdir -p /apps/react-ts/node_modules/@webtrekk-smart-pixel/react/dist/
    cp /E2E/sources-for-coverage/react-ts/dist/smart-pixel-react.umd.js /apps/react-ts/node_modules/@webtrekk-smart-pixel/react/dist/smart-pixel-react.umd.js
    cp /E2E/sources-for-coverage/react-ts/index.js /apps/react-ts/node_modules/@webtrekk-smart-pixel/react/index.js
    echo "Starting tests"
    cd /E2E && cypress run --spec "/E2E/cypress/e2e/react/**/*" --browser chrome
}

function test_angular14 {
    echo "Providing Code Coverage plugin for Cypress"
    [ ! -d "/E2E/node_modules" ] && ln -s /coverage-plugin/node_modules/ /E2E/node_modules
    echo "Patching covergage module"
    sed -i 's/getSource(filePath) {/getSource(filePath){if(process.env.MAPP_REPORT_PATH){filePath=process.env.MAPP_REPORT_PATH+filePath}/'  /E2E/node_modules/istanbul-lib-report/lib/context.js
    echo "Starting tests"
    cd /E2E && export MAPP_REPORT_PATH=/packages/angular && cypress run --spec "/E2E/cypress/e2e/angular14/**/*" --browser chrome
}

function test_angular15 {
    echo "Providing Code Coverage plugin for Cypress"
    [ ! -d "/E2E/node_modules" ] && ln -s /coverage-plugin/node_modules/ /E2E/node_modules
    echo "Patching covergage module"
    sed -i 's/getSource(filePath) {/getSource(filePath){if(process.env.MAPP_REPORT_PATH){filePath=process.env.MAPP_REPORT_PATH+filePath}/'  /E2E/node_modules/istanbul-lib-report/lib/context.js
    echo "Starting tests"
    cd /E2E && export MAPP_REPORT_PATH=/packages/angular && cypress run --spec "/E2E/cypress/e2e/angular15/**/*" --browser chrome
}

function test_angular16 {
    echo "Providing Code Coverage plugin for Cypress"
    [ ! -d "/E2E/node_modules" ] && ln -s /coverage-plugin/node_modules/ /E2E/node_modules
    echo "Patching covergage module"
    sed -i 's/getSource(filePath) {/getSource(filePath){if(process.env.MAPP_REPORT_PATH){filePath=process.env.MAPP_REPORT_PATH+filePath}/'  /E2E/node_modules/istanbul-lib-report/lib/context.js
    echo "Starting tests"
    cd /E2E && export MAPP_REPORT_PATH=/packages/angular && cypress run --spec "/E2E/cypress/e2e/angular16/**/*" --browser chrome
}

function test_angular17 {
    echo "Providing Code Coverage plugin for Cypress"
    [ ! -d "/E2E/node_modules" ] && ln -s /coverage-plugin/node_modules/ /E2E/node_modules
    echo "Patching covergage module"
    sed -i 's/getSource(filePath) {/getSource(filePath){if(process.env.MAPP_REPORT_PATH){filePath=process.env.MAPP_REPORT_PATH+filePath}/'  /E2E/node_modules/istanbul-lib-report/lib/context.js
    echo "Starting tests"
    cd /E2E && export MAPP_REPORT_PATH=/packages/angular && cypress run --spec "/E2E/cypress/e2e/angular17/**/*" --browser chrome
}

function test_angular18 {
    echo "Providing Code Coverage plugin for Cypress"
    [ ! -d "/E2E/node_modules" ] && ln -s /coverage-plugin/node_modules/ /E2E/node_modules
    echo "Patching covergage module"
    sed -i 's/getSource(filePath) {/getSource(filePath){if(process.env.MAPP_REPORT_PATH){filePath=process.env.MAPP_REPORT_PATH+filePath}/'  /E2E/node_modules/istanbul-lib-report/lib/context.js
    echo "Starting tests"
    cd /E2E && export MAPP_REPORT_PATH=/packages/angular && cypress run --spec "/E2E/cypress/e2e/angular18/**/*" --browser chrome
}

function test_youtube {
    echo "Providing Code Coverage plugin for Cypress"
    [ ! -d "/E2E/node_modules" ] && ln -s /coverage-plugin/node_modules/ /E2E/node_modules
    echo "Patching covergage module"
    sed -i 's/getSource(filePath) {/getSource(filePath){if(process.env.MAPP_REPORT_PATH){filePath=process.env.MAPP_REPORT_PATH+filePath}/'  /E2E/node_modules/istanbul-lib-report/lib/context.js
    echo "Starting tests"
    cd /E2E && export MAPP_REPORT_PATH=/ && /usr/local/bin/cypress run --spec "/E2E/cypress/e2e/youtube/**/*" --browser chrome
}

for arg; do
    tput setaf 2; echo "Invoking function $arg..."
    tput sgr0
    $arg
done