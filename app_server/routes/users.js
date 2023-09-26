const express = require('express');
const { getUser } = require('../controller/users.js');
const { verifyToken } = require('../../middleware/auth.js');
const router = express.Router();

// Apply the verifyToken middleware to routes that require authentication
router.get("/:id", getUser);

module.exports = router;
