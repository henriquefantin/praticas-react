const express = require("express");
const router = express.Route();

// Controller

// Middlewares
const { photoInsertValidation } = require("../middlewares/photoInsertValidation");
const authGuard = require("../middlewares/authGuard");
const validate = require("../middlewares/handleValidation");

// Routes

module.exports = router;