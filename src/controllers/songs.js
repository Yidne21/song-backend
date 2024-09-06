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

export const createSongController = async (req, res, next) => {
  const { title, artist, genre, album } = req.body;
  const newSong = new Song({
    title,
    artist,
    genre,
    album,
  });

  try {
    const addedSong = await newSong.save();
    res.status(httpStatus.OK).json(addedSong);
  } catch (error) {
    next(error);
  }
};

export const deleteSongController = async (req, res, next) => {
  const { id } = req.params;

  try {
    const message = await Song.deleteSong(id);
    res.status(httpStatus.OK).json(message);
  } catch (error) {
    next(error);
  }
};

export const updateSongController = async (req, res, next) => {
  const { id } = req.params;
  const { title, artist, genre, album } = req.body;
  const updates = {
    title,
    artist,
    genre,
    album,
  };

  try {
    await Song.updateSong(id, updates);
    res.status(httpStatus.OK).json({ message: 'Song Updated!!' });
  } catch (error) {
    next(error);
  }
};

export const getAllSongsController = async (req, res, next) => {
  const { skip, limit, title, artist, genre, album } = req.query;
  const filters = {
    skip,
    limit,
    title,
    artist,
    genre,
    album,
  };
  try {
    const songs = await Song.getAllSongs(filters);
    res.status(httpStatus.OK).json(songs);
  } catch (error) {
    next(error);
  }
};

export const mainStatsController = async (req, res, next) => {
  try {
    const stats = await Song.getMainStats();
    res.status(httpStatus.OK).json(stats);
  } catch (error) {
    next(error);
  }
};

export const songsPerGenresController = async (req, res, next) => {
  try {
    const stats = await Song.songsPerGenres();
    res.status(httpStatus.OK).json(stats);
  } catch (error) {
    next(error);
  }
};

export const songsPerAlbumsController = async (req, res, next) => {
  try {
    const stats = await Song.songsPerAlbums();
    res.status(httpStatus.OK).json(stats);
  } catch (error) {
    next(error);
  }
};

export const songsPerArtistsController = async (req, res, next) => {
  const { skip, limit } = req.query;
  const filters = {
    skip,
    limit,
  };
  try {
    const stats = await Song.songsAndAlbumsPerArtist(filters);
    res.status(httpStatus.OK).json(stats);
  } catch (error) {
    next(error);
  }
};
