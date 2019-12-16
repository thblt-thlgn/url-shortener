import { Router } from 'express';
import {
  createMiddlewares,
  showMiddlewares,
  listMiddlewares,
} from '@controllers/urls';

export const httpRouter = Router();

httpRouter.post('/', ...createMiddlewares);
httpRouter.get('/', ...listMiddlewares);
httpRouter.get('/:short', ...showMiddlewares);
