
const express = require('express');
const router = new express.Router();

const Book = require('../../db/models/index')

// MODEL


router.route('/create')
    .post((req, res) => {
        Book.create(req.body)
        .then(book=>{
            console.log('Book created', book)
        })
    })
    

module.exports = router;