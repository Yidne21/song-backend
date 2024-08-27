import httpStatus from 'http-status';
import Song from '../models/song';

export const getSingleSongController = async (req, res, next) => {
  const { id } = req.params;
  try {
    const song = await Song.getSingleSong(id);
    res.status(httpStatus.OK).json(song);
  } catch (error) {
    next(error);
  }
};
