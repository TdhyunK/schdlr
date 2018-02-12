const express = require('express');
const router = express.Router();
const db = require('./queries');

router.post('/getForms', db.getClasses);

module.exports = router;
