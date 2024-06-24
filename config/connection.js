const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.JAWSDB_URL, {
  dialect: 'mysql',
  dialectOptions: {
    connectTimeout: 60000, // Increase timeout to 60 seconds
  },
  logging: console.log, // Enable detailed logging
});

module.exports = sequelize;
