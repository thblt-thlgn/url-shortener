import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import { Environment } from './environment';
import { HTTPErrorHandler } from '@ts';
import { httpRouter } from './http-router';

export const httpServer = express();

const errorHandlerMiddleware: HTTPErrorHandler<Error> = (
  err,
  req,
  res,
  next,
): void => {
  console.error(err);
  res.sendStatus(500);
};

// SETUP
export default httpServer.listen(Environment.REST_PORT, () => {
  console.log(`HTTP server listing on ${Environment.REST_PORT}`);
});

httpServer.use(helmet());
httpServer.use(bodyParser.json());
httpServer.use(httpRouter);
httpServer.use(errorHandlerMiddleware);
