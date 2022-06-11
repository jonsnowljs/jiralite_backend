import mongoose from 'mongoose';;

const tagSchema = new mongoose.Schema({
  name: { type: String },
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Tag = mongoose.model('Tag', tagSchema)
export default Tag
