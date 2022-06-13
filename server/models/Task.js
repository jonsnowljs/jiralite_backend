import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  epicId: { type: mongoose.Schema.Types.ObjectId, ref: 'Epic' },
  favorite: { type: Boolean },
  kanbanId: [
    {
      name: { type: String },
      projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
    },
  ],
  name: { type: String },
  note: { type: String },
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  processorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  reporterId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  tags: {type: String, enum: ['start', 'middle', 'finish'] },
  type: { type: String, enum: ['task', 'bug'] },
});

const Task = mongoose.model('Task', taskSchema);

export default Task;
