import { ResourceNotFoundError } from '@ts';
import * as Joi from '@hapi/joi';
import { UrlRepository } from '@repositories';
import { RequestHandler } from 'express';
import { httpValidator } from '@config/http-validator';

const paramsValidation = Joi.object().keys({
  short: Joi.string().required(),
});

const controller: RequestHandler = async (req, res) => {
  const { short } = req.params;
  try {
    const url = await UrlRepository.retrieve(short);
    res.redirect(url.long);
  } catch (err) {
    if (!(err instanceof ResourceNotFoundError)) {
      throw err;
    }
    res.sendStatus(404);
  }
};

export const showMiddlewares = [
  httpValidator.params(paramsValidation),
  controller,
];
