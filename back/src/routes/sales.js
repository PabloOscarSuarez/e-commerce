const express = require('express');
const router = new express.Router();

const User = require('../../db/models/index').User
const Status = require('../../db/models/index').Status
const Transaction = require('../../db/models/index').Transaction
const Book = require('../../db/models/index').Book

// MODEL

router.get('/', (req, res) => {

    Transaction.findAll({
            include: [{
                    model: User,
                    as: 'user'
                },
                {
                    model: Status,
                    as: 'status'
                },
                {
                    model: Book,
                }
            ]
        })
        .then(transaction => {
            res.send(transaction)
        })
})

router.get('/status/:statusId', (req, res) => {

    Transaction.findAll({
            where: {
                statusId: req.params.statusId
            },
            include: [{
                    model: User,
                    as: 'user'
                },
                {
                    model: Status,
                    as: 'status'
                },
                {
                    model: Book,
                }
            ]
        })
        .then(transaction => {
            res.send(transaction)
        })
})

router.get('/user/:userId', (req, res) => {

    Transaction.findAll({
            where: {
                userId: req.params.userId
            },
            include: [{
                    model: User,
                    as: 'user'
                },
                {
                    model: Status,
                    as: 'status'
                },
                {
                    model: Book,
                }
            ]
        })
        .then(transaction => {
            res.send(transaction)
        })
})


router.put("/edit_status/:saleId", function(req, res) {

    // console.log(req.body)

    Transaction.findByPk(req.params.saleId)
        .then(transaction => {
            Status.findByPk(req.body.statusId)
                .then(status => {
                    transaction.setStatus(status)
                })
                .then(() => {
                    Transaction.findAll({
                            include: [{
                                    model: User,
                                    as: 'user'
                                },
                                {
                                    model: Status,
                                    as: 'status'
                                },
                                {
                                    model: Book,
                                }
                            ]
                        })
                        .then(transaction => {
                            res.send(transaction)
                        })
                })
        })

    // Book.update({
    //   stock: req.body.stock,
    // }, { returning: true, where: { id: req.params.bookId } })
    //   .then(function ([rowsUpdate, [updatedBook]]) {
    //     // console.log('SOY UPDATED BOOK DESDE ROUTES DE BOOK', updatedBook)
    //     return updatedBook
    //   })
    //   .then(book => {
    //     Book.findAll({
    //       include: [{
    //         model: Author,
    //         as: 'author'
    //       }]
    //     })
    //       .then(books => {
    //         // console.log('SOY BOOKS DEL RES.SEND', books)
    //         res.send(books)
    //       })
    //   })
});

router.route("/:id")
    .get(function(req, res, next) {
        Transaction.findOne({
                where: {
                    id: req.params.id
                },
                include: [{
                        model: User,
                        as: 'user'
                    },
                    {
                        model: Status,
                        as: 'status'
                    },
                    {
                        model: Book,
                    }
                ]
            })
            .then(function(transaction) {
                res.send(transaction);
            })
            .catch(next);
    });



module.exports = router;