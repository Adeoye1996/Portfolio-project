// backend/models/Playlist.js
const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  songs: [
    {
      title: String,
      artist: String,
      url: String,  // Assuming we'll store song URLs from the music API
    },
  ],
});

const Playlist = mongoose.model('Playlist', playlistSchema);

module.exports = Playlist;
