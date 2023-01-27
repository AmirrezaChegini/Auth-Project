const express = require('express');
const router = express.Router();
const {isLoggedIn, isAdmin} = require('./../middleware/auth');

router.use('/auth', require('./auth'));
router.use('/user', isLoggedIn, require('./user'));
router.use('/admin', isLoggedIn, isAdmin, require('./admin'));
router.use(require('./../middleware/sereverError'));


module.exports = router;