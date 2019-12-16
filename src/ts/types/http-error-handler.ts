import { NextFunction, Response, Request } from 'express';

export type HTTPErrorHandler<T> = (
  err: T,
  req: Request,
  res: Response,
  next: NextFunction,
) => void;
