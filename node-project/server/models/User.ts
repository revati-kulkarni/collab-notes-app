import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUser extends mongoose.Document {
  username: string;
  password: string;
}

const userSchema = new mongoose.Schema<IUser>({
  username: { type: String, required: true },
  password: { type: String, required: true }
});

userSchema.pre('save', async function (next) {
  const user = this as IUser;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 10);
  }
  next();
});

export default mongoose.model<IUser>('User', userSchema);