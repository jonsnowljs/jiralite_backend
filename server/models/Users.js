import mongoose from 'mongoose';
import User from './User'


const usersSchema = new mongoose.Schema({
  users: [User],
});

const Users = mongoose.model('Users', usersSchema);
export default Users
