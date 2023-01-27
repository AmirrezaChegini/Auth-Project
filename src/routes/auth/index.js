const express = require('express');
const router = express.Router();
const AuthController = require('./authController');
const AuthValidator = require('./authValidator');

router.post(
    '/register',
    AuthValidator.registerValidator(),
    AuthController.validate,
    AuthController.register
);

router.post(
    '/login',
    AuthValidator.loginValidator(),
    AuthController.validate,
    AuthController.login
);

module.exports = router;