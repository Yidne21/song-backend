import mongoose from 'mongoose';

const songSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    artist: {
      type: String,
      required: true,
    },
    album: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      enum: [
        'classical',
        'country',
        'disco',
        'funk',
        'hipHop',
        'jazz',
        'pop',
        'raggae',
        'rock',
      ],
      default: 'classical',
    },
  },
  { timestamps: true }
);

export default songSchema;
