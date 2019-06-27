'use strict';
/* eslint-disable new-cap */

const router = require('express').Router();

router.use('/books', require('./books'));
router.use('/authors', require('./authors'));
router.use('/genres', require('./genres'));
router.use ('/users', require ("./users"));
router.use('/comments', require('./comments'));
router.use ('/cart', require ("./cart"))
router.use ('/sales', require ("./sales"))
router.use ('/statuses', require ("./statuses"))

module.exports = router;
