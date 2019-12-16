import { Sequelize } from 'sequelize-typescript';
import { Environment } from './environment';

export const sequelize = new Sequelize({
  host: Environment.DB_HOST,
  database: Environment.DB_NAME,
  dialect: Environment.DB_DIALECT,
  username: Environment.DB_USERNAME,
  password: Environment.DB_PASSWORD,
  pool: {
    max: Environment.DB_POOL_MAX,
    min: Environment.DB_POOL_MIN,
    acquire: Environment.DB_POOL_ACQUIRE,
    idle: Environment.DB_POOL_IDLE,
  },
  repositoryMode: true,
  models: [`${__dirname}/../models`],
});
