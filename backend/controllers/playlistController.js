// backend/controllers/playlistController.js
const Playlist = require('../models/Playlist');

// Create a new playlist
const createPlaylist = async (req, res) => {
  const { name, songs } = req.body;

  try {
    const playlist = new Playlist({
      name,
      songs,
      user: req.user, // The user is set in the JWT middleware
    });

    await playlist.save();
    res.status(201).json(playlist);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all playlists for the logged-in user
const getUserPlaylists = async (req, res) => {
  try {
    const playlists = await Playlist.find({ user: req.user });
    res.json(playlists);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  createPlaylist,
  getUserPlaylists,
};
