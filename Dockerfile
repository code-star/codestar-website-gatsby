FROM node:16-alpine

USER node

RUN mkdir /home/node/src

WORKDIR /home/node/src

COPY --chown=node:node yarn.lock package.json ./

RUN yarn --frozen-lockfile

COPY --chown=node:node . .

CMD ["node", "index.js"]