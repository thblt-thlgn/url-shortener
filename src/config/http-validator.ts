import { createValidator } from 'express-joi-validation';

export const httpValidator = createValidator({ statusCode: 400 });
