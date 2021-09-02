#!/bin/bash

SCRIPT=$(readlink -f "$0")
ADMINPATH=$(dirname "$SCRIPT")
ROOTPATH=${ADMINPATH%/tests/admin}
SERVERPATH=$ROOTPATH/tests/server
APPSPATH=$ROOTPATH/tests/apps
PACKAGEPATH=$ROOTPATH/packages

function log {
	tput setaf 5; echo $1
	tput sgr0
}

function start_server {

    cd $SERVERPATH &&
    [[ -f ./priv/cert/selfsigned_key.pem ]] || mix phx.gen.cert &&
    PORT=4000 MIX_ENV=dev elixir --erl "-detached" -S mix phx.server &&
    log_info
}



function stop_server {
    pkill beam.smp
}
function debug_server_start {
    cd $SERVERPATH &&
    [[ -f ./priv/cert/selfsigned_key.pem ]] || mix phx.gen.cert &&
    MIX_ENV=dev iex -S mix phx.server
}

function log_info {
    log "Make sure to add this line to /etc/hosts:"
    log "127.0.0.1 phoenix"
    log "Server URLS:"
    log "https://phoenix:4001/"
    log "Request logger: https://phoenix:4001/requests"
    log "Vue2: https://phoenix:4001/apps/vue2"
    log "Vue3: https://phoenix:4001/apps/vue3"
    log "Fixture Service:"
    log "https://phoenix:4001/api/fixture "
    log "https://phoenix:4001/api/fixture/:key "
    log "https://phoenix:4001/api/fixture/api/fixture/:key/:prop"
    log "https://phoenix:4001/api/fixture/api/fixture/:key/:prop/:value"
    log "Trackserver: https://phoenix:4001/123123123123123/wt"
    log "Server Dashboard: https://phoenix:4001/dashboard"
}

for arg; do
  tput setaf 2; echo "Invoking function $arg..."
  tput sgr0
  $arg
done