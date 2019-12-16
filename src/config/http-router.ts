import { Router } from 'express';
import { createMiddlewares, showMiddlewares } from '@controllers/urls';

export const httpRouter = Router();

httpRouter.post('/', ...createMiddlewares);
httpRouter.get('/:short', ...showMiddlewares);
