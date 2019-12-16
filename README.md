# URL-Shortener

## Startup (locally)

```sh
$ docker-compose -f docker/base.yml -f docker/local.yml up -d # setup / start required services
$ npm ci # install dependancies
$ cp default.env .env # setup environment keys
$ npm run sequelize db:migrate -- --env=default # run migrations
$ npm run start:dev # start app
```
