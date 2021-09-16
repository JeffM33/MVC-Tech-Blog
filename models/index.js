const User = require('./User');
const Blog = require('./Blog');
const Reply = require('./Reply');

User.hasMany(Blog, {
  foreignKey: 'blog_id',
  onDelete: 'CASCADE'
});

User.hasMany(Reply, {
  foreignKey: 'reply_id',
  onDelete: 'CASCADE'
});

Blog.belongsTo(User, {
  foreignKey: 'user_id'
});

Blog.hasMany(Reply, {
  foreignKey: 'reply_id',
  onDelete: 'CASCADE'
});

Reply.belongsTo(Blog, {
  foreignKey: 'blog_id'
});

Reply.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Blog };
