'use strict';
/* eslint-disable new-cap */

const router = require('express').Router();
module.exports = router;

router.use('/books', require('./books'));
router.use('/authors', require('./authors'));
router.use('/genres', require('./genres'));
// /router.use ('/cart', require ("./cart"))

// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
  res.status(404).end();
});
