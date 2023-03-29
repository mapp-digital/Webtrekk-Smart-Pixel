#!/bin/bash

#####################
# Vue 2
#####################

function init_vue2 {
    log "Backup Vue2 src"
    mv /apps/vue2 /apps/vue2_src
    log "Scaffold new Vue2 project via Vue CLI"
    cd /apps/ && npx --yes @vue/cli create vue2 -n -i '{"useConfigFiles":true,"plugins":{"@vue/cli-plugin-babel":{},"@vue/cli-plugin-pwa":{},"@vue/cli-plugin-router":{"historyMode":true},"@vue/cli-plugin-vuex":{},"@vue/cli-plugin-eslint":{"config":"prettier","lintOn":["save"]}},"vueVersion":"2"}'
    log "Merge E2E app src with new app"
    cp -rf /apps/vue2_src/src /apps/vue2/
    cp -rf /apps/vue2_src/vue.config.js /apps/vue2
    log "Delete backup"
    rm -rf /apps/vue2_src
}

function install_vue2 {
    if [ -d /apps/vue2/node_modules/@webtrekk-smart-pixel ]; then
      log "Plugin found - deleting existing version"
      rm -rf /apps/vue2/node_modules/@webtrekk-smart-pixel
    fi
    if [[ -z "${MAPP_REGRESSION}" ]]; then
        log "Preparing tests with public version of plugin - installing from npm..."
        cd /apps/vue2 && npm install --save @webtrekk-smart-pixel/vue
        log "Backup original plugin files for Code Coverage"
        rm -rf /E2E/sources-for-coverage/vue2 && cp -rf /apps/vue2/node_modules/@webtrekk-smart-pixel/vue /E2E/sources-for-coverage/vue2
        log "Instrument plugin code"
        cd /apps/vue2/node_modules/@webtrekk-smart-pixel && nyc instrument ./vue --in-place=true --exclude-node-modules=false
    else
        log "Preparing regression tests - getting plugin from source code of local package"
        mkdir -p /apps/vue2/node_modules/@webtrekk-smart-pixel
        log "Instrumenting source"
        cd /packages && nyc instrument ./vue/src /apps/vue2/node_modules/@webtrekk-smart-pixel/vue
        log "Getting core"
        cp -rf /packages/core /apps/vue2/node_modules/@webtrekk-smart-pixel/core
    fi
}

function build_vue2 {
    cd /apps/vue2 && npm run build
}

function serve_vue2 {
    cd /apps/vue2 && npm run serve
}

function cleanup_vue2 {
    log "Delete all except src and vue.config.js in Vue2 E2E app folder"
    cd /apps/vue2 && ls -A | grep -Ev "src|vue.config.js" | xargs rm -rf
}

#####################
# Vue 3
#####################

function init_vue3 {
    log "Backup Vue3 src"
    mv /apps/vue3 /apps/vue3_src
    log "Scaffold new Vue3 project via Vue CLI"
    cd /apps/ && npx --yes @vue/cli create vue3 -n -i '{"useConfigFiles":true,"plugins":{"@vue/cli-plugin-babel":{},"@vue/cli-plugin-typescript":{"classComponent":false,"useTsWithBabel":true},"@vue/cli-plugin-pwa":{},"@vue/cli-plugin-router":{"historyMode":true},"@vue/cli-plugin-vuex":{},"@vue/cli-plugin-eslint":{"config":"prettier","lintOn":["save"]}},"vueVersion":"3"}'
    log "Merge E2E app src with new app"
    cp -rf /apps/vue3_src/src /apps/vue3/
    cp -rf /apps/vue3_src/vue.config.js /apps/vue3
    log "Delete backup"
    rm -rf /apps/vue3_src
}

function install_vue3 {
    if [ -d /apps/vue3/node_modules/@webtrekk-smart-pixel ]; then
      log "Plugin found - deleting existing version"
      rm -rf /apps/vue3/node_modules/@webtrekk-smart-pixel
    fi
    if [[ -z "${MAPP_REGRESSION}" ]]; then
        log "Preparing tests with public version of plugin - installing from npm..."
        cd /apps/vue3 && npm install --save @webtrekk-smart-pixel/vue
        log "Backup original plugin files for Code Coverage"
        rm -rf /E2E/sources-for-coverage/vue3 && cp -rf /apps/vue3/node_modules/@webtrekk-smart-pixel/vue /E2E/sources-for-coverage/vue3
        log "Instrument plugin code"
        cd /apps/vue3/node_modules/@webtrekk-smart-pixel && nyc instrument ./vue --in-place=true --exclude-node-modules=false

    else
        log "Preparing for regression tests - getting plugin from source code of local package"
        mkdir -p /apps/vue3/node_modules/@webtrekk-smart-pixel
        log "Instrumenting source"
        cd /packages && nyc instrument ./vue/src /apps/vue3/node_modules/@webtrekk-smart-pixel/vue
        log "Getting core and types"
        cp -rf /packages/core /apps/vue3/node_modules/@webtrekk-smart-pixel/core
        cp -f /packages/vue/package.json /apps/vue3/node_modules/@webtrekk-smart-pixel/vue/package.json
        cp -rf /packages/vue/types /apps/vue3/node_modules/@webtrekk-smart-pixel/vue/
    fi
}

function build_vue3 {
    cd /apps/vue3 && npm run build
}

function serve_vue3 {
    cd /apps/vue3 && npm run serve
}

function cleanup_vue3 {
    log "Delete all except src and vue.config.js in Vue2 E2E app folder"
    cd /apps/vue3 && ls -A | grep -Ev "src|vue.config.js" | xargs rm -rf
}

#####################
# React with TS
#####################

function init_react-ts {
    log "Backup React-TS src"
    mv /apps/react-ts /apps/react-ts_src
    log "Scaffold new React Typescript project via create-react-app"
    cd /apps/ && npx --yes create-react-app react-ts --template typescript
    log "Merge E2E app src with new app"
    cp -rf /apps/react-ts_src/src /apps/react-ts/
    cp -rf /apps/react-ts_src/.env /apps/react-ts
    log "Delete backup"
    rm -rf /apps/react-ts_src
    log "Install router and redux"
    cd /apps/react-ts && npm install react-router-dom react-redux @reduxjs/toolkit typesafe-actions
}

function install_react-ts {
    if [ -d /apps/react-ts/node_modules/@webtrekk-smart-pixel ]; then
      log "Plugin found - deleting existing version"
      rm -rf /apps/react-ts/node_modules/@webtrekk-smart-pixel
    fi
    if [[ -z "${MAPP_REGRESSION}" ]]; then
        log "Preparing tests with public version of plugin - installing from npm..."
        cd /apps/react-ts && npm install --save @webtrekk-smart-pixel/react
        log "Backup original plugin files for Code Coverage"
        rm -rf /E2E/sources-for-coverage/react-ts && cp -rf /apps/react-ts/node_modules/@webtrekk-smart-pixel/react /E2E/sources-for-coverage/react-ts
        log "Instrument plugin code"
        cd /apps/react-ts/node_modules/@webtrekk-smart-pixel && nyc instrument ./react --in-place=true --exclude-node-modules=false

    else
        log "Preparing for regression tests - getting plugin from dist folder of local package"
        log "Info: using dist folder - make sure YOU HAVE BUILT SmartpixelReact after making changes!!!"
        mkdir -p /apps/react-ts/node_modules/@webtrekk-smart-pixel
        log "Instrumenting source"
        cd /packages/react && nyc instrument ./vanilla /apps/react-ts/node_modules/@webtrekk-smart-pixel/react
        log "Getting core and types"
        cp -rf /packages/core /apps/react-ts/node_modules/@webtrekk-smart-pixel/core
        cp -f /packages/react/vanilla/package.json /apps/react-ts/node_modules/@webtrekk-smart-pixel/react/package.json
        cp -rf /packages/react/vanilla/types /apps/react-ts/node_modules/@webtrekk-smart-pixel/react/
    fi
}

function build_react-ts {
    cd /apps/react-ts && npm run build
}

function serve_react-ts {
    log "http://localhost:3000/apps/react/"
    cd /apps/react-ts && npm run start
}

function cleanup_react-ts {
    log "Delete all except src and .env in react-ts E2E app folder"
    cd /apps/react-ts && ls -A | grep -Ev "src|.env" | xargs rm -rf
}

#####################
# Angular 14
#####################

function init_angular14 {
    log "Update Angular14 CLI"
    cd /var/apps/angular14 && npm update
    log "Initialize new Angular 14 app"
    rm -rf /var/apps/angular14/angular14
    npx ng new angular14 --defaults=true --commit=false --routing=true --skip-git=true --skip-tests=true --style=css --commit=false --routing=true --skip-git=true --skip-install
    log "Cleanup old builds"
    cd /apps/angular14 && ls -A | grep -xv "src" | xargs rm -rf
    log "Merge new app with E2E-app src"
    rm -rf /var/apps/angular14/angular14/src
    cp -rf /var/apps/angular14/angular14 /apps
    log "Install dependencies"
    cd /apps/angular14 && npm i && npm install --save @webtrekk-smart-pixel/angular@2 --force
    log "Angular14 E2E app is ready to be served and built"
}

function install_angular14 {
    if [ -d /apps/angular14/node_modules/@webtrekk-smart-pixel ]; then
      log "Plugin found - deleting existing version"
      rm -rf /apps/angular14/node_modules/@webtrekk-smart-pixel
    fi
    if [[ -z "${MAPP_REGRESSION}" ]]; then
        log "Preparing tests with public version of plugin - installing from npm..."
        cd /apps/angular14 && npm install --save @webtrekk-smart-pixel/angular@2 --force
        log "Instrument plugin code"
        cd /apps/angular14/node_modules/@webtrekk-smart-pixel && nyc instrument ./angular --in-place=true --exclude-node-modules=false

    else
        log "Preparing for regression tests - getting plugin from source code of local package"
        mkdir -p /apps/angular14/node_modules/@webtrekk-smart-pixel
        if [ ! -d /packages/angular/.release ]; then
            log "No build found - you need to build SmartpixelAngular@2 first"
            exit 1
        fi
        log "Instrumenting source"
        cd /packages/angular && nyc instrument ./.release /apps/angular14/node_modules/@webtrekk-smart-pixel/angular
        log "Getting other other files from release dir"
        cd /packages/angular/.release && cp -v *.* /apps/angular14/node_modules/@webtrekk-smart-pixel/angular && cp -rv ./lib /apps/angular14/node_modules/@webtrekk-smart-pixel/angular/lib
        log "Getting core"
        cp -rf /packages/core /apps/angular14/node_modules/@webtrekk-smart-pixel/core
    fi
}

function serve_angular14 {
    cd /apps/angular14 && npx ng serve --host 0.0.0.0
}

function build_angular14 {
    rm -rf /server/angular14
    cd /apps/angular14 && npx ng build --base-href /apps/angular14/
    cp -rf /apps/angular14/dist/angular14/ /server
}

function cleanup_angular14 {
    log "Delete all except src in Angular14 E2E app folder"
    cd /apps/angular14 && ls -A | grep -xv "src" | xargs rm -rf
}

#####################
# Angular 15
#####################

function init_angular15 {
    log "Update Angular15 CLI"
    cd /var/apps/angular15 && npm update
    log "Initialize new Angular 15 app"
    rm -rf /var/apps/angular15/angular15
    npx ng new angular15 --defaults=true --commit=false --routing=true --skip-git=true --skip-tests=true --style=css --commit=false --routing=true --skip-git=true --skip-install
    log "Cleanup old builds"
    cd /apps/angular15 && ls -A | grep -xv "src" | xargs rm -rf
    log "Merge new app with E2E-app src"
    rm -rf /var/apps/angular15/angular15/src
    cp -rf /var/apps/angular15/angular15 /apps
    log "Install dependencies"
    cd /apps/angular15 && npm i && npm install --save @webtrekk-smart-pixel/angular@2 --force
    log "Angular15 E2E app is ready to be served and built"
}

function install_angular15 {
    if [ -d /apps/angular15/node_modules/@webtrekk-smart-pixel ]; then
      log "Plugin found - deleting existing version"
      rm -rf /apps/angular15/node_modules/@webtrekk-smart-pixel
    fi
    if [[ -z "${MAPP_REGRESSION}" ]]; then
        log "Preparing tests with public version of plugin - installing from npm..."
        cd /apps/angular15 && npm install --save @webtrekk-smart-pixel/angular@2 --force
        log "Instrument plugin code"
        cd /apps/angular15/node_modules/@webtrekk-smart-pixel && nyc instrument ./angular --in-place=true --exclude-node-modules=false

    else
        log "Preparing for regression tests - getting plugin from source code of local package"
        mkdir -p /apps/angular15/node_modules/@webtrekk-smart-pixel
        if [ ! -d /packages/angular/.release ]; then
            log "No build found - you need to build SmartpixelAngular@2 first"
            exit 1
        fi
        log "Instrumenting source"
        cd /packages/angular && nyc instrument ./.release /apps/angular15/node_modules/@webtrekk-smart-pixel/angular
        log "Getting other other files from release dir"
        cd /packages/angular/.release && cp -v *.* /apps/angular15/node_modules/@webtrekk-smart-pixel/angular && cp -rv ./lib /apps/angular15/node_modules/@webtrekk-smart-pixel/angular/lib
        log "Getting core"
        cp -rf /packages/core /apps/angular15/node_modules/@webtrekk-smart-pixel/core
    fi
}

function serve_angular15 {
    cd /apps/angular15 && npx ng serve --host 0.0.0.0
}

function build_angular15 {
    rm -rf /server/angular15
    cd /apps/angular15 && npx ng build --base-href /apps/angular15/
    cp -rf /apps/angular15/dist/angular15/ /server
}

function cleanup_angular15 {
    log "Delete all except src in Angular15 E2E app folder"
    cd /apps/angular15 && ls -A | grep -xv "src" | xargs rm -rf
}

#####################
# YouTube
#####################

function instrument_youtube {
    cd /packages/youtube/dist && nyc instrument . ./instrumented --delete
}

function log {
    title="| $1 |"
    edge=$(echo "$title" | sed 's/./-/g')
    echo "$edge"
    echo -n "| "
    tput setaf 4; echo -n "$1"
    tput sgr0
    echo " |"
    echo "$edge"
} 

for arg; do
    tput setaf 2; echo "Invoking function $arg..."
    tput sgr0
    $arg
done