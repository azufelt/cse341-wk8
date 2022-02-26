const express = require('express');

const professionalController = require('../controllers/professional');

const router = express.Router();

// GET /professionalposts
router.get('/professional', professionalController.getProfessional);

// POST /professional/post
// router.post('/post', professionalController.createPost);

module.exports = router;