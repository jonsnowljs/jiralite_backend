import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String },
  passwordHash: { type: String },
});

const User = mongoose.model('User', userSchema);
export default User;
