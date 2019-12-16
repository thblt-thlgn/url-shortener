# URL-Shortener

A live version is available under [http://shortener.theologien.fr](http://shortener.theologien.fr)

## Startup (locally)

```sh
$ docker-compose -f docker/base.yml -f docker/local.yml up -d # setup / start required services
$ npm ci # install dependancies
$ cp default.env .env # setup environment keys
$ npm run sequelize db:migrate -- --env=default # run migrations
$ npm run start:dev # start app
```

## Startup (on server)

```sh
$ docker-compose -f docker/base.yml -f docker/server.yml up -d
```

## Available routes

- `POST` on `/`: Create a new 'short' url (the original URL has to be specified under the `url` in the body)
- `GET` on `/:id`: Redirect to the original url using the `short` id
- `GET` on `/`: List all the stored urls

## What could be improved:

- Add an interface to avoid the usage of the API to shortenize a URL
- Add test cases
- Setup CI (run tests + code analysis + upload to docker registries + deploy)
- Have a proper environment configuration (some production keys are stored in the repository right now)
- Store some statistics (browser used by the users, number of time an shortenized URL is used, ...)
- Setup a proper logger (winston + morgan ?)
- Export logs on production to a dedicated service (cloudwatch ?)
- Try to fetch the URL before storing it (if you receive a 404 don't shortenize it)
