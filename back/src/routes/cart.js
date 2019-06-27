const express = require("express");
const router = new express.Router();

const User = require("../../db/models/index").User;
const Book = require("../../db/models/index").Book;
const Status = require("../../db/models/index").Status;
const Transaction = require("../../db/models/index").Transaction;
// const TransactionDetail = require("../../db/models/index").TransactionDetail;
// MODEL
router.get("/user/:id", function(req, res) {

    Status.findOne({
        where: {
            name: "carrito"
        }
    }).then(status => {

        Transaction.findAll({
                where: {
                    statusId: status.id,
                    userId: req.params.id
                },
                include: [{
                        model: User,
                        as: 'user'
                    },
                    {
                        model: Status,
                        as: 'status'
                    }
                ]
            })
            .then(transaction => {
                res.send(transaction)
            })

    })

})
router.post("/notLogged/createTransaction", function(req, res) {
    console.log("SOY BOOOK TO CART", req.body.bookToCart);
    var arrayTotal = req.body.bookToCart;

    var total = arrayTotal
        .map(book => book.price)
        .reduce((prev, cur) => prev + cur, 0);

    User.create(req.body.userData).then(newUser => {
        Status.findOrCreate({
            where: {
                name: "creado"
            }
        }).then(values => {
            var status = values[0]; //el dato que busco esta siempre en la primera posicion del array
            Transaction.create({
                    total: total
                })
                .then(transaction => {
                    transaction.setUser(newUser);
                    transaction.setStatus(status);
                    return transaction;
                })
                .then(transaction => {
                    //  console.log("soy transation", transaction)
                    var bookArray = req.body.bookToCart;
                    for (let i = 0; i < bookArray.length; i++) {

                        Book.findByPk(bookArray[i].book.id).then(book => {

                            var actualStock = book.stock
                            actualStock = actualStock - bookArray[i].cant

                            book.update({
                                stock: actualStock
                            })

                            book.addTransaction(transaction, {
                                through: {
                                    quantity: bookArray[i].cant,
                                    price: bookArray[i].price
                                }
                            })
                        })
                    }
                    return transaction.save()
                }).then((transaction) => {
                    // res.send(transaction)
                    Transaction.findByPk(transaction.id, {
                            include: [{
                                    model: User,
                                    as: 'user'
                                },
                                {
                                    model: Status,
                                    as: 'status'
                                }
                            ]
                        })
                        .then(transaction => {
                            res.send(transaction)
                        })
                })
        });
    });
});
router.post("/logged/createTransaction", function(req, res) {
    console.log("SOY BOOOK TO CART", req.body.bookToCart);
    var arrayTotal = req.body.bookToCart;

    var total = arrayTotal
        .map(book => book.price)
        .reduce((prev, cur) => prev + cur, 0);

    User.update(req.body.userData, { returning: true, where: { email: req.body.userData.email } })
        .then(function([rowsUpdate, [updatedUser]]) {
            console.log('SOY UPDATED userrrrrr DESDE ROUTES DE user', updatedUser)
            return updatedUser
        })
        .then(newUser => {
            Status.findOrCreate({
                where: {
                    name: "creado"
                }
            }).then(values => {
                var status = values[0]; //el dato que busco esta siempre en la primera posicion del array
                Transaction.create({
                        total: total
                    })
                    .then(transaction => {
                        transaction.setUser(newUser);
                        transaction.setStatus(status);
                        return transaction;
                    })
                    .then(transaction => {
                        //  console.log("soy transation", transaction)
                        var bookArray = req.body.bookToCart;
                        for (let i = 0; i < bookArray.length; i++) {

                            Book.findByPk(bookArray[i].book.id).then(book => {

                                var actualStock = book.stock
                                actualStock = actualStock - bookArray[i].cant

                                book.update({
                                    stock: actualStock
                                })

                                book.addTransaction(transaction, {
                                    through: {
                                        quantity: bookArray[i].cant,
                                        price: bookArray[i].price
                                    }
                                })
                            })
                        }
                        return transaction.save()
                    }).then((transaction) => {
                        // res.send(transaction)
                        Transaction.findByPk(transaction.id, {
                                include: [{
                                        model: User,
                                        as: 'user'
                                    },
                                    {
                                        model: Status,
                                        as: 'status'
                                    }
                                ]
                            })
                            .then(transaction => {
                                res.send(transaction)
                            })
                    })
            });
        });
});
router.post("/logged/createNewCart", function(req, res) {
    var arrayTotal = req.body.bookToCart;

    var total = arrayTotal
        .map(book => book.price)
        .reduce((prev, cur) => prev + cur, 0);

    User.findByPk(req.body.userData.id).then(user => {
        Status.findOrCreate({
            where: {
                name: "carrito"
            }
        }).then(values => {
            var status = values[0]; //el dato que busco esta siempre en la primera posicion del array
            Transaction.create({
                    total: total
                })
                .then(transaction => {
                    transaction.setUser(user);
                    transaction.setStatus(status);
                    return transaction;
                })
                .then(transaction => {
                    //  console.log("soy transation", transaction)
                    var bookArray = req.body.bookToCart;
                    for (let i = 0; i < bookArray.length; i++) {

                        Book.findByPk(bookArray[i].book.id).then(book => {

                            var actualStock = book.stock
                            actualStock = actualStock - bookArray[i].cant

                            book.update({
                                stock: actualStock
                            })

                            book.addTransaction(transaction, {
                                through: {
                                    quantity: bookArray[i].cant,
                                    price: bookArray[i].price
                                }
                            })
                        })
                    }
                    return transaction.save()
                }).then((transaction) => {
                    // res.send(transaction)
                    Transaction.findByPk(transaction.id, {
                            include: [{
                                    model: User,
                                    as: 'user'
                                },
                                {
                                    model: Status,
                                    as: 'status'
                                }
                            ]
                        })
                        .then(transaction => {
                            res.send(transaction)
                        })
                })
        });
    });
});

router.post("/emailConfirm", function(req, res) {
    console.log("enreeeeeeeee al back email", req.body.userData)
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL //SSL (Secure Socket Layer) protocolo de seguridad
        auth: {
            user: "pruebatechtalk@gmail.com", // generated ethereal user
            pass: "plataforma1234" // 
        }
    });

    var mailOptions = {
        from: 'pruebatechtalk@gmail.com', //DATOS DEL MAIL
        to: req.body.email,
        subject: "u compra fue exiosa",
        text: "u compra fue exiosa"
    };
    console.log("sending email", mailOptions);
    transporter.sendMail(mailOptions, function(error, info) {
        console.log("senMail returned!");
        if (error) { //ATAJA POSIBLES ERRORES
            console.log("ERROR!!!!!!", error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
})

module.exports = router;