
const express = require('express');
const router = new express.Router();

const Genre = require('../../db/models/index').Genre
const Book = require('../../db/models/index').Book

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