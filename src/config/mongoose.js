import mongoose from 'mongoose';
import * as environments from './environments';

const connectDB = async () => {
  try {
    const options = {
      keepAlive: true,
    };

    await mongoose.connect(environments.MONGO_URL, options);
    console.info('MongoDB Connection Successfull');
  } catch (error) {
    console.info('MongoDB Connection Failed', error);
    throw error;
  }
};

export default connectDB;
