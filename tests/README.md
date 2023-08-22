# MAPP E2E testsuite

E2E test service for Smartpixel and SPA plugins.  
The suite contains:
- a Phoenix server with various services written in Elixir
- a preconfigured instance of Cypress (incl. code coverage)
- two docker containers (phoenix & cypress)
- example apps for Vue 2 and Vue 3

Your can run Phoenix and Cypress locally on your host, or in a docker container.
In order to access the web interface of the Phoenix service, you need to add the following line to `/etc/hosts`:  
`127.0.0.1 phoenix
`

## Running locally
### Requirements
- NodeJs -> get it here: https://nodejs.org/en/download/
- Elixir -> get it here: https://elixir-lang.org/install.html

### Local usage
#### Phoenix
Start / stop the server: `make start_server` `make stop_server`  
Start the server with interactive CLI mode locally: `make debug_server_start` You can quit by pressing CTRL + C twice
#### Cypress
Go to `./E2E/`, run one time `npm i` and then `npm run open`. This will open the Cypress test suite. Remember to add the hosts entry (see above) and start Phoenix before running the tests.  
#### Vue 2 & Vue 3
##### Dev server
Go to `./apps/vue2` or `./apps/vue3`, then run `npm i`, followed by `npm run serve`. You'll have the dev server on localhost. Remember to add the hosts entry (see above) and start Phoenix, otherwise no products will be visible in the test shop, and cart, account and orders will not work.
##### Build for Phoenix
Go to `./apps/vue2` or `./apps/vue3`, then run `npm i`, followed by `npm run build`. When you start Phoenix, the builds will be available under https://phoenix:4001/apps/vue2 and https://phoenix:4001/apps/vue3


## Running within Docker
### Requirements
- Docker -> get it here: https://docs.docker.com/engine/install/
### Usage with Docker
#### Start docker container
Start / stop the service in Docker: `make docker_start` `make docker_stop`  
Start the service in Docker with server debug info: `docker_start_debug`  
Hint: consider starting with `docker_start_debug` the first time, because then you can see the installation process. The first start takes a while because the images need to be downloaded, the server needs to be compiled etc.
#### **ACTION** env for docker-compose up
The starting behavior of the Phoenix app can be controlled with the environment variable `ACTION`.  
The value defines, which function in ./admin/docker_runner.sh will be executed.

| ACTION      | Description |
| ----------- | ----------- |
| start_phoenix      | Default value if nothing else is set. Phoenix server will be compiled and started, or just started in case it was compiled before.       |
| start_phoenix_prebuild   | During container build, the server is already compiled. This action copies the prebuild into the repo directory. For usage on daily Jenkins testruns.        |
| build_phoenix_release   | Build the server via Elixir release.        |
| start_phoenix_release   | Starts an Elixir release, or builds it first in case no build is found.    |
| just_wait   | Does nothing, use this is you want to mess around in the container yourself.        |

#### Cypress
Run the tests with `make docker_cypress` - docker containers have to be running of course
#### Build Vue 2 / Vue 3 apps
Go to the root of this repo. If Docker containers don't run yet, start them with `npm run E2E:docker:start`.  
Then install the repo dependencies: `npm run E2E:docker:install`.
Continue with the dependencies of your app: `npm run E2E:docker:install:vue2` or `npm run E2E:docker:install:vue3`.  
Then build the app with `npm run E2E:docker:build:vue2` or `npm run E2E:docker:build:vue3`.



