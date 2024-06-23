const { User } = require('../controllers/api');

const userData = [
  {
    username: 'testuser1',
    password: 'password123'
  },
  {
    username: 'testuser2',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
