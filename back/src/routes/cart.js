const express = require("express");
const router = new express.Router();

const User = require("../../db/models/index").User;
const Book = require("../../db/models/index").Book;
const Status = require("../../db/models/index").Status;
const Transaction = require("../../db/models/index").Transaction;
const nodemailer = require("nodemailer")
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
                    // id: 10,
                    statusId: status.id,
                    userId: req.params.id
                },
                include: [{
                    model: Book,
                }]
            })
            .then(transaction => {
                console.log(transaction)
                var miCarrito = []

                // console.log(transaction[transaction.length - 1].books)

                for (let i = transaction.length - 1; i < transaction[transaction.length - 1].books.length; i++) {
                    // const element = array[i];
                    miCarrito.push({
                        book: transaction[transaction.length - 1].books[i],
                        cant: transaction[transaction.length - 1].books[i].transactionDetail.quantity,
                        price: transaction[transaction.length - 1].books[i].transactionDetail.price
                    })
                }
                // ESTO DEVUELVE EL CARRITO
                res.send(miCarrito)
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
// router.post("/logged/createNewCart", function(req, res) {
//     var arrayTotal = req.body.bookToCart;

//     var total = arrayTotal
//         .map(book => book.price)
//         .reduce((prev, cur) => prev + cur, 0);

//     User.findByPk(req.body.userData.id).then(user => {
//         Status.findOrCreate({
//             where: {
//                 name: "carrito"
//             }
//         }).then(values => {
//             var status = values[0]; //el dato que busco esta siempre en la primera posicion del array
//             Transaction.create({
//                     total: total
//                 })
//                 .then(transaction => {
//                     console.log('SOY TRANSACTION DE DE /logged/createNewCart', transaction)
//                     transaction.setUser(user);
//                     transaction.setStatus(status);
//                     return transaction;
//                 })
//                 .then(transaction => {
//                     //  console.log("soy transation", transaction)
//                     var bookArray = req.body.bookToCart;
//                     for (let i = 0; i < bookArray.length; i++) {

//                         Book.findByPk(bookArray[i].book.id).then(book => {

//                             var actualStock = book.stock
//                             actualStock = actualStock - bookArray[i].cant

//                             book.update({
//                                 stock: actualStock
//                             })

//                             book.addTransaction(transaction, {
//                                 through: {
//                                     quantity: bookArray[i].cant,
//                                     price: bookArray[i].price
//                                 }
//                             })
//                         })
//                     }
//                     return transaction.save()
//                 }).then((transaction) => {
//                     // res.send(transaction)
//                     Transaction.findByPk(transaction.id, {
//                             include: [{
//                                     model: User,
//                                     as: 'user'
//                                 },
//                                 {
//                                     model: Status,
//                                     as: 'status'
//                                 }
//                             ]
//                         })
//                         .then(transaction => {
//                             res.send(transaction)
//                         })
//                 })
//         });
//     });
// });
router.post("/logged/createNewCart", function(req, res) {
    //console.log("ntreeeee al baccckkkkk", req.body.userData)
    console.log("sooooyyy bookData", req.body.bookToCart)
    var arrayTotal = req.body.bookToCart.length ? req.body.bookToCart : [];

    // var arrayTotal = req.body.bookToCart;

    var total = arrayTotal
        .map(book => book.price)
        .reduce((prev, cur) => prev + cur, 0);

    User.findByPk(req.user.id).then(user => {
        Status.findOrCreate({
            where: {
                name: "carrito"
            }
        }).then(values => {
            var status = values[0]; //el dato que busco esta siempre en la primera posicion del array
            Transaction.findOne({
                    where: {
                        userId: user.id,
                        statusId: status.id
                            // pregunto por si hay transacciones con estado carrito
                    }
                })
                .then(transaction => {
                    console.log('SOY EL TRASACTION!!!!!!!!!!!!!????!!!', transaction)
                    if (transaction == null) {
                        // NO TENGO CARRITO
                        // NO TENGO CARRITO
                        // NO TENGO CARRITO
                        // NO TENGO CARRITO
                        // NO TENGO CARRITO
                        Transaction.create({
                                total: total
                            })
                            .then(transaction => {
                                console.log('SOY TRANSACTION DE DE /logged/createNewCart', transaction)
                                transaction.setUser(user);
                                transaction.setStatus(status);
                                return transaction;
                            })
                            .then(transaction => {
                                //  console.log("soy transation", transaction)
                                var bookArray = req.body.bookToCart;
                                for (let i = 0; i < bookArray.length; i++) {

                                    Book.findByPk(bookArray[i].book.id).then(book => {


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

                        // NO TENGO CARRITO
                        // NO TENGO CARRITO
                        // NO TENGO CARRITO
                        // NO TENGO CARRITO
                    } else {
                        // TENGO CARRITO
                        // TENGO CARRITO
                        // TENGO CARRITO
                        // TENGO CARRITO

                        Transaction.update({
                                total: total,

                            }, { returning: true, where: { id: transaction.id } })
                            .then(function([rowsUpdate, [updatedTransaction]]) {
                                // console.log('SOY UPDATED BOOK DESDE ROUTES DE BOOK', updatedTransaction)
                                return updatedTransaction
                            })
                            .then(transaction => {
                                Book.findAll()
                                    .then(books => {
                                        transaction.removeBooks(books)
                                    })
                                    .then(() => {
                                        var bookArray = req.body.bookToCart;


                                        for (let i = 0; i < bookArray.length; i++) {

                                            Book.findByPk(bookArray[i].book.id).then(book => {


                                                transaction.addBook(book, {
                                                    through: {
                                                        quantity: bookArray[i].cant,
                                                        price: bookArray[i].price
                                                    }
                                                })
                                            })
                                        }
                                        return transaction.save()
                                    })
                                    .then((transaction) => {
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
                            })

                        // TENGO CARRITO
                        // TENGO CARRITO
                        // TENGO CARRITO
                        // TENGO CARRITO
                    }
                })



            //     miTransaction.setUser(user);
            //     miTransaction.setStatus(status);
            //     return miTransaction;
            // })
            // .then(transaction => {
            //     //  console.log("soy transation", transaction)
            //     var bookArray = req.body.bookToCart;
            //     for (let i = 0; i < bookArray.length; i++) {

            //         Book.findByPk(bookArray[i].book.id).then(book => {

            //             var actualStock = book.stock
            //             actualStock = actualStock - bookArray[i].cant

            //             book.update({
            //                 stock: actualStock
            //             })

            //             book.addTransaction(transaction, {
            //                 through: {
            //                     quantity: bookArray[i].cant,
            //                     price: bookArray[i].price
            //                 }
            //             })
            //         })
            //     }
            //     return transaction.save()

        })
    });
});


router.post("/emailConfirm", function(req, res) {
    console.log("enreeeeeeeee al back email", req.body.userData)
    console.log("sooooo rancsiooonnnnnn", req.body.Transaction)
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
        to: req.body.userData.email ? req.body.userData.email : req.body.userData.anonimousEmail,
        subject: `Felicitaciones ${req.body.userData.name}, tu compra fue exitosa!`,
        html: `
            Estimado ${req.body.userData.name}, estas a un paso de recibir tus libros!!
            Tu compra esta en estado ${req.body.Transaction.status.name}
            
            <h3> Detalle de tu orden:</h3>
            <ul>
                <li>
                ${req.body.Transaction.total},
                ${req.body.Transaction.createdAt}
                "Numero de seguimiento: "${req.body.Transaction.id}
                </li>
                <li>
                ${req.body.userData.email ? req.body.userData.email : req.body.userData.anonimousEmail},
                </li>
            </ul>
            "Tu pedido sera enviado en las proximas 72 hrs a ${req.body.userData.address}
        `
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