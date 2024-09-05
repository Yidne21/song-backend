import httpStatus from 'http-status';
import Song from '../models/song';
import { deleteSong, getAllSongs, updateSong } from '../models/song/statics';

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
    const message = await deleteSong(id);
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
    await updateSong(id, updates);
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
    const songs = await getAllSongs(filters);
    res.status(httpStatus.OK).json(songs);
  } catch (error) {
    next(error);
  }
};
