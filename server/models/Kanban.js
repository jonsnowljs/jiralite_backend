import mongoose from 'mongoose';;

const KanbanSchema = new mongoose.Schema({
  name: { type: String },
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },

});
const Kanban = mongoose.model('Kanban', kanbanSchema);
export default Kanban
