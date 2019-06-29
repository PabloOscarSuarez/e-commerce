
const express = require('express');
const router = new express.Router();
const sequelize = require("sequelize");
const Op = sequelize.Op;

const Genre = require('../../db/models/index').Genre
const Book = require('../../db/models/index').Book
const Author = require('../../db/models/index').Author
const BookGenre = require('../../db/models/index').BookGenre

// MODEL


router.route('/create')
    .post((req, res) => {
        console.log('soy req.body del back', req.body)

        var genre = Genre.build({
            name: req.body.name,
        });
        genre.save()
        res.send(genre)
    })

router.get('/', (req, res) => {
    Genre.findAll({
        include: [{
            model: Book,
        }]
    })
        .then(genres => {
            res.send(genres)
        })
})


router.get('/genres_in_stock/:genreId', (req, res) => {
    BookGenre.findAll({
        where: {
            genreId: req.params.genreId
        },
    })
        .then(booksOfGenre => {
            var arrayOfBooksId = booksOfGenre.map(book => book.bookId)
            // console.log('soy arrayOfBooksId', arrayOfBooksId)
            return arrayOfBooksId
        })
        .then(arrayOfBooksId => {
            Book.findAll({
                include: [
                    {
                        model: Author,
                        as: 'author',
                    }
                ],
                where: {
                    stock: { [Op.gte]: 1 },
                    id: { [Op.in]: arrayOfBooksId}
                },
            })
            .then(books=>{
                // console.log('SOMOS TODOS LOS BOOKSSS', books)
                res.send(books)
            })
        })
})

router.get('/:genre', (req, res) => {
    Genre.findAll({
        where: {
            name: req.params.genre
        },
        include: [{
            model: Book,
        }]
    })
        .then(genre => {
            res.send(genre)
            // return genre.getBooks()
        })
})


router.delete('/:genreId', (req, res) => {

    Genre.destroy({
        where: {
            id: req.params.genreId
        }
    })
        .then(() => {
            Genre.findAll({
                include: [{
                    model: Book,
                }]
            })
                .then(genres => {
                    res.send(genres)
                })
        })
})

module.exports = router;