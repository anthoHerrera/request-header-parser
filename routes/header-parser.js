const express = require('express');
const router = express.Router();
const getHeaders = require('../controllers/header-parser');

router.get('/', getHeaders);

module.exports = router;