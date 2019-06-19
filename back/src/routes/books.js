
const express = require('express');
const router = new express.Router();

const Book = require('../../db/models/index').Book
const Author = require('../../db/models/index').Author

// MODEL


router.route('/create')
    .post((req, res) => {
        console.log('soy req.body del back', req.body)

        Author.findOrCreate({ where: { id: req.body.authorId, } })
            .then(function (values) {
                var author = values[0];
                var book = Book.build({
                    title: req.body.title,
                    price: req.body.price,
                    stock: req.body.stock,
                    urlImage: req.body.urlImage,
                    description: req.body.description,
                });
                return book.save()
                    .then(function (book) {
                        res.send(book)
                        return book.setAuthor(author);
                    });
            })
    })


module.exports = router;