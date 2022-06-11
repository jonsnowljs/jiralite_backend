const mongoose = require('mongoose');
const Tag = require('./Tag');

const TaskSchema = new mongoose.Schema({
  epicId: { type: mongoose.Schema.Types.ObjectId, ref: 'Epic' },
  favorite: { type: Boolean },
  kanbanId: { type: mongoose.Schema.Types.ObjectId, ref: 'Kanban' },
  name: { type: String },
  note: { type: String },
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  processorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  reporterId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  tags: [Tag],
  typeId: { type: mongoose.Schema.Types.ObjectId, ref: 'TaskType' },
});

module.exports = mongoose.model('Task', TaskSchema);
