const mongoose = require('mongoose');
const User = require('./User');

const UsersSchema = new mongoose.Schema({
  users: [User],
});

module.exports = mongoose.model('Users', UsersSchema);
