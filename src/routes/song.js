import express from 'express';
import { getSingleSongValidator } from '../validators/songs.validators';
import parseValidationError from '../validators/errors.parser';
import {
  getSingleSongController,
  createSongController,
  deleteSongController,
  updateSongController,
  getAllSongsController,
} from '../controllers/songs';

const router = express.Router();

router.get('/', getAllSongsController);
router.post('/', createSongController);
router.put('/:id', updateSongController);
router.delete('/:id', deleteSongController);
router.get(
  '/:id',
  getSingleSongValidator(),
  parseValidationError,
  getSingleSongController
);

export default router;

// createSong: '/song/createSong',
// updateSong: '/song/updateSong',
// deleteSong: '/song/deleteSong',
// listSong: '/song/list',
// getMainStats: '/stats/main',
// getArtists: '/stats/artists',
// getGenreStats: '/stats/genres',
// getAlbumsStats: '/stats/albums',
