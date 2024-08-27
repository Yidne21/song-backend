// Methods defined on the Model
// "this" returns the entire model
import httpStatus from 'http-status';
import APIError from '../../errors/APIError';
import { modelNames } from '../../utils/constants';

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
