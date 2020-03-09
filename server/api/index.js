const express = require('express');
const router = express.Router();

// Register user API
require('./users')(router);

module.exports = router;