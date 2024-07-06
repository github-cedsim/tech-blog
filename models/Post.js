const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

Post.associate = (models) => {
  Post.hasMany(models.Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
  });

  Post.belongsTo(models.User, {
    foreignKey: 'user_id',
  });
};

module.exports = Post;