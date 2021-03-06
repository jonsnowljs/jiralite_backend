import mongoose from 'mongoose';;

const projectSchema = new mongoose.Schema({
  created: { type: Date },
  name: { type: String },
  organization: { type: String },
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  personId: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
  pin: { type: Boolean },
});

const Project = mongoose.model('Project',projectSchema)

export default Project
