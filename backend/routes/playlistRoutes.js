// backend/routes/playlistRoutes.js
const express = require('express');
const { createPlaylist, getUserPlaylists } = require('../controllers/playlistController');
const protect = require('../middleware/authMiddleware'); // Import the auth middleware

const router = express.Router();

// Route to create a playlist (protected route)
router.post('/', protect, createPlaylist);

// Route to get all playlists for the logged-in user (protected route)
router.get('/', protect, getUserPlaylists);

module.exports = router;
