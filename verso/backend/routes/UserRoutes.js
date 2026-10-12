const express = require("express");
const router = express.Router();

// Controller
const { register } = require('../controllers/UserController');

// Middlewares
const validate = require('../middlewares/handleValidation');
const { userCreateValidation } = require('../middlewares/userValidation');

// Route for user registration
router.post('/register', userCreateValidation(), validate, register);


module.exports = router;