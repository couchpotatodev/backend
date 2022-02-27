const express = require('express');

const feedController = require('../controllers/feed');

const router = express.Router();

// GET /feed/posts
router.get('/professional', feedController.getPosts);

// POST /feed/post
//router.post('/professional', feedController.createPost);

module.exports = router;