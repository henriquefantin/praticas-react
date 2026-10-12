const express = require("express");
const router = express.Router();

// Controller
const { register } = require('../controllers/UserController');

// Route for user registration
router.post('/register', register);

module.exports = router;