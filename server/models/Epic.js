import mongoose from 'mongoose';

const epicSchema = new mongoose.Schema({
  start: { type: Date },
  end: { type: Date },
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: { type: String },
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
});
const Epic = mongoose.model('Epic', epicSchema);
export default Epic;
