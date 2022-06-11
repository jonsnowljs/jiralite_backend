import mongoose from 'mongoose';;

const TagSchema = new mongoose.Schema({
  name: { type: String },
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Tag', TagSchema);
