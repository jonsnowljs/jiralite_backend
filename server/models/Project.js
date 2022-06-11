const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  created: { type: Date },
  name: { type: String },
  organization: { type: String },
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  personId: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
  description: { type: String },
  status: { type: String, enum: ['Not Started', 'In Progress', 'Completed'] },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
  },
});

module.exports = mongoose.model('Project', ProjectSchema);
