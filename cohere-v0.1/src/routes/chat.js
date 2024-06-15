const express = require('express');
const router = express.Router();

const { chatRequest } = require('../controllers/chat');

router.post('/', chatRequest);

module.exports = router;
