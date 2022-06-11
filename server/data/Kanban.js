import mongoose from 'mongoose';;

const KanbanSchema = new mongoose.Schema({
  name: { type: String },
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
  personId: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
  pin: { type: Boolean },
});

module.exports = mongoose.model('Kanban', KanbanSchema);
