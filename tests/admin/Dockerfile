FROM elixir:1.12.2

ARG NODE_VERSION=14.16.0
ARG NODE_PACKAGE=node-v$NODE_VERSION-linux-x64
ARG NODE_HOME=/opt/$NODE_PACKAGE
ARG GROUP_ID
ARG USER_ID
ENV USER_NAME="abc123def456ghi789"


ENV NODE_PATH $NODE_HOME/lib/node_modules
ENV PATH $NODE_HOME/bin:$PATH

RUN apt-get update && apt-get install -y \
  ca-certificates \
  curl

RUN curl https://nodejs.org/dist/v$NODE_VERSION/$NODE_PACKAGE.tar.gz | tar -xzC /opt/
RUN mkdir /.npm

RUN if ! id -gn "${GROUP_ID}" > /dev/null 2>&1; then echo "create new group: ${USER_NAME} with id *${GROUP_ID}*"; addgroup --gid "${GROUP_ID}" "${USER_NAME}"; fi
RUN if ! id -un "${USER_ID}" > /dev/null 2>&1; then echo "create new user: ${USER_NAME} with id *${USER_ID}* for group id *${GROUP_ID}*"; adduser --disabled-password --gecos '' --uid "${USER_ID}" --gid "${GROUP_ID}" "${USER_NAME}"; fi
RUN chown -R -f "${USER_ID}":"${GROUP_ID}" /.npm

COPY --chown="${USER_ID}":"${GROUP_ID}" ./fixture /fixture
COPY --chown="${USER_ID}":"${GROUP_ID}" ./pseudo_db /pseudo_db
COPY --chown="${USER_ID}":"${GROUP_ID}" ./request_logger /request_logger
COPY --chown="${USER_ID}":"${GROUP_ID}" ./server /server

USER "${USER_ID}":"${GROUP_ID}"

ENV MIX_ENV=prod
ENV SECRET_KEY_BASE=CNhDSauMTcoGwrB2vzbNOEbNrKv3+Iz1vLCUG2EEXGDurKWfjpYnCi9/55uvii73
ENV FIXTURE_DIR=/mapp/tests/E2E/cypress/fixtures/*.json

RUN mix local.hex --force
RUN mix local.rebar --force

RUN cd /server && mix deps.get && mix compile
