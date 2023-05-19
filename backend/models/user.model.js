import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Provide your name'],
    },
    email: {
      type: String,
      required: [true, 'Provide an email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Provide a password'],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);

export default User;
