import express from 'express';
import { getSingleSongValidator } from '../validators/songs.validators';
import parseValidationError from '../validators/errors.parser';
import {
  getSingleSongController,
  createSongController,
  deleteSongController,
  updateSongController,
  getAllSongsController,
  mainStatsController,
  songsPerGenresController,
  songsPerAlbumsController,
  songsPerArtistsController,
} from '../controllers/songs';

const router = express.Router();

router.get('/', getAllSongsController);
router.post('/', createSongController);
router.put('/:id', updateSongController);
router.delete('/:id', deleteSongController);
router.get('/stats/main', mainStatsController);
router.get('/stats/albums', songsPerAlbumsController);
router.get(
  '/:id',
  getSingleSongValidator(),
  parseValidationError,
  getSingleSongController
);
router.get('/stats/genres', songsPerGenresController);
router.get('/stats/artists', songsPerArtistsController);

export default router;
