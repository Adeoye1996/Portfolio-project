const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Define the database connection function
const connectDB = async () => {
  try {
    // Connect to MongoDB using the URI from the environment variable
    await mongoose.connect(process.env.MONGO_URI); 
    console.log('MongoDB Connected...');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB; // Export the connection function
