import * as Joi from '@hapi/joi';
import { UrlRepository } from '@repositories';
import { sequelize } from '@config/database';
import { RequestHandler } from 'express';
import { httpValidator } from '@config/http-validator';

const bodyValidation = Joi.object().keys({
  url: Joi.string()
    .uri()
    .required(),
});

const controller: RequestHandler = async (req, res) => {
  const { url: long } = req.body;
  const url = await sequelize.transaction(transaction =>
    UrlRepository.create(long, transaction),
  );
  res.json(url.toJSON());
};

export const createMiddlewares = [
  httpValidator.body(bodyValidation),
  controller,
];
