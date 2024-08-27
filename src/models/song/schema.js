import mongoose from 'mongoose';

const songSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minLength: 1,
      maxLenght: 10,
      required: true,
    },
  },
  { timestamps: true }
);
export default songSchema;
