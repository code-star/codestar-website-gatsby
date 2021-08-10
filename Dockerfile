# Stage 1

FROM node:16-buster AS build-env

LABEL org.opencontainers.image.source https://github.com/code-star/codestar-website-gatsby

USER node

RUN mkdir /home/node/src

WORKDIR /home/node/src

COPY --chown=node:node yarn.lock package.json ./

RUN yarn --frozen-lockfile

COPY --chown=node:node . .

# RUN yarn gatsby build

# Stage 2

FROM nginx

COPY --from=build-env /home/node/src/public/ /usr/share/nginx/html

# CMD ["yarn", "gatsby", "build"]
