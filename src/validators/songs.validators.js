import { param } from 'express-validator';

const createSongValidator = () => [];
const updateSongValidator = () => [];
const deleteSongValidator = () => [];
const getSingleSongValidator = () => [
  param('id').isMongoId().withMessage('A valid song id is required'),
];

export {
  createSongValidator,
  deleteSongValidator,
  getSingleSongValidator,
  updateSongValidator,
};
