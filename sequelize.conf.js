require('dotenv').config();

module.exports = {
  default: {
    username: process.env.DB_USERNAME || process.env.POSTGRES_USER,
    password: process.env.DB_PASSWORD || process.env.POSTGRES_PASSWORD,
    database: process.env.DB_NAME || process.env.POSTGRES_DB,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    pool: {
      max: parseInt(process.env.DB_POOL_MAX, 10),
      min: parseInt(process.env.DB_POOL_MIN, 10),
      acquire: process.env.DB_POOL_ACQUIRE,
      idle: process.env.DB_POOL_IDLE,
    },
  },
};
