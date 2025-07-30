#!/bin/bash

#####################
# Vue 3
#####################

function init_vue3 {
    log "Backup Vue3 src"
    mv /apps/vue3 /apps/vue3_src
    log "Scaffold new Vue3 project via Vite"
    cd /apps/ && npm create vite@latest vue3 -- --template vue-ts --force
    log "Merge E2E app src with new app"
    cp -rf /apps/vue3_src/src /apps/vue3/
    cp -rf /apps/vue3_src/vite.config.ts /apps/vue3
    log "Delete backup"
    rm -rf /apps/vue3_src
    log "Install vuex, vue-router and @types/node"
    cd /apps/vue3 && npm install @types/node vuex vue-router
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
        log "Preparing for regression tests - getting plugin from source code of local package (not dist, for better coverage report)"
        mkdir -p /apps/vue3/node_modules/@webtrekk-smart-pixel
        log "Instrumenting source"
        cd /packages && nyc instrument ./vue/src /apps/vue3/node_modules/@webtrekk-smart-pixel/vue
        log "Getting core and types"
        cp -rf /packages/core /apps/vue3/node_modules/@webtrekk-smart-pixel/core
        cp -f /packages/vue/package.json /apps/vue3/node_modules/@webtrekk-smart-pixel/vue/package.json
        cp -rf /packages/vue/types /apps/vue3/node_modules/@webtrekk-smart-pixel/vue/
        log "Setting version from package.json of Vue plugin in _ps call"
        sed -i "s/###VERSION###/$(grep -o '"version": *"[^"]*"' /apps/vue3/node_modules/@webtrekk-smart-pixel/vue/package.json | awk -F'"' '{print $4}')/g" /apps/vue3/node_modules/@webtrekk-smart-pixel/vue/lib/WebtrekkSmartPixelVue.js
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
    cd /apps/vue3 && ls -A | grep -Ev "src|vite.config.ts" | xargs rm -rf
}

#####################
# React with TS
#####################

function init_react-ts {
    log "Backup React-TS src"
    mv /apps/react-ts /apps/react-ts_src
    log "Scaffold new React Typescript project with vite"
    cd /apps/ && npm create vite@latest react-ts -- --template react-ts --force
    log "Merge E2E app src with new app"
    cp -rf /apps/react-ts_src/src /apps/react-ts/
    cp -rf /apps/react-ts_src/vite.config.ts /apps/react-ts
    log "Delete backup"
    rm -rf /apps/react-ts_src
    log "Install router, redux and babel"
    cd /apps/react-ts && npm install react-router-dom react-redux @reduxjs/toolkit typesafe-actions @types/node prop-types
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
    log "!!! Make sure to init and install before! Access via http://localhost:5173/apps/react/ !!!"
    log "!!! Check track requests in prod build only, dev is full of react-bs (double execution etc.) !!!"
    cd /apps/react-ts && npm run dev -- --host
}

function cleanup_react-ts {
    log "Delete all except src and vite.config.ts in react-ts E2E app folder"
    cd /apps/react-ts && ls -A | grep -Ev "src|vite.config.ts" | xargs rm -rf
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
# Angular 16
#####################

function init_angular16 {
    log "Update Angular16 CLI"
    cd /var/apps/angular16 && npm update
    log "Initialize new Angular 16 app"
    rm -rf /var/apps/angular16/angular16
    npx ng new angular16 --defaults=true --commit=false --routing=true --skip-git=true --skip-tests=true --style=css --commit=false --routing=true --skip-git=true --skip-install
    log "Cleanup old builds"
    cd /apps/angular16 && ls -A | grep -xv "src" | xargs rm -rf
    log "Merge new app with E2E-app src"
    rm -rf /var/apps/angular16/angular16/src
    cp -rf /var/apps/angular16/angular16 /apps
    log "Install dependencies"
    cd /apps/angular16 && npm i && npm install --save @webtrekk-smart-pixel/angular@2 --force
    log "Angular16 E2E app is ready to be served and built"
}

function install_angular16 {
    if [ -d /apps/angular16/node_modules/@webtrekk-smart-pixel ]; then
      log "Plugin found - deleting existing version"
      rm -rf /apps/angular16/node_modules/@webtrekk-smart-pixel
    fi
    if [[ -z "${MAPP_REGRESSION}" ]]; then
        log "Preparing tests with public version of plugin - installing from npm..."
        cd /apps/angular16 && npm install --save @webtrekk-smart-pixel/angular@2 --force
        log "Instrument plugin code"
        cd /apps/angular16/node_modules/@webtrekk-smart-pixel && nyc instrument ./angular --in-place=true --exclude-node-modules=false

    else
        log "Preparing for regression tests - getting plugin from source code of local package"
        mkdir -p /apps/angular16/node_modules/@webtrekk-smart-pixel
        if [ ! -d /packages/angular/.release ]; then
            log "No build found - you need to build SmartpixelAngular@2 first"
            exit 1
        fi
        log "Instrumenting source"
        cd /packages/angular && nyc instrument ./.release /apps/angular16/node_modules/@webtrekk-smart-pixel/angular
        log "Getting other other files from release dir"
        cd /packages/angular/.release && cp -v *.* /apps/angular16/node_modules/@webtrekk-smart-pixel/angular && cp -rv ./lib /apps/angular16/node_modules/@webtrekk-smart-pixel/angular/lib
        log "Getting core"
        cp -rf /packages/core /apps/angular16/node_modules/@webtrekk-smart-pixel/core
    fi
}

function serve_angular16 {
    cd /apps/angular16 && npx ng serve --host 0.0.0.0
}

function build_angular16 {
    rm -rf /server/angular16
    cd /apps/angular16 && npx ng build --base-href /apps/angular16/
    cp -rf /apps/angular16/dist/angular16/ /server
}

function cleanup_angular16 {
    log "Delete all except src in Angular16 E2E app folder"
    cd /apps/angular16 && ls -A | grep -xv "src" | xargs rm -rf
}

#####################
# Angular 17
#####################

function init_angular17 {
    log "Update Angular17 CLI"
    cd /var/apps/angular17 && npm update
    log "Initialize new Angular 17 app"
    rm -rf /var/apps/angular17/angular17
    npx ng new angular17 --defaults=true --commit=false --routing=true --skip-git=true --skip-tests=true --style=css --commit=false --routing=true --skip-git=true --skip-install
    log "Cleanup old builds"
    cd /apps/angular17 && ls -A | grep -xv "src" | xargs rm -rf
    log "Merge new app with E2E-app src"
    rm -rf /var/apps/angular17/angular17/src
    cp -rf /var/apps/angular17/angular17 /apps
    log "Install dependencies"
    cd /apps/angular17 && npm i && npm install --save @webtrekk-smart-pixel/angular@2 --force
    log "Angular17 E2E app is ready to be served and built"
}

function install_angular17 {
    if [ -d /apps/angular17/node_modules/@webtrekk-smart-pixel ]; then
      log "Plugin found - deleting existing version"
      rm -rf /apps/angular17/node_modules/@webtrekk-smart-pixel
    fi
    if [[ -z "${MAPP_REGRESSION}" ]]; then
        log "Preparing tests with public version of plugin - installing from npm..."
        cd /apps/angular17 && npm install --save @webtrekk-smart-pixel/angular@2 --force
        log "Instrument plugin code"
        cd /apps/angular17/node_modules/@webtrekk-smart-pixel && nyc instrument ./angular --in-place=true --exclude-node-modules=false

    else
        log "Preparing for regression tests - getting plugin from source code of local package"
        mkdir -p /apps/angular17/node_modules/@webtrekk-smart-pixel
        if [ ! -d /packages/angular/.release ]; then
            log "No build found - you need to build SmartpixelAngular@2 first"
            exit 1
        fi
        log "Instrumenting source"
        cd /packages/angular && nyc instrument ./.release /apps/angular17/node_modules/@webtrekk-smart-pixel/angular
        log "Getting other other files from release dir"
        cd /packages/angular/.release && cp -v *.* /apps/angular17/node_modules/@webtrekk-smart-pixel/angular && cp -rv ./lib /apps/angular17/node_modules/@webtrekk-smart-pixel/angular/lib
        log "Getting core"
        cp -rf /packages/core /apps/angular17/node_modules/@webtrekk-smart-pixel/core
    fi
}

function serve_angular17 {
    cd /apps/angular17 && npx ng serve --host 0.0.0.0
}

function build_angular17 {
    rm -rf /server/angular17
    cd /apps/angular17 && npx ng build --base-href /apps/angular17/
    cp -rf /apps/angular17/dist/angular17/browser /server
    mv /server/browser /server/angular17
}

function cleanup_angular17 {
    log "Delete all except src in Angular17 E2E app folder"
    cd /apps/angular17 && ls -A | grep -xv "src" | xargs rm -rf
}

#####################
# Angular 18
#####################

function init_angular18 {
    log "Update Angular18 CLI"
    cd /var/apps/angular18 && npm update
    log "Initialize new Angular 18 app"
    rm -rf /var/apps/angular18/angular18
    npx ng new angular18 --defaults=true --commit=false --routing=true --skip-git=true --skip-tests=true --style=css --commit=false --routing=true --skip-git=true --skip-install
    log "Cleanup old builds"
    cd /apps/angular18 && ls -A | grep -xv "src" | xargs rm -rf
    log "Merge new app with E2E-app src"
    rm -rf /var/apps/angular18/angular18/src
    cp -rf /var/apps/angular18/angular18 /apps
    log "Install dependencies"
    cd /apps/angular18 && npm i && npm install --save @webtrekk-smart-pixel/angular@2 --force
    log "Angular18 E2E app is ready to be served and built"
}

function install_angular18 {
    if [ -d /apps/angular18/node_modules/@webtrekk-smart-pixel ]; then
      log "Plugin found - deleting existing version"
      rm -rf /apps/angular18/node_modules/@webtrekk-smart-pixel
    fi
    if [[ -z "${MAPP_REGRESSION}" ]]; then
        log "Preparing tests with public version of plugin - installing from npm..."
        cd /apps/angular18 && npm install --save @webtrekk-smart-pixel/angular@2 --force
        log "Instrument plugin code"
        cd /apps/angular18/node_modules/@webtrekk-smart-pixel && nyc instrument ./angular --in-place=true --exclude-node-modules=false

    else
        log "Preparing for regression tests - getting plugin from source code of local package"
        mkdir -p /apps/angular18/node_modules/@webtrekk-smart-pixel
        if [ ! -d /packages/angular/.release ]; then
            log "No build found - you need to build SmartpixelAngular@2 first"
            exit 1
        fi
        log "Instrumenting source"
        cd /packages/angular && nyc instrument ./.release /apps/angular18/node_modules/@webtrekk-smart-pixel/angular
        log "Getting other other files from release dir"
        cd /packages/angular/.release && cp -v *.* /apps/angular18/node_modules/@webtrekk-smart-pixel/angular && cp -rv ./lib /apps/angular18/node_modules/@webtrekk-smart-pixel/angular/lib
        log "Getting core"
        cp -rf /packages/core /apps/angular18/node_modules/@webtrekk-smart-pixel/core
    fi
}

function serve_angular18 {
    cd /apps/angular18 && npx ng serve --host 0.0.0.0
}

function build_angular18 {
    rm -rf /server/angular18
    cd /apps/angular18 && npx ng build --base-href /apps/angular18/
    cp -rf /apps/angular18/dist/angular18/browser /server
    mv /server/browser /server/angular18
}

function cleanup_angular18 {
    log "Delete all except src in Angular18 E2E app folder"
    cd /apps/angular18 && ls -A | grep -xv "src" | xargs rm -rf
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