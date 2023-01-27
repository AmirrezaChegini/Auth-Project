const express = require('express');
const router = express.Router();
const UserController = require('./userController');

router.get(
    '/dashboard',
    UserController.dashboard
);

router.get(
    '/me',
    UserController.me
);

module.exports = router;