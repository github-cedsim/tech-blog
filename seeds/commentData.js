const { Comment } = require('../models');

const commentData = [
  {
    content: 'Comment for post 1',
    user_id: 2,
    post_id: 1
  },
  {
    content: 'Comment for post 2',
    user_id: 1,
    post_id: 2
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
