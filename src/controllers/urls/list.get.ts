import { UrlRepository } from '@repositories';
import { RequestHandler } from 'express';

const controller: RequestHandler = async (req, res) => {
  const urls = await UrlRepository.list();
  const data = urls.map(url => url.toJSON());
  res.json(data);
};

export const listMiddlewares = [controller];
