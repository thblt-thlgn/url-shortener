'use strict';

const TABLE_NAME = 'urls';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable(TABLE_NAME, {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      short: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      long: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable(TABLE_NAME, {}),
};
