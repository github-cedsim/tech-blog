'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        username: 'user1',
        password: await bcrypt.hash('password123', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'user2',
        password: await bcrypt.hash('password123', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};