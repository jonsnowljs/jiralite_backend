const mongoose = require('mongoose');

const TaskTypeSchema = new mongoose.Schema({
  name: { type: String, enum: ['task', 'bug'] },
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('TaskType', TaskTypeSchema);
