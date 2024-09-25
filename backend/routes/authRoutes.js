// backend/routes/authRoutes.js
const express = require('express');
const { registerUser } = require('../controllers/authController');
const router = express.Router();
const { loginUser } = require('../controllers/authController');

// Register user route
router.post('/signup', registerUser);
router.post('/login', loginUser);

module.exports = router;
