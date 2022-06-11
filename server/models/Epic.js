const mongoose = require('mongoose');

const EpicSchema = new mongoose.Schema({
  start: { type: Date },
  end: { type: Date },
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Owner' },
  name: { type: String },
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
});

module.exports = mongoose.model('Epic', EpicSchema);
