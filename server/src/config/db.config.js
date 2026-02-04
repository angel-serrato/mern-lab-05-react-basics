import mongoose from 'mongoose';
import { MONGO_URI } from './env.config.js';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to the database');
  } catch (error) {
    console.log('Database connection error:', error);
    process.exit(1);
  }
};

export default connectDB;
