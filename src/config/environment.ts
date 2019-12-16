import { config } from 'dotenv';
import { Dialect } from 'sequelize/types';
import { UnsetEnvironmentVariableError } from '@ts';

const extractEnvironmentVariable = (
  key: string,
  alternativeKey: string = '',
): string => {
  const value = process.env[key] || process.env[alternativeKey];
  if (value === null || value === undefined || value === '') {
    throw new UnsetEnvironmentVariableError(key);
  }

  return value;
};

export namespace Environment {
  config();

  export const REST_PORT = parseInt(
    extractEnvironmentVariable('REST_PORT'),
    10,
  );

  export const DB_USERNAME = extractEnvironmentVariable(
    'DB_USERNAME',
    'POSTGRES_USER',
  );
  export const DB_PASSWORD = extractEnvironmentVariable(
    'DB_PASSWORD',
    'POSTGRES_PASSWORD',
  );
  export const DB_NAME = extractEnvironmentVariable('DB_NAME', 'POSTGRES_DB');
  export const DB_HOST = extractEnvironmentVariable('DB_HOST');
  export const DB_DIALECT = extractEnvironmentVariable('DB_DIALECT') as Dialect;
  export const DB_POOL_MAX = parseInt(
    extractEnvironmentVariable('DB_POOL_MAX'),
    10,
  );
  export const DB_POOL_MIN = parseInt(
    extractEnvironmentVariable('DB_POOL_MIN'),
    10,
  );
  export const DB_POOL_ACQUIRE = parseInt(
    extractEnvironmentVariable('DB_POOL_ACQUIRE'),
    10,
  );
  export const DB_POOL_IDLE = parseInt(
    extractEnvironmentVariable('DB_POOL_IDLE'),
    10,
  );
}
