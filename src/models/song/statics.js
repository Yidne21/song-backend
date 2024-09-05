// Methods defined on the Model
// "this" returns the entire model
import httpStatus from 'http-status';
import APIError from '../../errors/APIError';
import { modelNames } from '../../utils/constants';
import Song from '.';
import { paginationPipeline } from '../../utils';
export async function getSingleSong(id) {
  const SongModel = this.model(modelNames.songs);
  try {
    const song = SongModel.findById(id);
    return song;
  } catch (error) {
    if (error instanceof APIError) throw error;
    else {
      throw new APIError(
        'Internal Error',
        httpStatus.INTERNAL_SERVER_ERROR,
        true
      );
    }
  }
}
export async function deleteSong(req) {
  try {
    const song = await Song.findByIdAndDelete(req);
    if (!song) {
      throw new APIError('Song does not exist', httpStatus.NOT_FOUND, true);
    }

    return { message: 'Song deleted successfully' };
  } catch (error) {
    if (error instanceof APIError) throw error;
    else {
      throw new APIError(
        'internal error',
        httpStatus.INTERNAL_SERVER_ERROR,
        true
      );
    }
  }
}

export async function updateSong(id, updates) {
  try {
    const currentSong = await Song.findById(id);
    if (!currentSong) {
      throw new APIError('Song does not exist', httpStatus.NOT_FOUND, true);
    }

    const update = {
      title: updates.title || currentSong.title,
      artist: updates.artist || currentSong.artist,
      genre: updates.genre || currentSong.genre,
      album: updates.album || currentSong.album,
    };

    const msg = await Song.findByIdAndUpdate(id, update);

    if (!msg) {
      throw new APIError('Internal Error', httpStatus.INTERNAL_SERVER_ERROR);
    }

    return { message: 'Song Updated' };
  } catch (error) {
    if (error instanceof APIError) throw error;
    else {
      throw new APIError('Internal Error', httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

export async function getAllSongs({
  title,
  genre,
  artist,
  album,
  skip = 1,
  limit = 5,
}) {
  try {
    const songs = await Song.aggregate([
      {
        $match: {
          ...(title && { title: { $regex: title, $options: 'i' } }),
          ...(genre && { genre: { $regex: genre, $options: 'i' } }),
          ...(artist && { artist: { $regex: artist, $options: 'i' } }),
          ...(album && { album: { $regex: album, $options: 'i' } }),
        },
      },
      {
        $sort: {
          createdAt: -1,
        },
      },
      ...paginationPipeline(skip, limit),
    ]);
    return songs[0];
  } catch (error) {
    if (error instanceof APIError) throw error;
    else {
      throw new APIError('Internal Error', httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
