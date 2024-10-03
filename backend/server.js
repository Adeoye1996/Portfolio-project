const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const playlistRoutes = require('./routes/playlistRoutes');
const cors = require('cors'); // Add this line

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();

// Use CORS middleware
app.use(cors()); // Add this line

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());
app.use('/auth', authRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Playlist routes (protected)
app.use('/playlists', playlistRoutes);

// Define PORT and start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
