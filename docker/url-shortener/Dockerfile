FROM node:12.13.0-alpine

LABEL maintainer=thibault@nobbas.com
LABEL version=0.1

WORKDIR /workspace
COPY tsconfig.json tsconfig.json
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY .sequelizerc .sequelizerc
COPY sequelize.conf.js sequelize.conf.js
COPY src src
COPY migrations migrations

RUN npm ci && npm run build

CMD node dist/index.js