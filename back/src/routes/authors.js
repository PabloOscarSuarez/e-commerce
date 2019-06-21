
const express = require('express');
const router = new express.Router();

const Author = require('../../db/models/index').Author
const Book = require('../../db/models/index').Book

// MODEL


router.route('/create')
    .post((req, res) => {
        console.log('soy req.body del back', req.body)

        var author = Author.build({
            name: req.body.name,
        });
        author.save()
        res.send(author)
    })

router.get('/', (req, res) => {

    Author.findAll({
        include: [{
            model: Book,
        }]
    })
        .then(authors => {
            res.send(authors)
        })
})

router.delete('/:authorId', (req, res) => {

    Author.destroy({
        where: {
            id: req.params.authorId
        }
    })
        .then(() => {
            Author.findAll({
                include: [{
                    model: Book,
                }]
            })
                .then(authors => {
                    res.send(authors)
                })
        })
})




module.exports = router;