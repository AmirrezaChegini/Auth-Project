const express = require('express');
const router = express.Router();
const AdminController = require('./adminController');

router.get(
    '/dashboard',
    AdminController.dashboard
);

router.get(
    '/me',
    AdminController.me
);

module.exports = router;