const express = require("express");
const router = new express.Router();

const User = require("../../db/models/index").User;
const Book = require("../../db/models/index").Book;
const Status = require("../../db/models/index").Status;
const Transaction = require("../../db/models/index").Transaction;
// const TransactionDetail = require("../../db/models/index").TransactionDetail;
// MODEL

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

            Book.findByPk(bookArray[i].book.id).then(book=>{
              book.addTransaction(transaction,{through: {
                    quantity: bookArray[i].cant,
                    price: bookArray[i].price
                  }})
            })
          }return transaction
        }).then((transaction)=>{
         res.send(transaction)
        })
    });
  });
});

module.exports = router;