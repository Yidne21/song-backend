import express from 'express';
import { getSingleSongValidator } from '../validators/songs.validators';
import parseValidationError from '../validators/errors.parser';
import { getSingleSongController } from '../controllers/songs';

const router = express.Router();

// Get All Songs
// router.get('/');

// Get single song by id
router.get(
  '/:id',
  getSingleSongValidator(),
  parseValidationError,
  getSingleSongController
);

export default router;
