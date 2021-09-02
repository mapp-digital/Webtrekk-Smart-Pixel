#!/usr/bin/make

USER_ID := $(shell id -u)
GROUP_ID := $(shell id -g)

export USER_ID
export GROUP_ID

.PHONY: start_server stop_server debug_server_start docker_start docker_stop docker_start_debug docker_iex docker_cypress docker_build

start_server:
	bash ./admin/runner.sh start_server

stop_server:
	bash ./admin/runner.sh stop_server

debug_server_start:
	bash ./admin/runner.sh debug_server_start

docker_start:
	cd ./admin && docker-compose up -d && cd ..

docker_build:
	cd ./admin && docker-compose build && cd ..

docker_stop:
	cd ./admin && docker-compose down

docker_start_debug:
	cd ./admin && docker-compose up

docker_iex:
	docker exec -it phoenix bash -c "chmod +x /mapp/tests/admin/docker_runner.sh && /mapp/tests/admin/docker_runner.sh iex_server"

docker_cypress:
	docker exec -it mapp_e2e_cypress bash -c "cd /E2E && cypress run"