import mongoose from 'mongoose';
import { MONGO_URI } from './secrets.js';

const connectDb = async () => {
  try {
    const db = await mongoose.connect(MONGO_URI);
    console.log(`Connected to MongoDB: ${db.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDb;
