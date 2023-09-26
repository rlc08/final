var express = require('express');
var router = express.Router();

const {getFeedPosts ,getUserPosts } = require('../controller/posts');
const {verifyToken} = require('../../middleware/auth');
const {register,login} = require('../controller/auth')
// read home page
router.get('/posts',verifyToken, getFeedPosts);
router.get('/:userId/posts',verifyToken,getUserPosts);

// Authentication
router.post("/auth/register",register);
router.post("/auth/login",login);
module.exports = router;