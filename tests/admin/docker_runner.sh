#!/bin/bash
SCRIPT=$(readlink -f "$0")
ADMINPATH=$(dirname "$SCRIPT")

function iex_server {
    cd /mapp/tests/server && iex --sname console --remsh mappe2e@$HOSTNAME --cookie mappify
}

function build_phoenix {
    cd /mapp/tests/server &&
    [[ -f ./priv/cert/selfsigned_key.pem ]] || mix phx.gen.cert &&
    [[ -d /mapp/tests/server/deps ]] || mix deps.get &&
    MIX_ENV=docker elixir --sname mappe2e --cookie mappify -S mix phx.server
}

function build_phoenix_release {
  rm -rf /mapp/tests/server/_build
  cd /mapp/tests/server && mix deps.get && mix phx.digest && mix release server
}

function start_phoenix_prebuild {
  echo "Copy pre-build into volume..."
  cp -rf /server /mapp/tests
  echo "Starting server..."
  cd /mapp/tests/server &&
  elixir --sname mappe2e --cookie mappify -S mix phx.server
}

function start_phoenix {
  echo "Starting server..."
  cd /mapp/tests/server &&
  elixir --sname mappe2e --cookie mappify -S mix phx.server
}

function start_phoenix_release {
 [[ -f /mapp/tests/server/_build/prod/rel/server/bin/server ]] || /mapp/tests/admin/docker_runner.sh build_phoenix_release && 
 /mapp/tests/server/_build/prod/rel/server/bin/server start
}

function just_wait {
  tail -F /dev/null
}

function wait_for_phoenix {
  echo "Waiting for Phoenix to be ready..."
  bash $ADMINPATH/wait-for-it.sh phoenix:4000 -t 0
}

for arg; do
  tput setaf 2; echo "Invoking function $arg..."
  tput sgr0
  $arg
done